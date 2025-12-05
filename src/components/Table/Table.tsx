import React, { useEffect } from 'react';
import { validateTableStructure } from '../../utils/validation';
import './Table.css';

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

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  striped = false,
  hoverable = false,
  className = '',
}) => {
  // Prop validation
  useEffect(() => {
    validateTableStructure(columns, data, 'Table');
  }, [columns, data]);

  return (
    <div className={`table-wrapper ${className}`}>
      <table className={`table ${striped ? 'striped' : ''} ${hoverable ? 'hoverable' : ''}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

