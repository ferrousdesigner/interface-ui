import React, { useState, useRef } from "react";
import "./Sidebar.css";
import { GitBranch, X, Book, Eye } from "lucide-react";
import GlassSurface from "../GlassSurface/GlassSurface";
import {
  HistoryContent,
  DocumentationContent,
  LivePreviewContent,
} from "./SidebarContent";

export interface SidebarProps {
  /**
   * Sidebar content items
   */
  items?: Array<{
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
    extenderContent?: React.ReactNode;
  }>;
  /**
   * Sidebar width
   */
  width?: string;
  /**
   * Sidebar height
   */
  height?: string;
  /**
   * Extender width when expanded
   */
  extenderWidth?: string;
  /**
   * Additional className
   */
  className?: string;
  /**
   * Callback when sidebar opens/closes
   */
  onToggle?: (isOpen: boolean, extenderWidth?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  width = "80px",
  height = "100vh",
  extenderWidth = "300px",
  className = "",
  onToggle,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);

  const defaultItems: Array<{
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
    extenderContent?: React.ReactNode;
  }> = items || [
    {
      icon: <GitBranch size={24} />,
      label: "History",
      extenderContent: <HistoryContent />,
    },
    {
      icon: <Book size={24} />,
      label: "Documentation",
      extenderContent: <DocumentationContent />,
    },
    {
      icon: <Eye size={24} />,
      label: "Live Preview",
      extenderContent: <LivePreviewContent />,
    },
  ];

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    // Toggle extender: if clicking the same item, close it; otherwise open it
    const newActiveIndex = activeItemIndex === index ? null : index;
    setActiveItemIndex(newActiveIndex);
    // Notify parent about sidebar state change
    onToggle?.(newActiveIndex !== null, extenderWidth);
    // Call the original onClick handler if provided
    itemOnClick?.();
  };

  const activeItem =
    activeItemIndex !== null ? defaultItems[activeItemIndex] : null;

  return (
    <div className="sidebar-container">
      <GlassSurface
        hugWidth={true}
        height="auto"
        blur={100}
        backgroundOpacity={0.3}
        borderRadius={12}
        className={`sidebar-wrapper ${className}`}
      >
        <div
          ref={sidebarRef}
          className={`sidebar ${className}`}
          style={{
            width: width,
            height: height || "calc(100vh - 2 * var(--spacing-xl))",
            position: "relative",
          }}
        >
          <div ref={sidebarContentRef} className="sidebar-content">
            {defaultItems.map((item, index) => (
              <div
                key={index}
                className={`sidebar-item ${
                  activeItemIndex === index ? "active" : ""
                }`}
                onClick={() => handleItemClick(index, item.onClick)}
                title={item.label}
              >
                <div className="sidebar-item-icon">
                  {activeItemIndex === index ? <X size={24} /> : item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassSurface>

      {/* Expanded content area - positioned to the left of sidebar */}
      {activeItemIndex !== null && (
        <div className="sidebar-expanded-content-wrapper">
          <GlassSurface
            width={extenderWidth}
            height={height || "calc(100vh - 2 * var(--spacing-xl))"}
            blur={100}
            backgroundOpacity={0.3}
            borderRadius={12}
            className="sidebar-expanded-content"
          >
            <div className="sidebar-expanded-inner">
              {activeItem?.extenderContent}
            </div>
          </GlassSurface>
        </div>
      )}
    </div>
  );
};
