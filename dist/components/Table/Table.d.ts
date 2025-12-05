import { default as React } from 'react';

export interface TableColumn {
    key: string;
    header: string;
    render?: (value: any, row: any) => React.ReactNode;
}
export interface TableProps {
    /**
     * Table columns configuration
     */
    columns: TableColumn[];
    /**
     * Table data rows
     */
    data: Record<string, any>[];
    /**
     * Whether the table is striped
     */
    striped?: boolean;
    /**
     * Whether the table is hoverable
     */
    hoverable?: boolean;
    /**
     * Table className
     */
    className?: string;
}
export declare const Table: React.FC<TableProps>;
