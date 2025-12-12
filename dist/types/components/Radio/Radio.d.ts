import { default as React } from 'react';

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
export declare const Radio: React.FC<RadioProps>;
