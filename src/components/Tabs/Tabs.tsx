import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import {
  validateArrayStructure,
  validateUniqueKeys,
} from "../../utils/validation";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Tabs.css";

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
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
  className = "",
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || items[0]?.key || ""
  );
  const isControlled = controlledActiveKey !== undefined;
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey;

  const tabsHeaderRef = useRef<HTMLDivElement>(null);
  const glassSurfaceRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [isAnimating, setIsAnimating] = useState(false);
  const isUserInitiatedChange = useRef(false);

  const updateGlassSurfacePosition = useCallback(
    (targetKey: string, animate: boolean = true) => {
      const targetButton = tabButtonRefs.current.get(targetKey);
      const glassSurface = glassSurfaceRef.current;
      const header = tabsHeaderRef.current;

      if (!targetButton || !glassSurface || !header) return;

      const headerRect = header.getBoundingClientRect();
      const buttonRect = targetButton.getBoundingClientRect();

      // Calculate position relative to header
      const left = buttonRect.left - headerRect.left;
      const top = buttonRect.top - headerRect.top;
      const width = buttonRect.width;
      const height = buttonRect.height;

      if (animate && !isAnimating) {
        setIsAnimating(true);
        gsap.to(glassSurface, {
          x: left,
          y: top,
          width: width,
          height: height,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimating(false);
          },
        });
      } else {
        gsap.set(glassSurface, {
          x: left,
          y: top,
          width: width,
          height: height,
        });
      }
    },
    [isAnimating]
  );

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled || isAnimating) return;

    // Mark as user-initiated change to prevent useEffect from interfering
    isUserInitiatedChange.current = true;

    // Update state first
    if (!isControlled) {
      setInternalActiveKey(key);
    }
    onChange?.(key);

    // Immediately start animation to prevent flash
    // Use requestAnimationFrame to ensure DOM is ready but start animation right away
    requestAnimationFrame(() => {
      updateGlassSurfacePosition(key, true);
      // Reset flag after animation completes
      setTimeout(() => {
        isUserInitiatedChange.current = false;
      }, 350); // Slightly longer than animation duration (300ms)
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    key: string,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabClick(key);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      if (!items[nextIndex].disabled) {
        handleTabClick(items[nextIndex].key);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      if (!items[prevIndex].disabled) {
        handleTabClick(items[prevIndex].key);
      }
    }
  };

  // Prop validation
  useEffect(() => {
    validateArrayStructure(items, ["key", "label", "content"], "Tabs", "items");
    validateUniqueKeys(items, (item) => item.key, "Tabs", "items");
  }, [items]);

  // Update glass surface position when activeKey changes or items change
  useEffect(() => {
    if (
      activeKey &&
      tabButtonRefs.current.size > 0 &&
      !isUserInitiatedChange.current
    ) {
      // Use double requestAnimationFrame to ensure DOM is ready and layout is complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          updateGlassSurfacePosition(activeKey, false);
        });
      });
    }
  }, [activeKey, items.length, updateGlassSurfacePosition]);

  const activeTab = items.find((item) => item.key === activeKey);

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-header" ref={tabsHeaderRef} role="tablist">
        {/* Animated GlassSurface indicator */}
        {activeKey && (
          <div ref={glassSurfaceRef} className="tab-glass-surface-wrapper">
            <GlassSurface
              hugWidth={false}
              width="100%"
              height="100%"
              borderRadius={20}
              brightness={80}
              opacity={0.3}
              blur={8}
              className="tab-glass-surface"
            >
              <div className="tab-glass-surface-content" />
            </GlassSurface>
          </div>
        )}

        {items.map((item, index) => {
          const isActive = item.key === activeKey;

          return (
            <button
              key={item.key}
              ref={(el) => {
                if (el) {
                  tabButtonRefs.current.set(item.key, el);
                } else {
                  tabButtonRefs.current.delete(item.key);
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.key}`}
              id={`tab-${item.key}`}
              className={`tab-button ${isActive ? "active" : ""} ${
                item.disabled ? "disabled" : ""
              }`}
              onClick={() => handleTabClick(item.key, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, item.key, index)}
              disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
            >
              {item.icon && (
                <span className="tab-button__icon">{item.icon}</span>
              )}
              <span className="tab-button__label">{item.label}</span>
            </button>
          );
        })}
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
