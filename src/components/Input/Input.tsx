import React from "react";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Input.css";

export interface InputProps {
  /**
   * The label for the input field
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * The input value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Input type
   */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Validation state
   */
  variant?: "default" | "error" | "success" | "warning";
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below input
   */
  helperText?: string;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Input name attribute
   */
  name?: string;
  /**
   * Input id attribute
   */
  id?: string;
  /**
   * Width of the GlassSurface wrapper
   */
  width?: number | string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  type = "text",
  disabled = false,
  required = false,
  variant = "default",
  error,
  helperText,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  width,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = variant === "error" || !!error;
  const displayHelperText = error || helperText;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <GlassSurface hugWidth={!width} width={width} height={50}>
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`input ${variant} ${hasError ? "error" : ""} ${
            disabled ? "disabled" : ""
          }`}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-invalid={hasError}
          aria-describedby={displayHelperText ? `${inputId}-helper` : undefined}
        />
      </GlassSurface>
      {displayHelperText && (
        <span
          id={`${inputId}-helper`}
          className={`input-helper ${hasError ? "error" : ""}`}
        >
          {displayHelperText}
        </span>
      )}
    </div>
  );
};
