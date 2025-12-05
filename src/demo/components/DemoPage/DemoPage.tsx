import React, { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { Badge } from "../../../components/Badge/Badge";
import { Tag } from "../../../components/Tag/Tag";
import { Alert } from "../../../components/Alert/Alert";
import { Progress } from "../../../components/Progress/Progress";
import { Avatar } from "../../../components/Avatar/Avatar";
import { Chip } from "../../../components/Chip/Chip";
import { Input } from "../../../components/Input/Input";
import { Textarea } from "../../../components/Textarea/Textarea";
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { Radio } from "../../../components/Radio/Radio";
import { Switch } from "../../../components/Switch/Switch";
import { Select } from "../../../components/Select/Select";
import { Slider } from "../../../components/Slider/Slider";
import { Table } from "../../../components/Table/Table";
import { Tabs } from "../../../components/Tabs/Tabs";
import { Accordion } from "../../../components/Accordion/Accordion";
import { Menu } from "../../../components/Menu/Menu";
import { Dropdown } from "../../../components/Dropdown/Dropdown";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Modal } from "../../../components/Modal/Modal";
import { Drawer } from "../../../components/Drawer/Drawer";
import { Tooltip } from "../../../components/Tooltip/Tooltip";
import { IconButton } from "../../../components/IconButton/IconButton";
import { List } from "../../../components/List/List";
import "./DemoPage.css";
import GlassSurface from "../../../components/GlassSurface/GlassSurface";

export default function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="demo-page">
      {/* Hero Section */}
      <section className="demo-hero">
        <div className="demo-hero-content">
          <Badge variant="primary">UI Component Library</Badge>
          <h1 className="demo-hero-title">Interface UI</h1>
          <p className="demo-hero-description">
            A comprehensive, modern React component library built with
            TypeScript. Beautiful, accessible, and customizable components for
            building exceptional user interfaces.
          </p>
          <div className="demo-hero-actions">
            <Button>Get Started</Button>
            <Button>View Documentation</Button>
          </div>
          <div className="demo-hero-stats">
            <div className="demo-stat">
              <div className="demo-stat-number">30+</div>
              <div className="demo-stat-label">Components</div>
            </div>
            <div className="demo-stat">
              <div className="demo-stat-number">100%</div>
              <div className="demo-stat-label">TypeScript</div>
            </div>
            <div className="demo-stat">
              <div className="demo-stat-number">0</div>
              <div className="demo-stat-label">Dependencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="demo-features">
        <h2 className="demo-section-title">Key Features</h2>
        <div className="demo-features-grid">
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Beautiful Design</h3>
            <p>
              Modern, clean components with glass morphism effects and smooth
              animations
            </p>
          </Card>
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Lightweight</h3>
            <p>
              Zero external dependencies, optimized for performance and bundle
              size
            </p>
          </Card>
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
              </svg>
            </div>
            <h3>Customizable</h3>
            <p>
              Fully themeable with CSS variables and easy to customize for your
              brand
            </p>
          </Card>
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Accessible</h3>
            <p>Built with accessibility in mind, following WCAG guidelines</p>
          </Card>
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h3>Responsive</h3>
            <p>Mobile-first design that works seamlessly across all devices</p>
          </Card>
          <Card hoverable className="demo-feature-card">
            <div className="demo-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>TypeScript</h3>
            <p>Full TypeScript support with comprehensive type definitions</p>
          </Card>
        </div>
      </section>

      {/* Component Showcase Section */}
      <section className="demo-showcase">
        <h2 className="demo-section-title">Component Showcase</h2>

        {/* Form Components */}
        <div className="demo-component-group">
          <h3 className="demo-group-title">Form Components</h3>
          <div className="demo-components-grid">
            <div className="demo-component-item">
              <div className="demo-component-label">Button</div>
              <Button>Click Me</Button>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Input</div>
              <Input label="Email" placeholder="Enter your email" />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Textarea</div>
              <Textarea
                label="Message"
                placeholder="Enter your message"
                rows={3}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Select</div>
              <Select
                label="Country"
                placeholder="Choose a country"
                options={[
                  { value: "1", label: "United States" },
                  { value: "2", label: "Canada" },
                  { value: "3", label: "United Kingdom" },
                ]}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Checkbox</div>
              <Checkbox label="I agree to the terms" />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Radio</div>
              <Radio label="Option 1" name="demo-radio" />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Switch</div>
              <Switch label="Enable notifications" />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Slider</div>
              <Slider
                label="Volume"
                value={sliderValue}
                onChange={setSliderValue}
                showValue
              />
            </div>
          </div>
        </div>

        {/* Display Components */}
        <div className="demo-component-group">
          <h3 className="demo-group-title">Display Components</h3>
          <div className="demo-components-grid">
            <div className="demo-component-item">
              <div className="demo-component-label">Card</div>
              <Card
                header="Card Title"
                children="This is a card component with header and content."
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Badge</div>
              <div className="demo-badge-group">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Tag</div>
              <div className="demo-tag-group">
                <Tag variant="primary">Tag</Tag>
                <Tag variant="success">Tag</Tag>
                <Tag variant="error">Tag</Tag>
              </div>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Chip</div>
              <div className="demo-chip-group">
                <Chip>React</Chip>
                <Chip>TypeScript</Chip>
                <Chip removable>CSS</Chip>
              </div>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Avatar</div>
              <div className="demo-avatar-group">
                <Avatar initials="JD" size="small" />
                <Avatar initials="AB" size="medium" />
                <Avatar initials="CD" size="large" />
              </div>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Alert</div>
              <Alert
                variant="info"
                title="Info"
                children="This is an informational alert"
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Progress</div>
              <Progress value={65} showValue />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">IconButton</div>
              <IconButton icon="⚙" aria-label="Settings" />
            </div>
          </div>
        </div>

        {/* Navigation Components */}
        <div className="demo-component-group">
          <h3 className="demo-group-title">Navigation Components</h3>
          <div className="demo-components-grid">
            <div className="demo-component-item">
              <div className="demo-component-label">Tabs</div>
              <Tabs
                items={[
                  { key: "1", label: "Tab 1", content: "Content for tab 1" },
                  { key: "2", label: "Tab 2", content: "Content for tab 2" },
                  { key: "3", label: "Tab 3", content: "Content for tab 3" },
                ]}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Accordion</div>
              <Accordion
                items={[
                  {
                    key: "1",
                    header: "Section 1",
                    content: "Content for section 1",
                  },
                  {
                    key: "2",
                    header: "Section 2",
                    content: "Content for section 2",
                  },
                ]}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Menu</div>
              <Menu
                items={[
                  { key: "1", label: "Home" },
                  { key: "2", label: "About" },
                  { key: "3", label: "Contact" },
                ]}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Dropdown</div>
              <Dropdown
                trigger="Select Option"
                items={[
                  { key: "1", label: "Option 1" },
                  { key: "2", label: "Option 2" },
                  { key: "3", label: "Option 3" },
                ]}
              />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Pagination</div>
              <Pagination current={1} total={10} />
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">List</div>
              <List
                items={[
                  { key: "1", content: "List Item 1" },
                  { key: "2", content: "List Item 2" },
                  { key: "3", content: "List Item 3" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Data Display */}
        <div className="demo-component-group">
          <h3 className="demo-group-title">Data Display</h3>
          <div className="demo-components-grid">
            <div className="demo-component-item demo-component-item-wide">
              <div className="demo-component-label">Table</div>
              <Table
                columns={[
                  { key: "name", header: "Name" },
                  { key: "role", header: "Role" },
                  { key: "status", header: "Status" },
                ]}
                data={[
                  { name: "John Doe", role: "Developer", status: "Active" },
                  { name: "Jane Smith", role: "Designer", status: "Active" },
                  { name: "Bob Johnson", role: "Manager", status: "Inactive" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Overlay Components */}
        <div className="demo-component-group">
          <h3 className="demo-group-title">Overlay Components</h3>
          <div className="demo-components-grid">
            <div className="demo-component-item">
              <div className="demo-component-label">Modal</div>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal
                open={modalOpen}
                title="Modal Title"
                onClose={() => setModalOpen(false)}
              >
                <p>This is a modal dialog. You can place any content here.</p>
                <div
                  style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
                >
                  <Button onClick={() => setModalOpen(false)}>Close</Button>
                </div>
              </Modal>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Drawer</div>
              <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
              <Drawer
                open={drawerOpen}
                title="Drawer Title"
                placement="right"
                onClose={() => setDrawerOpen(false)}
              >
                <p>This is a drawer component. It slides in from the side.</p>
              </Drawer>
            </div>
            <div className="demo-component-item">
              <div className="demo-component-label">Tooltip</div>
              <Tooltip title="This is a tooltip message">
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Hover over me
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
