import { default as React } from 'react';

export interface AccordionItem {
    key: string;
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    showSubtitle?: boolean;
    initialSubtitleShow?: boolean;
    badge?: React.ReactNode;
}
export interface AccordionProps {
    /**
     * Accordion items
     */
    items: AccordionItem[];
    /**
     * Whether multiple items can be open at once
     */
    multiple?: boolean;
    /**
     * Default open keys
     */
    defaultOpenKeys?: string[];
    /**
     * Controlled open keys
     */
    openKeys?: string[];
    /**
     * Change handler
     */
    onChange?: (openKeys: string[]) => void;
    /**
     * Accordion className
     */
    className?: string;
    /**
     * Whether to show subtitles in accordion items
     * @default true
     */
    showSubtitle?: boolean;
    /**
     * Whether to show subtitles initially when accordion is closed
     * If false, subtitles will only show when accordion is expanded
     * @default true
     */
    initialSubtitleShow?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
