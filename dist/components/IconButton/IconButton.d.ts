import { default as React } from 'react';

export interface IconButtonProps {
    /**
     * Icon element
     */
    icon: React.ReactNode;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'ghost';
    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Aria label for accessibility
     */
    'aria-label': string;
    /**
     * IconButton className
     */
    className?: string;
}
export declare const IconButton: React.FC<IconButtonProps>;
