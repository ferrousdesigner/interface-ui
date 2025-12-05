import React, { useEffect } from 'react';
import { validateRange, validatePositive } from '../../utils/validation';
import './Pagination.css';

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

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize = 5,
  onChange,
  showFirstLast = true,
  showPrevNext = true,
  className = '',
}) => {
  // Prop validation
  useEffect(() => {
    validatePositive(total, 'Pagination', 'total');
    validateRange(current, 1, total, 'Pagination', 'current');
  }, [current, total]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfSize = Math.floor(pageSize / 2);

    let start = Math.max(1, current - halfSize);
    let end = Math.min(total, current + halfSize);

    if (current <= halfSize) {
      end = Math.min(total, pageSize);
    }
    if (current >= total - halfSize) {
      start = Math.max(1, total - pageSize + 1);
    }

    if (start > 1 && showFirstLast) {
      pages.push(1);
      if (start > 2) pages.push('ellipsis-start');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total && showFirstLast) {
      if (end < total - 1) pages.push('ellipsis-end');
      pages.push(total);
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= total && page !== current) {
      onChange?.(page);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, page: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePageClick(page);
    }
  };

  const pages = getPageNumbers();

  return (
    <nav className={`pagination ${className}`} aria-label="Pagination">
      <ul className="pagination-list">
        {showPrevNext && (
          <li>
            <button
              className="pagination-button pagination-prev"
              onClick={() => handlePageClick(current - 1)}
              onKeyDown={(e) => handleKeyDown(e, current - 1)}
              disabled={current === 1}
              aria-label="Previous page"
            >
              ‹
            </button>
          </li>
        )}
        {pages.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <li key={`${page}-${index}`} className="pagination-ellipsis">
                ...
              </li>
            );
          }
          return (
            <li key={page}>
              <button
                className={`pagination-button ${page === current ? 'active' : ''}`}
                onClick={() => handlePageClick(page)}
                onKeyDown={(e) => handleKeyDown(e, page)}
                aria-label={`Page ${page}`}
                aria-current={page === current ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}
        {showPrevNext && (
          <li>
            <button
              className="pagination-button pagination-next"
              onClick={() => handlePageClick(current + 1)}
              onKeyDown={(e) => handleKeyDown(e, current + 1)}
              disabled={current === total}
              aria-label="Next page"
            >
              ›
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

