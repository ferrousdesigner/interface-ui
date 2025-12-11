import React from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import "./GetStartedPage.css";

export default function GetStartedPage() {
  return (
    <div className="get-started-page">
      {/* Hero Section */}
      <section className="get-started-hero">
        <div className="get-started-hero-content">
          <h1 className="get-started-main-title">Welcome to Interface UI</h1>
          <p className="get-started-subtitle">
            Build beautiful, modern React applications with our comprehensive component library
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="get-started-intro">
        <div className="get-started-intro-content">
          <h2 className="get-started-section-title">What is Interface UI?</h2>
          <div className="get-started-intro-text">
            <p className="get-started-large-text">
              Interface UI is a modern, lightweight React component library designed to help you build exceptional user interfaces quickly and efficiently. With over 30+ carefully crafted components, full TypeScript support, and zero external dependencies, Interface UI empowers developers to create beautiful, accessible, and performant applications.
            </p>
            <p className="get-started-medium-text">
              Whether you're building a simple landing page or a complex enterprise application, Interface UI provides the building blocks you need. Our components are built with modern web standards, accessibility in mind, and are fully customizable to match your brand identity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="get-started-highlights">
        <div className="get-started-highlights-grid">
          <Card className="get-started-highlight-card">
            <h3 className="get-started-highlight-title">Modern Design</h3>
            <p className="get-started-highlight-text">
              Beautiful components with glass morphism effects, smooth animations, and contemporary aesthetics that make your applications stand out.
            </p>
          </Card>
          <Card className="get-started-highlight-card">
            <h3 className="get-started-highlight-title">Developer Experience</h3>
            <p className="get-started-highlight-text">
              Built with TypeScript from the ground up, providing excellent IDE support, type safety, and comprehensive IntelliSense for faster development.
            </p>
          </Card>
          <Card className="get-started-highlight-card">
            <h3 className="get-started-highlight-title">Performance First</h3>
            <p className="get-started-highlight-text">
              Zero external dependencies means smaller bundle sizes, faster load times, and better performance for your end users.
            </p>
          </Card>
          <Card className="get-started-highlight-card">
            <h3 className="get-started-highlight-title">Accessibility</h3>
            <p className="get-started-highlight-text">
              All components follow WCAG guidelines, ensuring your applications are usable by everyone, including users with disabilities.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="get-started-cta">
        <div className="get-started-cta-content">
          <h2 className="get-started-cta-title">Ready to Get Started?</h2>
          <p className="get-started-cta-text">
            Follow our installation guide to add Interface UI to your React project in minutes.
          </p>
          <div className="get-started-cta-actions">
            <Button>View Installation Guide</Button>
            <Button variant="secondary">Explore Components</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

