import { default as React } from 'react';

export interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: "R" | "G" | "B";
    yChannel?: "R" | "G" | "B";
    mixBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | "plus-darker" | "plus-lighter";
    /**
     * If true, the component will hug its content width instead of using the width prop
     */
    hugWidth?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const GlassSurface: React.FC<GlassSurfaceProps>;
export default GlassSurface;
