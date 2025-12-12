import { Book, Github, Package } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-heading">
            Contact Us
          </div>
          <h2 className="footer-question">
            Ready to build beautiful UIs? Explore our components, check out the
            documentation, or get started with Interface UI today.
          </h2>
          <div className="footer-contact">
            <span className="footer-contact-label">Contact us at:</span>
            <a href="mailto:contact@interface-ui.com" className="footer-email">
              contact@interface-ui.com
              <span className="footer-email-arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#get-started" className="footer-nav-link">
              Get Started
            </a>
            <a href="#installation" className="footer-nav-link">
              Installation
            </a>
            <a href="#demo" className="footer-nav-link">
              Demo
            </a>
            <a href="#documentation" className="footer-nav-link">
              Documentation
            </a>
          </nav>
        </div>
      </div>
      <div className="footer-logo">
        <div className="footer-logo-text">
          Inter<span className="footer-logo-text-span">face</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 Interface UI. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="#" className="footer-social-link">
            <Github size={16} />
          </a>
          <a href="#" className="footer-social-link">
            <Package size={16} />
          </a>
          <a href="#" className="footer-social-link">
            <Book size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
