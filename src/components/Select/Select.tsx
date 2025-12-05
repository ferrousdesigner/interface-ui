import React, { useState, useRef, useEffect } from 'react';
import { validateArrayStructure, validateValueInOptions } from '../../utils/validation';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * The label for the select field
   */
  label?: string;
  /**
   * Options for the select
   */
  options: SelectOption[];
  /**
   * Selected value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  /**
   * Whether the select is required
   */
  required?: boolean;
  /**
   * Validation state
   */
  variant?: 'default' | 'error' | 'success' | 'warning';
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below select
   */
  helperText?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Select name attribute
   */
  name?: string;
  /**
   * Select id attribute
   */
  id?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value: controlledValue,
  defaultValue,
  placeholder = 'Select an option...',
  disabled = false,
  required = false,
  variant = 'default',
  error,
  helperText,
  onChange,
  name,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = variant === 'error' || !!error;
  const displayHelperText = error || helperText;

  const selectedOption = options.find(opt => opt.value === value);

  // Prop validation
  useEffect(() => {
    validateArrayStructure(options, ['value', 'label'], 'Select', 'options');
    if (value !== undefined && value !== '') {
      validateValueInOptions(value, options, 'Select', 'value', opt => opt.value);
    }
  }, [options, value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = options.findIndex(opt => opt.value === value);
        const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        handleSelect(options[nextIndex].value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        const currentIndex = options.findIndex(opt => opt.value === value);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        handleSelect(options[prevIndex].value);
      }
    }
  };

  return (
    <div className="select-wrapper" ref={wrapperRef}>
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}
      <div className="select-container">
        <button
          id={selectId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${selectId}-listbox`}
          disabled={disabled}
          className={`select-trigger ${variant} ${hasError ? 'error' : ''} ${disabled ? 'disabled' : ''} ${isOpen ? 'open' : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-invalid={hasError}
          aria-describedby={displayHelperText ? `${selectId}-helper` : undefined}
        >
          <span className={!selectedOption ? 'select-placeholder' : ''}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="select-arrow"></span>
        </button>
        {isOpen && (
          <ul
            id={`${selectId}-listbox`}
            role="listbox"
            className="select-dropdown"
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                className={`select-option ${option.value === value ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}`}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {displayHelperText && (
        <span
          id={`${selectId}-helper`}
          className={`select-helper ${hasError ? 'error' : ''}`}
        >
          {displayHelperText}
        </span>
      )}
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        className="select-native"
        onChange={(e) => handleSelect(e.target.value)}
        aria-hidden="true"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

