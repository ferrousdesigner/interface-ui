import React from 'react';
import './Textarea.css';

export interface TextareaProps {
  /**
   * The label for the textarea field
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * The textarea value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Number of rows
   */
  rows?: number;
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean;
  /**
   * Whether the textarea is required
   */
  required?: boolean;
  /**
   * Whether the textarea is resizable
   */
  resizable?: boolean;
  /**
   * Maximum character count
   */
  maxLength?: number;
  /**
   * Validation state
   */
  variant?: 'default' | 'error' | 'success' | 'warning';
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below textarea
   */
  helperText?: string;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Textarea name attribute
   */
  name?: string;
  /**
   * Textarea id attribute
   */
  id?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  disabled = false,
  required = false,
  resizable = true,
  maxLength,
  variant = 'default',
  error,
  helperText,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = variant === 'error' || !!error;
  const displayHelperText = error || helperText;
  const currentLength = value?.length || 0;

  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={textareaId} className="textarea-label">
          {label}
          {required && <span className="textarea-required">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className={`textarea ${variant} ${hasError ? 'error' : ''} ${disabled ? 'disabled' : ''} ${!resizable ? 'no-resize' : ''}`}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-invalid={hasError}
        aria-describedby={displayHelperText || maxLength ? `${textareaId}-helper` : undefined}
      />
      {(displayHelperText || maxLength) && (
        <div className="textarea-footer">
          {displayHelperText && (
            <span
              id={`${textareaId}-helper`}
              className={`textarea-helper ${hasError ? 'error' : ''}`}
            >
              {displayHelperText}
            </span>
          )}
          {maxLength && (
            <span className="textarea-counter">
              {currentLength} / {maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

