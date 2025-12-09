import React from "react";
import "./Menu.css";
import GlassSurface from "../GlassSurface/GlassSurface";

export interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps {
  /**
   * Menu items
   */
  items: MenuItem[];
  /**
   * Selected key
   */
  selectedKey?: string;
  /**
   * Click handler
   */
  onSelect?: (key: string) => void;
  /**
   * Menu className
   */
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  selectedKey,
  onSelect,
  className = "",
}) => {
  const handleClick = (key: string, disabled?: boolean) => {
    if (disabled) return;
    onSelect?.(key);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    key: string,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(key);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      const nextItem = items[nextIndex];
      if (!nextItem.disabled && !nextItem.divider) {
        (
          document.getElementById(`menu-item-${nextItem.key}`) as HTMLElement
        )?.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      const prevItem = items[prevIndex];
      if (!prevItem.disabled && !prevItem.divider) {
        (
          document.getElementById(`menu-item-${prevItem.key}`) as HTMLElement
        )?.focus();
      }
    }
  };

  return (
    <GlassSurface
      hugWidth={true}
      height="auto"
      blur={50}
      borderRadius={12}
      className={className}
    >
      <ul className="menu" role="menu">
        {items.map((item, index) => {
          if (item.divider) {
            return (
              <li key={item.key} className="menu-divider" role="separator" />
            );
          }
          return (
            <li key={item.key} role="none">
              <button
                id={`menu-item-${item.key}`}
                role="menuitem"
                className={`menu-item ${
                  selectedKey === item.key ? "selected" : ""
                } ${item.disabled ? "disabled" : ""}`}
                onClick={() => handleClick(item.key, item.disabled)}
                onKeyDown={(e) => handleKeyDown(e, item.key, index)}
                disabled={item.disabled}
                tabIndex={item.disabled ? -1 : 0}
              >
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                <span className="menu-label">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </GlassSurface>
  );
};
