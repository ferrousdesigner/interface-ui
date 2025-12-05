import React, { useState, useEffect } from 'react';
import { validateArrayStructure, validateUniqueKeys } from '../../utils/validation';
import './Accordion.css';

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

export const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  defaultOpenKeys = [],
  openKeys: controlledOpenKeys,
  onChange,
  className = '',
}) => {
  const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys);
  const isControlled = controlledOpenKeys !== undefined;
  const openKeys = isControlled ? controlledOpenKeys : internalOpenKeys;

  const handleToggle = (key: string, disabled?: boolean) => {
    if (disabled) return;
    
    let newOpenKeys: string[];
    if (openKeys.includes(key)) {
      newOpenKeys = openKeys.filter((k) => k !== key);
    } else {
      newOpenKeys = multiple ? [...openKeys, key] : [key];
    }

    if (!isControlled) {
      setInternalOpenKeys(newOpenKeys);
    }
    onChange?.(newOpenKeys);
  };

  // Prop validation
  useEffect(() => {
    validateArrayStructure(items, ['key', 'header', 'content'], 'Accordion', 'items');
    validateUniqueKeys(items, item => item.key, 'Accordion', 'items');
  }, [items]);

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(key);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openKeys.includes(item.key);
        return (
          <div key={item.key} className="accordion-item">
            <button
              className={`accordion-header ${isOpen ? 'open' : ''} ${item.disabled ? 'disabled' : ''}`}
              onClick={() => handleToggle(item.key, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, item.key)}
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.key}`}
            >
              <span className="accordion-header-content">{item.header}</span>
              <span className="accordion-arrow"></span>
            </button>
            <div
              id={`accordion-content-${item.key}`}
              className={`accordion-content ${isOpen ? 'open' : ''}`}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

