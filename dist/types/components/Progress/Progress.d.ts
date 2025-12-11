import { default as React } from 'react';

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
    variant?: "default" | "success" | "warning" | "error";
    /**
     * Progress size
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the progress is indeterminate
     */
    indeterminate?: boolean;
    /**
     * Progress className
     */
    className?: string;
}
export declare const Progress: React.FC<ProgressProps>;
