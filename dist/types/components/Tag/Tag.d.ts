import { default as React } from 'react';

export interface TagProps {
    /**
     * Tag content
     */
    children: React.ReactNode;
    /**
     * Tag variant
     */
    variant?: "default" | "primary" | "secondary" | "success" | "error" | "warning";
    /**
     * Tag size
     */
    size?: "small" | "medium" | "large";
    /**
     * Tag className
     */
    className?: string;
}
export declare const Tag: React.FC<TagProps>;
