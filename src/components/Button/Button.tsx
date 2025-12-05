import React from 'react';
import './Button.css';

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
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      className={`button ${variant} gl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}; 