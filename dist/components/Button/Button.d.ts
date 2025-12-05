import { default as React } from 'react';

export interface ButtonProps {
    /**
     * The content of the button
     */
    children: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * The variant of the button
     */
    variant?: 'primary' | 'secondary';
}
export declare const Button: React.FC<ButtonProps>;
