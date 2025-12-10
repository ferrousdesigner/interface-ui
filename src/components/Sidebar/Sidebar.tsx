import React from "react";
import "./Sidebar.css";
import { GitBranch, Code } from "lucide-react";
import GlassSurface from "../GlassSurface/GlassSurface";

export interface SidebarProps {
  /**
   * Sidebar content items
   */
  items?: Array<{
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
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
   * Additional className
   */
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  width = "80px",
  height = "100vh",
  className = "",
}) => {
  const defaultItems: Array<{
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
  }> = items || [
    {
      icon: <GitBranch size={24} />,
      label: "Branch",
    },
    {
      icon: <Code size={24} />,
      label: "Code",
    },
    {
      icon: <Code size={24} />,
      label: "Code",
    },
  ];

  return (
    <GlassSurface
      hugWidth={true}
      height="auto"
      blur={100}
      backgroundOpacity={0.3}
      borderRadius={12}
      className={`sidebar-wrapper ${className}`}
      style={{
        position: "fixed",
        top: "50%",
        right: "var(--spacing-xl)",
        transform: "translateY(-50%)",
      }}
    >
      <div
        className={`sidebar ${className}`}
        style={{
          width,
          height: height || "calc(100vh - 2 * var(--spacing-xl))",
        }}
      >
        <div className="sidebar-content">
          {defaultItems.map((item, index) => (
            <div
              key={index}
              className="sidebar-item"
              onClick={item.onClick || undefined}
              title={item.label}
            >
              <div className="sidebar-item-icon">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassSurface>
  );
};
