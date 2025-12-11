# Interface UI

A React component library built with Vite and TypeScript.

## Prerequisites

This project requires Node.js version 22. We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage Node.js versions.

### Setting up NVM and Node.js 22

1. Install NVM (if not already installed):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. Install and use Node.js 22:
   ```bash
   nvm install 22
   nvm use 22
   ```

3. The project includes an `.nvmrc` file, so you can simply run:
   ```bash
   nvm use
   ```

## Installation

```bash
npm install interface-ui
```

## Usage

```tsx
import { Button } from 'interface-ui';
import 'interface-ui/style.css';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

**Note:** Don't forget to import the CSS file to get the component styles!

## Development

### Project Structure

This repository contains two separate builds:

1. **Component Library** (`src/components/`) - Published to npm
2. **Landing Page** (`src/demo/`) - Deployed to GitHub Pages

### Developing the Component Library

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the library:
   ```bash
   npm run build:lib
   ```

   This builds the library to the `dist/` directory with:
   - `dist/es/` - ES modules
   - `dist/cjs/` - CommonJS modules
   - `dist/types/` - TypeScript declaration files
   - `dist/style.css` - Component styles

### Developing the Landing Page

1. Start the development server:
   ```bash
   npm run dev:demo
   ```

   This runs the landing page at `http://localhost:5173` with hot module replacement.

2. Build the landing page:
   ```bash
   npm run build:demo
   ```

   This builds the landing page to the `dist-demo/` directory.

3. Preview the production build:
   ```bash
   npm run preview:demo
   ```

### Building Everything

To build both the library and the landing page:

```bash
npm run build:all
```

## Versioning and Git Tags

This project uses [Semantic Versioning](https://semver.org/) (SemVer) with pre-release stages for version management. The version is tracked in `package.json` and Git tags.

> 📖 **For detailed versioning instructions, see [VERSIONING.md](./VERSIONING.md)**

### Release Stages

The project follows a structured release lifecycle:

1. **Pre-Alpha** — Early development; features incomplete and unstable
   - Version format: `0.0.1-pre-alpha.1`, `0.0.1-pre-alpha.2`, etc.
   - Use for: Initial development, proof of concept

2. **Alpha** — First testing phase; major features present but buggy
   - Version format: `0.1.0-alpha.1`, `0.1.0-alpha.2`, etc.
   - Use for: Internal testing, early feature validation

3. **Beta** — Mostly complete; bugs expected, released to wider testers
   - Version format: `0.1.0-beta.1`, `0.1.0-beta.2`, etc.
   - Use for: Public beta testing, community feedback

4. **Release Candidate (RC)** — Almost final; if no major issues found, becomes the stable release
   - Version format: `0.1.0-rc.1`, `0.1.0-rc.2`, etc.
   - Use for: Final testing before stable release

5. **Stable/GA (General Availability)** — Official production-ready version
   - Version format: `0.1.0`, `1.0.0`, etc.
   - Use for: Production releases

6. **LTS (Long-Term Support)** — Stable release with extended maintenance and security updates
   - Version format: `1.0.0-lts.1`, `1.0.0-lts.2`, etc.
   - Use for: Long-term supported versions

### Versioning Commands

#### Pre-Release Stages

**Pre-Alpha** (0.0.1 → 0.0.1-pre-alpha.1 → 0.0.1-pre-alpha.2):
```bash
npm run version:pre-alpha
```

**Alpha** (0.1.0 → 0.1.0-alpha.1 → 0.1.0-alpha.2):
```bash
npm run version:alpha
```

**Beta** (0.1.0 → 0.1.0-beta.1 → 0.1.0-beta.2):
```bash
npm run version:beta
```

**Release Candidate** (0.1.0 → 0.1.0-rc.1 → 0.1.0-rc.2):
```bash
npm run version:rc
```

**LTS** (1.0.0 → 1.0.0-lts.1 → 1.0.0-lts.2):
```bash
npm run version:lts
```

#### Stable Releases

**Patch version** (0.1.0 → 0.1.1) - Bug fixes:
```bash
npm run version:patch
```

**Minor version** (0.1.0 → 0.2.0) - New features, backward compatible:
```bash
npm run version:minor
```

**Major version** (0.1.0 → 1.0.0) - Breaking changes:
```bash
npm run version:major
```

All versioning commands will:
1. Update the version in `package.json`
2. Create a Git commit with the version change
3. Create a Git tag with the version number (e.g., `v0.1.0-alpha.1`)

### Pushing Tags to Remote

After creating a tag, push it to your remote repository:

```bash
# Push commits and tags
git push && git push --tags

# Or push tags only
git push --tags
```

### Manual Tag Creation

You can also create tags manually:

```bash
# Create an annotated tag (recommended)
git tag -a v0.1.0 -m "Release version 0.1.0"

# Create a lightweight tag
git tag v0.1.0

# Push a specific tag
git push origin v0.1.0

# List all tags
git tag -l

# View tag details
git show v0.1.0

# Delete a tag (local)
git tag -d v0.1.0

# Delete a tag (remote)
git push origin --delete v0.1.0
```

### Release Workflow Examples

#### Starting a New Feature (Pre-Alpha)
```bash
# Start with pre-alpha for new major features
npm run version:pre-alpha
npm run release:pre-alpha
```

#### Moving Through Stages
```bash
# Pre-Alpha → Alpha
npm run version:alpha
npm run release:alpha

# Alpha → Beta
npm run version:beta
npm run release:beta

# Beta → Release Candidate
npm run version:rc
npm run release:rc

# Release Candidate → Stable
npm run version:patch  # or :minor/:major for stable
npm run release:stable

# Mark Stable as LTS
npm run version:lts
npm run release:lts
```

#### Typical Development Cycle

1. **Early Development (Pre-Alpha)**:
   ```bash
   git add .
   git commit -m "Initial feature implementation"
   npm run version:pre-alpha
   npm run release:pre-alpha
   ```

2. **Internal Testing (Alpha)**:
   ```bash
   git add .
   git commit -m "Feature improvements"
   npm run version:alpha
   npm run release:alpha
   ```

3. **Public Beta**:
   ```bash
   git add .
   git commit -m "Beta release ready"
   npm run version:beta
   npm run release:beta
   ```

4. **Release Candidate**:
   ```bash
   git add .
   git commit -m "Release candidate"
   npm run version:rc
   npm run release:rc
   ```

5. **Stable Release**:
   ```bash
   git add .
   git commit -m "Stable release"
   npm run version:patch  # or :minor/:major
   npm run release:stable
   ```

6. **LTS Release** (for stable versions needing long-term support):
   ```bash
   npm run version:lts
   npm run release:lts
   ```

## Publishing

### Publishing to npm

1. Ensure you're logged in to npm:
   ```bash
   npm login
   ```

2. **Publish by Release Stage**:

   **Pre-Alpha** (published with `pre-alpha` tag):
   ```bash
   npm run release:pre-alpha
   ```
   Install with: `npm install interface-ui@pre-alpha`

   **Alpha** (published with `alpha` tag):
   ```bash
   npm run release:alpha
   ```
   Install with: `npm install interface-ui@alpha`

   **Beta** (published with `beta` tag):
   ```bash
   npm run release:beta
   ```
   Install with: `npm install interface-ui@beta`

   **Release Candidate** (published with `rc` tag):
   ```bash
   npm run release:rc
   ```
   Install with: `npm install interface-ui@rc`

   **Stable** (published with `latest` tag - default):
   ```bash
   npm run release:stable
   ```
   Install with: `npm install interface-ui` or `npm install interface-ui@latest`

   **LTS** (published with `lts` tag):
   ```bash
   npm run release:lts
   ```
   Install with: `npm install interface-ui@lts`

3. **Generic Release Script** (uses current version):
   ```bash
   npm run release
   ```
   This will:
   - Build the library
   - Publish to npm with appropriate tag
   - Push commits and tags to Git

4. **Manual Publishing**:
   ```bash
   # Build the library
   npm run build:lib
   
   # Publish with specific tag
   npm publish --tag alpha  # or beta, rc, lts, etc.
   
   # Or publish as latest (stable)
   npm publish
   
   # Push tags
   git push && git push --tags
   ```

**Note:** 
- Only the `dist/` directory is included in the npm package (as specified in `package.json` `files` field). The landing page and demo files are excluded.
- Pre-release versions are published with dist-tags, so users can choose which stability level to install.
- The `prepublishOnly` script automatically builds the library before publishing.

### Deploying the Landing Page

The landing page is automatically deployed to GitHub Pages via GitHub Actions when you push to the `main` branch.

The deployment workflow:
1. Builds the landing page using `npm run build:demo`
2. Deploys the `dist-demo/` directory to GitHub Pages

To manually trigger deployment, you can also use the "Run workflow" button in the GitHub Actions tab.

## Building

The library is built using Vite and outputs both ES modules and CommonJS formats. The build process also generates TypeScript declaration files.

Build output is located in the `dist` directory with the following structure:
- `dist/es/` - ES modules
- `dist/cjs/` - CommonJS modules
- `dist/types/` - TypeScript declaration files
- `dist/style.css` - Component styles (import separately)

## Scripts Reference

### Development
- `npm run dev` / `npm run dev:demo` - Start landing page development server
- `npm run preview` - Preview library build
- `npm run preview:demo` - Preview landing page build

### Building
- `npm run build` / `npm run build:lib` - Build component library for npm
- `npm run build:demo` - Build landing page for GitHub Pages
- `npm run build:all` - Build both library and landing page

### Versioning
- `npm run version:pre-alpha` - Create pre-alpha version (0.0.1-pre-alpha.1)
- `npm run version:alpha` - Create alpha version (0.1.0-alpha.1)
- `npm run version:beta` - Create beta version (0.1.0-beta.1)
- `npm run version:rc` - Create release candidate version (0.1.0-rc.1)
- `npm run version:lts` - Create LTS version (1.0.0-lts.1)
- `npm run version:patch` - Bump patch version (0.1.0 → 0.1.1) and create Git tag
- `npm run version:minor` - Bump minor version (0.1.0 → 0.2.0) and create Git tag
- `npm run version:major` - Bump major version (0.1.0 → 1.0.0) and create Git tag

### Publishing
- `npm run release` - Build, publish to npm, and push Git tags (uses current version)
- `npm run release:pre-alpha` - Build and publish pre-alpha version
- `npm run release:alpha` - Build and publish alpha version
- `npm run release:beta` - Build and publish beta version
- `npm run release:rc` - Build and publish release candidate
- `npm run release:stable` - Build and publish stable version (latest tag)
- `npm run release:lts` - Build and publish LTS version
- `npm run prepublishOnly` - Automatically runs before `npm publish` 