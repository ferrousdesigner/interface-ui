import { default as React } from 'react';

export interface TabItem {
    key: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    /**
     * Tab items
     */
    items: TabItem[];
    /**
     * Default active tab key
     */
    defaultActiveKey?: string;
    /**
     * Controlled active tab key
     */
    activeKey?: string;
    /**
     * Change handler
     */
    onChange?: (key: string) => void;
    /**
     * Tabs className
     */
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
