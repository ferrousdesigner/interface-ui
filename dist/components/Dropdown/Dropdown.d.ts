import { default as React } from 'react';
import { MenuProps } from '../Menu/Menu';

export interface DropdownProps extends Omit<MenuProps, 'className'> {
    /**
     * Trigger element or text
     */
    trigger: React.ReactNode;
    /**
     * Dropdown placement
     */
    placement?: 'bottom' | 'top' | 'left' | 'right';
    /**
     * Dropdown className
     */
    className?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
