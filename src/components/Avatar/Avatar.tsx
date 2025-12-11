import React, { useState } from "react";
import "./Avatar.css";
import GlassSurface from "../GlassSurface/GlassSurface";

export interface BadgeConfig {
  /**
   * Badge value to display
   */
  value?: string | number;
  /**
   * Badge variant/color
   */
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  /**
   * Badge size (defaults to avatar size)
   */
  size?: "small" | "medium" | "large";
  /**
   * Custom background color
   */
  color?: string;
}

export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Initials to display if no image
   */
  initials?: string;
  /**
   * Avatar size
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Avatar shape
   */
  shape?: "circle" | "square";
  /**
   * Badge configuration. Can be a simple value (string/number) or an object with full configuration
   */
  badge?: string | number | BadgeConfig;
  /**
   * Avatar className
   */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = "medium",
  shape = "circle",
  badge,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  const getSizeDimensions = () => {
    const sizeMap = {
      small: 32,
      medium: 40,
      large: 56,
      xlarge: 80,
    };
    return sizeMap[size];
  };

  const getBorderRadius = (dimension: number) => {
    if (shape === "circle") {
      return dimension / 2;
    }
    // For square shape, use a moderate border radius (8px is a common value)
    return 8;
  };

  const getInitials = () => {
    if (initials) return initials;
    if (alt) {
      const words = alt.trim().split(/\s+/);
      if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
      }
      return words[0][0].toUpperCase();
    }
    return "?";
  };

  const showFallback = !src || imageError;
  const dimension = getSizeDimensions();
  const borderRadius = getBorderRadius(dimension);

  // Parse badge configuration
  const getBadgeConfig = (): BadgeConfig | null => {
    if (badge === undefined || badge === null) {
      return null;
    }

    // Simple value (string or number)
    if (typeof badge === "string" || typeof badge === "number") {
      // Don't show badge for empty string or 0
      if (badge === "" || badge === 0) {
        return null;
      }
      return {
        value: badge,
        variant: "error",
      };
    }

    // Full configuration object
    const value = badge.value;
    // Don't show badge if value is empty, undefined, null, or 0
    if (value === undefined || value === null || value === "" || value === 0) {
      return null;
    }

    return {
      value: value,
      variant: badge.variant ?? "error",
      size: badge.size,
      color: badge.color,
    };
  };

  const badgeConfig = getBadgeConfig();
  const shouldShowBadge =
    badgeConfig !== null && badgeConfig.value !== undefined;

  const formatBadgeValue = () => {
    if (!badgeConfig || badgeConfig.value === undefined) return "";
    const value = badgeConfig.value;
    if (typeof value === "number" && value > 99) {
      return "99+";
    }
    return value.toString();
  };

  const getBadgeSize = () => {
    if (badgeConfig?.size) {
      return badgeConfig.size;
    }
    // Map avatar size to badge size
    if (size === "small") return "small";
    if (size === "xlarge") return "large";
    return "medium";
  };

  return (
    <div
      className={`avatar-container ${
        shouldShowBadge ? "avatar-container-with-badge" : ""
      }`}
    >
      <GlassSurface
        height={dimension}
        width={dimension}
        borderRadius={borderRadius}
        className="slider-glass-surface"
      >
        <div className={`avatar ${size} ${shape} ${className}`}>
          {src && !imageError && (
            <img
              src={src}
              alt={alt || "Avatar"}
              className="avatar-image"
              onError={() => setImageError(true)}
            />
          )}
          {showFallback && (
            <span className="avatar-fallback">{getInitials()}</span>
          )}
        </div>
      </GlassSurface>
      {shouldShowBadge && badgeConfig && (
        <span
          className={`avatar-badge avatar-badge-${shape} avatar-badge-${getBadgeSize()} avatar-badge-${
            badgeConfig.variant
          }`}
          style={
            badgeConfig.color
              ? { backgroundColor: badgeConfig.color }
              : undefined
          }
        >
          {formatBadgeValue()}
        </span>
      )}
    </div>
  );
};
