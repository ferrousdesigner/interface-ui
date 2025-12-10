import React from "react";
import { Package, ExternalLink, Github } from "lucide-react";
import "../Sidebar.css";

export const HistoryContent: React.FC = () => {
  const projectVersion = "0.1.0";
  const githubUrl = "https://github.com/ferrousdesigner/interface-ui";

  const dependencies = [
    { name: "react", version: "^18.2.0", type: "peer" },
    { name: "react-dom", version: "^18.2.0", type: "peer" },
    { name: "lucide-react", version: "^0.556.0", type: "dependency" },
    { name: "gsap", version: "^3.13.0", type: "dependency" },
    { name: "tweakpane", version: "4.0.4", type: "dependency" },
    { name: "typescript", version: "^5.0.0", type: "dev" },
    { name: "vite", version: "^5.0.0", type: "dev" },
  ];

  const handleGithubClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div className="sidebar-history">
      <div className="sidebar-history-header">
        <h3 className="sidebar-history-title">History</h3>
        <div className="sidebar-history-subtitle">Project information</div>
      </div>

      <div className="sidebar-history-content">
        {/* Version Section */}
        <div className="sidebar-history-section">
          <div className="sidebar-history-section-title">
            <Package size={16} />
            Version
          </div>
          <div className="sidebar-history-section-content">
            <div className="sidebar-history-version">{projectVersion}</div>
          </div>
        </div>

        {/* Dependencies Section */}
        <div className="sidebar-history-section">
          <div className="sidebar-history-section-title">
            <Package size={16} />
            Dependencies
          </div>
          <div className="sidebar-history-section-content">
            <div className="sidebar-history-dependencies">
              {dependencies.map((dep) => (
                <div key={dep.name} className="sidebar-history-dependency">
                  <div className="sidebar-history-dependency-name">
                    {dep.name}
                    <span
                      className={`sidebar-history-dependency-badge ${dep.type}`}
                    >
                      {dep.type === "peer"
                        ? "peer"
                        : dep.type === "dev"
                        ? "dev"
                        : "dep"}
                    </span>
                  </div>
                  <div className="sidebar-history-dependency-version">
                    {dep.version}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Repository Section */}
        <div className="sidebar-history-section">
          <div className="sidebar-history-section-title">
            <Github size={16} />
            Repository
          </div>
          <div className="sidebar-history-section-content">
            <button
              className="sidebar-history-repo-link"
              onClick={handleGithubClick}
            >
              <span>{githubUrl}</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
