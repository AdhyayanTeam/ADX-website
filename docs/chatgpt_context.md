# ADX (AdhyayanX) — Complete Project Context for AI Assistants

> **Purpose**: This document gives any AI assistant (ChatGPT, Claude, etc.) full context about the ADX webapp project — its business model, architecture, current state, known issues, and future roadmap. Use this to stay aligned with what the team actually wants.

---

## 1. Project Overview

**ADX (AdhyayanX)** is an operations-first software engineering service for Indian SMBs. We do NOT sell generic SaaS subscriptions — we build custom operations engines (databases, WhatsApp flows, dashboards, payment automation) tailored to each business's specific workflow.

### Target Verticals
| Vertical | Examples of Clients |
|----------|-------------------|
| Coaching Institutes | JEE/NEET coaching, test prep centers |
| Healthcare Clinics | Dental clinics, physiotherapy, multi-specialty |
| Salons & Wellness | Hair salons, spas, unisex salons |
| Gyms & Fitness | Independent gyms, boutique fitness studios |
| Professional Services | CA firms, consultants, small legal practices |

### Core Value Proposition
> "We eliminate the manual spreadsheets, WhatsApp chaos, and payment chases that are silently draining SMB revenue."

The specific pain points we solve:
- **Lead decay**: Leads from Facebook/Google ads sit for hours because no one follows up instantly
- **Manual follow-ups**: Staff use personal WhatsApp for business, no tracking, no accountability
- **Booking friction**: Phone-tag scheduling, double-booking, no-shows
- **Payment leakage**: 15-20% outstanding fees at any time, manual chasing via phone/UPI
- **No reporting**: Business owners have zero real-time visibility into pipeline or collections

### Our Differentiation
- **Custom-built**, not off-the-shelf (no forcing square peg in round hole)
- **Operations-first**: We shadow staff for days before writing code — we fix the process, then build the tool
- **WhatsApp-native**: All solutions integrate with WhatsApp Cloud API (where Indian SMBs already talk to customers)
- **14-day pilot**: We deploy a working prototype in 14 days
- **No recurring SaaS fees** for the custom engine — clients pay for build + maintenance

---

## 2. Business Model & Sales Funnel

### Revenue Model
- **Diagnostic Call** (free) → **Operational Audit** → **Build Proposal** (₹X lakhs) → **14-Day Pilot** → **Full Build** → **Monthly Maintenance**

### The Funnel (as reflected in the website)
```
Homepage (`/`)
  → Hero + Leakage (hooks them with pain)
  → Methodology (shows we have a system)
  → Outcomes (proves it works)
  → Industries/Platform (deep dive)
  → Case Studies (social proof)
  → Book Discovery Call (`/book`) [CTA]
```

**Key conversion paths:**
- Main CTA buttons: "Book a Discovery Call" (links to `/book`)
- Industry page CTAs: `?vertical=coaching` params passed to booking form
- Every page has some CTA to push toward the booking form

### Booking Form (`/book`)
The booking form is fully functional on the client side and submits payloads to the backend `/api/leads` route to capture customer data and output reference IDs.

---

## 3. Tech Stack

| Technology | Version | Notes |
|-----------|---------|-------|
| Next.js | 16.2.10 | App Router. **Breaking changes from earlier Next.js versions** — read `node_modules/next/dist/docs/` before coding |
| React | 19.2.4 | Server components supported; interactive pages utilize client hooks (`"use client"`) |
| TypeScript | ^5 | strict mode enabled |
| Tailwind CSS | 4.3.2 | Uses `@theme` directives in CSS (no `tailwind.config.js`) |
| PostCSS | 8.5.16 | With `@tailwindcss/postcss` plugin |
| Shadcn UI | configured | Only `bento-grid.tsx` used so far |
| WebGL | @paper-design/shaders-react | Mesh gradient hero background |
| Icons | lucide-react 0.446 + @tabler/icons-react 3.44.0 | Fully integrated |
| CSS animations | tailwindcss-animate 1.0.7 | For micro-interactions |
| Utilities | clsx + tailwind-merge | Via `cn()` in `@/lib/utils` |
| Fonts | Geist Sans, Geist Mono, Share Tech | Via `next/font/google` |
| State | React useState only | No Redux or global context wrappers |
| Testing | **NONE** | No test framework installed |
| Backend | Next.js API Routes | Serverless endpoints for analytics tracking (`/api/track`) and lead capture (`/api/leads`). Database calls are mocked in console output. |
| Auth | **NONE** | No authentication system |

---

## 4. Design System

### Color Palette (defined in `global-new.css` via `@theme`)
All colors available as Tailwind classes like `bg-coffee-bean-500`, `text-vivid-royal-950`, etc.

| Token | Shade Range | Usage |
|-------|------------|-------|
| `coffee-bean` | 50–950 | Accent Amber/Gold. Primary CTA buttons, highlights, brand accent (`#F5CB5C`) |
| `vivid-royal` | 50–950 | Dark neutral. Body text, foregrounds, dark backgrounds (`#242423`) |
| `glaucous` | 50–950 | Slate green-gray. Page backgrounds, section backgrounds (`#E8EDDF`) |
| `scarlet-fire` | 50–950 | Red. Leakage/warnings, drop-off indicators, error states |
| `ghost-white` | 50–950 | Near-white. Cards, elevated panels, interactive surfaces |

### Typography
- **Geist Sans** (`--font-geist-sans`): Body text, paragraphs
- **Geist Mono** (`--font-geist-mono`): Statistics, pipeline data, code-like elements
- **Share Tech** (`--font-share-tech`, mapped to `font-heading`): All major headings (H1, H2, section titles)

### Skeuomorphic Design Patterns
Buttons and interactive elements use a tactile 3D style:
- Light top border (`border-t-white/45`)
- Dark thick bottom border (`border-b-[4px] border-b-coffee-bean-900`)
- Drop shadows on default state
- Hover: increased brightness
- Active: `translate-y-[2px] scale-[0.98]` + thin bottom border (simulates pressing)
- Glassmorphism: translucent white overlays, `backdrop-blur`, inner shadows

---

## 5. Current Architecture

### Route Map

| Route | File | Content | State |
|-------|------|---------|-------|
| `/` | `src/app/page.tsx` | Homepage: Hero → Leakage → Methodology → Outcomes → Industries → Process → Case Studies → FAQ | Complete |
| `/about` | `src/app/about/page.tsx` | Manifesto page — philosophy, core beliefs | Complete |
| `/book` | `src/app/book/page.tsx` | Diagnostic booking form — 6 fields, API route POST | Complete |
| `/discovery` | `src/app/discovery/page.tsx` | 3-step discovery process with mock diagnostic report | Complete |
| `/industries` | `src/app/industries/page.tsx` | 5 industry vertical deep-dives (tabbed vertical layout, collapsible Day in the Life timeline) | Complete |
| `/insights` | `src/app/insights/page.tsx` | Blog/case study cards — 3 placeholder articles | Placeholder |
| `/platform` | `src/app/platform/page.tsx` | 3 platform capabilities with visual mockups | Complete |
| `/api/leads` | `src/app/api/leads/route.ts` | Endpoint for capturing lead info and logging details | Functional (No DB) |
| `/api/track` | `src/app/api/track/route.ts` | Endpoint for capturing analytics scroll, views, and CTA hits | Functional (No DB) |
| `/api/assets` | `src/app/api/assets/route.ts` | Legacy endpoint for servicing raw PNG files | Legacy/Deprecated |

### Component Tree

```
layout.tsx (root layout)
├── Navbar (fixed top, 6 links, mobile hamburger, CTA button, flying logo transition)
├── {children} (page content)
└── footer (4-column grid: brand, verticals, platform, company)

Homepage page.tsx:
├── HeroSection (mesh gradient bg, headline, 3 stats)
├── LeakageSection (4-stage pipeline with drop-offs)
├── MethodologySection (6-step bento grid, before/after)
├── OutcomesSection (toggle: traditional vs ADX, 6 metrics)
├── IndustriesSection (tabbed: 5 verticals, interactive simulators)
├── ProcessSection (5-step horizontal process)
├── CaseStudiesSection (2 case study cards)
└── FaqSection (accordion, 4 questions)
```

---

## 6. Content Status: Real vs Placeholder

| Section | Type | Status | What's Real | What's Placeholder |
|---------|------|--------|-------------|-------------------|
| Hero stats | Metrics | Placeholder | — | ₹4.2Cr Revenue Recovered, 80k+ Hours Saved, 14 Days |
| Case Studies | Names + Numbers | Placeholder | — | "Delhi Coaching Academy", "Dr. Mehta Ortho Clinics" |
| Leakage %s | Drop-off rates | Placeholder | — | -45%, -30%, -15%, -12% |
| Diagnostic Report | Metrics | Placeholder | — | "Response Latency: 12 mins", "Unmatched Leads: 32%" |
| FAQ | Answers | Draft | Core objections are right | Answers lack real-world specifics |
| Blog/Insights | Articles | Placeholder | — | "JULY 2026", "JUNE 2026" — no real content |
| Methodology steps | Framework | Real | 6-step methodology is the actual ADX process | Step descriptions need polish |
| Industry descriptions | Verticals | Draft | Pain points are based on real observations | Need specific Indian examples |

---

## 7. Known Issues & Cleanup Needed

### High Priority
1. **Interactive Mockups on Industries Page**: The `/industries` route uses static PNG references to `/api/assets` whereas the homepage's industries widget uses zero-dependency CSS/Tailwind simulation panels. It would be optimal to unify and migrate the main industries page to CSS mockups to fully remove the legacy `/api/assets` endpoint.
2. **Postgres Setup**: The project depends on `pg` in dependencies but currently uses `console.log` for backend persistence.
3. **No environment variables**: No `.env` file or configuration exists.

### Medium Priority
4. **All pages are `"use client"`**: Opportunity to refactor non-interactive leaves or pages to React Server Components (RSC) to increase page load performance.
5. **No `metadata` export on individual pages**: Only the root layout has metadata; individual pages could benefit from their own SEO metadata.

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
