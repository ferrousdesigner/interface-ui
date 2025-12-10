import React from "react";
import { Book, FileText, ExternalLink } from "lucide-react";
import "../Sidebar.css";

export const DocumentationContent: React.FC = () => {
  const documentationLinks = [
    {
      title: "Getting Started",
      description: "Learn how to install and use Interface UI",
      url: "#",
    },
    {
      title: "Components",
      description: "Browse all available components",
      url: "#",
    },
    {
      title: "Theming",
      description: "Customize the look and feel",
      url: "#",
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      url: "#",
    },
  ];

  const handleLinkClick = (url: string) => {
    // Handle navigation or open external link
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="sidebar-documentation">
      <div className="sidebar-documentation-header">
        <h3 className="sidebar-documentation-title">Documentation</h3>
        <div className="sidebar-documentation-subtitle">Learn and explore</div>
      </div>

      <div className="sidebar-documentation-content">
        <div className="sidebar-documentation-list">
          {documentationLinks.map((link, index) => (
            <div
              key={index}
              className="sidebar-documentation-item"
              onClick={() => handleLinkClick(link.url)}
            >
              <div className="sidebar-documentation-item-icon">
                <FileText size={16} />
              </div>
              <div className="sidebar-documentation-item-details">
                <div className="sidebar-documentation-item-title">
                  {link.title}
                </div>
                <div className="sidebar-documentation-item-description">
                  {link.description}
                </div>
              </div>
              <ExternalLink size={14} className="sidebar-documentation-item-arrow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

