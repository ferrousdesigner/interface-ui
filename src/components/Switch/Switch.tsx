import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './Switch.css';

gsap.registerPlugin(Draggable);

export interface SwitchProps {
  /**
   * The label for the switch
   */
  label?: string;
  /**
   * Whether the switch is checked (controlled)
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Whether the switch is required
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Switch name attribute
   */
  name?: string;
  /**
   * Switch id attribute
   */
  id?: string;
  /**
   * Switch value attribute
   */
  value?: string;
  /**
   * Size variant
   */
  size?: 'small' | 'medium' | 'large';
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  required = false,
  onChange,
  name,
  id,
  value,
  size = 'medium',
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
  const [isActive, setIsActive] = useState(false);
  const [complete, setComplete] = useState(defaultChecked ? 100 : 0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const completeRef = useRef(complete);
  const isDraggingRef = useRef(false);
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  // Keep ref in sync with state
  useEffect(() => {
    completeRef.current = complete;
  }, [complete]);

  useEffect(() => {
    if (!isControlled && defaultChecked !== undefined) {
      setInternalChecked(defaultChecked);
      setComplete(defaultChecked ? 100 : 0);
    }
  }, [defaultChecked, isControlled]);

  useEffect(() => {
    // Update complete when checked state changes externally
    if (isControlled) {
      setComplete(checked ? 100 : 0);
    }
  }, [checked, isControlled]);

  const handleToggle = useCallback(() => {
    if (disabled) return;

    const newChecked = !currentChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    setComplete(newChecked ? 100 : 0);
    if (buttonRef.current) {
      buttonRef.current.style.setProperty('--complete', `${newChecked ? 100 : 0}`);
    }

    // Create a synthetic event for onChange compatibility
    if (onChange) {
      const target = {
        checked: newChecked,
        name: name || '',
        value: value || '',
        type: 'checkbox',
      } as HTMLInputElement;
      
      const syntheticEvent = {
        target,
        currentTarget: target,
        preventDefault: () => {},
        stopPropagation: () => {},
        nativeEvent: new Event('change'),
        bubbles: true,
        cancelable: false,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        timeStamp: Date.now(),
        type: 'change',
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  }, [disabled, currentChecked, isControlled, onChange, name, value]);

  // Initialize GSAP Draggable
  useEffect(() => {
    if (!buttonRef.current || disabled) return;

    const toggle = buttonRef.current;
    const proxy = document.createElement('div');

    const draggable = Draggable.create(proxy, {
      allowContextMenu: true,
      handle: toggle,
      type: 'x',
      onDragStart: function () {
        isDraggingRef.current = true;
        const toggleBounds = toggle.getBoundingClientRect();
        const pressed = currentChecked;
        const bounds = pressed
          ? toggleBounds.left - this.pointerX
          : toggleBounds.left + toggleBounds.width - this.pointerX;

        this.dragBounds = bounds;
        setIsActive(true);
        (this as any).__pressTime = Date.now();
      },
      onDrag: function () {
        const pressed = currentChecked;
        const dragged = this.x - this.startX;
        const newComplete = gsap.utils.clamp(
          0,
          100,
          pressed
            ? gsap.utils.mapRange(this.dragBounds, 0, 0, 100, dragged)
            : gsap.utils.mapRange(0, this.dragBounds, 0, 100, dragged)
        );

        setComplete(newComplete);
        if (buttonRef.current) {
          buttonRef.current.style.setProperty('--complete', `${newComplete}`);
          buttonRef.current.style.setProperty('--delta', `${Math.min(Math.abs(this.deltaX), 12)}`);
        }
      },
      onDragEnd: function () {
        // Get current complete from ref to avoid stale closure
        const currentComplete = completeRef.current;
        const finalComplete = currentComplete >= 50 ? 100 : 0;
        const shouldBeChecked = finalComplete >= 50;

        gsap.to(buttonRef.current, {
          '--complete': finalComplete,
          duration: 0.15,
          onComplete: () => {
            setIsActive(false);
            isDraggingRef.current = false;
            if (buttonRef.current) {
              buttonRef.current.style.setProperty('--delta', '0');
            }

            setComplete(finalComplete);

            // Update state
            if (shouldBeChecked !== currentChecked) {
              if (!isControlled) {
                setInternalChecked(shouldBeChecked);
              }

              // Trigger onChange
              if (onChange) {
                const target = {
                  checked: shouldBeChecked,
                  name: name || '',
                  value: value || '',
                  type: 'checkbox',
                } as HTMLInputElement;

                const syntheticEvent = {
                  target,
                  currentTarget: target,
                  preventDefault: () => {},
                  stopPropagation: () => {},
                  nativeEvent: new Event('change'),
                  bubbles: true,
                  cancelable: false,
                  defaultPrevented: false,
                  eventPhase: 0,
                  isTrusted: false,
                  timeStamp: Date.now(),
                  type: 'change',
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onChange(syntheticEvent);
              }
            }
          },
        });
      },
      onPress: function () {
        (this as any).__pressTime = Date.now();
        if ('ontouchstart' in window && navigator.maxTouchPoints > 0) {
          setIsActive(true);
        }
      },
      onRelease: function () {
        if (
          'ontouchstart' in window &&
          navigator.maxTouchPoints > 0 &&
          ((this.startX !== undefined &&
            this.endX !== undefined &&
            Math.abs(this.endX - this.startX) < 4) ||
            this.endX === undefined)
        ) {
          setIsActive(false);
        }

        if (buttonRef.current) {
          buttonRef.current.style.setProperty('--delta', '0');
        }

        // Handle click (short press without drag)
        const pressTime = (this as any).__pressTime || Date.now();
        const releaseTime = Date.now();
        if (releaseTime - pressTime <= 150 && Math.abs(this.deltaX || 0) < 4) {
          handleToggle();
        }
      },
    })[0];

    draggableRef.current = draggable;

    return () => {
      draggable.kill();
    };
  }, [disabled, currentChecked, isControlled, onChange, name, value, handleToggle]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') {
        e.preventDefault();
      }
      handleToggle();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsActive(true);
    }
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <>
      <svg className="switch-svg-filters" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              result="SvgjsFeGaussianBlur1000"
              in="SourceGraphic"
              stdDeviation="13"
            />
            <feColorMatrix
              result="SvgjsFeColorMatrix1001"
              in="SvgjsFeGaussianBlur1000"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 13 -10
              "
              type="matrix"
            />
            <feComposite
              result="SvgjsFeComposite1002"
              in="SvgjsFeColorMatrix1001"
              operator="atop"
            />
          </filter>
          <filter id="knockout" colorInterpolationFilters="sRGB">
            <feColorMatrix
              result="knocked"
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
          <filter id="remove-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -255 -255 -255 0 1"
              result="black-pixels"
            />
            <feMorphology
              in="black-pixels"
              operator="dilate"
              radius="0.5"
              result="smoothed"
            />
            <feComposite in="SourceGraphic" in2="smoothed" operator="out" />
          </filter>
        </defs>
      </svg>
      <div className="switch-wrapper">
        <button
          ref={buttonRef}
          id={switchId}
          role="switch"
          aria-label={label || 'Toggle switch'}
          aria-pressed={currentChecked}
          aria-required={required}
          aria-disabled={disabled}
          disabled={disabled}
          className={`liquid-toggle ${size}`}
          data-pressed={currentChecked}
          data-active={isActive}
          style={{
            '--complete': `${complete}`,
            '--delta': '0',
          } as React.CSSProperties}
          onClick={(e) => {
            // Prevent onClick if we just finished dragging
            if (!isDraggingRef.current) {
              handleToggle();
            }
            isDraggingRef.current = false;
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          <div className="knockout">
            <div className="indicator indicator--masked">
              <div className="mask"></div>
            </div>
          </div>
          <div className="indicator__liquid">
            <div className="shadow"></div>
            <div className="wrapper">
              <div className="liquids">
                <div className="liquid__shadow"></div>
                <div className="liquid__track"></div>
              </div>
            </div>
            <div className="cover"></div>
          </div>
        </button>
        {label && (
          <label htmlFor={switchId} className={`switch-label ${disabled ? 'disabled' : ''}`}>
            {label}
            {required && <span className="switch-required">*</span>}
          </label>
        )}
      </div>
    </>
  );
};

