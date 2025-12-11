# Versioning Guide

This document provides a comprehensive guide to the versioning system used in Interface UI.

## Release Stages Overview

| Stage | Purpose | Version Format | npm Tag | Install Command |
|-------|---------|----------------|---------|-----------------|
| **Pre-Alpha** | Early development, incomplete features | `0.0.1-pre-alpha.1` | `pre-alpha` | `npm install interface-ui-lib@pre-alpha` |
| **Alpha** | First testing, major features present but buggy | `0.1.0-alpha.1` | `alpha` | `npm install interface-ui-lib@alpha` |
| **Beta** | Mostly complete, released to wider testers | `0.1.0-beta.1` | `beta` | `npm install interface-ui-lib@beta` |
| **RC** | Almost final, final testing before stable | `0.1.0-rc.1` | `rc` | `npm install interface-ui-lib@rc` |
| **Stable** | Production-ready release | `0.1.0`, `1.0.0` | `latest` | `npm install interface-ui-lib` |
| **LTS** | Long-term support version | `1.0.0-lts.1` | `lts` | `npm install interface-ui-lib@lts` |

## Quick Start

### Starting Your First Pre-Release

If you're starting from a stable version (e.g., `0.1.0`) and want to create the first pre-release:

**Option 1: Manual version edit (recommended for first prerelease)**
```bash
# Edit package.json to set version to 0.1.0-alpha.0
# Then run:
npm run version:alpha  # This will make it 0.1.0-alpha.1
npm run release:alpha
```

**Option 2: Use npm version directly**
```bash
# For first alpha from 0.1.0:
npm version 0.1.0-alpha.0 --no-git-tag-version
git add package.json package-lock.json
git commit -m "Start alpha release cycle"
npm run version:alpha  # Now 0.1.0-alpha.1
npm run release:alpha
```

### Subsequent Pre-Releases

Once you're in a pre-release cycle, just increment:

```bash
# 0.1.0-alpha.1 → 0.1.0-alpha.2
npm run version:alpha
npm run release:alpha
```

## Complete Release Workflow

### 1. Pre-Alpha Stage
```bash
# Initial development
git add .
git commit -m "Initial feature work"
npm run version:pre-alpha
npm run release:pre-alpha
```

### 2. Alpha Stage
```bash
# Features mostly complete, internal testing
git add .
git commit -m "Alpha release ready"
npm run version:alpha
npm run release:alpha
```

### 3. Beta Stage
```bash
# Public beta testing
git add .
git commit -m "Beta release"
npm run version:beta
npm run release:beta
```

### 4. Release Candidate
```bash
# Final testing before stable
git add .
git commit -m "Release candidate"
npm run version:rc
npm run release:rc
```

### 5. Stable Release
```bash
# Production release
git add .
git commit -m "Stable release"
npm run version:patch  # or :minor or :major
npm run release:stable
```

### 6. LTS Release (Optional)
```bash
# Mark stable version as LTS
npm run version:lts
npm run release:lts
```

## Promoting Between Stages

### From Pre-Release to Next Stage

When moving from one pre-release stage to another (e.g., alpha → beta):

```bash
# Current: 0.1.0-alpha.5
# Want: 0.1.0-beta.1

# Option 1: Manual edit
# Edit package.json: 0.1.0-alpha.5 → 0.1.0-beta.0
git add package.json
git commit -m "Promote to beta"
npm run version:beta  # Now 0.1.0-beta.1
npm run release:beta

# Option 2: Use npm version
npm version 0.1.0-beta.0 --no-git-tag-version
git add package.json package-lock.json
git commit -m "Promote to beta"
npm run version:beta
npm run release:beta
```

### From RC to Stable

```bash
# Current: 0.1.0-rc.3
# Want: 0.1.0 (stable)

npm run version:patch  # This removes prerelease and bumps to 0.1.1
# OR if you want exactly 0.1.0:
npm version 0.1.0 --no-git-tag-version
git add package.json package-lock.json
git commit -m "Stable release 0.1.0"
git tag v0.1.0 -m "Release version 0.1.0"
npm run release:stable
```

## Version Numbering Rules

- **Pre-Alpha**: Start at `0.0.1-pre-alpha.1` for new projects
- **Alpha**: Use when you have `0.1.0-alpha.1` or higher
- **Beta**: Use when you have `0.1.0-beta.1` or higher
- **RC**: Use when you have `0.1.0-rc.1` or higher
- **Stable**: Use `0.1.0`, `0.2.0`, `1.0.0`, etc. (no prerelease suffix)
- **LTS**: Use `1.0.0-lts.1` for long-term support versions

## Checking Current Version

```bash
# Check package.json version
npm version

# List all Git tags
git tag -l

# View version history
git tag -l --sort=-version:refname
```

## Installing Specific Versions

Users can install specific release stages:

```bash
# Latest stable (default)
npm install interface-ui-lib

# Specific release stage
npm install interface-ui-lib@alpha
npm install interface-ui-lib@beta
npm install interface-ui-lib@rc
npm install interface-ui-lib@lts

# Specific version
npm install interface-ui-lib@0.1.0-alpha.1
npm install interface-ui-lib@0.1.0
```

## Best Practices

1. **Always test before releasing**: Run `npm run build:lib` and test locally
2. **Use descriptive commit messages**: Include what changed in the version
3. **Tag consistently**: All releases should have corresponding Git tags
4. **Document breaking changes**: Use CHANGELOG.md for major/minor releases
5. **Don't skip stages**: Follow the progression (pre-alpha → alpha → beta → rc → stable)
6. **LTS selectively**: Only mark truly stable, widely-used versions as LTS

## Troubleshooting

### Version already exists
If a version already exists on npm:
```bash
# Bump to next version
npm run version:alpha  # or appropriate stage
```

### Need to start fresh
```bash
# Reset to a specific version
npm version 0.1.0-alpha.0 --no-git-tag-version
git add package.json package-lock.json
git commit -m "Reset version"
```

### Accidentally published wrong version
```bash
# Unpublish (only within 72 hours)
npm unpublish interface-ui-lib@0.1.0-alpha.1

# Then republish correct version
npm run release:alpha
```

