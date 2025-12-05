import React, { useState, useEffect } from 'react';
import { validateArrayStructure, validateUniqueKeys } from '../../utils/validation';
import './Tabs.css';

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Tab items
   */
  items: TabItem[];
  /**
   * Default active tab key
   */
  defaultActiveKey?: string;
  /**
   * Controlled active tab key
   */
  activeKey?: string;
  /**
   * Change handler
   */
  onChange?: (key: string) => void;
  /**
   * Tabs className
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  className = '',
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || items[0]?.key || ''
  );
  const isControlled = controlledActiveKey !== undefined;
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey;

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  const handleKeyDown = (e: React.KeyboardEvent, key: string, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(key);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      if (!items[nextIndex].disabled) {
        handleTabClick(items[nextIndex].key);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      if (!items[prevIndex].disabled) {
        handleTabClick(items[prevIndex].key);
      }
    }
  };

  // Prop validation
  useEffect(() => {
    validateArrayStructure(items, ['key', 'label', 'content'], 'Tabs', 'items');
    validateUniqueKeys(items, item => item.key, 'Tabs', 'items');
  }, [items]);

  const activeTab = items.find((item) => item.key === activeKey);

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-header" role="tablist">
        {items.map((item, index) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={item.key === activeKey}
            aria-controls={`tabpanel-${item.key}`}
            id={`tab-${item.key}`}
            className={`tab-button ${item.key === activeKey ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
            onClick={() => handleTabClick(item.key, item.disabled)}
            onKeyDown={(e) => handleKeyDown(e, item.key, index)}
            disabled={item.disabled}
            tabIndex={item.key === activeKey ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeTab && (
        <div
          id={`tabpanel-${activeTab.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.key}`}
          className="tabs-content"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};

