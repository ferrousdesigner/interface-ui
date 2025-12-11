import { Card } from "../../../components/Card/Card";
import {
  Sparkles,
  Zap,
  Settings,
  Users,
  Smartphone,
  Palette,
  Code,
  Shield,
  Rocket,
  Layers,
} from "lucide-react";
import "./KeyFeatures.css";

export default function KeyFeatures() {
  return (
    <section className="demo-features">
      <h2 className="demo-section-title">Key Features</h2>
      <p className="demo-section-subtitle">
        Discover the powerful capabilities that make our component library stand
        out
      </p>
      <div className="demo-features-bento-grid">
        {/* Row 1: Large card (2x2) + 2 small cards */}
        <Card hoverable className="demo-feature-card demo-feature-large">
          <div className="demo-feature-icon-large">
            <Sparkles size={48} strokeWidth={1.5} />
          </div>
          <h3>Beautiful Design</h3>
          <p>
            Modern, clean components with glass morphism effects and smooth
            animations
          </p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Zap size={32} strokeWidth={1.5} />
          </div>
          <h3>Lightweight</h3>
          <p>Zero external dependencies, optimized for performance</p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Settings size={32} strokeWidth={1.5} />
          </div>
          <h3>Customizable</h3>
          <p>Fully themeable with CSS variables</p>
        </Card>

        {/* Row 2: (Large continues) + 2 medium cards */}
        <Card hoverable className="demo-feature-card demo-feature-medium">
          <div className="demo-feature-icon-medium">
            <Users size={40} strokeWidth={1.5} />
          </div>
          <h3>Accessible</h3>
          <p>Built with accessibility in mind, following WCAG guidelines</p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-medium">
          <div className="demo-feature-icon-medium">
            <Smartphone size={40} strokeWidth={1.5} />
          </div>
          <h3>Responsive</h3>
          <p>Mobile-first design that works seamlessly across all devices</p>
        </Card>

        {/* Row 3: Wide card (full width) */}
        <Card hoverable className="demo-feature-card demo-feature-wide">
          <div className="demo-feature-icon-medium">
            <Palette size={40} strokeWidth={1.5} />
          </div>
          <h3>Theme Support</h3>
          <p>
            Complete theming system with dark mode support and customizable
            color schemes
          </p>
        </Card>

        {/* Row 4: 4 small cards */}
        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Code size={32} strokeWidth={1.5} />
          </div>
          <h3>TypeScript</h3>
          <p>Full TypeScript support with comprehensive types</p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Shield size={32} strokeWidth={1.5} />
          </div>
          <h3>Secure</h3>
          <p>Built with security best practices</p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Rocket size={32} strokeWidth={1.5} />
          </div>
          <h3>Fast</h3>
          <p>Optimized for speed and performance</p>
        </Card>

        <Card hoverable className="demo-feature-card demo-feature-small">
          <div className="demo-feature-icon-small">
            <Layers size={32} strokeWidth={1.5} />
          </div>
          <h3>Modular</h3>
          <p>Tree-shakeable and modular architecture</p>
        </Card>
      </div>
    </section>
  );
}
