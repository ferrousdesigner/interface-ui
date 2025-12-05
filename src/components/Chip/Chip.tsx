import React from "react";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Chip.css";

export interface ChipProps {
  /**
   * Chip content
   */
  children: React.ReactNode;
  /**
   * Whether the chip is removable
   */
  removable?: boolean;
  /**
   * Handler for remove action
   */
  onRemove?: () => void;
  /**
   * Chip variant
   */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  /**
   * Chip size
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether the chip is disabled
   */
  disabled?: boolean;
  /**
   * Chip className
   */
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  removable = false,
  onRemove,
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRemove(e as any);
    }
  };

  // Get height based on size
  const chipHeight = size === "small" ? 24 : size === "medium" ? 28 : 32;

  return (
    <GlassSurface
      height={chipHeight}
      hugWidth={true}
      borderRadius={999}
      className={className}
    >
      <span className={`chip ${variant} ${size} ${disabled ? "disabled" : ""}`}>
        <span className="chip-content">{children}</span>
        {removable && (
          <button
            type="button"
            className="chip-remove"
            onClick={handleRemove}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-label="Remove"
          >
            ×
          </button>
        )}
      </span>
    </GlassSurface>
  );
};
