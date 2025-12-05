import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * Badge variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * Badge size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether to show as dot (no text)
   */
  dot?: boolean;
  /**
   * Maximum number to show (for count badges)
   */
  max?: number;
  /**
   * Count value (if provided, shows count instead of children)
   */
  count?: number;
  /**
   * Badge className
   */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  dot = false,
  max,
  count,
  className = '',
}) => {
  const displayCount = count !== undefined && max !== undefined && count > max 
    ? `${max}+` 
    : count?.toString();

  if (dot) {
    return (
      <span className={`badge badge-dot ${variant} ${size} ${className}`} />
    );
  }

  if (count !== undefined) {
    return (
      <span className={`badge badge-count ${variant} ${size} ${className}`}>
        {displayCount}
      </span>
    );
  }

  return (
    <span className={`badge ${variant} ${size} ${className}`}>
      {children}
    </span>
  );
};

