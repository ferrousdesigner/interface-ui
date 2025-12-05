import React from 'react';
import './Alert.css';

export interface AlertProps {
  /**
   * Alert content
   */
  children: React.ReactNode;
  /**
   * Alert variant
   */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Alert title
   */
  title?: string;
  /**
   * Whether the alert is dismissible
   */
  dismissible?: boolean;
  /**
   * Handler for dismiss action
   */
  onDismiss?: () => void;
  /**
   * Alert className
   */
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = '',
}) => {
  const handleDismiss = () => {
    onDismiss?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDismiss();
    }
  };

  return (
    <div
      className={`alert ${variant} ${className}`}
      role="alert"
      aria-live="polite"
    >
      <div className="alert-content">
        {title && (
          <div className="alert-title">
            {title}
          </div>
        )}
        <div className="alert-message">
          {children}
        </div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="alert-dismiss"
          onClick={handleDismiss}
          onKeyDown={handleKeyDown}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

