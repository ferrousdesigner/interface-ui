import React, { useEffect, useState, useCallback } from "react";
import "./Alert.css";
import GlassSurface from "../GlassSurface/GlassSurface";
import { X } from "lucide-react";

export type AlertSize = "small" | "medium" | "large";
export type AlertAnimation =
  | "fade"
  | "slide"
  | "scale"
  | "bounce"
  | "slideUp"
  | "slideDown";

export interface AlertProps {
  /**
   * Alert content
   */
  children: React.ReactNode;
  /**
   * Alert variant
   */
  variant?: "default" | "info" | "success" | "warning" | "error";
  /**
   * Alert title
   */
  title?: string;
  /**
   * Whether to show a prominent left border bar
   */
  showBar?: boolean;
  /**
   * Whether to show the icon
   */
  showIcon?: boolean;
  /**
   * Custom icon element
   */
  icon?: React.ReactNode;
  /**
   * Whether the alert is dismissible
   */
  dismissible?: boolean;
  /**
   * Handler for dismiss action
   */
  onDismiss?: () => void;
  /**
   * Action link text (e.g., "Learn more")
   */
  actionText?: string;
  /**
   * Handler for action link click
   */
  onAction?: () => void;
  /**
   * Dismiss button label (defaults to "dismiss")
   */
  dismissLabel?: string;
  /**
   * Alert className
   */
  className?: string;
  /**
   * Alert width (defaults to "100%")
   */
  width?: number | string;
  /**
   * Blur amount for the glass surface effect
   */
  blur?: number;
  /**
   * Alert size - controls font size and padding
   */
  size?: AlertSize;
  /**
   * Animation type to apply on mount
   */
  animation?: AlertAnimation;
  /**
   * Animation type to apply when removing/closing the alert
   */
  removeAnimation?: AlertAnimation;
  /**
   * Whether to show the close icon (X button). Defaults to true if dismissible is true, or can be explicitly set
   */
  showCloseIcon?: boolean;
  /**
   * Whether to apply remove animation to the wrapper (GlassSurface) instead of just the alert content
   */
  removeAnimationOnWrapper?: boolean;
  /**
   * Timeout in milliseconds to automatically dismiss the alert. If set, the alert will be dismissed after this duration.
   */
  timeout?: number;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = "default",
  title,
  showBar = false,
  showIcon = true,
  icon,
  dismissible = false,
  onDismiss,
  actionText,
  onAction,
  dismissLabel = "dismiss",
  className = "",
  width = "100%",
  blur,
  size = "medium",
  animation,
  removeAnimation,
  showCloseIcon,
  removeAnimationOnWrapper = false,
  timeout,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDismiss = useCallback(() => {
    if (removeAnimation) {
      setIsRemoving(true);
      // Wait for animation to complete before calling onDismiss
      // Duration matches the softer wrapper animations (500-700ms)
      const animationDuration =
        removeAnimation === "bounce"
          ? 700
          : removeAnimation === "slide" ||
            removeAnimation === "slideUp" ||
            removeAnimation === "slideDown"
          ? 600
          : 500;
      setTimeout(() => {
        onDismiss?.();
      }, animationDuration);
    } else {
      onDismiss?.();
    }
  }, [removeAnimation, onDismiss]);

  useEffect(() => {
    // Trigger animation on mount
    if (animation) {
      setIsMounted(true);
    }
  }, [animation]);

  useEffect(() => {
    // Auto-dismiss after timeout if provided
    if (timeout && timeout > 0 && onDismiss) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeout, onDismiss, handleDismiss]);

  // Determine if close icon should be shown
  // By default, show close icon (appears by default)
  // Can be controlled via showCloseIcon prop
  const shouldShowCloseIcon =
    showCloseIcon !== undefined ? showCloseIcon : true; // Default to showing the icon

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDismiss();
    }
  };

  const handleActionKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onAction?.();
    }
  };

  const defaultIcon = (
    <div className="alert-icon-default">
      <span>i</span>
    </div>
  );

  const displayIcon = icon !== undefined ? icon : showIcon ? defaultIcon : null;

  const alertAnimationClass =
    animation && isMounted ? `alert-animate-${animation}` : "";
  const alertRemoveAnimationClass =
    removeAnimation && isRemoving && !removeAnimationOnWrapper
      ? `alert-remove-animate-${removeAnimation}`
      : "";
  const wrapperRemoveAnimationClass =
    removeAnimation && isRemoving && removeAnimationOnWrapper
      ? `alert-wrapper-remove-animate-${removeAnimation}`
      : "";

  return (
    <GlassSurface
      height="auto"
      borderRadius={8}
      width={width ? width : "100%"}
      blur={blur}
      className={`alert-glass-surface ${wrapperRemoveAnimationClass} ${className}`}
    >
      <div
        className={`alert ${variant} ${
          showBar ? "alert-bar" : ""
        } ${size} ${alertAnimationClass} ${alertRemoveAnimationClass}`}
        role="alert"
        aria-live="polite"
        style={{ width: width ? width : "100%" }}
      >
        {displayIcon && <div className="alert-icon-wrapper">{displayIcon}</div>}
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-message">{children}</div>
          {(actionText || dismissible) && (
            <div className="alert-actions">
              {actionText && (
                <button
                  type="button"
                  className="alert-action-link"
                  onClick={onAction}
                  onKeyDown={handleActionKeyDown}
                >
                  {actionText}
                </button>
              )}
              {dismissible && (
                <button
                  type="button"
                  className="alert-dismiss-link"
                  onClick={handleDismiss}
                  onKeyDown={handleKeyDown}
                >
                  {dismissLabel}
                </button>
              )}
            </div>
          )}
        </div>
        {shouldShowCloseIcon && (
          <button
            type="button"
            className="alert-dismiss"
            onClick={handleDismiss}
            onKeyDown={handleKeyDown}
            aria-label="Dismiss alert"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </GlassSurface>
  );
};
