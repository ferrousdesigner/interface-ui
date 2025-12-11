import { default as React } from 'react';

export interface ListItem {
    key: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
export interface ListProps {
    /**
     * List items
     */
    items: ListItem[];
    /**
     * List size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether list items are clickable
     */
    clickable?: boolean;
    /**
     * List className
     */
    className?: string;
}
export declare const List: React.FC<ListProps>;
