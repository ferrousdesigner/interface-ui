import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import "./Switch.css";

gsap.registerPlugin(Draggable);

// Tweakpane type - optional since it's a dev tool
interface PaneType {
  addFolder: (options: { title: string; expanded?: boolean }) => PaneType;
  addBinding: (target: any, key: string, options?: any) => void;
  on: (event: string, handler: (event: any) => void) => void;
  dispose: () => void;
}

export interface SwitchProps {
  /**
   * Accessible label for the toggle.
   */
  label?: string;
  /**
   * Controlled checked state.
   */
  checked?: boolean;
  /**
   * Uncontrolled default checked state.
   */
  defaultChecked?: boolean;
  /**
   * Disable the control.
   */
  disabled?: boolean;
  /**
   * Whether the switch is required (for form usage).
   */
  required?: boolean;
  /**
   * Change handler (fires with user interactions).
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Input name (for synthetic events).
   */
  name?: string;
  /**
   * Optional id for the toggle button.
   */
  id?: string;
  /**
   * Optional value for synthetic events.
   */
  value?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label = "toggle",
  checked,
  defaultChecked = false,
  disabled = false,
  required = false,
  onChange,
  name,
  id,
  value,
}) => {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const paneRef = useRef<PaneType | null>(null);
  const toggleIdRef = useRef<string>(
    id || `switch-${Math.random().toString(36).slice(2, 9)}`
  );
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? !!checked : internalChecked;

  const configRef = useRef({
    theme: "light",
    complete: currentChecked ? 100 : 0,
    active: false,
    deviation: 2,
    alpha: 16,
    bounce: true,
    hue: 144,
    delta: true,
    bubble: true,
    mapped: false,
    debug: false,
  });

  const completeRef = useRef(configRef.current.complete);

  const syncCheckedState = useCallback(
    (next: boolean) => {
      const nextComplete = next ? 100 : 0;
      if (!isControlled) {
        setInternalChecked(next);
      }
      configRef.current.complete = nextComplete;
      completeRef.current = nextComplete;
      if (toggleRef.current) {
        toggleRef.current.setAttribute("aria-pressed", next ? "true" : "false");
        toggleRef.current.style.setProperty("--complete", `${nextComplete}`);
      }
    },
    [isControlled]
  );

  useEffect(() => {
    // Sync when controlled value changes
    if (isControlled) {
      syncCheckedState(!!checked);
    }
  }, [checked, isControlled, syncCheckedState]);

  useEffect(() => {
    // Sync when default changes (uncontrolled)
    if (!isControlled) {
      syncCheckedState(defaultChecked);
    }
  }, [defaultChecked, isControlled, syncCheckedState]);

  const emitChange = useCallback(
    (nextChecked: boolean) => {
      if (onChange) {
        const target = {
          checked: nextChecked,
          name: name || "",
          value: value || "",
          type: "checkbox",
        } as HTMLInputElement;

        const syntheticEvent = {
          target,
          currentTarget: target,
          preventDefault: () => {},
          stopPropagation: () => {},
          nativeEvent: new Event("change"),
          bubbles: true,
          cancelable: false,
          defaultPrevented: false,
          eventPhase: 0,
          isTrusted: false,
          timeStamp: Date.now(),
          type: "change",
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    },
    [name, onChange, value]
  );

  useEffect(() => {
    if (disabled) return;
    const toggle = toggleRef.current;
    if (!toggle) return;

    let draggable: Draggable | null = null;
    let destroyed = false;
    type DraggableState = Draggable & {
      dragBounds?: number;
      complete?: number;
      __pressTime?: number;
      __releaseTime?: number;
    };

    const config = configRef.current;
    config.complete = currentChecked ? 100 : config.complete;
    completeRef.current = config.complete;

    toggle.style.setProperty("--complete", `${config.complete}`);
    toggle.style.setProperty("--hue", `${config.hue}`);
    toggle.setAttribute("aria-pressed", currentChecked ? "true" : "false");

    const update = () => {
      gsap.set("#goo feGaussianBlur", {
        attr: {
          stdDeviation: config.deviation,
        },
      });
      gsap.set("#goo feColorMatrix", {
        attr: {
          values: `
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 ${config.alpha} -10
      `,
        },
      });
      document.documentElement.dataset.theme = config.theme;
      document.documentElement.dataset.mapped = String(config.mapped);
      document.documentElement.dataset.delta = String(config.delta);
      document.documentElement.dataset.debug = String(config.debug);
      document.documentElement.dataset.active = String(config.active);
      document.documentElement.dataset.bounce = String(config.bounce);
      toggle.style.setProperty("--complete", `${config.complete}`);
      toggle.style.setProperty("--hue", `${config.hue}`);
    };

    const toggleState = async () => {
      if (disabled) return;
      toggle.dataset.pressed = "true";
      if (config.bubble) toggle.dataset.active = "true";
      await Promise.allSettled(
        !config.bounce
          ? toggle.getAnimations({ subtree: true }).map((a) => a.finished)
          : []
      );
      const pressed = toggle.matches("[aria-pressed=true]");
      gsap
        .timeline({
          onComplete: () => {
            gsap.delayedCall(0.05, () => {
              toggle.dataset.active = "false";
              toggle.dataset.pressed = "false";
              const nextChecked = !pressed;
              syncCheckedState(nextChecked);
              emitChange(nextChecked);
            });
          },
        })
        .to(toggle, {
          "--complete": pressed ? 0 : 100,
          duration: 0.12,
          delay: config.bounce && config.bubble ? 0.18 : 0,
        });
    };

    const proxy = document.createElement("div");
    draggable = Draggable.create(proxy, {
      allowContextMenu: true,
      handle: toggle,
      onDragStart: function onDragStart() {
        const ctx = this as DraggableState;
        const toggleBounds = toggle.getBoundingClientRect();
        const pressed = toggle.matches("[aria-pressed=true]");
        const bounds = pressed
          ? toggleBounds.left - (ctx.pointerX ?? 0)
          : toggleBounds.left + toggleBounds.width - (ctx.pointerX ?? 0);
        ctx.dragBounds = bounds;
        toggle.dataset.active = "true";
      },
      onDrag: function onDrag() {
        const ctx = this as DraggableState;
        const pressed = toggle.matches("[aria-pressed=true]");
        const dragged = (ctx.x ?? 0) - (ctx.startX ?? 0);
        const complete = gsap.utils.clamp(
          0,
          100,
          pressed
            ? gsap.utils.mapRange(ctx.dragBounds ?? 0, 0, 0, 100, dragged)
            : gsap.utils.mapRange(0, ctx.dragBounds ?? 0, 0, 100, dragged)
        );
        ctx.complete = complete;
        gsap.set(toggle, {
          "--complete": complete,
          "--delta": Math.min(Math.abs(ctx.deltaX), 12),
        });
        completeRef.current = complete;
      },
      onDragEnd: function onDragEnd() {
        const ctx = this as DraggableState;
        const currentComplete = ctx.complete ?? completeRef.current;
        gsap.fromTo(
          toggle,
          {
            "--complete": currentComplete,
          },
          {
            "--complete": currentComplete >= 50 ? 100 : 0,
            duration: 0.15,
            onComplete: () => {
              gsap.delayedCall(0.05, () => {
                toggle.dataset.active = "false";
                toggle.style.setProperty("--delta", "0");
                const nextChecked = currentComplete >= 50;
                syncCheckedState(nextChecked);
                emitChange(nextChecked);
              });
            },
          }
        );
      },
      onPress: function onPress() {
        const ctx = this as DraggableState;
        ctx.__pressTime = Date.now();
        if ("ontouchstart" in window && navigator.maxTouchPoints > 0)
          toggle.dataset.active = "true";
      },
      onRelease: function onRelease() {
        const ctx = this as DraggableState;
        ctx.__releaseTime = Date.now();
        gsap.set(toggle, { "--delta": 0 });
        if (
          "ontouchstart" in window &&
          navigator.maxTouchPoints > 0 &&
          ((ctx.startX !== undefined &&
            ctx.endX !== undefined &&
            Math.abs(ctx.endX - ctx.startX) < 4) ||
            ctx.endX === undefined)
        )
          toggle.dataset.active = "false";

        const pressDuration = (ctx.__releaseTime ?? 0) - (ctx.__pressTime ?? 0);
        const wasQuickClick = pressDuration <= 150;

        // Check if there was minimal or no drag movement
        const dragDistance =
          ctx.startX !== undefined && ctx.endX !== undefined
            ? Math.abs(ctx.endX - ctx.startX)
            : 0;
        const wasMinimalDrag = dragDistance < 4;

        if (wasQuickClick && wasMinimalDrag) {
          // Check if clicked on opposite side of indicator
          const toggleBounds = toggle.getBoundingClientRect();
          const clickX = ctx.endX ?? ctx.pointerX ?? ctx.startX ?? 0;
          const relativeX = clickX - toggleBounds.left;
          const toggleWidth = toggleBounds.width;
          const clickedLeftSide = relativeX < toggleWidth / 2;

          const pressed = toggle.matches("[aria-pressed=true]");
          const indicatorOnRight = pressed;

          // Toggle if clicked on opposite side of the indicator
          // (indicator on right + click left) OR (indicator on left + click right)
          if (
            (indicatorOnRight && clickedLeftSide) ||
            (!indicatorOnRight && !clickedLeftSide)
          ) {
            toggleState();
          }
        }
      },
    })[0];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        toggleState();
      }
      if (e.key === " ") {
        e.preventDefault();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === " ") {
        toggleState();
      }
    };

    toggle.addEventListener("keydown", onKeyDown);
    toggle.addEventListener("keyup", onKeyUp);

    // Set up tweakpane for the configuration UI (optional dev tool)
    const loadPane = async () => {
      // Only load tweakpane in development and if available
      if (typeof window === "undefined" || destroyed) {
        update();
        return;
      }

      // Skip tweakpane if not in dev mode (optional dev tool)
      // @ts-ignore - import.meta.env may not be available in all contexts
      if (
        typeof import.meta !== "undefined" &&
        (import.meta as any).env &&
        !(import.meta as any).env.DEV
      ) {
        update();
        return;
      }

      try {
        // Use dynamic import with runtime evaluation to avoid Vite static analysis
        // This prevents Vite from trying to resolve the module at build time
        let tweakpaneModule: any = null;
        try {
          // Use Function constructor to create a dynamic import that Vite can't analyze
          // This is necessary because Vite's import analysis runs before code execution
          const importTweakpane = new Function(
            "specifier",
            "return import(specifier)"
          );
          tweakpaneModule = await importTweakpane("tweakpane");
        } catch (e) {
          // Module not found - tweakpane is optional
          // This is expected if tweakpane is not installed
          update();
          return;
        }

        if (!tweakpaneModule || destroyed) {
          update();
          return;
        }
        const { Pane } = tweakpaneModule;
        if (!Pane) {
          update();
          return;
        }
        const pane = new Pane({ title: "config" }) as PaneType;
        paneRef.current = pane;

        const sync = (event: {
          target: { controller?: { view?: { labelElement?: HTMLElement } } };
        }) => {
          const labelElement = event?.target?.controller?.view?.labelElement;
          const viewTransition = (
            document as unknown as {
              startViewTransition?: (cb: () => void) => void;
            }
          ).startViewTransition;
          if (!viewTransition || labelElement?.innerText !== "theme") {
            update();
            return;
          }
          viewTransition(() => update());
        };

        const debugSettings = pane.addFolder({
          title: "debug",
          expanded: false,
        });
        debugSettings.addBinding(config, "debug");
        debugSettings.addBinding(config, "active");
        debugSettings.addBinding(config, "complete", {
          min: 0,
          max: 100,
          label: "complete (%)",
          step: 1,
        });

        const behaviorSettings = pane.addFolder({
          title: "behavior",
          expanded: false,
        });
        behaviorSettings.addBinding(config, "bounce");
        behaviorSettings.addBinding(config, "mapped");
        behaviorSettings.addBinding(config, "bubble");
        behaviorSettings.addBinding(config, "delta");
        behaviorSettings.addBinding(config, "hue", {
          min: 0,
          max: 359,
          step: 1,
        });

        const settings = pane.addFolder({
          title: "filter",
          expanded: false,
        });
        settings.addBinding(config, "deviation", {
          min: 0,
          max: 50,
          step: 1,
          label: "stdDeviation",
        });
        settings.addBinding(config, "alpha", {
          min: 0,
          max: 50,
          step: 1,
          label: "alpha",
        });

        pane.addBinding(config, "theme", {
          label: "theme",
          options: {
            system: "system",
            light: "light",
            dark: "dark",
          },
        });

        pane.on("change", sync);
        update();
      } catch (err) {
        // If tweakpane fails to load, still apply base update
        update();
      }
    };

    loadPane();
    update();

    return () => {
      destroyed = true;
      toggle.removeEventListener("keydown", onKeyDown);
      toggle.removeEventListener("keyup", onKeyUp);
      if (paneRef.current) {
        paneRef.current.dispose();
        paneRef.current = null;
      }
      if (draggable) {
        draggable.kill();
      }
    };
  }, [currentChecked, disabled, emitChange, syncCheckedState]);

  const toggleId = toggleIdRef.current;

  return (
    <div className="switch-stage">
      <main>
        <button
          id={toggleId}
          ref={toggleRef}
          aria-label={label}
          aria-pressed={currentChecked}
          aria-required={required}
          aria-disabled={disabled}
          className="liquid-toggle"
          disabled={disabled}
          data-pressed={currentChecked}
        >
          <div className="debug debug--knockout">
            <div className="arrow">
              <span>knockout backdrop.</span>
            </div>
            <div className="knockout knockout--debug">
              <div className="indicator indicator--masked">
                <div className="mask" />
              </div>
            </div>
          </div>

          <div className="knockout">
            <div className="indicator indicator--masked">
              <div className="mask" />
            </div>
          </div>

          <div className="debug debug--indicator">
            <div className="arrow">
              <span>goo window.</span>
            </div>
            <div className="indicator__liquid indicator__liquid--debug">
              <div className="shadow" />
              <div className="wrapper">
                <div className="liquids">
                  <div className="liquid__shadow" />
                  <div className="liquid__track" />
                </div>
              </div>
              <div className="cover" />
            </div>
          </div>

          <div className="indicator__liquid">
            <div className="shadow" />
            <div className="wrapper">
              <div className="liquids">
                <div className="liquid__shadow" />
                <div className="liquid__track" />
              </div>
            </div>
            <div className="cover" />
          </div>
        </button>
      </main>
    </div>
  );
};
