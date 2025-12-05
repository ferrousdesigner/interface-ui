import React, { useState, useRef, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import { validateRequired, validateReactElement } from '../../utils/validation';
import './Tooltip.css';

export interface TooltipProps {
  /**
   * Tooltip content
   */
  title: string;
  /**
   * Child element that triggers the tooltip
   */
  children: React.ReactElement;
  /**
   * Tooltip placement
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Tooltip trigger
   */
  trigger?: 'hover' | 'focus' | 'click';
  /**
   * Tooltip className
   */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'top',
  trigger = 'hover',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Prop validation
  useEffect(() => {
    validateRequired(title, 'Tooltip', 'title');
    validateReactElement(children, 'Tooltip', 'children');
  }, [title, children]);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + 8;
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + scrollX + 8;
        break;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isVisible, placement]);

  const handleShow = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsVisible(!isVisible);
    }
  };

  const triggerProps: any = {
    ref: triggerRef,
  };

  if (trigger === 'hover') {
    triggerProps.onMouseEnter = handleShow;
    triggerProps.onMouseLeave = handleHide;
  } else if (trigger === 'focus') {
    triggerProps.onFocus = handleShow;
    triggerProps.onBlur = handleHide;
  } else if (trigger === 'click') {
    triggerProps.onClick = handleClick;
  }

  const clonedChild = React.cloneElement(children, triggerProps);

  return (
    <>
      {clonedChild}
      {isVisible && (
        <Portal containerId="interface-ui-tooltip" zIndex={1070}>
          <div
            ref={tooltipRef}
            className={`tooltip tooltip-${placement} ${className}`}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            role="tooltip"
          >
            {title}
          </div>
        </Portal>
      )}
    </>
  );
};

