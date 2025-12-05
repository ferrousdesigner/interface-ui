import { default as React } from 'react';

export interface PaginationProps {
    /**
     * Current page (1-indexed)
     */
    current: number;
    /**
     * Total number of pages
     */
    total: number;
    /**
     * Number of pages to show on each side of current page
     */
    pageSize?: number;
    /**
     * Change handler
     */
    onChange?: (page: number) => void;
    /**
     * Whether to show first/last page buttons
     */
    showFirstLast?: boolean;
    /**
     * Whether to show prev/next buttons
     */
    showPrevNext?: boolean;
    /**
     * Pagination className
     */
    className?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
