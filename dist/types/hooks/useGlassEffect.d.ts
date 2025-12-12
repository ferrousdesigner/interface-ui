export interface UseGlassEffectOptions {
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
}
export interface UseGlassEffectReturn {
    filterId: string;
    containerRef: React.RefObject<HTMLDivElement>;
    filterJSX: React.ReactNode;
    className: string;
    style: React.CSSProperties;
}
export declare const useGlassEffect: (options?: UseGlassEffectOptions) => UseGlassEffectReturn;
