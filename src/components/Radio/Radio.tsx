import React from 'react';
import './Radio.css';

export interface RadioProps {
  /**
   * The label for the radio button
   */
  label?: string;
  /**
   * Whether the radio is checked (controlled)
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;
  /**
   * Whether the radio is disabled
   */
  disabled?: boolean;
  /**
   * Whether the radio is required
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Radio name attribute (must be same for group)
   */
  name?: string;
  /**
   * Radio id attribute
   */
  id?: string;
  /**
   * Radio value attribute
   */
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  required = false,
  onChange,
  name,
  id,
  value,
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="radio-wrapper">
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className="radio-input"
        aria-checked={checked}
        aria-required={required}
      />
      {label && (
        <label htmlFor={radioId} className={`radio-label ${disabled ? 'disabled' : ''}`}>
          {label}
          {required && <span className="radio-required">*</span>}
        </label>
      )}
    </div>
  );
};

