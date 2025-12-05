import { default as React } from 'react';

export interface ChipProps {
    /**
     * Chip content
     */
    children: React.ReactNode;
    /**
     * Whether the chip is removable
     */
    removable?: boolean;
    /**
     * Handler for remove action
     */
    onRemove?: () => void;
    /**
     * Chip variant
     */
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    /**
     * Chip size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the chip is disabled
     */
    disabled?: boolean;
    /**
     * Chip className
     */
    className?: string;
}
export declare const Chip: React.FC<ChipProps>;
