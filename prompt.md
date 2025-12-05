# Interface UI - Development Guide

This document provides comprehensive guidance for developing and maintaining the Interface UI component library.

## Project Overview

Interface UI is a React component library built with Vite and TypeScript. The library exports reusable UI components for external use and includes a demo application for development and testing purposes.

**Key Technologies:**
- React 18.2.0+ (peer dependency)
- TypeScript 5.0+
- Vite 5.0+ (build tool)
- CSS (no CSS modules)

## Project Structure

```
interface-ui/
├── src/
│   ├── components/          # Library components (exported)
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   └── Pane/
│   │       ├── Pane.tsx
│   │       └── Pane.css
│   ├── demo/                # Demo application (not in build)
│   │   ├── demo.tsx
│   │   ├── demo.css
│   │   └── components/
│   │       ├── constants.ts
│   │       ├── Nav/
│   │       ├── LeftMenu/
│   │       └── Stage/
│   └── index.ts             # Main library export file
├── dist/                    # Build output (generated)
│   ├── es/                  # ES modules
│   ├── cjs/                 # CommonJS modules
│   └── types/               # TypeScript declarations
├── package.json
├── tsconfig.json
└── vite.config.ts
```

**Important Notes:**
- Components in `src/components/` are part of the library and will be built
- Everything in `src/demo/` is for development only and excluded from the build
- Each component has its own folder containing `.tsx` and `.css` files

## Component Development Pattern

### Component Structure

Every component should follow this structure:

1. **Component File** (`ComponentName.tsx`):
   - TypeScript React functional component
   - Exported props interface as `ComponentNameProps`
   - Import corresponding CSS file
   - Export both the component and its props type

2. **Styles File** (`ComponentName.css`):
   - Regular CSS (not CSS modules)
   - Use CSS variables for theming
   - Follow glassmorphism design patterns

### Example Component Pattern

```tsx
// Button.tsx
import React from 'react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Component Export Requirements

1. **Export from component file:**
   - Export the component (default or named)
   - Export the props interface as `ComponentNameProps`

2. **Export from `src/index.ts`:**
   ```ts
   export { ComponentName } from './components/ComponentName/ComponentName';
   export type { ComponentNameProps } from './components/ComponentName/ComponentName';
   ```

## Build System

### Configuration

- **Build Tool:** Vite with React plugin
- **TypeScript Declarations:** Generated via `vite-plugin-dts`
- **Output Formats:** ES modules and CommonJS
- **Peer Dependencies:** React and React-DOM (externalized in build)

### Build Output Structure

```
dist/
├── es/
│   └── index.js           # ES module format
├── cjs/
│   └── index.js           # CommonJS format
└── types/
    └── index.d.ts         # TypeScript declarations
```

### Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build library (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build

### Package.json Exports

The library is configured with proper exports in `package.json`:
- Main entry: `./dist/cjs/index.js`
- Module entry: `./dist/es/index.js`
- Types entry: `./dist/types/index.d.ts`

## Styling Conventions

### Design System: Glassmorphism

Interface UI uses a glassmorphism design system characterized by:
- Translucent backgrounds with backdrop blur
- Inset shadows and borders for depth
- Smooth transitions and hover effects

### CSS Variables

The following CSS variables are available (defined in `src/demo/demo.css`):

```css
--text-color: #000
--text-color-secondary: #666
--background-color: #f0f0f011
--glass-inner-shadow: rgba(255, 255, 255, 0.1)
--glass-inner-border: rgba(255, 255, 255, 0.5)
```

### Styling Pattern

Components should use:
- Class-based CSS selectors (e.g., `.button`, `.button.primary`)
- CSS variables for theming
- `backdrop-filter` for glassmorphism effects
- Smooth transitions for interactive states
- Hover and active states for user feedback

### Example Styling

```css
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 30px;
  background-color: var(--background-color-dark);
  color: white;
  box-shadow: 1px 1px 1px var(--glass-inner-border) inset,
    1px -1px 10px var(--glass-inner-shadow) inset;
  backdrop-filter: saturate(180%) blur(2px);
  transition: backdrop-filter 0.12s ease;
}

.button:hover {
  backdrop-filter: saturate(180%) blur(3px);
}

.button:active {
  backdrop-filter: saturate(180%) blur(3px) brightness(2.8);
}
```

## Demo Application

### Purpose

The demo application serves as:
- Development environment for testing components
- Showcase for component usage
- Interactive documentation

### Structure

- **Entry Point:** `src/demo.tsx` - Main demo application
- **Components:**
  - `Nav/` - Navigation header
  - `LeftMenu/` - Component selector sidebar
  - `Stage/` - Component display area
- **Registry:** `src/demo/components/constants.ts` - Component definitions

### Component Registry

Components are registered in `src/demo/components/constants.ts`:

```ts
export const components = [{
  name: 'Button',
  icon: 'button',
  path: '/button',
  component: Button,
  props: { children: 'Button 22' },
  stageProps: {
    view: StageView.Enlarge
  },
}, ...]
```

**Note:** Many components in the registry are placeholders (`component: undefined`) and need to be implemented.

### Adding Components to Demo

When creating a new component:
1. Implement the component in `src/components/ComponentName/`
2. Export it from `src/index.ts`
3. Add entry to `src/demo/components/constants.ts` with:
   - Component reference
   - Default props
   - Stage view preference (Enlarge or Normal)

## Development Guidelines

### TypeScript

- **Strict Mode:** Enabled in `tsconfig.json`
- **Type Safety:** All props must be typed with interfaces
- **Exports:** Always export both component and props type

### Component Development Checklist

When creating a new component:

1. ✅ Create component folder: `src/components/ComponentName/`
2. ✅ Create `ComponentName.tsx` with:
   - Props interface exported as `ComponentNameProps`
   - Functional component implementation
   - CSS import
3. ✅ Create `ComponentName.css` with:
   - Glassmorphism styling
   - CSS variables usage
   - Hover/active states
4. ✅ Export from `src/index.ts`:
   - Component export
   - Props type export
5. ✅ Add to demo (optional):
   - Update `src/demo/components/constants.ts`
   - Test in demo application

### Code Quality

- Use TypeScript strict mode features
- Follow existing component patterns
- Maintain glassmorphism design consistency
- Ensure proper TypeScript types for all props
- Use semantic HTML elements
- Include proper accessibility attributes when applicable

### Current Component Status

**Implemented:**
- ✅ Button - Fully functional with variants
- ⚠️ Pane - Placeholder implementation (currently returns TestOverflow component)

**Placeholders (in constants.ts):**
- Accordion, Alert, Avatar, Badge, Card, Checkbox, Chip, Dialog, Drawer, Dropdown, IconButton, Input, List, Menu, Modal, Pagination, Progress, Radio, Select, Slider, Switch, Table, Tabs, Tag, Textarea, Tooltip

## Usage as a Library

### Installation

```bash
npm install interface-ui
```

### Import and Use

```tsx
import { Button } from 'interface-ui';
import type { ButtonProps } from 'interface-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

### Peer Dependencies

The library requires React 18.2.0+ and React-DOM 18.2.0+ to be installed in the consuming project.

## Notes

- The Pane component currently has a placeholder implementation that returns a TestOverflow component for testing scroll behavior
- Many components listed in `constants.ts` are placeholders and need implementation
- The library is designed to be published as an npm package
- Demo application is excluded from the library build output
- CSS uses regular class selectors, not CSS modules (no `.module.css` files)

