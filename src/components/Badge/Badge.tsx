import React from "react";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Badge.css";

export interface BadgeProps {
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * Badge variant
   */
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  /**
   * Badge size
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether to show as dot (no text)
   */
  dot?: boolean;
  /**
   * Maximum number to show (for count badges)
   */
  max?: number;
  /**
   * Count value (if provided, shows count instead of children)
   */
  count?: number;
  /**
   * Badge className
   */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "medium",
  dot = false,
  max,
  count,
  className = "",
}) => {
  const displayCount =
    count !== undefined && max !== undefined && count > max
      ? `${max}+`
      : count?.toString();

  // Size-based dimensions for GlassSurface wrapper
  const getSizeDimensions = () => {
    if (dot) {
      // Dot badge dimensions
      switch (size) {
        case "small":
          return { width: 6, height: 6 };
        case "large":
          return { width: 10, height: 10 };
        default: // medium - typically 8px based on spacing-sm
          return { width: 8, height: 8 };
      }
    }

    // Regular badge dimensions - height matches badge height, width is auto
    switch (size) {
      case "small":
        return { width: "auto", height: 18 };
      case "large":
        return { width: "auto", height: 24 };
      default: // medium
        return { width: "auto", height: 20 };
    }
  };

  const dimensions = getSizeDimensions();

  if (dot) {
    return (
      <GlassSurface
        borderRadius={999}
        className="badge-wrapper"
        width={dimensions.width}
        height={dimensions.height}
      >
        <span className={`badge badge-dot ${variant} ${size} ${className}`} />
      </GlassSurface>
    );
  }

  if (count !== undefined) {
    return (
      <GlassSurface
        borderRadius={999}
        className="badge-wrapper"
        width={dimensions.width}
        height={dimensions.height}
      >
        <span className={`badge badge-count ${variant} ${size} ${className}`}>
          {displayCount}
        </span>
      </GlassSurface>
    );
  }

  return (
    <GlassSurface
      borderRadius={999}
      className="badge-wrapper"
      width={dimensions.width}
      height={dimensions.height}
    >
      <span className={`badge ${variant} ${size} ${className}`}>
        {children}
      </span>
    </GlassSurface>
  );
};
