import React, { useRef, useEffect, useState } from "react";
import "./Slider.css";

export interface SliderProps {
  /**
   * Initial value (0-100)
   */
  value?: number;
  /**
   * Change handler
   */
  onChange?: (value: number) => void;
  /**
   * Slider id attribute
   */
  id?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value: initialValue = 40,
  onChange,
  id,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderRect, setSliderRect] = useState<DOMRect | null>(null);

  const updateThumbAndProgress = (newPercent: number) => {
    newPercent = Math.max(0, Math.min(100, newPercent));

    if (progressRef.current && thumbRef.current && sliderRect) {
      const px = (newPercent / 100) * sliderRect.width;
      progressRef.current.style.width = `${newPercent}%`;
      thumbRef.current.style.left = `${px}px`;
    }
  };

  const getPercentFromClientX = (clientX: number): number => {
    if (!sliderRect) return 0;
    const offsetX = clientX - sliderRect.left;
    return (offsetX / sliderRect.width) * 100;
  };

  const onMove = (clientX: number) => {
    const newPercent = getPercentFromClientX(clientX);
    updateThumbAndProgress(newPercent);
    onChange?.(newPercent);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!sliderRef.current) return;
    setIsDragging(true);
    setSliderRect(sliderRef.current.getBoundingClientRect());
    onMove(e.clientX);
    thumbRef.current?.classList.add("active");
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setSliderRect(sliderRef.current.getBoundingClientRect());
    onMove(e.touches[0].clientX);
    thumbRef.current?.classList.add("active");
  };

  const stopDrag = () => {
    setIsDragging(false);
    thumbRef.current?.classList.remove("active");
  };

  // Initialize
  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      setSliderRect(rect);
      updateThumbAndProgress(initialValue);
    }
  }, [initialValue]);

  // Update when external value changes
  useEffect(() => {
    if (!isDragging) {
      updateThumbAndProgress(initialValue);
    }
  }, [initialValue, isDragging]);

  // Mouse move handler
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        onMove(e.clientX);
      }
    };

    const onMouseUp = () => {
      stopDrag();
    };

    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, sliderRect]);

  // Touch move handler
  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        onMove(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      stopDrag();
    };

    if (isDragging) {
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, sliderRect]);

  // Handle slider click
  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setSliderRect(sliderRef.current.getBoundingClientRect());
    thumbRef.current?.classList.add("active");
    onMove(e.clientX);
  };

  const handleSliderTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setSliderRect(sliderRef.current.getBoundingClientRect());
    thumbRef.current?.classList.add("active");
    onMove(e.touches[0].clientX);
  };

  // Update rect on resize
  useEffect(() => {
    const updateRect = () => {
      if (sliderRef.current) {
        setSliderRect(sliderRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  return (
    <>
      <div
        className="slider-container"
        id={id}
        ref={sliderRef}
        onMouseDown={handleSliderClick}
        onTouchStart={handleSliderTouchStart}
      >
        <div className="slider-progress" ref={progressRef}></div>
        <div
          className="slider-thumb-glass"
          ref={thumbRef}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="slider-thumb-glass-filter"></div>
          <div className="slider-thumb-glass-overlay"></div>
          <div className="slider-thumb-glass-specular"></div>
        </div>
      </div>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter
          id="mini-liquid-lens"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            x="0"
            y="0"
            result="normalMap"
            href="data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
        <radialGradient id='invmap' cx='50%' cy='50%' r='75%'>
          <stop offset='0%' stop-color='rgb(128,128,255)'/>
          <stop offset='90%' stop-color='rgb(255,255,255)'/>
        </radialGradient>
        <rect width='100%' height='100%' fill='url(%23invmap)'/>
      </svg>"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="normalMap"
            scale="-252"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feMerge>
            <feMergeNode in="displaced" />
          </feMerge>
        </filter>
      </svg>
    </>
  );
};
