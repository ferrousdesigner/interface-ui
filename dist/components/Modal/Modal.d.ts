import { default as React } from 'react';

export interface ModalProps {
    /**
     * Whether the modal is open
     */
    open: boolean;
    /**
     * Modal content
     */
    children: React.ReactNode;
    /**
     * Modal title
     */
    title?: string;
    /**
     * Whether to show close button
     */
    closable?: boolean;
    /**
     * Close handler
     */
    onClose?: () => void;
    /**
     * Whether clicking backdrop closes modal
     */
    maskClosable?: boolean;
    /**
     * Modal width
     */
    width?: string | number;
    /**
     * Modal className
     */
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
