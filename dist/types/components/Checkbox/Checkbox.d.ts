import { default as React } from 'react';

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
export declare const Checkbox: React.FC<CheckboxProps>;
