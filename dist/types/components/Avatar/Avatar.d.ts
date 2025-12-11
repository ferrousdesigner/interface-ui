import { default as React } from 'react';

export interface BadgeConfig {
    /**
     * Badge value to display
     */
    value?: string | number;
    /**
     * Badge variant/color
     */
    variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
    /**
     * Badge size (defaults to avatar size)
     */
    size?: "small" | "medium" | "large";
    /**
     * Custom background color
     */
    color?: string;
}
export interface AvatarProps {
    /**
     * Image source URL
     */
    src?: string;
    /**
     * Alt text for the image
     */
    alt?: string;
    /**
     * Initials to display if no image
     */
    initials?: string;
    /**
     * Avatar size
     */
    size?: "small" | "medium" | "large" | "xlarge";
    /**
     * Avatar shape
     */
    shape?: "circle" | "square";
    /**
     * Badge configuration. Can be a simple value (string/number) or an object with full configuration
     */
    badge?: string | number | BadgeConfig;
    /**
     * Avatar className
     */
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
