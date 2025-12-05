import { default as React } from 'react';

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
export declare const Select: React.FC<SelectProps>;
