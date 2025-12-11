import { default as React } from 'react';

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
export declare const Portal: React.FC<PortalProps>;
