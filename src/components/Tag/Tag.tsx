import React from 'react';
import './Tag.css';

export interface TagProps {
  /**
   * Tag content
   */
  children: React.ReactNode;
  /**
   * Tag variant
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  /**
   * Tag size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Tag className
   */
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  return (
    <span className={`tag ${variant} ${size} ${className}`}>
      {children}
    </span>
  );
};

