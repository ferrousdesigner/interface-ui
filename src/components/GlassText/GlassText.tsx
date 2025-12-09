import React, { useId, useMemo } from "react";
import "./GlassText.css";

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

const GlassText: React.FC<GlassTextProps> = ({
  children,
  fontSize = "20rem",
  fontWeight = 700,
  fontFamily = "arial",
  fontStyle = "normal",
  color = "255, 255, 255",
  blur = 2,
  shadowOffsetX = 13,
  shadowOffsetY = 35,
  shadowBlur = 8,
  shadowOpacity = 0.3,
  strokeWidth = 1,
  strokeOpacity = 0.3,
  backgroundOpacity = 0.8,
  saturation = 1.5,
  distortionScale = -2,
  enableFilter = true,
  className = "",
  style = {},
}) => {
  const id = useId();
  const clipPathId = `glass-text-clip-${id}`;
  const filterId = `glass-text-filter-${id}`;

  // Extract text content from children
  const textContent = useMemo(() => {
    if (typeof children === "string") {
      return children;
    }
    if (typeof children === "number") {
      return String(children);
    }
    // For React nodes, try to extract text
    const extractText = (node: React.ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") {
        return String(node);
      }
      if (Array.isArray(node)) {
        return node.map(extractText).join("");
      }
      if (React.isValidElement(node) && node.props.children) {
        return extractText(node.props.children);
      }
      return "";
    };
    return extractText(children);
  }, [children]);

  const fontSizeValue =
    typeof fontSize === "number" ? `${fontSize}px` : fontSize;

  const containerStyle: React.CSSProperties = {
    ...style,
    "--glass-text-font-size": fontSizeValue,
    "--glass-text-font-weight": String(fontWeight),
    "--glass-text-font-family": fontFamily,
    "--glass-text-font-style": fontStyle,
    "--glass-text-color": color,
    "--glass-text-blur": `${blur}px`,
    "--glass-text-shadow-x": `${shadowOffsetX}px`,
    "--glass-text-shadow-y": `${shadowOffsetY}px`,
    "--glass-text-shadow-blur": `${shadowBlur}px`,
    "--glass-text-shadow-opacity": shadowOpacity,
    "--glass-text-stroke-width": `${strokeWidth}px`,
    "--glass-text-stroke-opacity": strokeOpacity,
    "--glass-text-bg-opacity": backgroundOpacity,
    "--glass-text-saturation": saturation,
    "--glass-text-distortion-scale": distortionScale,
    "--glass-text-filter": enableFilter ? `url(#${filterId})` : "none",
  } as React.CSSProperties;

  return (
    <div className={`glass-text-wrapper ${className}`} style={containerStyle}>
      <div className="glass-text-backdrop">
        <span className="glass-text">{children}</span>
      </div>
      <span className="glass-text-shadow">{children}</span>

      {/* SVG for clipPath */}
      <svg height="0" width="0" className="glass-text-svg-clip">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <text
              x="0"
              y="0.8"
              lengthAdjust="spacing"
              fontFamily={fontFamily}
              fontSize={fontSizeValue}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              dominantBaseline="hanging"
            >
              {textContent}
            </text>
          </clipPath>
        </defs>
      </svg>

      {/* SVG for filter */}
      {enableFilter && (
        <svg style={{ display: "none" }} className="glass-text-svg-filter">
          <defs>
            <filter
              id={filterId}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.01"
                numOctaves="1"
                seed="5"
                result="turbulence"
              />
              <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR
                  type="gamma"
                  amplitude="1"
                  exponent="10"
                  offset="0.5"
                />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
              </feComponentTransfer>
              <feGaussianBlur in="mapped" stdDeviation="3" result="softMap" />
              <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lightingColor="white"
                result="specLight"
              >
                <fePointLight x="-200" y="-200" z="300" />
              </feSpecularLighting>
              <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale={distortionScale}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default GlassText;
