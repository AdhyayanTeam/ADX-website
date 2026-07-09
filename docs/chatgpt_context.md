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
Currently **mock/simulated** — onSubmit uses `setTimeout` to simulate API call, shows a fake pipeline ID. This needs a real backend eventually.

---

## 3. Tech Stack

| Technology | Version | Notes |
|-----------|---------|-------|
| Next.js | 16.2.10 | App Router. **Breaking changes from earlier Next.js versions** — read `node_modules/next/dist/docs/` before coding |
| React | 19.2.4 | Server components supported but **ALL current pages are `"use client"`** |
| TypeScript | ^5 | strict mode enabled |
| Tailwind CSS | 4.3.2 | Uses `@theme` directives in CSS (no `tailwind.config.js`) |
| PostCSS | 8.5.16 | With `@tailwindcss/postcss` plugin |
| Shadcn UI | configured | Only `bento-grid.tsx` used so far |
| WebGL | @paper-design/shaders-react | Mesh gradient hero background |
| Icons | lucide-react 0.446 | + @tabler/icons-react installed but unused |
| CSS animations | tailwindcss-animate 1.0.7 | For micro-interactions |
| Utilities | clsx + tailwind-merge | Via `cn()` in `@/lib/utils` |
| Fonts | Geist Sans, Geist Mono, Share Tech | Via `next/font/google` |
| State | React useState only | No Redux, Zustand, Context API |
| Testing | **NONE** | No test framework installed |
| Backend | **NONE** | No API routes, no database, no ORM |
| Auth | **NONE** | No authentication system |

### Important Next.js v16 Notes
- The `AGENTS.md` warns that this is NOT the Next.js you know from training data
- Check `node_modules/next/dist/docs/` for the latest API changes before implementing anything
- The project uses the App Router (`src/app/`), NOT Pages Router

---

## 4. Design System

### Color Palette (defined in `global-new.css` via `@theme`)
All colors available as Tailwind classes like `bg-coffee-bean-500`, `text-vivid-royal-950`, etc.

| Token | Shade Range | Usage |
|-------|------------|-------|
| `coffee-bean` | 50–950 | Amber/gold accent. Primary CTA buttons, highlights, brand accent (`#F5CB5C`) |
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
- Active: `translate-y-[3px]` + thin bottom border (simulates pressing)
- Glassmorphism: translucent white overlays, `backdrop-blur`, inner shadows

### Custom CSS Animations (in `global-new.css`)
- `gridMove`: Moving background grid lines
- `lineMove`: Animated line patterns
- `cornerLineAnimation`: Corner bracket animations
- `gradientShift`: Slow gradient color shifts
- Custom methodology section classes: `.methodology-step-num`, `.methodology-path-old`, `.methodology-path-new`, `.methodology-metric-val`, etc.

---

## 5. Current Architecture

### Route Map

| Route | File | Content | State |
|-------|------|---------|-------|
| `/` | `src/app/page.tsx` | Homepage: Hero → Leakage → Methodology → Outcomes → Industries → Process → Case Studies → FAQ | Complete (content is placeholder) |
| `/about` | `src/app/about/page.tsx` | Manifesto page — philosophy, core beliefs | Complete (needs real founder story) |
| `/book` | `src/app/book/page.tsx` | Diagnostic booking form — 6 fields, mock submission | **Mock only** — needs real backend |
| `/discovery` | `src/app/discovery/page.tsx` | 3-step discovery process with mock diagnostic report | Complete (placeholder metrics) |
| `/industries` | `src/app/industries/page.tsx` | 5 industry vertical deep-dives | Complete (content is placeholder) |
| `/insights` | `src/app/insights/page.tsx` | Blog/case study cards — 3 placeholder articles | **Placeholder content only** |
| `/platform` | `src/app/platform/page.tsx` | 3 platform capabilities with visual mockups | Complete (needs real tech details) |

### Component Tree

```
layout.tsx (root layout)
├── Navbar (fixed top, 6 links, mobile hamburger, CTA button)
├── {children} (page content)
└── footer (4-column grid: brand, verticals, platform, company)

Homepage page.tsx:
├── HeroSection (mesh gradient bg, headline, 3 stats)
├── LeakageSection (4-stage pipeline with drop-offs)
├── MethodologySection (6-step bento grid, before/after)
├── OutcomesSection (toggle: traditional vs ADX, 6 metrics)
├── IndustriesSection (tabbed: 5 verticals, bottlenecks vs solutions)
├── ProcessSection (5-step horizontal process)
├── CaseStudiesSection (2 case study cards)
└── FaqSection (accordion, 4 questions)
```

### State Management
- **Pure local state** — no global state, no context, no external libraries
- Components with state:
  - `Navbar`: `isOpen` (mobile menu), closes on route change via `useEffect`
  - `OutcomesSection`: `isOptimized` (toggle boolean)
  - `IndustriesSection`: `activeInd` (selected tab)
  - `FaqSection`: `activeFaq` (which question is open)
  - `book/page.tsx`: `formData`, `isSubmitting`, `isSuccess`, `isMounted`

---

## 6. Content Status: Real vs Placeholder

This is CRITICAL for anyone working on content:

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

### Brand Voice Guidelines
- **Tone**: Direct, confident, no-nonsense. "We fix operations. Period."
- **Vocabulary**: Operations, pipeline, leakage, automation, systems, workflows, bottlenecks
- **Anti-vocabulary**: No buzzwords like "synergy", "disrupt", "paradigm shift", "leveraging AI" (unless actually using AI)
- **Target audience voice**: Speaks to a busy Indian business owner who trusts WhatsApp, knows what a spreadsheet is, and is tired of manual work
- **No emojis** in content (design elements may use them, but copy should not)

---

## 7. Known Issues & Cleanup Needed

These are explicitly flagged as things that need attention:

### High Priority
1. **Merge conflicts**: Both `src/app/globals.css` and `README.md` have unresolved `<<<<<<< HEAD` / `=======` / `>>>>>>>` markers
   - `globals.css` is not even imported (layout uses `global-new.css`), but it's still in the codebase
   - `README.md` has conflicting content that needs to be resolved
2. **Booking form is mock**: `/book/page.tsx` simulates submission with `setTimeout`. No actual API endpoint, no database storage, no WhatsApp notification
3. **No API routes**: `src/app/api/` directory does not exist. The project has zero backend
4. **No environment variables**: No `.env` file, no `.env.local`, no `.env.example`. No env vars are used in code

### Medium Priority
5. **No testing**: Zero test files, no testing framework installed
6. **All pages are `"use client"`**: Good opportunity to split into server components where possible for better performance
7. **No loading.tsx or error.tsx**: No loading states or error boundaries at the route level
8. **No `metadata` export on individual pages**: Only the root layout has metadata; individual pages could benefit from their own SEO metadata
9. **`@tabler/icons-react` is installed but unused**: Can be removed or put to use

### Low Priority
10. **`page.module.css` exists but is unused**: Leftover from `create-next-app` boilerplate
11. **Shadcn UI configured but barely used**: Only `bento-grid.tsx` in use; might want to use more primitives or remove the config
12. **No image optimization**: Images are not using Next.js `Image` component with proper sizing

---

## 8. Future Roadmap & Vision

### Short-term (what should be built next)
1. **Real backend for booking form**: API route to receive form data, store in database, trigger notification
2. **Resolve merge conflicts in globals.css and README.md**
3. **Real content**: Replace placeholder metrics, case studies, and blog articles with real client data
4. **SEO metadata**: Add `generateMetadata` to each page route for proper titles and descriptions

### Medium-term
5. **Database integration**: PostgreSQL/Supabase/SQLite for storing leads, form submissions
6. **WhatsApp Cloud API integration**: Auto-notify team when a booking form is submitted
7. **Admin dashboard**: Protected route where team can view submissions
8. **Loading states**: Add `loading.tsx` for each route group
9. **Error boundaries**: Add `error.tsx` for graceful error handling

### Long-term vision
10. **Client portal**: Clients log in to view their operations dashboard (real-time metrics)
11. **Multi-language**: Hindi + English bilingual support for wider Indian SMB reach
12. **Case study generator**: Dynamic case study pages with real data from client projects
13. **Blog CMS**: Move insights page to a CMS-backed system (or MDX-based)
14. **Performance optimization**: Audit Core Web Vitals, implement proper image optimization, lazy loading

---

## 9. File Reference Map

### Configuration & Root
| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts (`dev`, `build`, `start`, `lint`) |
| `next.config.ts` | Next.js config (minimal — just `reactStrictMode: true`) |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` plugin |
| `eslint.config.mjs` | ESLint flat config (Next.js core-web-vitals + TypeScript) |
| `components.json` | Shadcn UI config (registered @aceternity registry) |
| `AGENTS.md` | Warning about Next.js breaking changes |

### Source Code
| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — fonts, metadata, Navbar + Footer |
| `src/app/global-new.css` | **Active** CSS — Tailwind v4 theme, animations, methodology styles |
| `src/app/globals.css` | **Inactive** — has merge conflict, not imported |
| `src/app/page.tsx` | Homepage — orchestrates all section components |
| `src/lib/utils.ts` | `cn()` utility: clsx + tailwind-merge |
| `src/components/Navbar.tsx` | Fixed navbar, mobile menu, `usePathname` for active state |
| `src/components/HeroSection.tsx` | Main hero — mesh gradient, headline, 3 stats |
| `src/components/LeakageSection.tsx` | 4-stage revenue leakage pipeline |
| `src/components/MethodologySection.tsx` | 6-step bento grid methodology |
| `src/components/OutcomesSection.tsx` | Toggle: traditional vs ADX outcomes |
| `src/components/IndustriesSection.tsx` | Tabbed industry selector (reused pattern on `/industries` page) |
| `src/components/ProcessSection.tsx` | 5-step horizontal process flow |
| `src/components/CaseStudiesSection.tsx` | 2 case study cards |
| `src/components/FaqSection.tsx` | Accordion FAQ |
| `src/components/Logo.tsx` | Brand logo component |
| `src/components/ui/bento-grid.tsx` | BentoGrid + BentoGridItem primitives |

### Docs
| File | Purpose |
|------|---------|
| `docs/frontend_architecture_and_status.md` | Technical architecture doc (by Chakresh) |
| `docs/website_content_seo_guide.md` | SEO strategy, keyword clusters, content requirements |
| `docs/chatgpt_context.md` | **This file** — comprehensive project context |

---

## 10. Do's and Don'ts for AI Assistants

### Do
- Use `@/` path alias for imports (e.g., `@/components/Navbar`, `@/lib/utils`)
- Use Tailwind v4 `@theme` syntax when modifying CSS (NOT `tailwind.config.js`)
- Keep the skeuomorphic button patterns (layered borders, press states)
- Use `cn()` utility for conditional class merging
- Maintain `"use client"` directive on interactive components
- Use `next/navigation` (NOT `next/router`) for routing hooks
- Check `components.json` aliases before using component paths
- Use `lucide-react` icons (consistent with existing setup)
- Keep all pages as client components until server components are explicitly introduced

### Don't
- **Don't** add comments to code unless absolutely necessary for explanation
- **Don't** add emojis to copy/content files
- **Don't** assume any backend exists — the project is currently 100% frontend
- **Don't** add environment variables without also creating `.env.example`
- **Don't** introduce new dependencies without checking if existing ones can do the job
- **Don't** create new CSS files — use `global-new.css` or inline Tailwind
- **Don't** use `tailwind.config.js` — Tailwind v4 uses CSS-based `@theme` config
- **Don't** create documentation files (.md) unless explicitly requested
- **Don't** let the stale `globals.css` (with merge conflict) confuse you — `global-new.css` is the active one
- **Don't** add Redux, Zustand, or Context API unless local state is truly insufficient

---

## 11. Quick Reference

### Dev Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

### Key Scripts (from package.json)
Only those 4 scripts exist. No test, no type-check, no format scripts.

### Path Aliases
| Alias | Maps to |
|-------|---------|
| `@/*` | `./src/*` |
| `@/components/*` | `./src/components/*` |
| `@/components/ui/*` | `./src/components/ui/*` |
| `@/lib/*` | `./src/lib/*` |

### Active Imported CSS File
`src/app/global-new.css` (imported via `layout.tsx`)

---
