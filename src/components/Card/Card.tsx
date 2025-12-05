import React from "react";
import "./Card.css";

export interface CardProps {
  /**
   * Card header content
   */
  header?: React.ReactNode;
  /**
   * Card body content
   */
  children: React.ReactNode;
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  /**
   * Card image URL
   */
  image?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Whether the card is hoverable
   */
  hoverable?: boolean;
  /**
   * Whether the card is clickable
   */
  clickable?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Card variant
   */
  variant?: "default" | "outlined" | "elevated";
  /**
   * Card className
   */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  header,
  children,
  footer,
  image,
  imageAlt,
  hoverable = false,
  clickable = false,
  onClick,
  variant = "default",
  className = "",
}) => {
  return (
    <div
      className={`card ${variant} ${hoverable ? "hoverable" : ""} ${
        clickable ? "clickable" : ""
      } ${image ? "has-image" : ""} gl ${className}`}
      onClick={clickable ? onClick : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {image && <img src={image} alt={imageAlt || ""} className="card-image" />}
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
