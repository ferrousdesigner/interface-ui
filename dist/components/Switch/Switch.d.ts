import { default as React } from 'react';

export interface SwitchProps {
    /**
     * The label for the switch
     */
    label?: string;
    /**
     * Whether the switch is checked (controlled)
     */
    checked?: boolean;
    /**
     * Default checked state (uncontrolled)
     */
    defaultChecked?: boolean;
    /**
     * Whether the switch is disabled
     */
    disabled?: boolean;
    /**
     * Whether the switch is required
     */
    required?: boolean;
    /**
     * Change handler
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Switch name attribute
     */
    name?: string;
    /**
     * Switch id attribute
     */
    id?: string;
    /**
     * Switch value attribute
     */
    value?: string;
    /**
     * Size variant
     */
    size?: 'small' | 'medium' | 'large';
}
export declare const Switch: React.FC<SwitchProps>;
