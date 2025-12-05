import { default as React } from 'react';

export interface AlertProps {
    /**
     * Alert content
     */
    children: React.ReactNode;
    /**
     * Alert variant
     */
    variant?: 'info' | 'success' | 'warning' | 'error';
    /**
     * Alert title
     */
    title?: string;
    /**
     * Whether the alert is dismissible
     */
    dismissible?: boolean;
    /**
     * Handler for dismiss action
     */
    onDismiss?: () => void;
    /**
     * Alert className
     */
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
