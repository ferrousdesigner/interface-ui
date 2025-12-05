import { default as React } from 'react';
import { ModalProps } from '../Modal/Modal';

export interface DialogProps extends Omit<ModalProps, 'children'> {
    /**
     * Dialog content
     */
    children: React.ReactNode;
    /**
     * Confirm button text
     */
    okText?: string;
    /**
     * Cancel button text
     */
    cancelText?: string;
    /**
     * Whether to show cancel button
     */
    showCancel?: boolean;
    /**
     * Confirm handler
     */
    onOk?: () => void;
    /**
     * Cancel handler
     */
    onCancel?: () => void;
}
export declare const Dialog: React.FC<DialogProps>;
