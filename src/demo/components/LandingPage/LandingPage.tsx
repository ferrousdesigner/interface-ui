import { Button } from "../../../components/Button/Button";
import { Badge } from "../../../components/Badge/Badge";
import LightPillar from "./LightPillar";
import "./LandingPage.css";

interface LandingPageProps {
  onExploreComponents: () => void;
}

export default function LandingPage({ onExploreComponents }: LandingPageProps) {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <LightPillar
          topColor="#0f5754"
          bottomColor="#518986"
          intensity={1.0}
          rotationSpeed={0.8}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={30}
          interactive={false}
          mixBlendMode="screen"
        />
        <div className="landing-hero-content">
          <Badge variant="primary">UI Component Library</Badge>
          <h1 className="landing-hero-title">Interface UI</h1>
          <p className="landing-hero-description">
            A comprehensive, modern React component library built with
            TypeScript. Beautiful, accessible, and customizable components for
            building exceptional user interfaces.
          </p>
          <div className="landing-hero-actions">
            <Button variant="solid" onClick={onExploreComponents}>
              Explore Components
            </Button>
            <Button>View Documentation</Button>
          </div>
          <div className="landing-hero-stats">
            <div className="landing-stat">
              <div className="landing-stat-number">30+</div>
              <div className="landing-stat-label">COMPONENTS</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-number">100%</div>
              <div className="landing-stat-label">TYPESCRIPT</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-number">0</div>
              <div className="landing-stat-label">DEPENDENCIES</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
