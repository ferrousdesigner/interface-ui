import React, { useState, useRef, useEffect } from "react";
import "./Checkbox.css";

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
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || disabled) return;

    const handleMouseDown = () => {
      setIsActive(true);
    };

    const handleMouseUp = () => {
      setTimeout(() => setIsActive(false), 150);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    wrapper.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled]);

  return (
    <div className="checkbox-wrapper">
      <div
        ref={wrapperRef}
        className={`checkbox-glass-wrapper ${isActive ? "active" : ""}`}
        data-active={isActive}
      >
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
          aria-checked={indeterminate ? "mixed" : checked}
          aria-required={required}
        />
        <div className="checkbox-glass-shadow" />
        <div className="checkbox-glass-cover" />
      </div>
      {label && (
        <label
          htmlFor={checkboxId}
          className={`checkbox-label ${disabled ? "disabled" : ""}`}
        >
          {label}
          {required && <span className="checkbox-required">*</span>}
        </label>
      )}
    </div>
  );
};
