import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { validateRange, validatePositive } from '../../utils/validation';
import './Slider.css';

gsap.registerPlugin(Draggable);

export interface SliderProps {
  /**
   * The label for the slider
   */
  label?: string;
  /**
   * Minimum value
   */
  min?: number;
  /**
   * Maximum value
   */
  max?: number;
  /**
   * Step value
   */
  step?: number;
  /**
   * Current value (controlled)
   */
  value?: number;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number;
  /**
   * Whether the slider is disabled
   */
  disabled?: boolean;
  /**
   * Whether to show the value
   */
  showValue?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: number) => void;
  /**
   * Slider name attribute
   */
  name?: string;
  /**
   * Slider id attribute
   */
  id?: string;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = 0,
  disabled = false,
  showValue = false,
  onChange,
  name,
  id,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [complete, setComplete] = useState(defaultValue);
  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const completeRef = useRef(complete);
  const isDraggingRef = useRef(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  // Prop validation
  useEffect(() => {
    if (min >= max) {
      console.warn('[Slider] min must be less than max. Got min:', min, 'max:', max);
    }
    validatePositive(step, 'Slider', 'step');
    if (value !== undefined) {
      validateRange(value, min, max, 'Slider', 'value');
    }
  }, [min, max, step, value]);

  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  
  // Keep ref in sync with state
  useEffect(() => {
    completeRef.current = complete;
  }, [complete]);

  // Update complete when value changes externally
  useEffect(() => {
    const newComplete = ((value - min) / (max - min)) * 100;
    setComplete(newComplete);
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--complete', `${newComplete}`);
    }
  }, [value, min, max]);

  const handleChange = useCallback((newValue: number) => {
    const clampedValue = Math.max(min, Math.min(max, newValue));
    const steppedValue = Math.round(clampedValue / step) * step;
    const finalValue = Math.max(min, Math.min(max, steppedValue));
    
    if (!isControlled) {
      setInternalValue(finalValue);
    }
    onChange?.(finalValue);
  }, [min, max, step, isControlled, onChange]);

  // Initialize GSAP Draggable
  useEffect(() => {
    if (!sliderRef.current || !thumbRef.current || disabled) return;

    const track = sliderRef.current;
    const thumb = thumbRef.current;

    const proxy = document.createElement('div');
    proxy.style.position = 'absolute';
    proxy.style.width = '1px';
    proxy.style.height = '1px';
    proxy.style.opacity = '0';
    proxy.style.pointerEvents = 'none';
    document.body.appendChild(proxy);

    const updateThumbPosition = (percentage: number) => {
      thumb.style.left = `${percentage}%`;
    };

    const draggable = Draggable.create(proxy, {
      allowContextMenu: true,
      handle: thumb,
      type: 'x',
      onDragStart: function () {
        isDraggingRef.current = true;
        setIsDragging(true);
        setIsActive(true);
      },
      onDrag: function () {
        const trackBounds = track.getBoundingClientRect();
        const thumbBounds = thumb.getBoundingClientRect();
        const thumbWidth = thumbBounds.width;
        
        // Get pointer position relative to track
        const pointerX = this.pointerX - trackBounds.left;
        
        // Calculate bounds - thumb center can move from half thumb width to track width minus half thumb width
        const minX = thumbWidth / 2;
        const maxX = trackBounds.width - thumbWidth / 2;
        
        // Clamp pointer position to bounds
        const clampedX = gsap.utils.clamp(minX, maxX, pointerX);
        
        // Convert to percentage
        const percentage = gsap.utils.mapRange(minX, maxX, 0, 100, clampedX);
        
        // Convert to value
        const newValue = min + (percentage / 100) * (max - min);
        const steppedValue = Math.round(newValue / step) * step;
        const finalValue = Math.max(min, Math.min(max, steppedValue));
        const finalPercentage = ((finalValue - min) / (max - min)) * 100;
        
        setComplete(finalPercentage);
        if (track) {
          track.style.setProperty('--complete', `${finalPercentage}`);
          track.style.setProperty('--delta', `${Math.min(Math.abs(this.deltaX || 0), 12)}`);
        }
        
        // Update thumb position
        updateThumbPosition(finalPercentage);
        
        // Update value
        handleChange(finalValue);
      },
      onDragEnd: function () {
        const trackBounds = track.getBoundingClientRect();
        const thumbBounds = thumb.getBoundingClientRect();
        const thumbWidth = thumbBounds.width;
        
        // Get final pointer position relative to track
        const pointerX = this.pointerX - trackBounds.left;
        const minX = thumbWidth / 2;
        const maxX = trackBounds.width - thumbWidth / 2;
        const clampedX = gsap.utils.clamp(minX, maxX, pointerX);
        const percentage = gsap.utils.mapRange(minX, maxX, 0, 100, clampedX);
        
        const newValue = min + (percentage / 100) * (max - min);
        const steppedValue = Math.round(newValue / step) * step;
        const finalValue = Math.max(min, Math.min(max, steppedValue));
        const finalPercentage = ((finalValue - min) / (max - min)) * 100;
        
        updateThumbPosition(finalPercentage);
        
        gsap.to({}, {
          duration: 0.15,
          onComplete: () => {
            setIsActive(false);
            setIsDragging(false);
            isDraggingRef.current = false;
            if (track) {
              track.style.setProperty('--delta', '0');
            }
            setComplete(finalPercentage);
            handleChange(finalValue);
          },
        });
      },
      onPress: function () {
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
        if (track) {
          track.style.setProperty('--delta', '0');
        }
      },
    })[0];

    draggableRef.current = draggable;

    // Initialize thumb position
    const initialPercentage = ((value - min) / (max - min)) * 100;
    updateThumbPosition(initialPercentage);

    return () => {
      draggable.kill();
      if (proxy.parentNode) {
        proxy.parentNode.removeChild(proxy);
      }
    };
  }, [disabled, min, max, step, value, handleChange]);

  // Handle track click
  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (disabled || !sliderRef.current || !thumbRef.current) return;
    if (e.target === thumbRef.current || thumbRef.current.contains(e.target as Node)) {
      return;
    }
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const newValue = min + (percentage / 100) * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    const finalValue = Math.max(min, Math.min(max, steppedValue));
    
    handleChange(finalValue);
  }, [disabled, min, max, step, handleChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(Number(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    const stepSize = step || 1;
    let newValue = value;
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      newValue = Math.max(min, value - stepSize);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      newValue = Math.min(max, value + stepSize);
    } else if (e.key === 'Home') {
      e.preventDefault();
      newValue = min;
    } else if (e.key === 'End') {
      e.preventDefault();
      newValue = max;
    }
    
    if (newValue !== value) {
      handleChange(newValue);
    }
  };

  return (
    <>
      <svg className="slider-svg-filters" aria-hidden="true">
        <defs>
          <filter id="slider-goo">
            <feGaussianBlur
              result="SvgjsFeGaussianBlur1000"
              in="SourceGraphic"
              stdDeviation="8"
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
          <filter id="slider-knockout" colorInterpolationFilters="sRGB">
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
          <filter id="slider-remove-black" colorInterpolationFilters="sRGB">
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
      <div className="slider-wrapper">
        {(label || showValue) && (
          <div className="slider-header">
            {label && (
              <label htmlFor={sliderId} className="slider-label">
                {label}
              </label>
            )}
            {showValue && (
              <span className="slider-value">{value}</span>
            )}
          </div>
        )}
        <div
          ref={sliderRef}
          className={`slider-track ${disabled ? 'disabled' : ''} ${isDragging ? 'dragging' : ''}`}
          data-active={isActive}
          onClick={handleTrackClick}
          style={{
            '--complete': `${percentage}`,
            '--hue': 200,
            '--delta': '0',
          } as React.CSSProperties}
        >
          <div className="slider-knockout">
            <div className="slider-indicator slider-indicator--masked">
              <div className="slider-mask"></div>
            </div>
          </div>
          <div className="slider-fill-liquid">
            <div className="slider-shadow"></div>
            <div className="slider-wrapper-inner">
              <div className="slider-liquids">
                <div className="slider-liquid-shadow"></div>
                <div className="slider-liquid-track"></div>
              </div>
            </div>
            <div className="slider-cover"></div>
          </div>
          <div
            ref={thumbRef}
            className="slider-thumb"
            style={{ left: `${percentage}%` }}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            data-dragging={isDragging}
            data-active={isActive}
            onKeyDown={handleKeyDown}
          >
            <div className="slider-thumb-liquid">
              <div className="slider-thumb-shadow"></div>
            </div>
          </div>
        </div>
        <input
          id={sliderId}
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={handleInputChange}
          className="slider-input"
          aria-label={label}
        />
      </div>
    </>
  );
};

