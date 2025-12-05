import { default as React } from 'react';

export interface SliderProps {
    /**
     * The label for the slider
     */
    label?: string;
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value
     */
    max?: number;
    /**
     * Step value
     */
    step?: number;
    /**
     * Current value (controlled)
     */
    value?: number;
    /**
     * Default value (uncontrolled)
     */
    defaultValue?: number;
    /**
     * Whether the slider is disabled
     */
    disabled?: boolean;
    /**
     * Whether to show the value
     */
    showValue?: boolean;
    /**
     * Change handler
     */
    onChange?: (value: number) => void;
    /**
     * Slider name attribute
     */
    name?: string;
    /**
     * Slider id attribute
     */
    id?: string;
}
export declare const Slider: React.FC<SliderProps>;
