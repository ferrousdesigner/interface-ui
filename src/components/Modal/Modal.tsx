import React, { useEffect, useRef } from 'react';
import { Portal } from '../Portal/Portal';
import { validateSize, validateRequired } from '../../utils/validation';
import './Modal.css';

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

export const Modal: React.FC<ModalProps> = ({
  open,
  children,
  title,
  closable = true,
  onClose,
  maskClosable = true,
  width = 520,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Prop validation
  useEffect(() => {
    if (open) {
      validateSize(width, 'Modal', 'width');
      if (closable && !onClose) {
        console.warn('[Modal] closable is true but onClose handler is not provided.');
      }
    }
  }, [open, width, closable, onClose]);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      
      // Focus trap
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => {
        document.removeEventListener('keydown', handleTab);
        document.body.style.overflow = '';
        previousFocusRef.current?.focus();
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && closable) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closable, onClose]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (maskClosable && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const modalContent = (
    <div className="modal-mask" onClick={handleBackdropClick}>
      <div
        ref={modalRef}
        className={`modal ${className}`}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {(title || closable) && (
          <div className="modal-header">
            {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
            {closable && (
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return (
    <Portal containerId="interface-ui-modal" zIndex={1050}>
      {modalContent}
    </Portal>
  );
};

