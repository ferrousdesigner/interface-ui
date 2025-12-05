import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getPortalContainer, getNextZIndex, setPortalZIndex } from '../../utils/portal';

export interface PortalProps {
  /**
   * Content to render in portal
   */
  children: React.ReactNode;
  /**
   * Container ID for the portal
   */
  containerId?: string;
  /**
   * Custom z-index
   */
  zIndex?: number;
  /**
   * Whether to disable portal (render in place)
   */
  disablePortal?: boolean;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  containerId = 'interface-ui-portal',
  zIndex,
  disablePortal = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const zIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (disablePortal) return;

    const container = getPortalContainer(containerId);
    containerRef.current = container;

    const calculatedZIndex = zIndex ?? getNextZIndex();
    zIndexRef.current = calculatedZIndex;
    setPortalZIndex(containerId, calculatedZIndex);

    // Enable pointer events on container when it has content
    container.style.pointerEvents = 'auto';

    return () => {
      // Disable pointer events when portal is unmounted
      if (container && container.children.length === 0) {
        container.style.pointerEvents = 'none';
      }
    };
  }, [containerId, zIndex, disablePortal]);

  if (disablePortal || typeof document === 'undefined') {
    return <>{children}</>;
  }

  if (!containerRef.current) {
    containerRef.current = getPortalContainer(containerId);
  }

  return createPortal(children, containerRef.current);
};


