import React, { useRef, useEffect, useState } from "react";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Tag.css";

export interface TagProps {
  /**
   * Tag content
   */
  children: React.ReactNode;
  /**
   * Tag variant
   */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  /**
   * Tag size
   */
  size?: "small" | "medium" | "large";
  /**
   * Tag className
   */
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
}) => {
  const tagRef = useRef<HTMLSpanElement>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (tagRef.current) {
      const updateDimensions = () => {
        const rect = tagRef.current?.getBoundingClientRect();
        if (rect && rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      };

      // Initial measurement after render
      const timeoutId = setTimeout(updateDimensions, 0);

      // Use ResizeObserver to handle dynamic size changes
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(tagRef.current);

      return () => {
        clearTimeout(timeoutId);
        resizeObserver.disconnect();
      };
    }
  }, [children, size, variant]);

  const tagElement = (
    <span ref={tagRef} className={`tag ${variant} ${size} ${className}`}>
      {children}
    </span>
  );

  return (
    <GlassSurface
      width={dimensions?.width || "auto"}
      height={dimensions?.height || "auto"}
      hugWidth={!dimensions}
      borderRadius={4}
    >
      {tagElement}
    </GlassSurface>
  );
};
