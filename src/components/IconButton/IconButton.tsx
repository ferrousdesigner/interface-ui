import React from "react";
import "./IconButton.css";
import GlassSurface from "../GlassSurface/GlassSurface";

export interface IconButtonProps {
  /**
   * Icon element
   */
  icon: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "ghost";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Aria label for accessibility
   */
  "aria-label": string;
  /**
   * IconButton className
   */
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  "aria-label": ariaLabel,
  className = "",
}) => {
  return (
    <GlassSurface hugWidth={false} width="40px" height={40}>
      <button
        className={`icon-button ${variant} ${size} ${
          disabled ? "disabled" : ""
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <span className="icon-button__icon">{icon}</span>
      </button>
    </GlassSurface>
  );
};
