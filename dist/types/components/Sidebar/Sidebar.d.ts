import { default as React } from 'react';

export interface SidebarProps {
    /**
     * Sidebar content items
     */
    items?: Array<{
        icon?: React.ReactNode;
        label?: string;
        onClick?: () => void;
        extenderContent?: React.ReactNode;
    }>;
    /**
     * Sidebar width
     */
    width?: string;
    /**
     * Sidebar height
     */
    height?: string;
    /**
     * Extender width when expanded
     */
    extenderWidth?: string;
    /**
     * Additional className
     */
    className?: string;
    /**
     * Callback when sidebar opens/closes
     */
    onToggle?: (isOpen: boolean, extenderWidth?: string) => void;
}
export declare const Sidebar: React.FC<SidebarProps>;
