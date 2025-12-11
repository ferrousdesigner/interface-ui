import React from "react";
import { Eye, Play, Code } from "lucide-react";
import "../Sidebar.css";

export const LivePreviewContent: React.FC = () => {
  return (
    <div className="sidebar-live-preview">
      <div className="sidebar-live-preview-header">
        <h3 className="sidebar-live-preview-title">Live Preview</h3>
        <div className="sidebar-live-preview-subtitle">Interactive examples</div>
      </div>

      <div className="sidebar-live-preview-content">
        <div className="sidebar-live-preview-info">
          <Eye size={24} />
          <p>View components in action with live, interactive examples.</p>
        </div>

        <div className="sidebar-live-preview-actions">
          <button className="sidebar-live-preview-button">
            <Play size={16} />
            <span>Run Preview</span>
          </button>
          <button className="sidebar-live-preview-button secondary">
            <Code size={16} />
            <span>View Code</span>
          </button>
        </div>
      </div>
    </div>
  );
};

