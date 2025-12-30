# Architecture Documentation: internal-feature-showcase

## Executive Summary

The **internal-feature-showcase** repository is a Docusaurus-based documentation and demonstration platform designed specifically for CEO and stakeholder visibility into ACT3 AI's feature development progress. It serves as an internal showcase portal that presents feature demonstrations, technical documentation, and progress tracking through an accessible web interface.

**Repository URL**: https://github.com/ACT3ai/internal-feature-showcase.git
**Deployed URL**: https://act3ai.github.io/internal-feature-showcase/
**Tech Stack**: Docusaurus v3.0.0, React, TypeScript, Node.js v20+
**Primary Purpose**: Executive Dashboard & Technical Documentation Hub

---

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Features & Components](#core-features--components)
5. [Integration with ACT3 WebApp](#integration-with-act3-webapp)
6. [Deployment Pipeline](#deployment-pipeline)
7. [File & Class Reference](#file--class-reference)
8. [Content Strategy](#content-strategy)

---

## Repository Overview

### Primary Functions

1. **Executive Dashboard** - Provides leadership with visual demonstrations of features
2. **Technical Documentation Hub** - Centralizes documentation for major features
3. **Progress Tracking** - Chronicles feature development with dated entries
4. **Demo Gallery** - Showcases video outputs from various ACT3 AI systems
5. **Integration Reference** - Documents how features integrate with the main ACT3 platform

### Target Audiences

- **CEO / Executive Leadership**: High-level feature visibility, cost transparency, progress tracking
- **Product Managers**: Feature capabilities, integration points, quality levels
- **Technical Stakeholders**: Detailed documentation, architecture diagrams, API references

---

## Architecture & Technology Stack

### Core Framework

**Docusaurus v3.0.0** - Static site generator optimized for documentation
- Provides out-of-the-box documentation structure
- Built-in blog functionality
- Search integration
- Version control for documentation
- Dark/light theme support

### Frontend Technologies

- **React** - Component-based UI (via Docusaurus preset)
- **TypeScript** - Type safety for custom components
- **MDX** - Markdown + JSX for rich content embedding
- **Prism** - Code syntax highlighting

### Key Dependencies

```json
{
  "@docusaurus/core": "^3.0.0",
  "@docusaurus/preset-classic": "^3.0.0",
  "@docusaurus/module-type-aliases": "^3.0.0",
  "gh-pages": "^6.3.0",
  "prism-react-renderer": "themes"
}
```

### Styling Framework

- **Infima** - CSS framework bundled with Docusaurus
- **Custom CSS** - `src/css/custom.css`
  - Responsive video containers (16:9 aspect ratio)
  - Dark/light theme variables
  - Custom color scheme (green primary palette: `#2e8555`)

### Deployment Platform

- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated CI/CD pipeline
- **Custom Domain** - act3ai.github.io subdomain

---

## Directory Structure

```
/Users/bryan/BGit/act3/WebApp/internal-feature-showcase/
├── .github/
│   └── workflows/
│       └── pages.yml                    # GitHub Actions CI/CD workflow
│
├── blog/                                # Blog section (minimally used)
│   ├── authors.yml                      # Blog author metadata
│   ├── tags.yml                         # Blog tag system
│   └── 2021-08-26-welcome/             # Sample blog post
│       ├── index.md
│       └── docusaurus-plushie-banner.jpeg
│
├── docs/                                # Main documentation content (Markdown)
│   ├── index.md                         # Homepage / landing page
│   ├── act3-api.md                      # ACT3 API showcase (1 demo)
│   ├── ec2-servers-pricing.md           # Infrastructure costs documentation
│   │
│   ├── comfy-video-generation/          # ComfyUI video generation demos
│   │   ├── index.md                     # Overview page
│   │   ├── november-10-2025.md          # 5 demos (Dance, Fighting Pose, etc.)
│   │   ├── november-12-2025.md          # Multiple motion capture demos
│   │   ├── november-14-2025.md          # Head rotation, closeup demos
│   │   └── november-17-2025.md          # Wan 2.2 VACE FUN demos
│   │
│   └── screen/                          # Screen Replacement System docs
│       ├── index.md                     # Feature overview
│       │
│       ├── Documentation/               # Technical documentation (1,413 lines total)
│       │   ├── README.md                # System overview, quick start (151 lines)
│       │   ├── INSTRUCTIONS.md          # Complete installation guide (717 lines)
│       │   ├── README_TRAINING.md       # Custom model training guide (153 lines)
│       │   ├── YOLO_DATASET_DETAILS.md  # Dataset information (49 lines)
│       │   └── HOW_CUSTOM_MODEL_HELPS.md # Technical deep-dive (343 lines)
│       │
│       └── Daily_Update/                # Progress tracking with dated entries
│           ├── november-20-2025.md
│           ├── november-21-2025.md
│           └── dec_04_2025/
│               └── december-04-2025.md  # 7 video comparisons
│
├── Prompts/                             # AI prompts for content generation
│   ├── Prompt.txt                       # Template for research/documentation
│   ├── Create_Topic_Pages.txt
│   └── Write_Level_2_page.txt
│
├── src/                                 # React/TypeScript source code
│   ├── components/
│   │   ├── DownloadButton.jsx           # Reusable download button component
│   │   └── HomepageFeatures/
│   │       ├── index.tsx                # Feature showcase components
│   │       └── styles.module.css
│   │
│   ├── css/
│   │   └── custom.css                   # Global styles, video containers
│   │
│   └── pages/                           # Additional React pages
│       ├── index.module.css
│       └── markdown-page.md
│
├── static/                              # Static assets (images, videos)
│   ├── img/                             # ~10MB of images
│   │   ├── bryanpic.jpg
│   │   ├── closeupOutput.mp4
│   │   ├── comfy-workflow-v1.png        # Workflow diagrams (2.9MB)
│   │   ├── comfy-workflow-v2.png        # Workflow diagrams (3.1MB)
│   │   └── wan22_fun_vace.png           # Model workflow (3.2MB)
│   │
│   └── vid/                             # ~30MB of videos
│       ├── screenInput[3,5,6,7,8,9,11].mp4
│       └── output_screenInput[3,5,6,7,8,9,11].mp4
│
├── docusaurus.config.js                 # Main Docusaurus configuration
├── sidebars.js                          # Sidebar navigation structure
├── package.json                         # npm dependencies
├── tsconfig.json                        # TypeScript configuration
└── README.md                            # Repository documentation
```

**Documentation Statistics**:
- Total Markdown files: 18+
- Total documentation lines: ~2,438 lines
- Static assets: ~40MB (images + videos)

---

## Core Features & Components

### Feature 1: Comfy Video Generation

**Location**: `docs/comfy-video-generation/`
**Purpose**: Showcase ComfyUI-based AI video generation capabilities

#### Overview
This feature demonstrates ACT3's integration with ComfyUI workflows for generating high-quality video from motion capture data, reference images, and text prompts.

#### Video Models Showcased
- **Wan 2.1** - Video generation model
- **Wan 2.2 VACE FUN** - Enhanced video-to-video processing
- **Wan 2.2 ANIMATE** - Animation-focused model

#### Demo Types
1. **Motion capture driven videos** (mocap → video)
2. **Text-to-video generation**
3. **Reference image → video with mocap**
4. **Lineart → realistic video**

#### Quality Levels
- **Draft** - Fast preview renders
- **High** - Production-quality output

#### Workflow Architectures
- **V1 Architecture** (legacy) - Initial ComfyUI integration
- **V2 Architecture** (active) - Enhanced video-to-video processing with improved quality

#### Integration Points
Each demo includes direct links to the ACT3 platform shot editor:
```
https://act3ai.com/aistoryboard/projects/{projectId}/episode/{episodeId}/scenes/{sceneId}/shots/{shotId}/details/shot-editor/v2/?debuggerMode=true
```

#### Demo Count
15+ video demonstrations across 4 dated pages (November 10, 12, 14, 17, 2025)

#### Key Files
- `docs/comfy-video-generation/index.md` - Feature overview
- `docs/comfy-video-generation/november-*.md` - Dated demo pages
- `static/img/comfy-workflow-*.png` - Architecture diagrams (2.9-3.2MB each)

---

### Feature 2: Screen Replacement System

**Location**: `docs/screen/`
**Purpose**: Comprehensive documentation for automated screen content replacement in videos

#### Technical Architecture

##### Core Technologies
1. **YOLOv8-seg** - Deep learning object detection
   - Custom model training on 718 images
   - Instance segmentation for precise screen boundaries
   - 90-95% detection accuracy (vs 70-80% pretrained)

2. **OpenCV** - Traditional computer vision
   - Edge detection, contour finding
   - Fast processing for simple cases
   - Canny edge detection + quadrilateral extraction

3. **Blender Integration** - Professional VFX workflow
   - Planar tracker for photorealistic compositing
   - Supports reflections, shadows, perfect perspective
   - Frame-by-frame tracking with VFX nodes

4. **Python** - Core processing language
   - Poetry for dependency management
   - Invoke tasks for command-line interface
   - OpenCV + Ultralytics integration

##### Workflow Approaches
The system supports 5 different processing approaches:

1. **OpenCV Detection → Python Warping**
   - Fast, simple screen detection
   - Basic perspective transformation
   - Good for high-contrast screens

2. **YOLO Detection → Python Warping**
   - ML-based screen detection
   - More robust to complex scenes
   - Handles occlusions better

3. **OpenCV Detection → Blender Planar Track**
   - Traditional CV for initial detection
   - Professional-grade Blender tracking
   - Photorealistic compositing

4. **YOLO Detection → Blender Planar Track**
   - Best of both worlds
   - ML detection + VFX tracking
   - Production-quality output

5. **Fully In-Blender**
   - End-to-end Blender workflow
   - Manual tracking with planar tracker
   - Maximum control for complex shots

##### Key Features
- **Dual detection methods** (YOLO + OpenCV) for robustness
- **Image enhancement** (sharpening, contrast) before detection
- **Accurate perspective transformation** via homography matrices
- **Temporal smoothing** for stable tracking across frames
- **Seamless blending** with feathering at edges
- **Custom model auto-detection** - Falls back to pretrained if custom unavailable
- **Device-specific detection** - Optimized for laptops, phones, tablets

##### Integration with ACT3 WebApp

**Temporal Workflow Architecture**:
```
Master Worker (Temporal)
  ↓
Master Scheduler (cron: every 1 min)
  ↓
Fetch PENDING jobs from database
  ↓
Update status: PENDING → INQUEUE
  ↓
Execute Child Workflow
  ↓
Slave Workflow (Temporal)
  ↓
Slave Activity: processScreenReplacementGeneration
  ↓
Run: poetry run invoke generate-screen-replacement --id {id} --jobId {jobId}
  ↓
Status: INQUEUE → PROGRESS → COMPLETED (or ERROR)
```

**Task Queues**:
- Master: `master_screen_replacement_generation`
- Slave: `screen_replacement_generation`

**Namespace**: `screen_replacement_generation`

**Timeouts**:
- startToCloseTimeout: 2 days
- scheduleToCloseTimeout: 2 days
- heartbeatTimeout: 20 seconds

##### Documentation Files

1. **README.md** (151 lines) - `docs/screen/Documentation/README.md`
   - Quick start guide
   - Basic usage examples
   - System requirements
   - Installation steps

2. **INSTRUCTIONS.md** (717 lines) - `docs/screen/Documentation/INSTRUCTIONS.md`
   - Complete installation guide
   - 3 usage methods (default script, module, custom)
   - Blender planar workflows (3 approaches)
   - Training custom models (step-by-step)
   - Advanced usage, troubleshooting (6 common problems)
   - Best practices, file organization
   - Quick reference, configuration examples

3. **README_TRAINING.md** (153 lines) - `docs/screen/Documentation/README_TRAINING.md`
   - Dataset preparation
   - CSV annotation format
   - Training parameters
   - Performance optimization

4. **YOLO_DATASET_DETAILS.md** (49 lines) - `docs/screen/Documentation/YOLO_DATASET_DETAILS.md`
   - COCONut dataset information
   - Dataset structure
   - Annotation format

5. **HOW_CUSTOM_MODEL_HELPS.md** (343 lines) - `docs/screen/Documentation/HOW_CUSTOM_MODEL_HELPS.md`
   - Technical deep-dive on custom models
   - Model loading priority explanation
   - Domain-specific training benefits
   - Accuracy comparisons (90-95% vs 70-80%)
   - Code flow diagrams
   - Real-world impact analysis
   - Performance metrics

##### Demo Videos
- **December 4, 2025**: 7 side-by-side input/output comparisons
- **November 20-21, 2025**: Initial feature walkthroughs
- Videos stored in `static/vid/` directory

---

### Feature 3: ACT3 API

**Location**: `docs/act3-api.md`
**Purpose**: API demonstration and showcase

**Content**:
- YouTube embed of API demo video
- Demo created by: Nabin Kawan
- Demo date: November 5, 2025

**File Structure**:
```markdown
# ACT3 API

API Demo

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/..."
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen>
</iframe>

Created by Nabin Kawan
Date: November 5, 2025
```

---

### Feature 4: EC2 Servers & Pricing

**Location**: `docs/ec2-servers-pricing.md`
**Purpose**: Infrastructure cost transparency for stakeholders

**Server Configuration**:

1. **Production Instance**
   - **Name**: HeroE9-AppServerStackprod/Instance
   - **Type**: c5a.xlarge (compute-optimized)
   - **vCPUs**: 4
   - **Memory**: 8 GB
   - **Cost**: $112.42/month
   - **Purpose**: Live production traffic

2. **Testing Instance**
   - **Name**: HeroE9-AppServerStacktesting/Instance
   - **Type**: t3a.large (burstable)
   - **vCPUs**: 2
   - **Memory**: 8 GB
   - **Cost**: $54.90/month
   - **Purpose**: Development, testing, staging

**Total Monthly Infrastructure Cost**: $167.32

**Value Proposition**:
- Provides executive visibility into operational costs
- Demonstrates cost-consciousness
- Enables budgeting and financial planning

---

## Integration with ACT3 WebApp

### Direct Connections

#### 1. ACT3 Platform URLs (`act3ai.com`)
Comfy demos link directly to the shot editor:
```
https://act3ai.com/aistoryboard/projects/{projectId}/episode/{episodeId}/scenes/{sceneId}/shots/{shotId}/details/shot-editor/v2/?debuggerMode=true
```

**Benefits**:
- Enables direct navigation from showcase → production app
- Provides context for stakeholders
- Allows inspection of production data

#### 2. CloudFront CDN (`dgqhpf9fbvypk.cloudfront.net`)
Video assets hosted on ACT3's CloudFront distribution:
```
https://dgqhpf9fbvypk.cloudfront.net/production/{userId}/{projectId}/storyboard-shots/{shotId}/COMFY_VIDEO_FINAL/
```

Mocap videos:
```
https://dgqhpf9fbvypk.cloudfront.net/production/{userId}/{projectId}/for-actors/{timestamp}_{id}.mov
```

**Benefits**:
- Fast global video delivery
- Reduced bandwidth costs
- Consistent with production infrastructure

#### 3. Shared Technology Stack
- **Python** - Backend processing (screen replacement system)
- **Blender** - VFX pipeline
- **ComfyUI** - Video generation
- **Temporal** - Workflow orchestration (screen replacement jobs)

### Workflow Integration

#### Screen Replacement System
The screen replacement feature documented here is implemented in the `visual-automation` repository and orchestrated by the `job_runner` service.

**Cross-Repository Dependencies**:
1. **visual-automation** - Contains actual screen replacement Python code
2. **job_runner** - Executes screen replacement jobs via Temporal
3. **ai-app / ai-service** - Backend services calling screen replacement
4. **act3ai-appclient** - Frontend UI for triggering jobs

---

## Deployment Pipeline

### GitHub Actions Workflow

**File**: `.github/workflows/pages.yml`

**Trigger Conditions**:
- Push to `main` branch
- Manual workflow dispatch (via GitHub UI)

**Jobs**:

#### 1. Build Job
```yaml
- Checkout code (actions/checkout@v4)
- Setup Node.js v20 (actions/setup-node@v4)
- npm ci (clean install)
- npm run build (→ ./build directory)
- Upload pages artifact (actions/upload-pages-artifact@v3)
```

#### 2. Deploy Job
```yaml
- Deploy to GitHub Pages (actions/deploy-pages@v4)
- Environment: github-pages
- Output: page_url
```

**Permissions**:
- `contents: read` - Read repository contents
- `pages: write` - Write to GitHub Pages
- `id-token: write` - OIDC token for deployment

**Concurrency Control**:
- Group: "pages"
- cancel-in-progress: false (queues deployments)

### Build Process

**Local Development**:
```bash
npm install
npm start           # Development server (localhost:3000)
npm run build       # Production build → ./build/
npm run serve       # Test production build locally
```

**Manual Deployment**:
```bash
npm run build
gh-pages -d build   # Deploy to gh-pages branch
```

**Output**:
- Static HTML/CSS/JS in `./build/`
- Optimized assets
- Pre-rendered React components

---

## File & Class Reference

### Configuration Files

#### `docusaurus.config.js`
**Purpose**: Main Docusaurus configuration
**Key Settings**:
- **title**: "Feature Showcase"
- **tagline**: "Internal feature demonstrations for ACT3 AI"
- **url**: https://act3ai.github.io
- **baseUrl**: /internal-feature-showcase/
- **organizationName**: ACT3ai
- **projectName**: internal-feature-showcase
- **onBrokenLinks**: 'throw' (strict error checking)
- **onBrokenMarkdownLinks**: 'warn'
- **i18n**: English (default locale)

**Presets**:
```javascript
presets: [
  [
    'classic',
    {
      docs: {
        routeBasePath: '/',  // Serve docs at root
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/ACT3ai/internal-feature-showcase/tree/main/',
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/ACT3ai/internal-feature-showcase/tree/main/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
]
```

**Theme Configuration**:
```javascript
themeConfig: {
  navbar: {
    title: 'Feature Showcase',
    logo: { alt: 'ACT3 AI Logo', src: 'img/logo.svg' },
    items: [
      { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Features' },
      { to: '/blog', label: 'Blog', position: 'left' },
      { href: 'https://github.com/ACT3ai/internal-feature-showcase', label: 'GitHub', position: 'right' },
    ],
  },
  footer: {
    style: 'dark',
    links: [...],
    copyright: `Copyright © ${new Date().getFullYear()} ACT3 AI`,
  },
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
}
```

#### `sidebars.js`
**Purpose**: Define sidebar navigation structure
**Structure**:
```javascript
const sidebars = {
  tutorialSidebar: [
    'index',  // Home
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Comfy Video Generation',
          items: [
            'comfy-video-generation/november-17-2025',
            'comfy-video-generation/november-14-2025',
            'comfy-video-generation/november-12-2025',
            'comfy-video-generation/november-10-2025',
          ],
        },
        {
          type: 'category',
          label: 'Screen',
          items: [
            'screen/index',
            {
              type: 'category',
              label: 'Documentation',
              items: [
                'screen/Documentation/README',
                'screen/Documentation/INSTRUCTIONS',
                'screen/Documentation/README_TRAINING',
                'screen/Documentation/YOLO_DATASET_DETAILS',
                'screen/Documentation/HOW_CUSTOM_MODEL_HELPS',
              ],
            },
            {
              type: 'category',
              label: 'Daily Update',
              items: [
                'screen/Daily_Update/dec_04_2025/december-04-2025',
                'screen/Daily_Update/november-21-2025',
                'screen/Daily_Update/november-20-2025',
              ],
            },
          ],
        },
        'ec2-servers-pricing',
        'act3-api',
      ],
    },
  ],
};
```

#### `package.json`
**Purpose**: npm dependency management
**Scripts**:
```json
{
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

**Dependencies**:
```json
{
  "dependencies": {
    "@docusaurus/core": "^3.0.0",
    "@docusaurus/preset-classic": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.0.0",
    "@docusaurus/tsconfig": "^3.0.0",
    "@docusaurus/types": "^3.0.0",
    "gh-pages": "^6.3.0",
    "typescript": "~5.3.0"
  }
}
```

#### `tsconfig.json`
**Purpose**: TypeScript configuration
**Extends**: `@docusaurus/tsconfig`

---

### React Components

#### `src/components/DownloadButton.jsx`
**Purpose**: Reusable download button for workflow diagrams and images
**Props**:
- `href` (string) - URL to file
- `filename` (string) - Downloaded filename
- `label` (string) - Button text

**Usage Example**:
```jsx
<DownloadButton
  href="/img/wan22_fun_vace.png"
  filename="wan22_fun_vace.png"
  label="Download Wan 2.2 Fun Vace Workflow Graph"
/>
```

**Implementation**:
```javascript
import React from 'react';

export default function DownloadButton({ href, filename, label }) {
  return (
    <a
      href={href}
      download={filename}
      className="button button--primary button--lg"
      style={{ marginTop: '1rem' }}
    >
      {label}
    </a>
  );
}
```

#### `src/components/HomepageFeatures/index.tsx`
**Purpose**: Feature showcase components for homepage
**Current Status**: Default Docusaurus template (not actively customized)

**Potential Use**:
Could be customized to display:
- Feature cards for Comfy Video Generation, Screen Replacement, etc.
- Quick navigation to major sections
- Feature statistics (demo count, documentation pages)

---

### Styling

#### `src/css/custom.css`
**Purpose**: Global styles and theme customization

**Key Styles**:

1. **Theme Colors**:
```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  /* ... */
}
```

2. **Responsive Video Containers**:
```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

3. **Video Comparison Layouts**:
```css
.video-comparison {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.video-comparison > div {
  flex: 1;
  min-width: 300px;
}
```

---

## Content Strategy

### Organizational Principles

#### 1. Chronological for Demos
Dated entries track progress over time:
- `november-10-2025.md`
- `november-12-2025.md`
- `november-14-2025.md`
- `november-17-2025.md`

**Benefits**:
- Clear timeline of feature development
- Shows velocity of progress
- Easy to add new demos without restructuring

#### 2. Hierarchical for Documentation
Category → detail structure:
```
Features
├── Comfy Video Generation
│   ├── November 17, 2025
│   ├── November 14, 2025
│   └── ...
└── Screen
    ├── Documentation
    │   ├── README
    │   ├── INSTRUCTIONS
    │   └── ...
    └── Daily Update
        ├── December 04, 2025
        └── ...
```

#### 3. Visual-First for Demos
Every demo page includes:
- Video embeds (HTML5 `<video>` tags or CloudFront URLs)
- Side-by-side comparisons (input vs output)
- Quality indicators (Draft vs High)
- Direct links to production platform

#### 4. Text-Rich for Technical Docs
Comprehensive guides with:
- Step-by-step instructions
- Code examples
- Troubleshooting sections
- Best practices
- Configuration references

### Content Types

#### 1. Feature Overviews
- High-level description
- Key capabilities
- Use cases
- Links to detailed docs

#### 2. Demo Pages
- Video demonstrations
- Context and metadata (creator, date, model used)
- Quality indicators
- Links to production shots

#### 3. Technical Documentation
- Installation guides
- Usage instructions
- API references
- Architecture diagrams
- Troubleshooting

#### 4. Progress Updates
- Dated entries
- New features or improvements
- Comparative demonstrations
- Performance metrics

---

## Summary & Key Insights

### Repository Identity

**internal-feature-showcase is a Docusaurus-based stakeholder communication platform that bridges executive visibility with technical documentation for ACT3 AI's feature development.**

### Core Value Propositions

1. **Transparency**: Shows actual feature outputs with video demonstrations
2. **Accountability**: Dated entries track progress over time
3. **Documentation**: Comprehensive technical guides for complex features
4. **Integration**: Links directly to production platform for context
5. **Cost Visibility**: Infrastructure costs clearly documented

### Technical Sophistication

The features documented here represent cutting-edge AI/ML capabilities:
- **Advanced CV/ML**: YOLO, OpenCV, custom model training
- **Professional VFX**: Blender integration, planar tracking
- **Generative AI**: ComfyUI workflows, video-to-video models
- **Modern Web**: React/TypeScript, Docusaurus, GitHub Pages CI/CD

### Scale & Scope

- **Documentation**: 2,438+ lines of Markdown
- **Features**: 4 major feature areas
- **Demos**: 20+ video demonstrations
- **Media**: ~40MB of static assets
- **Updates**: Active development (weekly updates)

### Architectural Patterns

1. **Separation of Concerns**
   - Showcase (this repo) ≠ Implementation (visual-automation, job_runner, etc.)
   - Documentation ≠ Execution
   - Stakeholder view ≠ Developer view

2. **Progressive Disclosure**
   - Overview pages → Detailed documentation → Daily updates
   - Quick start → Advanced usage → Troubleshooting
   - Visual demos → Technical specs → Code references

3. **Content-First Architecture**
   - Markdown + MDX for flexibility
   - Static generation for performance
   - CDN delivery for video assets
   - External hosting for large files

4. **Integration by Reference**
   - URL linking to production platform
   - CloudFront asset references
   - GitHub repo cross-references
   - No tight coupling to backend systems

---

## How This Repository Fits into the ACT3 WebApp Ecosystem

The **internal-feature-showcase** serves as the **public-facing technical portfolio** for ACT3 AI's internal stakeholders. It does not contain executable code for the ACT3 platform, but rather:

1. **Documents features** implemented in other repositories (visual-automation, job_runner, comfyui-app)
2. **Showcases outputs** generated by the ACT3 platform
3. **Provides context** for executive decision-making
4. **Tracks progress** on key feature development initiatives
5. **Centralizes documentation** that would otherwise be scattered across repositories

This makes it a critical communication tool for aligning technical teams with business stakeholders, providing visibility into the platform's capabilities without requiring stakeholders to navigate multiple codebases.
