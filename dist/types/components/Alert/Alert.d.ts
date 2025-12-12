import { default as React } from 'react';

export type AlertSize = "small" | "medium" | "large";
export type AlertAnimation = "fade" | "slide" | "scale" | "bounce" | "slideUp" | "slideDown";
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
export declare const Alert: React.FC<AlertProps>;
