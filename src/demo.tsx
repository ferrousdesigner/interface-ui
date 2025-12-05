import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './demo/components/Nav/Nav';
import LeftMenu from './demo/components/LeftMenu/LeftMenu';
import './demo.css';
import Stage from './demo/components/Stage/Stage';
import DemoPage from './demo/components/DemoPage/DemoPage';

const Demo = () => {
  const [activeComponent, setActiveComponent] = useState('Demo')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Parallax effect: translate background in opposite direction to scroll
      const translateY = -scrollY * 0.04;
      document.documentElement.style.setProperty('--parallax-translate', `${translateY}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="liquid-glass-filter" colorInterpolationFilters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
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
      <Nav />
      <main className="main-container">
        <LeftMenu setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        {activeComponent === 'Demo' ? (
          <DemoPage />
        ) : (
          <Stage componentName={activeComponent} />
        )}
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
); 