import React from 'react';
import './List.css';

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

export const List: React.FC<ListProps> = ({
  items,
  size = 'medium',
  clickable = false,
  className = '',
}) => {
  return (
    <ul className={`list ${size} ${className}`}>
      {items.map((item) => (
        <li
          key={item.key}
          className={`list-item ${clickable && item.onClick ? 'clickable' : ''} ${item.disabled ? 'disabled' : ''}`}
          onClick={item.disabled ? undefined : item.onClick}
          role={clickable && item.onClick ? 'button' : undefined}
          tabIndex={clickable && item.onClick && !item.disabled ? 0 : undefined}
        >
          {item.icon && <span className="list-icon">{item.icon}</span>}
          <span className="list-content">{item.content}</span>
        </li>
      ))}
    </ul>
  );
};

