import { default as React } from 'react';

export interface TextareaProps {
    /**
     * The label for the textarea field
     */
    label?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * The textarea value (controlled)
     */
    value?: string;
    /**
     * Default value (uncontrolled)
     */
    defaultValue?: string;
    /**
     * Number of rows
     */
    rows?: number;
    /**
     * Whether the textarea is disabled
     */
    disabled?: boolean;
    /**
     * Whether the textarea is required
     */
    required?: boolean;
    /**
     * Whether the textarea is resizable
     */
    resizable?: boolean;
    /**
     * Maximum character count
     */
    maxLength?: number;
    /**
     * Validation state
     */
    variant?: "default" | "error" | "success" | "warning";
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Helper text to display below textarea
     */
    helperText?: string;
    /**
     * Change handler
     */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Blur handler
     */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Focus handler
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Textarea name attribute
     */
    name?: string;
    /**
     * Textarea id attribute
     */
    id?: string;
    /**
     * Width of the GlassSurface wrapper
     */
    width?: number | string;
}
export declare const Textarea: React.FC<TextareaProps>;
