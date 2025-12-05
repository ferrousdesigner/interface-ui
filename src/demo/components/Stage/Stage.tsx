import { components } from "../constants";
import "./Stage.css";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";

export default function Stage({ componentName }: { componentName: string }) {
  const component = components.find((c) => c.name === componentName);
  const Component = component?.component;
  const props = component?.props;
  const view = component?.stageProps?.view;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  if (!Component) return null;
  
  // Handle Modal and Drawer with state
  let finalProps = props;
  let showToggleButton = false;
  
  if (componentName === 'Modal') {
    finalProps = { ...props, open: modalOpen, onClose: () => setModalOpen(false) };
    showToggleButton = true;
  } else if (componentName === 'Drawer') {
    finalProps = { ...props, open: drawerOpen, onClose: () => setDrawerOpen(false) };
    showToggleButton = true;
  }
  
  return (
    <div className="stage">
      {showToggleButton && (
        <div className="stage-controls">
          <Button 
            onClick={() => {
              if (componentName === 'Modal') {
                setModalOpen(true);
              } else if (componentName === 'Drawer') {
                setDrawerOpen(true);
              }
            }}
          >
            {componentName === 'Modal' ? 'Open Modal' : 'Open Drawer'}
          </Button>
        </div>
      )}
      <div className="stage-content">
        <div className={`stage-component ${view}`}>
          {finalProps && <Component {...(finalProps as any)} />}
        </div>
      </div>
    </div>
  );
}
