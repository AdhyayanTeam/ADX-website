# ADX (AdhyayanX) Frontend Architecture & Progress Report

This document outlines the technical frontend architecture of the ADX website, its design principles, folder structures, component breakdown, log of operational improvements, and strict alignment with the global skill inheritance rules.

---

## 1. Overview
ADX (AdhyayanX) is an operations-first software engineering suite tailored for Indian SMBs (Coaching Institutes, Clinics, Salons, Gyms, and Professional Services). The frontend is structured as a high-fidelity, high-conversion web application designed to demonstrate operational "leakage" in businesses and present customized automation solutions.

---

## 2. Tech Stack & Dependencies
The web application is built with a modern, performant, and visual-first JavaScript stack:

- **Framework**: [Next.js](https://nextjs.org/) (Version `16.2.10` / React `19.2.4` and React-DOM `19.2.4`) utilizing the App Router.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Version `^4.3.2`) configured alongside [PostCSS](https://postcss.org/) (`^8.5.16`). It leverages native Tailwind v4 `@theme` directives directly in CSS files (`global-new.css`) for design token declarations, eliminating the need for legacy `tailwind.config.js`.
- **Shader Animations**: `@paper-design/shaders-react` (Version `^0.0.76`) for WebGL-based mesh gradient background animation.
- **Icons**: `lucide-react` (Version `^0.446.0`) and `@tabler/icons-react` (Version `^3.44.0`) for clean, vector-based iconography.
- **CSS Transitions**: `tailwindcss-animate` (Version `^1.0.7`) and `framer-motion` (Version `^11.11.17`) for micro-interactions and transitions.
- **Utilities**: `clsx` and `tailwind-merge` combined into a custom `cn` class merger.

---

## 3. Design System & Aesthetics
The website adopts a premium, operations-first aesthetic. It uses custom color palettes, modern typography, and high-fidelity skeuomorphic elements.

### Color Palette
Custom design tokens are defined in `global-new.css` and mapped to Shadcn UI variables:
*   **Vivid Royal** (Dark Neutral): Base foreground and dark backgrounds (`--color-vivid-royal-50` to `-950`).
*   **Coffee Bean** (Accent Amber/Gold): Primary Call-to-Action accent (`--color-coffee-bean-50` to `-950`, primary hex `#F5CB5C`).
*   **Glaucous** (Slate Blue/Gray): Soft backgrounds and borders (`--color-glaucous-50` to `-950`, primary hex `#E8EDDF`).
*   **Scarlet Fire** (Warning Red): Demarcates operational leaks and drop-offs (`--color-scarlet-fire-50` to `-950`).
*   **Ghost White** (Card/Interactive Panel Background): High contrast backdrop for widgets (`--color-ghost-white-50` to `-950`).

### Typography
Three primary web fonts are configured:
1.  **Geist Sans** (`var(--font-geist-sans)`): Default body typography for high legibility.
2.  **Geist Mono** (`var(--font-geist-mono)`): Monospaced elements representing pipeline data, statistics, and terminal logs.
3.  **Share Tech** (`var(--font-share-tech)` / mapped to `font-heading`): Used for primary headers and sub-headers to give a modern, technical, operations-focused impression.

### High-Fidelity Skeuomorphism
Buttons and interactive panels use tactile, 3D skeuomorphic styling:
*   **Bevel Effect**: Constructed using light top borders (`border-t-white/45`), darker bottom borders (`border-b-[4px] border-b-coffee-bean-900`), and layered drop shadows.
*   **Press State**: Hover classes increase brightness, and active states shift elements downward (`active:translate-y-[2px] active:scale-[0.98]`) to mimic physical clicking.
*   **Glassmorphism**: Badge containers use translucent white overlays with inner shadows (`shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.25)]`) and backdrop blur.

---

## 4. Frontend Architecture & Folder Structure

```
/home/chakresh/ADX-webapp
├── docs/                        # Project documentation (this folder)
├── public/                      # Static assets (optimized WebP images, icons)
├── src/
│   ├── app/                     # Next.js App Router folders
│   │   ├── about/               # ADX Manifesto Page
│   │   ├── api/                 # Next.js API Routes (Serverless Endpoints)
│   │   │   ├── assets/          # Serving local assets (legacy)
│   │   │   ├── leads/           # Creates lead submissions and logs metadata
│   │   │   └── track/           # Tracks page views, exit triggers, and scroll analytics
│   │   ├── book/                # Diagnostic Scheduling Form Page
│   │   ├── discovery/           # Operational Discovery Process Page
│   │   ├── industries/          # Verticals Page (Coaching, Healthcare, Salons, etc.)
│   │   ├── insights/            # Operational Essays & Case Studies
│   │   ├── platform/            # Product Capabilities Page
│   │   ├── favicon.ico
│   │   ├── global-new.css       # Active CSS stylesheet containing styles & theme tokens
│   │   ├── globals.css          # Deprecated stylesheet (retains historical tokens)
│   │   ├── layout.tsx           # Base RootLayout including Navbar & Footer
│   │   └── page.tsx             # Homepage Layout
│   ├── components/              # Modular landing page & structural components
│   │   ├── ui/                  # Primitives (Background shader wrapper)
│   │   │   └── background-shader.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IndustriesSection.tsx  # Tabbed interactive industry widget for homepage
│   │   ├── LeakageSection.tsx   # Stateful interactive leakage pipeline
│   │   ├── Logo.tsx             # Reusable Brand SVG Logo
│   │   ├── MethodologySection.tsx
│   │   ├── MotionProvider.tsx   # Framer Motion tree context provider
│   │   ├── Navbar.tsx           # Global Header with "flying logo" transition
│   │   ├── OutcomesSection.tsx  # Toggleable Mess-vs-System dashboard
│   │   ├── ProcessSection.tsx
│   │   ├── SectionTracker.tsx   # Tracks scroll entry and exits of page sections
│   │   ├── TransformationSection.tsx
│   │   └── WhatWeObservedSection.tsx
│   └── lib/                     # Reusable client utilities
│       ├── db.ts                # Deprecated database helper
│       ├── track.ts             # Analytics POST payload wrapper
│       ├── usePageAnalytics.ts  # Scroll tracking, exit logging, and click listeners
│       └── utils.ts             # Tailwind CSS class merger utility (cn)
├── tsconfig.json                # TypeScript compilation config
├── package.json                 # Dependency manifest
└── components.json              # UI Component framework definition (Shadcn)
```

---

## 5. Route & Page Breakdown

1.  **Home (`/`)**: Integrates the primary sales landing experience. Focuses on introducing the "leakage pipeline" concept and showcasing what ADX solves.
2.  **Manifesto (`/about`)**: Explains the core philosophy: *"Systems over features"*, *"No buzzwords"*, and *"Measurable numbers"*. Details why custom systems outperform off-the-shelf software packages.
3.  **Discovery Process (`/discovery`)**: Breaks down the stages from booking to audit: Pre-Call Setup, Operational Walkthrough, and Diagnostic Report generation.
4.  **Industries (`/industries`)**: Deep-dives into 5 target industry verticals. Maps out specific operational pain points (e.g., manual fee chasing, phone scheduling, technician tracking) against ADX solutions.
5.  **Platform (`/platform`)**: Showcases structural integrations: Real-time BI dashboards, WhatsApp Cloud API database triggers, and Unified relational databases.
6.  **Insights (`/insights`)**: Holds blog essays addressing conversion bottlenecks and organizational routines.
7.  **Diagnostic Call Booking (`/book`)**: Collects user profiles (vertical, volume, bottleneck, contact info) and outputs a mock pipeline configuration to transition leads into operational diagnostics.

---

## 6. Dynamic Component Features

-   **Interactive Leakage Pipeline (`LeakageSection.tsx`)**: An interactive pipeline widget allowing users to click through stages (Intake, Follow-up, Booking, Payment) to view conversion drop-offs (e.g., -45% drop-off in lead intake) and financial impacts alongside the ADX solution.
-   **Procedural FAQ Accordion (`FaqSection.tsx`)**: Custom accordion widget utilizing React state (`activeFaq`) and dynamic styling to open and close answers to objections without external component libraries.
-   **Tactile Vertical Showcase (`IndustriesSection.tsx` / `Industries Page`)**: Segmented styling displaying vertical cards. Clicking CTA buttons forwards vertical context via URL search parameters (`?vertical=...`) directly to the booking form.
-   **Live Interactive Simulations**: Embedded CSS/Tailwind mini-simulators representing fee reminders, patient calendars, client recall timelines, member check-ins, and milestone approvals.
-   **Real-time Analytics (`usePageAnalytics.ts`)**: Captures mouse clicks on CTAs, total elapsed time-on-page, maximum scroll depth, and exit triggers, dispatching payloads asynchronously to the server.

---

## 7. Operational Progress: Sprints & Updates

The following deliverables have been successfully implemented:

1.  **Zero-Dependency Interactive Mockups (Frontend Upgrade)**:
    *   Substituted the static, external `/api/assets` image references inside the homepage's Industries section with rich, interactive, state-driven CSS/Tailwind simulation panels.
    *   Designed responsive interaction states (shadow shifts, scaling, border coloring, and translate offsets) to optimize user interaction feedback.

2.  **Industries Page Refactoring (SEO & Navigation)**:
    *   Implemented a tabbed vertical navigation layout on `/industries` page to cleanly present multi-dimensional data without page clutter.
    *   Converted rendering logic to CSS-based visibility hooks (`opacity-0 pointer-events-none invisible h-0 overflow-hidden` / active transitions) to ensure all vertical-specific copy remains in the DOM for search crawler indexation.
    *   Integrated an expandable/collapsible comparative timeline component ("Day in the Life Comparison") on the Industries page to contrast the traditional manual chaos with the automated peace of ADX.

3.  **Hardware-Accelerated Brand Logo Transitions**:
    *   Refactored the Hero-to-Navbar flying logo transition animation to use static coordinate caching and hardware-accelerated CSS transforms, eliminating cross-browser layout shifts and frame drops.

4.  **Client-Server Integration & API Routes**:
    *   Formulated real-world POST endpoints at `/api/leads` and `/api/track` to handle active analytics logging and lead registration from the frontend.
    *   Implemented local directory resolution checks in the server logic to avoid initialization failures.

5.  **Design Tokens & WebGL Animation**:
    *   Integrated WebGL canvas background using `@paper-design/shaders-react` within the hero section to display a fluid, slow-moving mesh gradient, adding a modern aesthetic.
    *   Added `@keyframes` animations (`grid-move`, `gradient-shift`) for moving background grids and text transitions.
    *   Converted legacy image files to optimized WebP formats, drastically reducing network payloads.

---

## 8. Global Skill & Shortcut Inheritance (AGENTS.md)
The project inherits the following foundational execution skills from the root `AGENTS.md` guidelines. Any future development or modification must strictly adhere to these:

1.  **`!taste` / `design-taste-frontend`**:
    *   **Aesthetics First**: Focus on custom display typography (Share Tech, Geist Mono) and off-white/dark contrasting palettes instead of default slate-900 or generic SaaS "AI-purple/blue" gradients (strictly avoiding the "Lila Rule" slop).
    *   **Tactile Materiality**: Active states must simulate micro-physical pushes (e.g., `active:translate-y-[2px] active:scale-[0.98]`) with high-contrast, robust borders.
    *   **Corner Radius Consistency**: Uniform shape locks (e.g., inputs and cards locked to clean scale).
    
2.  **`!impeccable` / `impeccable`**:
    *   **No Placeholders**: Deprecate fake assets, mock URLs, and raw file dependencies. All content must utilize verified structural data or interactive live components.
    *   **Contrast & Legibility**: Ensure strict WCAG AA contrast compliance across all text layers (e.g., buttons, form fields, and placeholders) and prevent text wrapping bugs on CTAs.
    *   **Structural Quality**: Keep HTML semantic (single H1, clean H2/H3 hierarchy, clean grid layouts over flex math).

3.  **`!uiuxpromax` / `ui-ux-pro-max`**:
    *   **Interactive Autonomy**: Leverage motion values and hardware-accelerated animations rather than CPU-blocking script loops.
    *   **Full UI States**: Build out robust loading, confirmation, and error states for all user transactions.

4.  **`!huashu` / `huashu-design`**:
    *   **Direct Positioning**: Focus copywriting on outcome-selling (recovered revenue, time saved, manual stress removed) rather than generic custom software jargon.
