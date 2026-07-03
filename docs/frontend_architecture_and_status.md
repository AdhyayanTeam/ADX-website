# ADX (AdhyayanX) Frontend Architecture & Progress Report

This document outlines the technical frontend architecture of the ADX website, its design principles, folder structures, component breakdown, and a log of the operational improvements implemented so far.

---

## 1. Overview
ADX (AdhyayanX) is an operations-first software engineering suite tailored for Indian SMBs (Coaching Institutes, Clinics, Salons, Gyms, and Professional Services). The frontend is structured as a high-fidelity, high-conversion web application designed to demonstrate operational "leakage" in businesses and present customized automation solutions.

---

## 2. Tech Stack & Dependencies
The web application is built with a modern, performant, and visual-first JavaScript stack:

- **Framework**: [Next.js](https://nextjs.org/) (Version `16.2.10` / React `19.2.4` and React-DOM `19.2.4`) utilizing the App Router.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Version `^4.3.2`) configured alongside [PostCSS](https://postcss.org/) (`^8.5.16`). It leverages native Tailwind v4 `@theme` directives directly in CSS files for design token declarations, eliminating the need for a legacy `tailwind.config.js` file.
- **Shader Animations**: `@paper-design/shaders-react` (Version `^0.0.76`) for WebGL-based mesh gradient background animation.
- **Icons**: `lucide-react` (Version `^0.446.0`) for clean, vector-based iconography.
- **CSS Transitions**: `tailwindcss-animate` (Version `^1.0.7`) for micro-interactions and transitions.
- **Utilities**: `clsx` and `tailwind-merge` combined into a custom `cn` class merger.

---

## 3. Design System & Aesthetics
The website adopts a premium, operations-first aesthetic. It uses custom color palettes, modern typography, and high-fidelity skeuomorphic elements.

### Color Palette
Custom design tokens are defined in `global-new.css` and mapped to Shadcn UI variables:
*   **Vivid Royal** (Brand Purple/Blue): Base brand color (`--color-vivid-royal-50` to `-950`).
*   **Coffee Bean** (Accent Crimson/Pink): Primary Call-to-Action accent (`--color-coffee-bean-50` to `-950`).
*   **Glaucous** (Slate Blue): Backgrounds and soft borders (`--color-glaucous-50` to `-950`).
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
*   **Press State**: Hover classes increase brightness, and active states shift elements downward (`active:translate-y-[3px] active:border-b-[1px]`) to mimic physical clicking.
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
│   │   ├── book/                # Diagnostic Scheduling Form Page
│   │   ├── discovery/           # Operational Discovery Process Page
│   │   ├── industries/          # Verticals Page (Coaching, Healthcare, Salons, etc.)
│   │   ├── insights/            # Operational Essays & Case Studies
│   │   ├── platform/            # Product Capabilities Page
│   │   ├── favicon.ico
│   │   ├── global-new.css       # Core Tailwind CSS directives & theme variables
│   │   ├── globals.css          # CSS styles (synced theme variables)
│   │   ├── layout.tsx           # Base RootLayout including Navbar & Footer
│   │   └── page.tsx             # Homepage Layout
│   ├── components/              # Modular landing page & structural components
│   │   ├── ui/                  # Primitives (Background shader wrapper, demo files)
│   │   │   └── background-shader.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── LeakageSection.tsx   # Stateful interactive leakage pipeline
│   │   ├── Logo.tsx             # Reusable Brand SVG Logo
│   │   ├── MethodologySection.tsx
│   │   ├── Navbar.tsx           # Global Header
│   │   ├── OutcomesSection.tsx
│   │   └── ProcessSection.tsx
│   └── lib/                     # Reusable utilities
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
-   **Pre-visit Diagnostic Output (`Book Page`)**: Handles submission and displays a mock pipeline activation log containing dynamic pipeline IDs to simulate real-time operations triggers.

---

## 7. Operational Progress: What Has Been Done Till Now

The following deliverables have been successfully implemented:

1.  **Architecture Decoupling (Refactoring)**:
    *   Decoupled the monolithic homepage layout inside `src/app/page.tsx`.
    *   Moved each segment into individual, self-contained functional components inside `src/components/` (e.g., `HeroSection.tsx`, `LeakageSection.tsx`, `OutcomesSection.tsx`, `MethodologySection.tsx`, `IndustriesSection.tsx`, etc.).
    *   Maintained clean absolute path imports (`@/...`) and isolated state logic for the interactive widgets.

2.  **Skeuomorphic & 3D UI Overhaul**:
    *   Applied tactile skeuomorphic formatting to main calls-to-action, navigation elements, badges, and background cards.
    *   Designed responsive interaction states (shadow shifts, scaling, border coloring, and translate offsets) to optimize user interaction feedback.

3.  **Responsive Optimization**:
    *   Resolved mobile alignment and overflow issues.
    *   Designed vertical-centered hero section scaling on mobile, ensuring responsive menu toggles do not conflict with the site logo or header elements.
    *   Adjusted layout grids on `/platform`, `/industries`, and `/discovery` to snap cleanly on smaller viewports.

4.  **Premium Animation Integrations**:
    *   Integrated WebGL canvas background using `@paper-design/shaders-react` within the hero section to display a fluid, slow-moving mesh gradient, adding a modern aesthetic.
    *   Added `@keyframes` animations (`grid-move`, `gradient-shift`) for moving background grids and text transitions.

5.  **Asset Optimization**:
    *   Converted legacy image files to optimized WebP formats, drastically reducing network payloads while maintaining high resolution.
    *   Configured standard metadata tags inside `src/app/layout.tsx` for core search indexing support.
