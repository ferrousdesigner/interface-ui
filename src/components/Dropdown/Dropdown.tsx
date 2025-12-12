import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import { Menu, MenuProps } from "../Menu/Menu";

export interface DropdownProps extends Omit<MenuProps, "className"> {
  /**
   * Trigger element or text
   */
  trigger: React.ReactNode;
  /**
   * Dropdown placement
   */
  placement?: "bottom" | "top" | "left" | "right";
  /**
   * Dropdown className
   */
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  selectedKey,
  onSelect,
  placement = "bottom",
  className = "",
  occludeContent = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (key: string) => {
    onSelect?.(key);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`} ref={wrapperRef}>
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="dropdown-trigger-content">{trigger}</span>
        <span className="dropdown-trigger-chevron">
          <svg
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
        </span>
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${placement}`}>
          <Menu
            items={items}
            selectedKey={selectedKey}
            onSelect={handleSelect}
            occludeContent={occludeContent}
          />
        </div>
      )}
    </div>
  );
};
