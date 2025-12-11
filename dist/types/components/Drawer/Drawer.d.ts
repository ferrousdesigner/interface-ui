import { default as React } from 'react';

export interface DrawerProps {
    /**
     * Whether the drawer is open
     */
    open: boolean;
    /**
     * Drawer content
     */
    children: React.ReactNode;
    /**
     * Drawer title
     */
    title?: string;
    /**
     * Drawer placement
     */
    placement?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Drawer width (for left/right) or height (for top/bottom)
     */
    size?: string | number;
    /**
     * Whether to show close button
     */
    closable?: boolean;
    /**
     * Close handler
     */
    onClose?: () => void;
    /**
     * Whether clicking mask closes drawer
     */
    maskClosable?: boolean;
    /**
     * Drawer className
     */
    className?: string;
}
export declare const Drawer: React.FC<DrawerProps>;
