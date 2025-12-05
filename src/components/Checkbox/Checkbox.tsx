import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  /**
   * The label for the checkbox
   */
  label?: string;
  /**
   * Whether the checkbox is checked (controlled)
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Whether the checkbox is required
   */
  required?: boolean;
  /**
   * Indeterminate state (partially checked)
   */
  indeterminate?: boolean;
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Checkbox name attribute
   */
  name?: string;
  /**
   * Checkbox id attribute
   */
  id?: string;
  /**
   * Checkbox value attribute
   */
  value?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  required = false,
  indeterminate = false,
  onChange,
  name,
  id,
  value,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="checkbox-wrapper">
      <input
        ref={checkboxRef}
        id={checkboxId}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className="checkbox-input"
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-required={required}
      />
      {label && (
        <label htmlFor={checkboxId} className={`checkbox-label ${disabled ? 'disabled' : ''}`}>
          {label}
          {required && <span className="checkbox-required">*</span>}
        </label>
      )}
    </div>
  );
};

