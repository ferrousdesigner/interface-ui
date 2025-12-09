import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import {
  validateArrayStructure,
  validateUniqueKeys,
} from "../../utils/validation";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Tabs.css";

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Tab items
   */
  items: TabItem[];
  /**
   * Default active tab key
   */
  defaultActiveKey?: string;
  /**
   * Controlled active tab key
   */
  activeKey?: string;
  /**
   * Change handler
   */
  onChange?: (key: string) => void;
  /**
   * Tabs className
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  className = "",
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || items[0]?.key || ""
  );
  const isControlled = controlledActiveKey !== undefined;
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey;

  const tabsHeaderRef = useRef<HTMLDivElement>(null);
  const tabsHeaderWrapperRef = useRef<HTMLDivElement>(null);
  const glassDropRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [isAnimating, setIsAnimating] = useState(false);
  const isUserInitiatedChange = useRef(false);
  const completeRef = useRef(0);
  const previousPositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const updateGlassDropPosition = useCallback(
    (targetKey: string, animate: boolean = true) => {
      const targetButton = tabButtonRefs.current.get(targetKey);
      const glassDrop = glassDropRef.current;
      const header = tabsHeaderRef.current;
      const wrapper = tabsHeaderWrapperRef.current;

      if (!targetButton || !glassDrop || !header) return;

      // Calculate position relative to header wrapper (which contains both header and glass drop)
      const wrapperRect = wrapper
        ? wrapper.getBoundingClientRect()
        : header.getBoundingClientRect();
      const buttonRect = targetButton.getBoundingClientRect();

      // Calculate position relative to wrapper
      const left = buttonRect.left - wrapperRect.left;
      const top = buttonRect.top - wrapperRect.top;
      // Clamp width and height to max values (80px width, 60px height)
      const width = Math.min(buttonRect.width, 80);
      const height = Math.min(buttonRect.height, 60);

      if (animate && !isAnimating) {
        setIsAnimating(true);
        completeRef.current = 0;
        glassDrop.style.setProperty("--complete", "0");
        glassDrop.style.setProperty("--delta", "0");
        glassDrop.dataset.active = "true";
        glassDrop.dataset.pressed = "true";
        glassDrop.dataset.bounce = "true";

        // Create timeline for bounce + liquid stretch animation
        const tl = gsap.timeline({
          onComplete: () => {
            completeRef.current = 100;
            glassDrop.style.setProperty("--complete", "100");
            glassDrop.style.setProperty("--delta", "0");
            glassDrop.dataset.active = "false";
            glassDrop.dataset.pressed = "false";
            setIsAnimating(false);
            previousPositionRef.current = { left, top, width, height };
          },
        });

        // Smooth liquid transition - position and size animate together with liquid effect
        tl.to(
          glassDrop,
          {
            "--target-x": `${left}px`,
            "--target-y": `${top}px`,
            "--target-width": `${width}px`,
            "--target-height": `${height * 1.5}px`, // Scale height to 1.5x during transition
            "--complete": 100,
            "--delta": "12",
            duration: 0.3,
            ease: "power2.out",
            onUpdate: function () {
              const value = this.progress() * 100;
              completeRef.current = value;
              glassDrop.style.setProperty("--complete", `${value}`);
              // Reduce delta as animation progresses for smooth contraction
              const deltaValue = 12 * (1 - this.progress());
              glassDrop.style.setProperty("--delta", `${deltaValue}`);
              // Scale height back to actual height as animation progresses
              const heightScale = 1.5 - this.progress() * 0.5;
              glassDrop.style.setProperty("--height-scale", `${heightScale}`);
            },
          },
          0
        )
          // Return to actual height
          .to(
            glassDrop,
            {
              "--target-height": `${height}px`,
              "--height-scale": "1",
              "--delta": "0",
              duration: 0.2,
              ease: "power2.out",
            },
            "-=0.1"
          );
      } else {
        // Set position and size immediately
        glassDrop.style.setProperty("--target-x", `${left}px`);
        glassDrop.style.setProperty("--target-y", `${top}px`);
        glassDrop.style.setProperty("--target-width", `${width}px`);
        glassDrop.style.setProperty("--target-height", `${height}px`);
        glassDrop.style.setProperty("--height-scale", "1");
        completeRef.current = 100;
        glassDrop.style.setProperty("--complete", "100");
        glassDrop.style.setProperty("--delta", "0");
        previousPositionRef.current = { left, top, width, height };
      }
    },
    [isAnimating]
  );

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled || isAnimating) return;

    // Mark as user-initiated change to prevent useEffect from interfering
    isUserInitiatedChange.current = true;

    // Update state first
    if (!isControlled) {
      setInternalActiveKey(key);
    }
    onChange?.(key);

    // Immediately start animation to prevent flash
    // Use requestAnimationFrame to ensure DOM is ready but start animation right away
    requestAnimationFrame(() => {
      updateGlassDropPosition(key, true);
      // Reset flag after animation completes
      setTimeout(() => {
        isUserInitiatedChange.current = false;
      }, 500); // Slightly longer than animation duration (400ms liquid + 200ms bounce = 500ms)
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    key: string,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabClick(key);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      if (!items[nextIndex].disabled) {
        handleTabClick(items[nextIndex].key);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      if (!items[prevIndex].disabled) {
        handleTabClick(items[prevIndex].key);
      }
    }
  };

  // Prop validation
  useEffect(() => {
    validateArrayStructure(items, ["key", "label", "content"], "Tabs", "items");
    validateUniqueKeys(items, (item) => item.key, "Tabs", "items");
  }, [items]);

  // Update glass drop position when activeKey changes or items change
  useEffect(() => {
    if (
      activeKey &&
      tabButtonRefs.current.size > 0 &&
      !isUserInitiatedChange.current
    ) {
      // Use double requestAnimationFrame to ensure DOM is ready and layout is complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          updateGlassDropPosition(activeKey, false);
        });
      });
    }
  }, [activeKey, items.length, updateGlassDropPosition]);

  // Initialize glass drop position on mount for default active tab
  useEffect(() => {
    if (
      activeKey &&
      tabButtonRefs.current.size > 0 &&
      glassDropRef.current &&
      !previousPositionRef.current
    ) {
      // Initialize glass drop position immediately on mount to show default active tab
      const timeoutId = setTimeout(() => {
        updateGlassDropPosition(activeKey, false);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [activeKey, items.length, updateGlassDropPosition]);

  const activeTab = items.find((item) => item.key === activeKey);

  return (
    <div className={`tabs ${className}`}>
      {/* SVG Filters for glass drop effect */}
      <svg
        className="tabs-svg-filters"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="tabs-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 16 -10"
              type="matrix"
            />
          </filter>
          <filter id="tabs-remove-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="3" intercept="-1" />
              <feFuncG type="linear" slope="3" intercept="-1" />
              <feFuncB type="linear" slope="3" intercept="-1" />
            </feComponentTransfer>
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
              <feFuncG type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
              <feFuncB type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="tabs-header-wrapper" ref={tabsHeaderWrapperRef}>
        {/* Animated Glass Drop indicator with GlassSurface - outside header to allow overflow */}
        {activeKey && (
          <div ref={glassDropRef} className="tab-glass-drop-wrapper">
            {/* Liquid drop effect with GlassSurface */}
            <GlassSurface
              hugWidth={false}
              width="100%"
              height="100%"
              borderRadius={20}
              brightness={100}
              opacity={0.4}
              blur={12}
              className="tab-glass-drop-indicator__liquid"
            >
              {/* Label content on top of glass - centered */}
              {activeTab && (
                <div className="tab-glass-drop-label">
                  {activeTab.icon && (
                    <span className="tab-glass-drop-label__icon">
                      {activeTab.icon}
                    </span>
                  )}
                  {/* <span className="tab-glass-drop-label__text">
                    {activeTab.label}
                  </span> */}
                </div>
              )}
              <div className="tab-glass-drop-shadow" />
              <div className="tab-glass-drop-wrapper-inner">
                <div className="tab-glass-drop-liquids">
                  <div className="tab-glass-drop-liquid__shadow" />
                  <div className="tab-glass-drop-liquid__track" />
                </div>
              </div>
              <div className="tab-glass-drop-cover" />
            </GlassSurface>
          </div>
        )}
      </div>

      <div className="tabs-header" ref={tabsHeaderRef} role="tablist">
        {items.map((item, index) => {
          const isActive = item.key === activeKey;

          return (
            <button
              key={item.key}
              ref={(el) => {
                if (el) {
                  tabButtonRefs.current.set(item.key, el);
                } else {
                  tabButtonRefs.current.delete(item.key);
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.key}`}
              id={`tab-${item.key}`}
              className={`tab-button ${isActive ? "active" : ""} ${
                item.disabled ? "disabled" : ""
              }`}
              onClick={() => handleTabClick(item.key, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, item.key, index)}
              disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
            >
              {item.icon && (
                <span className="tab-button__icon">{item.icon}</span>
              )}
              <span className="tab-button__label">{item.label}</span>
            </button>
          );
        })}
      </div>

      {activeTab && (
        <div
          id={`tabpanel-${activeTab.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.key}`}
          className="tabs-content"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
