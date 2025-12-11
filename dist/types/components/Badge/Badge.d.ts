import { default as React } from 'react';

export interface BadgeProps {
    /**
     * Badge content
     */
    children: React.ReactNode;
    /**
     * Badge variant
     */
    variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
    /**
     * Badge size
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether to show as dot (no text)
     */
    dot?: boolean;
    /**
     * Maximum number to show (for count badges)
     */
    max?: number;
    /**
     * Count value (if provided, shows count instead of children)
     */
    count?: number;
    /**
     * Badge className
     */
    className?: string;
}
export declare const Badge: React.FC<BadgeProps>;
