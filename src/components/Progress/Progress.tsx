import React, { useEffect } from 'react';
import { validateRange, validatePositive } from '../../utils/validation';
import './Progress.css';

export interface ProgressProps {
  /**
   * Progress value (0-100)
   */
  value: number;
  /**
   * Maximum value (default: 100)
   */
  max?: number;
  /**
   * Whether to show the percentage
   */
  showValue?: boolean;
  /**
   * Progress variant
   */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /**
   * Progress size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the progress is indeterminate
   */
  indeterminate?: boolean;
  /**
   * Progress className
   */
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  showValue = false,
  variant = 'default',
  size = 'medium',
  indeterminate = false,
  className = '',
}) => {
  // Prop validation
  useEffect(() => {
    validatePositive(max, 'Progress', 'max');
    if (!indeterminate) {
      validateRange(value, 0, max, 'Progress', 'value');
    }
  }, [value, max, indeterminate]);

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  // Map variant to hue for liquid glass effect
  const getVariantHue = () => {
    switch (variant) {
      case 'success':
        return 144;
      case 'warning':
        return 45;
      case 'error':
        return 0;
      default:
        return 200;
    }
  };

  return (
    <>
      <svg className="progress-svg-filters" aria-hidden="true">
        <defs>
          <filter id="progress-goo">
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
          <filter id="progress-knockout" colorInterpolationFilters="sRGB">
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
          <filter id="progress-remove-black" colorInterpolationFilters="sRGB">
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
      <div className={`progress-wrapper ${className}`}>
        {showValue && !indeterminate && (
          <div className="progress-label">
            {Math.round(percentage)}%
          </div>
        )}
        <div
          className={`progress-track ${size} ${variant} ${indeterminate ? 'indeterminate' : ''}`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={indeterminate ? undefined : value}
          aria-label="Progress"
          style={{
            '--complete': `${percentage}`,
            '--hue': getVariantHue(),
          } as React.CSSProperties}
        >
          <div className="progress-knockout">
            <div className="progress-indicator progress-indicator--masked">
              <div className="progress-mask"></div>
            </div>
          </div>
          <div className="progress-fill-liquid">
            <div className="progress-shadow"></div>
            <div className="progress-wrapper-inner">
              <div className="progress-liquids">
                <div className="progress-liquid-shadow"></div>
                <div className="progress-liquid-track"></div>
              </div>
            </div>
            <div className="progress-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
};

