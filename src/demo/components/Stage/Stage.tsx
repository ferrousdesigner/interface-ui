import { components } from "../constants";
import "./Stage.css";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Sidebar } from "../../../components/Sidebar/Sidebar";

export default function Stage({ componentName }: { componentName: string }) {
  const component = components.find((c) => c.name === componentName);
  const Component = component?.component;
  const props = component?.props;
  const view = component?.stageProps?.view;

  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExtenderWidth, setSidebarExtenderWidth] = useState("300px");

  if (!Component) return null;

  // Handle Modal and Drawer with state
  let finalProps: any = props;
  let showToggleButton = false;

  if (componentName === "Modal") {
    finalProps = { ...props, open: modalOpen };
    showToggleButton = true;
  } else if (componentName === "Drawer") {
    finalProps = { ...props, open: drawerOpen };
    showToggleButton = true;
  }

  return (
    <div className="stage">
      {showToggleButton && (
        <div className="stage-controls">
          <Button
            onClick={() => {
              if (componentName === "Modal") {
                setModalOpen(true);
              } else if (componentName === "Drawer") {
                setDrawerOpen(true);
              }
            }}
          >
            {componentName === "Modal" ? "Open Modal" : "Open Drawer"}
          </Button>
        </div>
      )}
      <div className="stage-layout">
        <div
          className={`stage-content ${sidebarOpen ? "sidebar-open" : ""}`}
          style={{
            marginRight: sidebarOpen
              ? `calc(${sidebarExtenderWidth} + 80px + var(--spacing-xl))`
              : "0",
          }}
        >
          <div className={`stage-component ${view}`}>
            {finalProps && <Component {...(finalProps as any)} />}
          </div>
        </div>
        <Sidebar
          height="80vh"
          width="80px"
          onToggle={(isOpen, extenderWidth) => {
            setSidebarOpen(isOpen);
            if (extenderWidth) {
              setSidebarExtenderWidth(extenderWidth);
            }
          }}
        />
      </div>
    </div>
  );
}
