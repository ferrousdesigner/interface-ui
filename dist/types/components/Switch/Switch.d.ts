import { default as React } from 'react';

export interface SwitchProps {
    /**
     * Accessible label for the toggle.
     */
    label?: string;
    /**
     * Controlled checked state.
     */
    checked?: boolean;
    /**
     * Uncontrolled default checked state.
     */
    defaultChecked?: boolean;
    /**
     * Disable the control.
     */
    disabled?: boolean;
    /**
     * Whether the switch is required (for form usage).
     */
    required?: boolean;
    /**
     * Change handler (fires with user interactions).
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Input name (for synthetic events).
     */
    name?: string;
    /**
     * Optional id for the toggle button.
     */
    id?: string;
    /**
     * Optional value for synthetic events.
     */
    value?: string;
}
export declare const Switch: React.FC<SwitchProps>;
