import React from "react";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Button.css";

export interface ButtonProps {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * The variant of the button
   */
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <GlassSurface
      borderRadius={999}
      height={40}
      hugWidth
      className="button-wrapper"
    >
      <button className={`button ${variant}`} onClick={onClick}>
        {children}
      </button>
    </GlassSurface>
  );
};
