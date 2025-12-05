# Interface UI

A React component library built with Vite and TypeScript.

## Installation

```bash
npm install interface-ui
```

## Usage

```tsx
import { Button } from 'interface-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build the library:
```bash
npm run build
```

## Building

The library is built using Vite and outputs both ES modules and CommonJS formats. The build process also generates TypeScript declaration files.

Build output is located in the `dist` directory with the following structure:
- `dist/es/` - ES modules
- `dist/cjs/` - CommonJS modules
- `dist/types/` - TypeScript declaration files 