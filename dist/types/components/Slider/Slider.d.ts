import { default as React } from 'react';

export interface SliderProps {
    /**
     * Initial value (0-100)
     */
    value?: number;
    /**
     * Change handler
     */
    onChange?: (value: number) => void;
    /**
     * Slider id attribute
     */
    id?: string;
}
export declare const Slider: React.FC<SliderProps>;
