import { default as React } from 'react';

export interface AccordionItem {
    key: string;
    header: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
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
}
export declare const Accordion: React.FC<AccordionProps>;
