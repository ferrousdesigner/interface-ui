import { components } from '../constants'
import './LeftMenu.css'

export default function LeftMenu({ activeComponent, setActiveComponent }: { activeComponent: string, setActiveComponent: (component: string) => void }) {
  return (
    <div className="left-menu">
      <div className="left-menu-items">
        <div className="top-gradient"></div>
        <div className="left-menu-demo-section">
          <div className={`left-menu-item ${activeComponent === 'Demo' ? 'active' : ''}`} onClick={() => setActiveComponent('Demo')}>
            <div className="left-menu-item-text">Demo</div>
          </div>
        </div>
        <div className="left-menu-divider"></div>
        <div className="left-menu-components-section">
          {components.map((component) => (
            <div key={component.name} className={`left-menu-item ${activeComponent === component.name ? 'active' : ''}`} onClick={() => setActiveComponent(component.name)}>
              {/* <div className="left-menu-item-icon">{component.icon}</div> */}
              <div className="left-menu-item-text">{component.name}</div>
            </div>
          ))}
        </div>
        <div className="bottom-gradient"></div>
      </div>
    </div>
  )
}