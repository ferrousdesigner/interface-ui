import { default as React } from 'react';

export interface TooltipProps {
    /**
     * Tooltip content
     */
    title: string;
    /**
     * Child element that triggers the tooltip
     */
    children: React.ReactElement;
    /**
     * Tooltip placement
     */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Tooltip trigger
     */
    trigger?: 'hover' | 'focus' | 'click';
    /**
     * Tooltip className
     */
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
