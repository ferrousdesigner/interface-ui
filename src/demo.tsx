import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./demo/components/Nav/Nav";
import LeftMenu from "./demo/components/LeftMenu/LeftMenu";
import "./demo.css";
import Stage from "./demo/components/Stage/Stage";
import DemoPage from "./demo/components/DemoPage/DemoPage";
import GetStartedPage from "./demo/components/GetStartedPage/GetStartedPage";
import InstallationPage from "./demo/components/InstallationPage/InstallationPage";
import LandingPage from "./demo/components/LandingPage/LandingPage";

const Demo = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Only update if scroll position changed significantly (throttle)
      if (Math.abs(scrollY - lastScrollY) < 1) {
        return;
      }

      lastScrollY = scrollY;

      // Cancel previous animation frame if pending
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(() => {
        const translateY = -scrollY * 0.04;
        document.documentElement.style.setProperty(
          "--parallax-translate",
          `${translateY}px`
        );
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set initial position
    handleScroll();

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <svg style={{ display: "none" }} aria-hidden="true">
        <defs>
          <filter
            id="liquid-glass-filter"
            colorInterpolationFilters="linearRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feDisplacementMap
              in="SourceGraphic"
              in2="SourceGraphic"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="displacementMap"
            />
            <feGaussianBlur
              stdDeviation="5 5"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="displacementMap"
              edgeMode="none"
              result="blur"
            />
          </filter>
        </defs>
      </svg>
      <Nav onNavigateHome={() => setActiveComponent(null)} />
      <main className="main-container">
        {activeComponent !== null && (
          <LeftMenu
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        )}
        {activeComponent === null ? (
          <LandingPage onExploreComponents={() => setActiveComponent("Demo")} />
        ) : activeComponent === "Get Started" ? (
          <GetStartedPage />
        ) : activeComponent === "Installation" ? (
          <InstallationPage />
        ) : activeComponent === "Demo" ? (
          <DemoPage />
        ) : (
          <>
            <Stage componentName={activeComponent as string} />
          </>
        )}
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
