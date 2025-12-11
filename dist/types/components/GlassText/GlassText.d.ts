import { default as React } from 'react';

export interface GlassTextProps {
    children: React.ReactNode;
    fontSize?: string | number;
    fontWeight?: string | number;
    fontFamily?: string;
    fontStyle?: "normal" | "italic" | "oblique";
    color?: string;
    blur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowBlur?: number;
    shadowOpacity?: number;
    strokeWidth?: number;
    strokeOpacity?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    enableFilter?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const GlassText: React.FC<GlassTextProps>;
export default GlassText;
