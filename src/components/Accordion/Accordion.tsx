import React, { useState, useRef } from "react";
import {
  validateArrayStructure,
  validateUniqueKeys,
} from "../../utils/validation";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Accordion.css";

export interface AccordionItem {
  key: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  content?: React.ReactNode; // For backward compatibility
  disabled?: boolean;
  onClick?: () => void;
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
  className = "",
}) => {
  const [internalOpenKeys, setInternalOpenKeys] =
    useState<string[]>(defaultOpenKeys);
  const isControlled = controlledOpenKeys !== undefined;
  const openKeys = isControlled ? controlledOpenKeys : internalOpenKeys;

  const contentRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const handleToggle = (key: string, disabled?: boolean) => {
    if (disabled) return;

    const wasOpen = openKeys.includes(key);
    let newOpenKeys: string[];
    if (wasOpen) {
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
  React.useEffect(() => {
    validateArrayStructure(items, ["key", "title"], "Accordion", "items");
    validateUniqueKeys(items, (item) => item.key, "Accordion", "items");
  }, [items]);

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(key);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openKeys.includes(item.key);
        const content = item.children || item.content;
        return (
          <GlassSurface
            key={item.key}
            hugWidth={false}
            width="100%"
            height="auto"
            borderRadius={12}
            brightness={isOpen ? 85 : 95}
            opacity={isOpen ? 0.4 : 0.1}
            blur={8}
            className={`accordion-item ${isOpen ? "accordion-item--open" : ""}`}
          >
            <div className="accordion-header-wrapper">
              <button
                className={`accordion-header ${
                  isOpen ? "accordion-header--open" : ""
                } ${item.disabled ? "accordion-header--disabled" : ""}`}
                onClick={() => {
                  handleToggle(item.key, item.disabled);
                  item.onClick?.();
                }}
                onKeyDown={(e) => handleKeyDown(e, item.key)}
                disabled={item.disabled}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.key}`}
              >
                {item.icon && (
                  <div className="accordion-header-icon">{item.icon}</div>
                )}
                <div className="accordion-header-text">
                  <span className="accordion-title">{item.title}</span>
                  {item.subtitle && (
                    <span className="accordion-subtitle">{item.subtitle}</span>
                  )}
                </div>
              </button>
              <div className="accordion-toggle-icon-wrapper">
                {isOpen ? (
                  // Plus icon that rotates 45deg to become cross
                  <svg
                    className="accordion-toggle-icon accordion-toggle-icon--open"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 2V10M2 6H10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  // Chevron down when closed
                  <svg
                    className="accordion-toggle-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {content && (
              <div
                ref={(el) => {
                  if (el) {
                    contentRefs.current.set(item.key, el);
                  } else {
                    contentRefs.current.delete(item.key);
                  }
                }}
                id={`accordion-content-${item.key}`}
                className={`accordion-content ${
                  isOpen ? "accordion-content--open" : ""
                }`}
              >
                <div className="accordion-content-inner">{content}</div>
              </div>
            )}
          </GlassSurface>
        );
      })}
    </div>
  );
};
