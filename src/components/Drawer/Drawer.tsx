import React, { useEffect, useRef } from 'react';
import { Portal } from '../Portal/Portal';
import { validateSize, validateRequired } from '../../utils/validation';
import './Drawer.css';

export interface DrawerProps {
  /**
   * Whether the drawer is open
   */
  open: boolean;
  /**
   * Drawer content
   */
  children: React.ReactNode;
  /**
   * Drawer title
   */
  title?: string;
  /**
   * Drawer placement
   */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Drawer width (for left/right) or height (for top/bottom)
   */
  size?: string | number;
  /**
   * Whether to show close button
   */
  closable?: boolean;
  /**
   * Close handler
   */
  onClose?: () => void;
  /**
   * Whether clicking mask closes drawer
   */
  maskClosable?: boolean;
  /**
   * Drawer className
   */
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  children,
  title,
  placement = 'right',
  size = 378,
  closable = true,
  onClose,
  maskClosable = true,
  className = '',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Prop validation
  useEffect(() => {
    if (open) {
      validateSize(size, 'Drawer', 'size');
      if (closable && !onClose) {
        console.warn('[Drawer] closable is true but onClose handler is not provided.');
      }
    }
  }, [open, size, closable, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
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

  const sizeStyle = typeof size === 'number' ? `${size}px` : size;
  const style: React.CSSProperties = {};
  if (placement === 'left' || placement === 'right') {
    style.width = sizeStyle;
  } else {
    style.height = sizeStyle;
  }

  const drawerContent = (
    <div className="drawer-mask" onClick={handleBackdropClick}>
      <div
        ref={drawerRef}
        className={`drawer drawer-${placement} ${className}`}
        style={style}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        {(title || closable) && (
          <div className="drawer-header">
            {title && <h2 id="drawer-title" className="drawer-title">{title}</h2>}
            {closable && (
              <button
                className="drawer-close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className="drawer-body">{children}</div>
      </div>
    </div>
  );

  return (
    <Portal containerId="interface-ui-drawer" zIndex={1050}>
      {drawerContent}
    </Portal>
  );
};

