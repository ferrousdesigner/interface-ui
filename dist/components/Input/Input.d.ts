import { default as React } from 'react';

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
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
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
    variant?: 'default' | 'error' | 'success' | 'warning';
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
}
export declare const Input: React.FC<InputProps>;
