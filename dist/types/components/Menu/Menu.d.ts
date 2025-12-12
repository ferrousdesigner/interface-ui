import { default as React } from 'react';

export interface MenuItem {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    divider?: boolean;
}
export interface MenuProps {
    /**
     * Menu items
     */
    items: MenuItem[];
    /**
     * Selected key
     */
    selectedKey?: string;
    /**
     * Click handler
     */
    onSelect?: (key: string) => void;
    /**
     * Menu className
     */
    className?: string;
}
export declare const Menu: React.FC<MenuProps>;
