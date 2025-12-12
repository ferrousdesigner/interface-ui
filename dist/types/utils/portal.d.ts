/**
 * Portal Management Utilities
 * Centralized portal container management with z-index stacking
 */
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
export declare function getPortalContainer(containerId?: string): HTMLDivElement;
/**
 * Get next z-index for stacking
 */
export declare function getNextZIndex(baseZIndex?: number): number;
/**
 * Remove portal container
 */
export declare function removePortalContainer(containerId: string): void;
/**
 * Cleanup all portal containers
 */
export declare function cleanupAllPortals(): void;
/**
 * Set z-index for a portal container
 */
export declare function setPortalZIndex(containerId: string, zIndex: number): void;
