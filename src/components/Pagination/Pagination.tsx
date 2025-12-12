import React, { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { validateRange, validatePositive } from "../../utils/validation";
import GlassSurface from "../GlassSurface/GlassSurface";
import "./Pagination.css";

export interface PaginationProps {
  /**
   * Current page (1-indexed)
   */
  current: number;
  /**
   * Total number of pages
   */
  total: number;
  /**
   * Number of pages to show on each side of current page
   */
  pageSize?: number;
  /**
   * Change handler
   */
  onChange?: (page: number) => void;
  /**
   * Whether to show first/last page buttons
   */
  showFirstLast?: boolean;
  /**
   * Whether to show prev/next buttons
   */
  showPrevNext?: boolean;
  /**
   * Pagination className
   */
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize = 5,
  onChange,
  showFirstLast = true,
  showPrevNext = true,
  className = "",
}) => {
  const paginationListRef = useRef<HTMLUListElement>(null);
  const paginationWrapperRef = useRef<HTMLDivElement>(null);
  const glassDropRef = useRef<HTMLDivElement>(null);
  const pageButtonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const [isAnimating, setIsAnimating] = useState(false);
  const isUserInitiatedChange = useRef(false);
  const completeRef = useRef(0);
  const previousPositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  // Prop validation
  useEffect(() => {
    validatePositive(total, "Pagination", "total");
    validateRange(current, 1, total, "Pagination", "current");
  }, [current, total]);

  const updateGlassDropPosition = useCallback(
    (targetPage: number, animate: boolean = true) => {
      const glassDrop = glassDropRef.current;
      const list = paginationListRef.current;
      const wrapper = paginationWrapperRef.current;

      if (!glassDrop || !list) {
        return;
      }

      // Find the correct button - check refs first, then search by text content as fallback
      let targetButton = pageButtonRefs.current.get(targetPage);

      // If ref doesn't exist or button text doesn't match, search for correct button
      if (!targetButton || !targetButton.isConnected) {
        // Find button by text content as fallback
        const buttons = list.querySelectorAll(".pagination-button");
        for (const btn of buttons) {
          if (btn.textContent?.trim() === String(targetPage)) {
            targetButton = btn as HTMLButtonElement;
            // Update ref for future use
            pageButtonRefs.current.set(targetPage, targetButton);
            break;
          }
        }
      }

      if (!targetButton || !targetButton.isConnected) {
        return;
      }

      // Calculate position relative to wrapper (which contains both list and glass drop)
      const wrapperRect = wrapper
        ? wrapper.getBoundingClientRect()
        : list.getBoundingClientRect();
      const buttonRect = targetButton.getBoundingClientRect();

      // Calculate position relative to wrapper
      const left = buttonRect.left - wrapperRect.left;
      const top = buttonRect.top - wrapperRect.top;
      // Clamp width and height to max values (80px width, 60px height)
      const width = Math.min(buttonRect.width, 80);
      const height = Math.min(buttonRect.height, 60);

      if (animate && !isAnimating) {
        setIsAnimating(true);
        completeRef.current = 0;
        glassDrop.style.setProperty("--complete", "0");
        glassDrop.style.setProperty("--delta", "0");
        glassDrop.dataset.active = "true";
        glassDrop.dataset.pressed = "true";
        glassDrop.dataset.bounce = "true";

        // Create timeline for bounce + liquid stretch animation
        const tl = gsap.timeline({
          onComplete: () => {
            completeRef.current = 100;
            glassDrop.style.setProperty("--complete", "100");
            glassDrop.style.setProperty("--delta", "0");
            glassDrop.dataset.active = "false";
            glassDrop.dataset.pressed = "false";
            setIsAnimating(false);
            previousPositionRef.current = { left, top, width, height };
          },
        });

        // Smooth liquid transition - position and size animate together with liquid effect
        // More soft bounce with increased height and width scaling
        tl.to(
          glassDrop,
          {
            "--target-x": `${left}px`,
            "--target-y": `${top}px`,
            "--target-width": `${width * 1.3}px`, // Scale width to 1.3x during transition
            "--target-height": `${height * 1.8}px`, // Scale height to 1.8x during transition (more bounce)
            "--complete": 100,
            "--delta": "18", // Increased delta for more bounce
            duration: 0.2,
            ease: "power2.out",
            onUpdate: function () {
              const value = this.progress() * 100;
              completeRef.current = value;
              glassDrop.style.setProperty("--complete", `${value}`);
              // Reduce delta as animation progresses for smooth contraction
              const deltaValue = 18 * (1 - this.progress());
              glassDrop.style.setProperty("--delta", `${deltaValue}`);
              // Scale height back to actual height as animation progresses
              const heightScale = 1.8 - this.progress() * 0.8;
              glassDrop.style.setProperty("--height-scale", `${heightScale}`);
              // Scale width back to actual width as animation progresses
              const widthScale = 1.3 - this.progress() * 0.3;
              glassDrop.style.setProperty("--width-scale", `${widthScale}`);
            },
          },
          0
        )
          // Bounce back to actual size with soft easing
          .to(
            glassDrop,
            {
              "--target-width": `${width}px`,
              "--target-height": `${height}px`,
              "--width-scale": "1",
              "--height-scale": "1",
              "--delta": "0",
              duration: 0.15,
              ease: "back.out(1.7)", // Softer bounce easing
            },
            "-=0.05"
          );
      } else {
        // Set position and size immediately
        glassDrop.style.setProperty("--target-x", `${left}px`);
        glassDrop.style.setProperty("--target-y", `${top}px`);
        glassDrop.style.setProperty("--target-width", `${width}px`);
        glassDrop.style.setProperty("--target-height", `${height}px`);
        glassDrop.style.setProperty("--height-scale", "1");
        glassDrop.style.setProperty("--width-scale", "1");
        completeRef.current = 100;
        glassDrop.style.setProperty("--complete", "100");
        glassDrop.style.setProperty("--delta", "0");
        previousPositionRef.current = { left, top, width, height };
      }
    },
    [isAnimating]
  );

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfSize = Math.floor(pageSize / 2);

    let start = Math.max(1, current - halfSize);
    let end = Math.min(total, current + halfSize);

    if (current <= halfSize) {
      end = Math.min(total, pageSize);
    }
    if (current >= total - halfSize) {
      start = Math.max(1, total - pageSize + 1);
    }

    if (start > 1 && showFirstLast) {
      pages.push(1);
      if (start > 2) pages.push("ellipsis-start");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total && showFirstLast) {
      if (end < total - 1) pages.push("ellipsis-end");
      pages.push(total);
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= total && page !== current && !isAnimating) {
      // Mark as user-initiated change to prevent useEffect from interfering
      isUserInitiatedChange.current = true;

      // Call onChange first to update parent state
      onChange?.(page);

      // Wait for DOM to update with new page numbers before animating
      // This is especially important when clicking chevrons as new numbers may appear
      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Always animate to the clicked page (don't check current as it may not have updated yet)
            // Verify the page number is now visible in DOM
            const targetButton = pageButtonRefs.current.get(page);
            if (targetButton && targetButton.isConnected) {
              updateGlassDropPosition(page, true);
            } else {
              // If button not found in refs, try to find it in DOM
              const list = paginationListRef.current;
              if (list) {
                const buttons = list.querySelectorAll(".pagination-button");
                for (const btn of buttons) {
                  if (btn.textContent?.trim() === String(page)) {
                    updateGlassDropPosition(page, true);
                    break;
                  }
                }
              }
            }

            // Reset flag after animation completes
            setTimeout(() => {
              isUserInitiatedChange.current = false;
            }, 400); // Longer than animation duration (200ms liquid + 150ms bounce = 400ms)
          });
        });
      }, 50); // Small delay to ensure DOM has updated with new page numbers
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, page: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePageClick(page);
    }
  };

  // Update glass drop position when current changes (from external source)
  useEffect(() => {
    if (current && !isUserInitiatedChange.current && glassDropRef.current) {
      // Wait for DOM to update and refs to be set, especially when page numbers change
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!isUserInitiatedChange.current && current) {
              // Ensure the button exists before positioning
              const targetButton = pageButtonRefs.current.get(current);
              if (targetButton && targetButton.isConnected) {
                updateGlassDropPosition(current, false);
              } else {
                // Fallback: search for button in DOM if ref not set yet
                const list = paginationListRef.current;
                if (list) {
                  const buttons = list.querySelectorAll(".pagination-button");
                  for (const btn of buttons) {
                    if (btn.textContent?.trim() === String(current)) {
                      updateGlassDropPosition(current, false);
                      break;
                    }
                  }
                }
              }
            }
          });
        });
      }, 150); // Longer delay to ensure page numbers have rendered

      return () => clearTimeout(timeoutId);
    }
  }, [current, updateGlassDropPosition]);

  // Initialize glass drop position on mount for current page
  useEffect(() => {
    if (current && glassDropRef.current && !previousPositionRef.current) {
      // Initialize glass drop position after mount
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          if (current && !previousPositionRef.current) {
            updateGlassDropPosition(current, false);
          }
        });
      }, 150); // Longer delay on mount to ensure all refs are set
      return () => clearTimeout(timeoutId);
    }
  }, [current, updateGlassDropPosition]);

  // Clean up refs for pages that are no longer visible
  useEffect(() => {
    const pages = getPageNumbers();
    const visiblePages = new Set(
      pages.filter((p): p is number => typeof p === "number")
    );

    // Remove refs for pages that are no longer visible (except current page)
    const refsToRemove: number[] = [];
    pageButtonRefs.current.forEach((_, pageNum) => {
      if (!visiblePages.has(pageNum) && pageNum !== current) {
        refsToRemove.push(pageNum);
      }
    });
    refsToRemove.forEach((pageNum) => {
      pageButtonRefs.current.delete(pageNum);
    });
  }, [current, total, pageSize, showFirstLast]);

  const pages = getPageNumbers();

  return (
    <nav className={`pagination ${className}`} aria-label="Pagination">
      {/* SVG Filters for glass drop effect */}
      <svg
        className="pagination-svg-filters"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="pagination-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 16 -10"
              type="matrix"
            />
          </filter>
          <filter id="pagination-remove-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="3" intercept="-1" />
              <feFuncG type="linear" slope="3" intercept="-1" />
              <feFuncB type="linear" slope="3" intercept="-1" />
            </feComponentTransfer>
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
              <feFuncG type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
              <feFuncB type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="pagination-wrapper" ref={paginationWrapperRef}>
        {/* Animated Glass Drop indicator with GlassSurface */}
        {current && (
          <div ref={glassDropRef} className="pagination-glass-drop-wrapper">
            {/* Liquid drop effect with GlassSurface */}
            <GlassSurface
              hugWidth={false}
              width="100%"
              height="100%"
              borderRadius={20}
              brightness={100}
              opacity={0.4}
              blur={12}
              className="pagination-glass-drop-indicator__liquid"
            >
              <div className="pagination-glass-drop-shadow" />
              <div className="pagination-glass-drop-wrapper-inner">
                <div className="pagination-glass-drop-liquids">
                  <div className="pagination-glass-drop-liquid__shadow" />
                  <div className="pagination-glass-drop-liquid__track" />
                </div>
              </div>
              <div className="pagination-glass-drop-cover" />
            </GlassSurface>
          </div>
        )}

        <ul className="pagination-list" ref={paginationListRef}>
          {showPrevNext && (
            <li>
              <button
                className="pagination-button pagination-prev"
                onClick={() => handlePageClick(current - 1)}
                onKeyDown={(e) => handleKeyDown(e, current - 1)}
                disabled={current === 1}
                aria-label="Previous page"
              >
                ‹
              </button>
            </li>
          )}
          {pages.map((page, index) => {
            if (typeof page === "string") {
              return (
                <li key={`${page}-${index}`} className="pagination-ellipsis">
                  ...
                </li>
              );
            }
            return (
              <li key={page}>
                <button
                  ref={(el) => {
                    if (el) {
                      pageButtonRefs.current.set(page, el);
                    } else {
                      pageButtonRefs.current.delete(page);
                    }
                  }}
                  className={`pagination-button ${
                    page === current ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(page)}
                  onKeyDown={(e) => handleKeyDown(e, page)}
                  aria-label={`Page ${page}`}
                  aria-current={page === current ? "page" : undefined}
                >
                  {page}
                </button>
              </li>
            );
          })}
          {showPrevNext && (
            <li>
              <button
                className="pagination-button pagination-next"
                onClick={() => handlePageClick(current + 1)}
                onKeyDown={(e) => handleKeyDown(e, current + 1)}
                disabled={current === total}
                aria-label="Next page"
              >
                ›
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
