/**
 * Portal Management Utilities
 * Centralized portal container management with z-index stacking
 */

let portalContainers: Map<string, HTMLDivElement> = new Map();
let zIndexCounter = 1000;

export interface PortalOptions {
  /**
   * Container ID for the portal
   */
  containerId?: string;
  /**
   * Custom z-index (if not provided, will be auto-calculated)
   */
  zIndex?: number;
  /**
   * Whether to append to body (default: true)
   */
  appendToBody?: boolean;
}

/**
 * Get or create a portal container
 */
export function getPortalContainer(containerId: string = 'interface-ui-portal'): HTMLDivElement {
  if (typeof document === 'undefined') {
    // SSR-safe: return a dummy element
    return {} as HTMLDivElement;
  }

  let container = portalContainers.get(containerId);
  
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.setAttribute('data-portal-container', containerId);
    document.body.appendChild(container);
    portalContainers.set(containerId, container);
  }

  return container;
}

/**
 * Get next z-index for stacking
 */
export function getNextZIndex(baseZIndex?: number): number {
  if (baseZIndex !== undefined) {
    return baseZIndex;
  }
  zIndexCounter += 10;
  return zIndexCounter;
}

/**
 * Remove portal container
 */
export function removePortalContainer(containerId: string): void {
  if (typeof document === 'undefined') return;
  
  const container = portalContainers.get(containerId);
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
    portalContainers.delete(containerId);
  }
}

/**
 * Cleanup all portal containers
 */
export function cleanupAllPortals(): void {
  if (typeof document === 'undefined') return;
  
  portalContainers.forEach((container, id) => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });
  portalContainers.clear();
  zIndexCounter = 1000;
}

/**
 * Set z-index for a portal container
 */
export function setPortalZIndex(containerId: string, zIndex: number): void {
  const container = portalContainers.get(containerId);
  if (container) {
    container.style.zIndex = zIndex.toString();
  }
}



