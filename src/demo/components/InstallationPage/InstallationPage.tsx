import { Tag } from "../../../components/Tag/Tag";
import "./InstallationPage.css";

export default function InstallationPage() {
  return (
    <div className="installation-page">
      {/* Header Section */}
      <section className="installation-header">
        <div className="installation-header-content">
          <h1 className="installation-main-title">Installation</h1>
          <p className="installation-subtitle">
            Get Interface UI up and running in your React project in just a few
            steps
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="installation-section">
        <div className="installation-section-content">
          <h2 className="installation-section-title">Prerequisites</h2>
          <div className="installation-prerequisites">
            <div className="installation-prerequisite-card">
              <div className="installation-prerequisite-content">
                <Tag variant="success">Required</Tag>
                <h3 className="installation-prerequisite-title">Node.js</h3>
                <p className="installation-prerequisite-text">
                  Node.js version 16.0 or higher is required
                </p>
              </div>
            </div>
            <div className="installation-prerequisite-card">
              <div className="installation-prerequisite-content">
                <Tag variant="success">Required</Tag>
                <h3 className="installation-prerequisite-title">React</h3>
                <p className="installation-prerequisite-text">
                  React version 18.0 or higher is required
                </p>
              </div>
            </div>
            <div className="installation-prerequisite-card">
              <div className="installation-prerequisite-content">
                <Tag variant="success">Recommended</Tag>
                <h3 className="installation-prerequisite-title">TypeScript</h3>
                <p className="installation-prerequisite-text">
                  TypeScript support is built-in for better development
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="installation-section">
        <div className="installation-section-content">
          <h2 className="installation-section-title">
            Step-by-Step Installation
          </h2>

          {/* Step 1 */}
          <div className="installation-step">
            <div className="installation-step-number">1</div>
            <div className="installation-step-content">
              <h3 className="installation-step-title">
                Create a React Project
              </h3>
              <p className="installation-step-description">
                If you don't have a React project yet, create one using Create
                React App or Vite:
              </p>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">
                      Using Create React App
                    </span>
                  </div>
                  <pre className="installation-code">
                    <code>{`npx create-react-app my-app
cd my-app`}</code>
                  </pre>
                </div>
              </div>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">Using Vite</span>
                  </div>
                  <pre className="installation-code">
                    <code>{`npm create vite@latest my-app -- --template react
cd my-app
npm install`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="installation-step">
            <div className="installation-step-number">2</div>
            <div className="installation-step-content">
              <h3 className="installation-step-title">Install Interface UI</h3>
              <p className="installation-step-description">
                Install Interface UI package using npm or yarn:
              </p>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">Using npm</span>
                  </div>
                  <pre className="installation-code">
                    <code>{`npm install interface-ui`}</code>
                  </pre>
                </div>
              </div>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">Using yarn</span>
                  </div>
                  <pre className="installation-code">
                    <code>{`yarn add interface-ui`}</code>
                  </pre>
                </div>
              </div>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">Using pnpm</span>
                  </div>
                  <pre className="installation-code">
                    <code>{`pnpm add interface-ui`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="installation-step">
            <div className="installation-step-number">3</div>
            <div className="installation-step-content">
              <h3 className="installation-step-title">Import Components</h3>
              <p className="installation-step-description">
                Import the components you need in your React components:
              </p>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">
                      Example: Using Button Component
                    </span>
                  </div>
                  <pre className="installation-code">
                    <code>{`import { Button } from 'interface-ui';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="installation-step">
            <div className="installation-step-number">4</div>
            <div className="installation-step-content">
              <h3 className="installation-step-title">Import Styles</h3>
              <p className="installation-step-description">
                Import the CSS file in your main entry point (usually index.js
                or App.js):
              </p>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">
                      In your index.js or App.js
                    </span>
                  </div>
                  <pre className="installation-code">
                    <code>{`import 'interface-ui/dist/index.css';

// Your component imports
import { Button } from 'interface-ui';`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="installation-step">
            <div className="installation-step-number">5</div>
            <div className="installation-step-content">
              <h3 className="installation-step-title">Start Building</h3>
              <p className="installation-step-description">
                You're all set! Start building your application with Interface
                UI components:
              </p>
              <div className="installation-code-card">
                <div className="installation-code-block">
                  <div className="installation-code-header">
                    <span className="installation-code-label">
                      Complete Example
                    </span>
                  </div>
                  <pre className="installation-code">
                    <code>{`import React from 'react';
import 'interface-ui/dist/index.css';
import { Button, Card, Input } from 'interface-ui';

function App() {
  return (
    <div className="App">
      <Card header="Welcome">
        <Input 
          label="Email" 
          placeholder="Enter your email" 
        />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}

export default App;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="installation-section">
        <div className="installation-section-content">
          <h2 className="installation-section-title">Project Structure</h2>
          <p className="installation-section-description">
            After installation, your project structure should look like this:
          </p>
          <div className="installation-code-card">
            <div className="installation-code-block">
              <div className="installation-code-header">
                <span className="installation-code-label">
                  Recommended Project Structure
                </span>
              </div>
              <pre className="installation-code">
                <code>{`my-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── MyComponent.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── package-lock.json`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="installation-section">
        <div className="installation-section-content">
          <h2 className="installation-section-title">Next Steps</h2>
          <div className="installation-next-steps">
            <div className="installation-next-step-card">
              <h3 className="installation-next-step-title">
                Explore Components
              </h3>
              <p className="installation-next-step-text">
                Browse through our component library to see all available
                components and their usage examples.
              </p>
            </div>
            <div className="installation-next-step-card">
              <h3 className="installation-next-step-title">
                Read Documentation
              </h3>
              <p className="installation-next-step-text">
                Check out the detailed documentation for each component,
                including props, examples, and best practices.
              </p>
            </div>
            <div className="installation-next-step-card">
              <h3 className="installation-next-step-title">Customize Theme</h3>
              <p className="installation-next-step-text">
                Learn how to customize the theme and styling to match your brand
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
