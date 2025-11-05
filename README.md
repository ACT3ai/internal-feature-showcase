# Internal Feature Showcase

A comprehensive feature demonstration and showcase platform designed for CEO and stakeholder visibility into feature progress and capabilities. Built with Docusaurus.

## Purpose

This showcase provides a comprehensive overview of our feature development progress. Each feature includes demonstration videos, visual examples, detailed explanations, and progress tracking to help leadership understand and evaluate development progress.

## Features

- **Comfy Video Generation**: Advanced video generation capabilities powered by ComfyUI
- **EC2 Servers & Pricing**: Infrastructure costs and server configuration overview
- **ACT3 API**: API demonstration and showcase

## Setup

### Prerequisites

- Node.js >= 18.16.0 (recommended: >= 20.0)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will start a local development server at `http://localhost:3000`.

### Build

Build the static site for production:

```bash
npm run build
```

The built files will be in the `build/` directory.

### Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

To manually deploy:

```bash
npm run deploy
```

## Project Structure

```
internal-feature-showcase/
├── docs/                    # Documentation pages (Markdown)
│   ├── intro.md            # Home page
│   ├── comfy-video-generation.md
│   ├── ec2-servers-pricing.md
│   └── act3-api.md
├── src/
│   ├── css/
│   │   └── custom.css      # Custom styles
│   └── pages/              # Additional pages (if needed)
├── static/
│   └── img/                # Static images
│       ├── comfy-workflow-v1.png
│       └── comfy-workflow-v2.png
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js             # Sidebar configuration
└── package.json
```

## Adding New Features

To add a new feature showcase:

1. Create a new Markdown file in `docs/` (e.g., `docs/new-feature.md`)
2. Add it to the sidebar in `sidebars.js`:
   ```javascript
   {
     type: 'category',
     label: 'Features',
     items: [
       // ... existing items
       'new-feature',
     ],
   }
   ```
3. Add any required images to `static/img/`
4. Commit and push - deployment will happen automatically

## Configuration

The main configuration is in `docusaurus.config.js`. Key settings:

- **Base URL**: `/internal-feature-showcase/`
- **Organization**: ACT3ai
- **Project Name**: internal-feature-showcase

## GitHub Pages

The site is hosted at: `https://act3ai.github.io/internal-feature-showcase/`

Deployment is handled automatically via GitHub Actions when changes are pushed to the `main` branch.
