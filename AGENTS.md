<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Global Skill Inheritance & Shortcuts

The following four global design/development skills are fully inherited. When any of these shortcuts are present in the user request, the agent **MUST** activate and strictly follow the corresponding skill's complete instructions.

* **`!taste`** or **`/taste`** -> Activates `design-taste-frontend`
* **`!impeccable`** or **`/impeccable`** -> Activates `impeccable`
* **`!uiuxpromax`** or **`/uiuxpromax`** -> Activates `ui-ux-pro-max`
* **`!huashu`** or **`/huashu`** -> Activates `huashu-design`

---

# SKILL: design-taste-frontend

# tasteskill: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

---

## 0. BRIEF INFERENCE (Read the Room Before Anything Else)

Before touching code or tweaking dials, **infer what the user actually wants**. Most LLM design output is bad because the model jumps to a default aesthetic instead of reading the room.

### 0.A Read these signals first
1. **Page kind** - landing (SaaS / consumer / agency / event), portfolio (dev / designer / creative studio), redesign (preserve vs overhaul), editorial / blog.
2. **Vibe words** the user used - "minimalist", "calm", "Linear-style", "Awwwards", "brutalist", "premium consumer", "Apple-y", "playful", "serious B2B", "editorial", "agency-y", "glassy", "dark tech".
3. **Reference signals** - URLs they linked, screenshots they pasted, products they named, brands they're competing with.
4. **Audience** - B2B procurement panel vs. design-conscious consumer vs. recruiter scanning a portfolio. The audience picks the aesthetic, not your taste.
5. **Brand assets that already exist** - logo, color, type, photography. For redesigns, these are starting material, not optional input (see Section 11).
6. **Quiet constraints** - accessibility-first audiences, public-sector, regulated industries, trust-first commerce, kids' products. These constraints OVERRIDE aesthetic preference.

### 0.B Output a one-line "Design Read" before generating
Before any code, state in one line: **"Reading this as: \<page kind> for \<audience>, with a \<vibe> language, leaning toward \<design system or aesthetic family>."**

Example reads:
- *"Reading this as: B2B SaaS landing for technical buyers, with a Linear-style minimalist language, leaning toward Tailwind utilities + Geist + restrained motion."*
- *"Reading this as: solo designer portfolio for hiring managers, with an editorial / kinetic-type language, leaning toward native CSS + scroll-driven animation + custom typography."*
- *"Reading this as: redesign of a public-sector service site, with a trust-first language, leaning toward GOV.UK Frontend or USWDS."*

### 0.C If the brief is ambiguous, ask one question, do not guess
Ask exactly **one** clarifying question - never a multi-question dump - and only when the design read genuinely diverges. Example: *"Should this feel closer to Linear-clean or Awwwards-experimental?"*

If you can confidently infer from context, **do not ask**. Just declare the design read and proceed.

### 0.D Anti-Default Discipline
Do not default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism on everything, infinite-loop micro-animations everywhere, Inter + slate-900. These are the LLM defaults. Reach past them deliberately based on the design read.

---

## 1. THE THREE DIALS (Core Configuration)

After the design read, set three dials. Every layout, motion, and density decision below is gated by these.

* **`DESIGN_VARIANCE: 8`** - 1 = Perfect Symmetry, 10 = Artsy Chaos
* **`MOTION_INTENSITY: 6`** - 1 = Static, 10 = Cinematic / Physics
* **`VISUAL_DENSITY: 4`** - 1 = Art Gallery / Airy, 10 = Cockpit / Packed Data

**Baseline:** `8 / 6 / 4`. Use these unless the design read overrides them. Do not ask the user to edit this file - overrides happen conversationally.

### 1.A Dial Inference (design read → dial values)
| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| "minimalist / clean / calm / editorial / Linear-style" | 5-6 | 3-4 | 2-3 |
| "premium consumer / Apple-y / luxury / brand" | 7-8 | 5-7 | 3-4 |
| "playful / wild / Dribbble / Awwwards / experimental / agency" | 9-10 | 8-10 | 3-4 |
| "landing page / portfolio / marketing site (default)" | 7-9 | 6-8 | 3-5 |
| "trust-first / public-sector / regulated / accessibility-critical" | 3-4 | 2-3 | 4-5 |
| "redesign - preserve" | match existing | +1 | match existing |
| "redesign - overhaul" | +2 | +2 | match existing |

### 1.B Use-Case Presets
| Use case | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| Landing (SaaS, mainstream) | 7 | 6 | 4 |
| Landing (Agency / creative) | 9 | 8 | 3 |
| Landing (Premium consumer) | 7 | 6 | 3 |
| Portfolio (Designer / studio) | 8 | 7 | 3 |
| Portfolio (Developer) | 6 | 5 | 4 |
| Editorial / Blog | 6 | 4 | 3 |
| Public-sector service | 3 | 2 | 5 |
| Redesign - preserve | match | match+1 | match |
| Redesign - overhaul | +2 | +2 | match |

### 1.C How the Dials Drive Output
Use these (or user-overridden values) as global variables. Cross-references throughout this document refer to these exact variable names - never invent aliases like `LAYOUT_VARIANCE` or `ANIM_LEVEL`.

---

## 2. BRIEF → DESIGN SYSTEM MAP

Once you have the design read (Section 0) and dials (Section 1), pick the right foundation. Do not invent CSS for things that have an official package. Do not pretend an aesthetic trend is an official system.

### 2.A When to reach for a real design system (use official packages)
| Brief reads as… | Reach for | Why |
|---|---|---|
| Microsoft / enterprise SaaS / dashboards | `@fluentui/react-components` or `@fluentui/web-components` | Official Fluent UI, Microsoft tokens, accessibility done |
| Google-ish UI, Material-flavored product | `@material/web` + Material 3 tokens | Official, theme-able via Material Theming |
| IBM-style B2B / enterprise analytics | `@carbon/react` + `@carbon/styles` | Official Carbon, mature data-density patterns |
| Shopify app surfaces | `polaris.js` web components / Polaris React | Required for Shopify admin UI |
| Atlassian / Jira-style product | `@atlaskit/*` + `@atlaskit/tokens` | Official Atlassian DS |
| GitHub-style devtool / community page | `@primer/css` or `@primer/react-brand` | Official Primer; Brand variant for marketing |
| Public-sector UK service | `govuk-frontend` | Legally / regulatorily expected |
| US public-sector / trust-first | `uswds` | Same |
| Fast local-business / agency MVP | Bootstrap 5.3 | Boring, fast, works |
| Modern accessible React foundation | `@radix-ui/themes` | Primitives + polished theme |
| Modern SaaS where you own the components | shadcn/ui (`npx shadcn@latest add ...`) | You own the code, easy to customise; never ship default state |
| Tailwind-based modern SaaS / AI marketing | Tailwind v4 utilities + `dark:` variant | Default for indie + small team builds |

**Honesty rule:** if the brief reads as one of the systems above, install and use the **official** package. Do not recreate its CSS by hand. Do not import a system's tokens but then override 90% of them.

**One system per project.** Do not mix Fluent React with Carbon in the same tree. Do not import shadcn/ui components into a Material 3 app.

### 2.B When the brief is an aesthetic, not a system
For these directions, there is **no single official package**. Build with native CSS + Tailwind + a maintained component library. Be honest in code comments about what is borrowed inspiration vs. official material.

| Aesthetic | Honest implementation |
|---|---|
| Glassmorphism / "frosted glass" | `backdrop-filter`, layered borders, highlight overlays. Provide solid-fill fallback for `prefers-reduced-transparency`. |
| Bento (Apple-style tile grids) | CSS Grid with mixed cell sizes. No single library owns this. |
| Brutalism | Native CSS, monospace, raw borders. No library. |
| Editorial / magazine | Serif type, asymmetric grid, generous whitespace. No library. |
| Dark tech / hacker | Mono + accent neon, terminal motifs. No library. |
| Aurora / mesh gradients | SVG or layered radial gradients. No library. |
| Kinetic typography | Native CSS animations, scroll-driven animations, GSAP for hijacks. No library. |
| **Apple Liquid Glass** | Apple documents this for Apple platforms only. **There is no official `liquid-glass.css`.** Web implementations are approximations using `backdrop-filter` + layered borders + highlights. Label clearly as approximation. |

---

## 3. DEFAULT ARCHITECTURE & CONVENTIONS

Unless the design read picks a real design system (Section 2.A), these are the defaults:

### 3.A Stack
* **Framework:** React or Next.js. Default to Server Components (RSC).
  * **RSC SAFETY:** Global state works ONLY in Client Components. In Next.js, wrap providers in a `"use client"` component.
  * **INTERACTIVITY ISOLATION:** Any component using Motion, scroll listeners, or pointer physics MUST be an isolated leaf with `'use client'` at the top. Server Components render static layouts only.
* **Styling:** **Tailwind v4** (default). Tailwind v3 only if the existing project demands it.
  * For v4: do NOT use `tailwindcss` plugin in `postcss.config.js`. Use `@tailwindcss/postcss` or the Vite plugin.
* **Animation:** **Motion** (the library formerly known as Framer Motion). Import from `motion/react` (`import { motion } from "motion/react"`). The `framer-motion` package still works as a legacy alias - prefer `motion/react` in new code.
* **Fonts:** Always use `next/font` (Next.js) or self-host with `@font-face` + `font-display: swap`. Never link Google Fonts via `<link>` in production.

### 3.B State
* Local `useState` / `useReducer` for isolated UI.
* Global state ONLY for deep prop-drilling avoidance - Zustand, Jotai, or React context.
* **NEVER** use `useState` to track continuous values driven by user input (mouse position, scroll progress, pointer physics, magnetic hover). Use Motion's `useMotionValue` / `useTransform` / `useScroll`. `useState` re-renders the React tree on every change and collapses on mobile.

### 3.C Icons
* **Allowed libraries (priority order):** `@phosphor-icons/react`, `hugeicons-react`, `@radix-ui/react-icons`, `@tabler/icons-react`.
* **Discouraged:** `lucide-react`. Acceptable only when the user explicitly asks for it or the project already depends on it.
* **NEVER hand-roll SVG icons.** If a glyph is missing, install a second library or compose from primitives - do not draw icon paths from scratch.
* **One family per project.** Do not mix Phosphor with Lucide in the same component tree.
* **Standardize `strokeWidth` globally** (e.g. `1.5` or `2.0`).

### 3.D Emoji Policy
Discouraged by default in code, markup, and visible text. Replace symbols with icon-library glyphs. **Override:** allow emojis only when the user explicitly asks for a playful / chat-style / social-native vibe - and even then use them sparingly with intent.

### 3.E Responsiveness & Layout Mechanics
* Standardize breakpoints (`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`).
* Contain page layouts using `max-w-[1400px] mx-auto` or `max-w-7xl`.
* **Viewport Stability:** NEVER use `h-screen` for full-height Hero sections. ALWAYS use `min-h-[100dvh]` to prevent layout jumping on mobile (iOS Safari address bar).
* **Grid over Flex-Math:** NEVER use complex flexbox percentage math (`w-[calc(33%-1rem)]`). ALWAYS use CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`).

### 3.F Dependency Verification (mandatory)
Before importing ANY 3rd-party library, check `package.json`. If the package is missing, output the install command first. **Never** assume a library exists.

---

## 4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)

LLMs default to clichés. Override these defaults proactively. Each rule has a context-aware override path.

### 4.1 Typography
* **Display / Headlines:** Default `text-4xl md:text-6xl tracking-tighter leading-none`.
* **Body / Paragraphs:** Default `text-base text-gray-600 leading-relaxed max-w-[65ch]`.
* **Sans font choice:**
  * **Discouraged as default:** `Inter`. Pick `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, or a brand-appropriate serif first.
  * **Override:** Inter is acceptable when the user explicitly asks for a neutral / standard / Linear-style feel, or when the brief is a public-sector / accessibility-first site.
* **Pairings to know:** `Geist` + `Geist Mono`, `Satoshi` + `JetBrains Mono`, `Cabinet Grotesk` + `Inter Tight`, `GT America` + `IBM Plex Mono`.

* **SERIF DISCIPLINE (VERY DISCOURAGED AS DEFAULT):**
  * Serif is **very discouraged as the default font for any project.** "It feels creative / premium / editorial" is NOT a reason to reach for serif. The agent's default mental model that "creative brief = serif" is the single most-tested AI tell in production rounds.
  * **Serif is only acceptable when ONE of these is explicitly true:**
    - The brand brief literally names a serif font, OR
    - The aesthetic family is genuinely editorial / luxury / publication / manuscript / heritage / vintage AND you can articulate why this specific serif fits this specific brand
  * For everything else (creative agency, design studio, modern brand, premium consumer, portfolio, lifestyle), **default sans-serif display** (Geist Display, ABC Diatype, Söhne Breit, Cabinet Grotesk Display, Migra Sans, GT Walsheim, Inter Display, PP Neue Montreal). Sans display fonts are not "boring" — they are the default for the same reason black is the default in fashion.
  * **EMPHASIS RULE (related):** When you want to emphasize a word within a headline (the kinetic "and `spatial` design" type move), use **italic or bold of the SAME font**. Do NOT inject a random serif word into a sans headline (or vice versa) just to add visual interest. Mixed-family emphasis is amateur. Italic/bold emphasis in the same family is the right move.
  * **Specifically BANNED as defaults:** `Fraunces` and `Instrument_Serif` (the two LLM-favorite display serifs).
  * **If a serif is justified** (rare, per the above), rotate from this pool, do NOT reuse the same serif across consecutive projects: PP Editorial New, GT Sectra Display, Cardinal Grotesque, Reckless Neue, Tiempos Headline, Recoleta, Cormorant Garamond, Playfair Display, EB Garamond, IvyPresto, Migra, Editorial Old, Saol Display, Söhne Breit Kursiv, Domaine Display, Canela, Schnyder, Tobias, NB Architekt, ITC Galliard.
* **ITALIC DESCENDER CLEARANCE (mandatory):** When italic is used in display type and the word contains a descender letter (`y g j p q`), `leading-[1]` or `leading-none` will clip the descender. Use `leading-[1.1]` minimum and add `pb-1` or `mb-1` reserve on the wrapping element. Audit every italic word in display headlines before shipping.

### 4.2 Color Calibration
* Max 1 accent color. Saturation < 80% by default.
* **THE LILA RULE:** The "AI Purple / Blue glow" aesthetic is discouraged as a default. No automatic purple button glows, no random neon gradients. Use neutral bases (Zinc / Slate / Stone) with high-contrast singular accents (Emerald, Electric Blue, Deep Rose, Burnt Orange, etc.).
* **Override:** if the brand or brief explicitly asks for purple / violet / lila, embrace it. But execute with intent: consistent palette, harmonised neutrals, restrained gradients. Not generic AI gradient slop.
* **One palette per project.** Do not fluctuate between warm and cool grays within the same project.
* **COLOR CONSISTENCY LOCK (mandatory):** Once an accent color is chosen for a page, it is used on the WHOLE page. A warm-grey site does not suddenly get a blue CTA in section 7. A rose-accented site does not get a teal status badge in the footer. Pick one accent, lock it, audit every component before shipping.

* **PREMIUM-CONSUMER PALETTE BAN (mandatory, second-most-recurring AI-tell):**
  * For premium-consumer briefs (cookware, wellness, artisan, luxury, heritage craft, DTC home goods, etc.) the LLM default is **warm beige/cream + brass/clay/oxblood/ochre + espresso/ink dark text**. Concretely banned hex families as default backgrounds and accents:
    - Backgrounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb` (all "warm paper / cream / chalk / bone")
    - Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621` (all "brass / clay / oxblood / ochre")
    - Text: `#1a1714`, `#1a1814`, `#1b1814` (all "espresso / warm near-black")
  * This palette is BANNED as the default reach for premium-consumer briefs. Every premium-consumer site you have ever shipped uses this exact palette. The brand becomes invisible.
  * **Default alternatives (rotate, do not reuse):**
    - **Cold Luxury:** silver-grey + chrome + smoke (think Tesla, Apple Watch Hermes-without-the-leather)
    - **Forest:** deep green + bone + amber accent (think Filson, Patagonia premium)
    - **Black and Tan:** true off-black + warm tan, sharp contrast, no beige
    - **Cobalt + Cream:** saturated blue against a single neutral, no brass
    - **Terracotta + Slate:** warm rust against cool grey, no brass
    - **Olive + Brick + Paper:** muted olive plus brick-red accent
    - **Pure monochrome + single saturated pop:** off-white + off-black + one bright accent (electric blue, emerald, hot pink, etc.)
  * **Palette-rotation rule:** if the previous premium-consumer project you generated used the beige+brass family, this one MUST use a different family. Do not ship the same warm-craft palette twice in a row.
  * **Override:** the beige+brass+espresso palette is acceptable ONLY when the brand brief explicitly names those colors, or when the brand identity is genuinely vintage / artisan / warm-craft AND you can articulate why this specific palette fits this specific brand. Default-reaching for it because "this is a cookware brief" is banned.

### 4.3 Layout Diversification
* **ANTI-CENTER BIAS:** Centered Hero / H1 sections are avoided when `DESIGN_VARIANCE > 4`. Force "Split Screen" (50/50), "Left-aligned content / right-aligned asset", "Asymmetric white-space", or scroll-pinned structures.
* **Override:** centered hero is OK for editorial / manifesto / launch-announcement briefs where the message itself is the design.

### 4.4 Materiality, Shadows, Cards
* Use cards ONLY when elevation communicates real hierarchy. Otherwise group with `border-t`, `divide-y`, or negative space.
* When a shadow is used, tint it to the background hue. No pure-black drop shadows on light backgrounds.
* For `VISUAL_DENSITY > 7`: generic card containers are banned. Data metrics breathe in plain layout.
* **SHAPE CONSISTENCY LOCK (mandatory):** Pick ONE corner-radius scale for the page and stick to it. Options: all-sharp (radius 0), all-soft (radius 12-16px), all-pill (full radius for interactive). Mixed systems are allowed only when there is a documented rule (e.g. "buttons are full-pill, cards are 16px, inputs are 8px") and that rule is followed everywhere. Round buttons in a square layout, or square cards on a pill-button page, is broken design.

### 4.5 Interactive UI States
LLMs default to "static successful state only." Always implement full cycles:
* **Loading:** Skeletal loaders matching the final layout's shape. Avoid generic circular spinners.
* **Empty States:** Beautifully composed; indicate how to populate.
* **Error States:** Clear, inline (forms), or contextual (toasts only for transient).
* **Tactile Feedback:** On `:active`, use `-translate-y-[1px]` or `scale-[0.98]` to simulate a physical push.
* **BUTTON CONTRAST CHECK (mandatory, a11y):** Before shipping any button, verify the button text is readable against the button background. White button + white text, `bg-white` CTA with `text-white` label, transparent button against the page background with no border → all banned. Audit every CTA: contrast ratio WCAG AA min (4.5:1 for body, 3:1 for large text 18px+). Same rule applies to ghost buttons over photographic backgrounds (use a backdrop, scrim, or stroke).
* **CTA BUTTON WRAP BAN (mandatory):** Button text MUST fit on one line at desktop. If a label like "VIEW SELECTED WORK" wraps to 2 or 3 lines, the button is broken. Fix by EITHER shortening the label (3 words max for primary CTAs, ideally 1-2) OR widening the button (do not artificially constrain `max-width` on CTAs). Wrapped CTAs at desktop are a Pre-Flight Fail.
* **NO DUPLICATE CTA INTENT (mandatory):** Two CTAs with the same intent on one page is a Pre-Flight Fail. Examples of same intent: "Get in touch" + "Contact us" + "Let's talk" + "Start a project" + "Start something" + "Reach out" = all "contact" intent → pick ONE label and use it everywhere on the page (nav, hero, footer). Same for "Try free" + "Get started" + "Sign up free" (all "signup" intent) and "View work" + "See selected work" + "Browse projects" (all "portfolio" intent). One label per intent.
* **FORM CONTRAST CHECK (mandatory, a11y):** Form inputs, placeholder text, focus rings, helper text, and error text all pass WCAG AA contrast against the section background. Light placeholders on a near-white form, white form on white page section, form labels grayer than 4.5:1 contrast → all banned. Audit every form before shipping.

### 4.6 Data & Form Patterns
* Label ABOVE input. Helper text optional but present in markup. Error text BELOW input. Standard `gap-2` for input blocks.
* No placeholder-as-label. Ever.

### 4.7 Layout Discipline (Hard Rules. Failing any of these is shipping broken work)
* **Hero MUST fit in the initial viewport.** Headline max 2 lines on desktop, subtext max **20 words** AND max 3-4 lines, CTAs visible without scroll. If the copy is too long: reduce font scale OR cut copy. If you cannot describe the value-prop in 20 words of subtext, the value-prop is unclear, not the rule too tight. Never let the hero overflow and force scroll to find the CTA.
* **Hero font-scale discipline.** Plan font size and image size *together*. If the hero asset is large and the headline is more than 6 words, do not start at `text-7xl/text-8xl`. Default sensible range: `text-4xl md:text-5xl lg:text-6xl` for most heroes; `text-6xl md:text-7xl` only when the headline is 3-5 words. A 4-line hero headline is always a font-size error, never a copy-length error.
* **HERO TOP PADDING CAP (mandatory):** Hero top padding max `pt-24` (≈6rem) at desktop. More than that means the hero content floats halfway down the viewport and reads as a layout bug, not as intentional space. If your hero needs more breathing room, increase font scale or asset size, not top padding.
* **HERO STACK DISCIPLINE (max 4 text elements).** The hero is a single moment, not a feature list. Allowed text elements, max 4 in total:
  1. Eyebrow (small uppercase label) OR brand strip OR neither - pick zero or one
  2. Headline (max 2 lines, see above)
  3. Subtext (max 20 words, max 4 lines)
  4. CTAs (1 primary + max 1 secondary)
  - **BANNED in the hero:** tiny tagline below CTAs ("Works with GitHub, GitLab, and self-hosted Git"), trust micro-strip ("Used by engineering teams at..."), pricing teaser ("Free for solo, $10/user for teams"), feature bullet list, social-proof avatar row. All of those move to dedicated sections directly below the hero.
  - If you have an eyebrow AND a tagline below CTAs in the same hero, drop the tagline. If you have a brand strip AND a tagline, drop the tagline. One small text element per hero, max.
* **"Used by" / "Trusted by" logo wall belongs UNDER the hero, never inside it.** The hero is for the value prop and primary CTA. The logo wall is a separate section directly below. Do not stuff trust logos into the same flex row as the hero copy.
* **Navigation MUST render on a single line on desktop.** If items don't fit at `lg` (1024px), condense labels, drop secondary items, or move to a hamburger. A two-line nav at desktop is broken design.
* **Navigation height cap: 80px max desktop, default 64-72px.** No huge "agency" nav bars that eat 15% of the viewport.
* **Bento grids MUST have rhythm, not one-sided repetition.** Do not stack 6 left-image / right-text rows. Vary the composition: alternate full-width feature rows, asymmetric tile sizes, vertical breaks.
* **BENTO CELL COUNT RULE (mandatory):** A bento grid has EXACTLY as many cells as you have content for. 3 items → 3 cells (1+2 split, or 2+1, or asymmetric trio). 5 items → 5 cells (2+3, 3+2, hero+4, etc.). If your grid has an empty cell in the middle or at the end, you planned wrong. Re-shape the grid; do not paste a blank tile.
* **Section-Layout-Repetition Ban.** Once you use a layout family for a section (e.g., 3-column-image-cards, full-width-quote, split-text-image), that family can appear at most ONCE on the page. "Selected commissions" must not look like "What we do." A landing page with 8 sections must use at least 4 different layout families.
* **ZIGZAG ALTERNATION CAP (mandatory).** Alternating "left-image + right-text" then "left-text + right-image" zigzag layout = banal. Max 2 sections in a row with this image+text-split pattern. The 3rd consecutive image+text split is a Pre-Flight Fail. Break the pattern with a full-width section, a vertical-stack section, a bento grid, a marquee, or a different layout family.
* **EYEBROW RESTRAINT (mandatory, the #1 violated rule in production tests).** An "eyebrow" is the small uppercase wide-tracking label sitting above a section headline (e.g. `FOUR COLORWAYS`, `SELECTED WORK`, `THE HARDWARE`, `Git-native task management`). Typical CSS signature: `text-[11px] uppercase tracking-[0.18em]`, `font-mono text-[10.5px] uppercase tracking-[0.22em]`. Every AI-built site puts an eyebrow above EVERY section header, producing the same templated rhythm. Hard rule:
  - **Maximum 1 eyebrow per 3 sections.** Hero counts as 1. So a page with 9 sections may use at most 3 eyebrows total.
  - If section A has an eyebrow, the next 2 sections cannot have one.
  - **Pre-Flight Check is mechanical:** count instances of `uppercase tracking` (or similar small-caps mono labels above headlines) across all section components. If count > ceil(sectionCount / 3), the output fails.
  - **What to do instead of an eyebrow:** drop it entirely. The headline alone is enough. If you need to categorize a section, the section's location on the page already categorizes it; no label needed.
* **SPLIT-HEADER BAN (mandatory).** The pattern "left big headline + right small explainer paragraph" as a section header (left col-span-7/8, right col-span-4/5 with a small body paragraph floating in the right column) is **banned as default**. Sections should have ONE focused message. If you genuinely need both a headline and an explainer paragraph, stack them vertically (headline on top, body below, max-width 65ch). Reach for the split-header pattern only when there is a real compositional reason (e.g., the right column carries a visual or interactive element, not just filler text).
* **Bento Background Diversity (mandatory).** Bento and feature-grid sections cannot be 6 white-on-white cards with text inside. At least 2-3 cells in any multi-cell grid need real visual variation: a real image, a brand-appropriate gradient (not AI-purple), a pattern, a tinted background. A cream-on-cream bento with only typography inside reads as boring AI default, even when the rest of the page is good.
* **Mobile collapse must be explicit per section.** For every multi-column layout, declare the `< 768px` fallback in the same component. No "it'll work, Tailwind handles it" assumptions.

### 4.8 Image & Visual Asset Strategy
Landing pages and portfolios are **visual products**. Text-only pages with fake-screenshot divs are slop.

**Priority order for visual assets:**
1. **Image-generation tool first.** If ANY image-gen tool is available in the environment (`generate_image`, MCP image tool, IDE-integrated gen, OpenAI image tools, etc.) you MUST use it to create section-specific assets: hero photography, product shots, texture backgrounds, mood images. Generate at the right aspect ratio for the section. Do not skip this step because hand-rolled CSS feels faster.
2. **Real web images second.** When no gen tool is available, use real photography sources. Acceptable defaults:
   * `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` for placeholder photography (seed should describe the section, e.g. `marrow-cookware-kitchen`)
   * Actual stock or brand URLs when the brief provides them
   * Open-license sources (Unsplash via direct URL, Pexels) if explicitly allowed
3. **Last resort: tell the user.** If neither is possible, do NOT fill the page with hand-rolled SVG illustrations or div-based "fake screenshots." Instead, leave clearly-labeled placeholder slots (`<!-- TODO: hero product photo, 1600x1200 -->`) and at the end of the response say: *"This page needs real images at: \[list of placements\]. Please generate or provide them."*

**Even minimalist sites need real images.** A pure-text page is not minimalism. It is incomplete work. Even an editorial Linear-style site needs at least 2-3 real images (hero, one product/lifestyle shot, one supporting image). Generate B&W minimalist photography if the brief is restrained; do not skip images entirely because the dial is low.

**Real company logos for social proof.** When the brief calls for a "Trusted by / Used by / Customers" logo wall, do NOT default to plain text wordmarks (`<span>Acme Co</span>` styled in a row). Use real SVG logos:
* **Source: Simple Icons** (`https://cdn.simpleicons.org/{slug}/ffffff` for any color, or `simple-icons` npm package). Covers most known brands.
* **Alternative: devicon** for tech-stack logos (`@svgr/cli` or CDN).
* **Make-up the brand name? Then make-up an SVG mark too.** Generate a simple monogram (one letter in a circle, two-letter ligature, abstract glyph) rendered as an inline `<svg>` matching the page style. Plain text wordmarks for invented brand names look generic.
* **Always** ensure logos render in both light and dark mode (white-on-dark, black-on-light, or single-color theme variable).
* **LOGO-ONLY rule (mandatory):** logo wall = logos and nothing else. Do NOT print industry / category labels below each logo (no `Vercel` + `hosting` underneath, no `Stripe` + `payments`, no `Cloudflare` + `infra`). The logo is the credibility, the label adds nothing the user does not already know. Optional: brand name as alt-text for screen readers, optional link to the brand's site. That is it.

**Hand-rolled illustrations:**
* SVG icons from libraries: fine (see Section 3.C).
* Hand-rolled decorative SVGs (custom illustrations, logos, marks): **strongly discouraged**, never as default. Acceptable only when:
  - The brief explicitly calls for it ("draw me an SVG logo")
  - It's a single, simple geometric mark (a square, a circle, a wordmark in display type)
  - You're confident in the output quality

**Div-based fake screenshots are banned.** A "hand-built product preview" rendered with `<div>` rectangles, fake task lists, fake dashboards, fake terminal windows is a Tell. If you need to show a product:
* Use a real screenshot URL if one exists
* Generate one via image tool
* Use a real component preview (an actual mini-version of the UI inside the page)
* Or skip the preview entirely and use editorial photography

**Hero needs a real visual.** Text + gradient blob is not a hero - it's a placeholder.

### 4.9 Content Density
Landing pages live on the **first impression**, not the full read. Cut ruthlessly.

* **Default content shape per section:** short headline (≤ 8 words) + short sub-paragraph (≤ 25 words) + one visual asset OR one CTA. Anything more must be justified by the section's job.
* **No data-dump sections.** A 20-row publication table, a 30-row award list, a giant pricing matrix on a marketing page = wrong layout. Use:
  - Top 3-5 highlights + "View full list" link
  - Marquee / carousel for breadth
  - Different page entirely if the data is the product
* **Long lists need a different UI component, not a longer list.** Default `<ul>` with bullets / `divide-y` rows is the lazy choice. If you have > 5 items, reach for one of these instead:
  - 2-column split with grouped items
  - Card grid with image + label per item
  - Tabs / accordion if items are categorisable
  - Horizontal scroll-snap pills
  - Carousel for breadth-heavy lists (testimonials, logos, capabilities)
  - Marquee for "lots-of-things-that-don't-need-individual-attention"
  A spec sheet with 10 rows + a hairline under every row is the WORST default. Either group rows into 2-3 chunks with sparse dividers, or move to a card-per-spec layout.
* **Spec sheets specifically (the Marrow-cookware pattern).** A long product specification table with `border-b` on every row is the AI default for cookware / hardware / apparel / artisan-goods briefs. Banned. Concrete alternatives:
  - **2-col card grid:** each spec gets its own card with the spec name, the value (large display number), and a one-line "why it matters" body. Cards arranged 2-col on desktop, 1-col mobile.
  - **Scroll-snap horizontal pills:** each spec is a pill, user can flick through.
  - **Grouped chunks:** group 10 specs into 3 logical clusters (e.g. "Materials", "Cooking", "Warranty"), each cluster gets ONE soft divider and a cluster heading.
  - **Featured-vs-rest:** 3-4 hero specs visualised as large display tiles, the rest collapsed under a "View full specifications" disclosure.

* **COPY SELF-AUDIT (mandatory before ship):** Before declaring any task done, re-read every visible string on the page (headlines, subheads, eyebrows, button labels, body copy, captions, alt text, footer text, error messages). Flag any string that is:
  - **Grammatically broken** ("free on its past", "two plans but one is honest", "to put it on the table" out of context)
  - **Has unclear referents** ("we plan to stay that way" without prior context)
  - **Sounds like AI hallucination** (cute-but-wrong wordplay, forced metaphors that don't track, "elegant nothing" phrases)
  - **Reads like an LLM trying to sound thoughtful** (passive-aggressive humility, fake-craftsman labels, mock-poetic micro-meta)
  Rewrite every flagged string. If unsure whether a string makes sense, replace it with a plain functional sentence. AI-generated cute copy is worse than boring copy.
* **Fake-precise numbers are flagged.** Numbers like `92%`, `4.1×`, `48k`, `5.8 mm`, `13.4 lb` either:
  - Come from real data (brief, brand guidelines, public metrics) - fine
  - Are explicitly labeled as mock (`<!-- mock -->`, "example", "sample data") - fine
  - Are AI-invented spec aesthetics - banned. Don't fake engineering precision the brand doesn't claim.
* **One copy register per page.** Don't mix technical mono ("47 tasks · 0.6 ctx-switches/day"), editorial prose, and marketing punch in the same composition unless the brand voice explicitly calls for it.

### 4.10 Quotes & Testimonials
* **Max 3 lines** of quote body. Never 6. If the original quote is longer → cut it. A landing-page quote is a snippet, not the full review.
* For very small font sizes (e.g. footer-style testimonials), the line cap can stretch slightly. Spirit: "fits in a glance."
* **No em-dashes inside the quote text** as design flourish (long pauses, kinetic em-dashes, em-dash-bullets). See Section 9.G - em-dash is completely banned.
* Attribution: name + role + (optionally) company. Never name only ("- Sarah").
* Quote marks: use real typographic quotes ( " " ) or none at all. Not straight ASCII ( " ).

### 4.11 Page Theme Lock (Light / Dark Mode Consistency)
The page has ONE theme. Sections do not invert.
* If the page is dark mode, ALL sections are dark mode. No light-mode-warm-paper section sandwiched between dark sections (or vice versa). The user must not feel they walked into a different website mid-scroll.
* The exception: if the brief explicitly calls for a "Color Block Story" or "Theme Switch on Scroll" device AND that is a deliberate composition (one full theme switch with a strong transition, not random alternation), it is allowed once per page.
* Default behaviour: pick light, dark, or auto (`prefers-color-scheme`) at the page level and lock it. Section-level background tints within the same theme family are fine (`bg-zinc-950` next to `bg-zinc-900`); flipping to `bg-amber-50` in the middle of a `bg-zinc-950` page is broken.
* When using a design system with built-in theming (Radix Themes, shadcn/ui with `<Theme>`), set the theme ONCE in `layout.tsx` or the page root. Do not let individual sections override.

---

## 5. CONTEXT-AWARE PROACTIVITY

These are tools, not defaults. Use them when the design read calls for them. **None of these fire automatically.**

* **Liquid Glass / Glassmorphism:** Appropriate for premium consumer, Apple-adjacent, luxury brand, or media-overlay vibes. Inappropriate for dashboards, public-sector, or "boring B2B." When used, go beyond `backdrop-blur`: add a 1px inner border (`border-white/10`) and a subtle inner shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) for physical edge refraction. Provide a solid-fill fallback under `prefers-reduced-transparency`.
* **Magnetic Micro-physics:** Use when `MOTION_INTENSITY > 5` AND the brief reads premium / playful / agency. Implement EXCLUSIVELY with Motion's `useMotionValue` / `useTransform` outside the React render cycle. Never `useState`. See Section 3.B.
* **Perpetual Micro-Interactions** (Pulse, Typewriter, Float, Shimmer, Carousel): Use when `MOTION_INTENSITY > 5` AND the section actively benefits from motion (status indicators, live feeds, AI-feel). **Not every card needs an infinite loop.** If a section is informational, leave it still. Apply Spring Physics (`type: "spring", stiffness: 100, damping: 20`) - no linear easing.
* **"Motion claimed, motion shown."** If `MOTION_INTENSITY > 4`, the page must actually move: entry transitions on hero, scroll-reveal on key sections, hover physics on CTAs, at minimum. A static page that claims `MOTION_INTENSITY: 7` is broken. Conversely, if you cannot ship working motion in the available scope, drop the dial to 3 and ship a clean static page. Never half-build motion that breaks (cut-off ScrollTriggers, jumpy enters, missing cleanups).
* **MOTION MUST BE MOTIVATED (mandatory).** Before adding any animation, ask: "what does this animation communicate?" Valid answers: hierarchy (drawing attention to the right thing), storytelling (revealing content in sequence that matches a narrative), feedback (acknowledging a user action), state transition (showing something changed). Invalid answer: "it looked cool". GSAP everywhere because GSAP is available is amateur. Each ScrollTrigger, each marquee, each pinned section needs a reason. If you cannot articulate the reason in one sentence, drop the animation.
* **MARQUEE MAX-ONE-PER-PAGE (mandatory).** Horizontal scrolling text marquees ("logos endlessly scrolling", "manifesto scrolling sideways", "kinetic word strip") are appropriate at most ONCE per page. Two or more marquees on the same page reads as lazy filler. Pick the one section where the marquee actually serves the content; the others get a different layout.
* **GSAP Sticky-Stack Pattern (when scroll-stack is used).** A "card stack on scroll" must be a REAL sticky-stack, not a sequential reveal list. See Section 5.A below for the canonical code skeleton. Common failure: trigger fires halfway through scroll instead of pinning at viewport top. Fix: `start: "top top"` not `start: "top center"` or `"top 80%"`.
* **GSAP Horizontal-Pan Pattern (when horizontal scroll-hijack is used).** See Section 5.B below for the canonical skeleton. Common failure: animation starts before the section is pinned, so the user sees half a slide. Same fix: `start: "top top"`, pin the wrapper, scrub the inner track.

### 5.A Sticky-Stack - Canonical Skeleton
```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function StickyStack({ cards }: { cards: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",                              // pin at viewport top
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card sticky top-0 min-h-[100dvh] flex items-center justify-center"
        >
          {card}
        </div>
      ))}
    </div>
  );
}
```

### 5.B Horizontal-Pan - Canonical Skeleton
```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPan({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",                              // pin starts when section top hits viewport top
          end: () => `+=${distance}`,                    // scroll distance = track width minus viewport
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={wrap} className="relative overflow-hidden">
      <div ref={track} className="flex h-[100dvh] items-center">
        {children}
      </div>
    </section>
  );
}
```

### 5.C Scroll-Reveal Stagger - Canonical Skeleton (lighter alternative)
For simple "items appear as they enter viewport" (no pinning), prefer Motion's `whileInView` over GSAP - lighter, no ScrollTrigger needed:
```tsx
"use client";
import { motion, useReducedMotion } from "motion/react";

export function RevealStagger({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="grid gap-6">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
```

### 5.D Forbidden Animation Patterns
* **`window.addEventListener("scroll", ...)`** is banned. It runs on every scroll frame, jank-prone, no batching. Use Motion's `useScroll()`, GSAP's `ScrollTrigger`, IntersectionObserver, or CSS `scroll-driven animations` (`animation-timeline: view()`).
* **Custom scroll progress calculations using `window.scrollY`** in React state. Same reason. Re-renders on every frame.
* **`requestAnimationFrame` loops that touch React state.** Use motion values (`useMotionValue` + `useTransform`) instead.
* **Layout Transitions:** Use Motion's `layout` and `layoutId` props for visible state changes (re-ordering lists, expanding modals, shared elements between routes). Do not wrap static content in `layout` props "for safety" - it costs measurement work.
* **Staggered Orchestration:** Use `staggerChildren` (Motion) or CSS cascade (`animation-delay: calc(var(--index) * 100ms)`) for reveal moments where sequence matters. For `staggerChildren`, parent (`variants`) and children MUST share the same Client Component tree.

---

## 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS

### 6.A Hardware Acceleration
* Animate ONLY `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`.
* Use `will-change: transform` sparingly - only on elements that will actually animate.

### 6.B Reduced Motion (mandatory)
* **Any motion above `MOTION_INTENSITY > 3` MUST honor `prefers-reduced-motion`.** This is non-negotiable.
* In Motion: wrap with `useReducedMotion()` and degrade to static.
* In CSS: gate animations behind `@media (prefers-reduced-motion: no-preference)` or provide an override block under `@media (prefers-reduced-motion: reduce)` that disables.
* Infinite loops, parallax, scroll-hijack, and magnetic physics MUST collapse to static / instant under reduced motion.

### 6.C Dark Mode (mandatory for any consumer-facing page)
* Design for **both modes from the start**. Never ship light-only or dark-only without explicit user instruction.
* Use Tailwind `dark:` variant OR CSS variables for tokens. Pick one strategy per project.
* **Do not prescribe specific dark-mode colors here.** The brief decides. Maintain visual hierarchy, brand identity, and WCAG AA contrast (AAA for body) across both modes.
* Respect `prefers-color-scheme: dark`. Default to system preference unless the brand insists on one mode.

### 6.D Core Web Vitals Targets
* **LCP** < 2.5s. Hero image must be `next/image priority` or preloaded.
* **INP** < 200ms. Heavy work off main thread.
* **CLS** < 0.1. Reserve space for images, fonts, embeds.
* Run Lighthouse before declaring a page done.

### 6.E DOM Cost
* Apply grain / noise filters EXCLUSIVELY to fixed, `pointer-events-none` pseudo-elements (e.g., `fixed inset-0 z-[60] pointer-events-none`). NEVER on scrolling containers - continuous GPU repaints destroy mobile FPS.
* Be aware of bundle size. Motion is not tiny. Three.js is large. Lazy-load anything that's not above-the-fold.

### 6.F Z-Index Restraint
NEVER spam arbitrary `z-50` or `z-10`. Use z-index strictly for systemic layer contexts (sticky navbars, modals, overlays, grain). Document the z-index scale in a project constants file.

---

## 7. DIAL DEFINITIONS (Technical Reference)

### DESIGN_VARIANCE (Level 1-10)
* **1-3 (Predictable):** Symmetrical CSS Grid (12-col, equal fr-units), equal paddings, centered alignment.
* **4-7 (Offset):** `margin-top: -2rem` overlaps, varied image aspect ratios (4:3 next to 16:9), left-aligned headers over center-aligned data.
* **8-10 (Asymmetric):** Masonry layouts, CSS Grid with fractional units (`grid-template-columns: 2fr 1fr 1fr`), massive empty zones (`padding-left: 20vw`).
* **MOBILE OVERRIDE:** For levels 4-10, asymmetric layouts above `md:` MUST collapse to strict single-column (`w-full`, `px-4`, `py-8`) on viewports `< 768px`.

### MOTION_INTENSITY (Level 1-10)
* **1-3 (Static):** No automatic animations. CSS `:hover` and `:active` states only. `prefers-reduced-motion` is the default mode anyway.
* **4-7 (Fluid CSS):** `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`. `animation-delay` cascades for load-ins. Focus on `transform` and `opacity`.
* **8-10 (Advanced Choreography):** Complex scroll-triggered reveals, parallax, scroll-driven animation (CSS `animation-timeline` or GSAP ScrollTrigger). Use Motion hooks. **NEVER use `window.addEventListener('scroll')`** - it is a hard ban, not a "prefer-not." See Section 5.D for the allowed alternatives.

### VISUAL_DENSITY (Level 1-10)
* **1-3 (Art Gallery):** Lots of white space. Huge section gaps (`py-32` to `py-48`). Expensive, clean.
* **4-7 (Daily App):** Standard web app spacing (`py-16` to `py-24`).
* **8-10 (Cockpit):** Tight paddings. No card boxes; 1px lines separate data. Mandatory: `font-mono` for all numbers.

---

## 8. DARK MODE PROTOCOL

Dual-mode by default. Never assume light-only unless the brief is print-emulating editorial.

### 8.A Token Strategy (pick one, stick to it)
* **Tailwind `dark:` variant** (default for utility-first projects): every color utility paired with its dark variant (`bg-white dark:bg-zinc-950`, `text-gray-900 dark:text-gray-100`).
* **CSS variables** (for shadcn/ui, Radix Themes, or component libraries with theming): define semantic tokens (`--surface`, `--surface-elevated`, `--text-primary`, `--accent`) and swap values under `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`.

### 8.B Do Not Prescribe Specific Colors Here
The brief and brand decide. This skill enforces only:
* **Contrast** - WCAG AA minimum for body text, AAA target for hero copy.
* **Hierarchy parity** - visual hierarchy that works in light must work in dark. If a CTA pops in light, it pops in dark.
* **Brand fidelity** - primary brand color stays recognisable. Don't desaturate the brand into a dark mode.
* **No pure `#000000` and no pure `#ffffff`** - use off-black (zinc-950, near-black warm gray) and off-white. Pure values kill depth.

### 8.C Default Mode
Respect `prefers-color-scheme` unless the brand insists. Add a manual toggle if either mode would lose key brand expression.

### 8.D Test in Both Modes Before Finishing
Open the page in both modes during development. Do not ship a page you've only seen in one mode.

---

## 9. AI TELLS (Forbidden Patterns)

Avoid these signatures unless the brief explicitly asks for them.

### 9.A Visual & CSS
* **NO neon / outer glows** by default. Use inner borders or subtle tinted shadows.
* **NO pure black (`#000000`).** Off-black, zinc-950, or charcoal.
* **NO oversaturated accents.** Desaturate to blend with neutrals.
* **NO excessive gradient text** for large headers.
* **NO custom mouse cursors.** Outdated, accessibility-hostile, perf-hostile.

### 9.B Typography
* **AVOID Inter as default.** See Section 4.1. Override path exists.
* **NO oversized H1s** that just scream. Control hierarchy with weight + color, not raw scale.
* **Serif constraints:** Serif for editorial / luxury / publication. Not for dashboards.

### 9.C Layout & Spacing
* **Mathematically perfect** padding and margins. No floating elements with awkward gaps.
* **NO 3-column equal feature cards.** The generic "three identical cards horizontally" feature row is banned. Use 2-column zig-zag, asymmetric grid, scroll-pinned, or horizontal-scroll alternative.

### 9.D Content & Data ("Jane Doe" Effect)
* **NO generic names.** "John Doe", "Sarah Chan", "Jack Su" → use creative, realistic, locale-appropriate names.
* **NO generic avatars.** No SVG "egg" or Lucide user icons → use believable photo placeholders or specific styling.
* **NO fake-perfect numbers.** Avoid `99.99%`, `50%`, `1234567`. Use organic, messy data (`47.2%`, `+1 (312) 847-1928`).
* **NO startup-slop brand names.** "Acme", "Nexus", "SmartFlow", "Cloudly" → invent contextual, premium names that sound real.
* **NO filler verbs.** "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize" → concrete verbs only.

### 9.E External Resources & Components
* **NO hand-rolled SVG icons.** Use Phosphor / HugeIcons / Radix / Tabler. Lucide on explicit request only.
* **Hand-rolled decorative SVGs strongly discouraged** as default (see Section 4.8).
* **NO div-based fake screenshots.** Never build a fake product UI out of `<div>` rectangles to simulate a screenshot. Use real images, generated images, or skip the preview.
* **NO broken Unsplash links.** Use `https://picsum.photos/seed/{descriptive-string}/{w}/{h}`, or generated photo placeholders, or actual assets.
* **shadcn/ui customization:** Allowed, but NEVER in default state. Customize radii, colors, shadows, typography to the project aesthetic.
* **Production-Ready Cleanliness:** Code visually clean, memorable, meticulously refined.

### 9.F Production-Test Tells (banned outright)
These patterns came out of real LLM-generated landing-page tests. They are the signatures the model defaults to when it tries to "look designed." Treat them as hard bans unless the brief explicitly calls for one.

**Hero & top-of-page**
* **NO version labels in the hero.** `V0.6`, `v2.0`, `BETA`, `INVITE-ONLY PREVIEW`, `EARLY ACCESS`, `ALPHA` - banned as default eyebrows. Only acceptable when the brief is explicitly about a product launch / preview status.
* **NO "Brand · No. 01"-style sub-eyebrows.** "Marrow · No. 01 · The 6-quart" type micro-meta lines. Skip them.

**Section numbering & micro-labels**
* **NO section-number eyebrows.** `00 / INDEX`, `001 · Capabilities`, `002 · Featured commission`, `06 · how it works`, `05 · The honest table` - banned. Eyebrows should name the topic in plain language, not enumerate.
* **NO `01 / 4`-style pagination on images or bento tiles.** If the user can count, they don't need the label.
* **NO `Scroll · 001 Capabilities`-style scroll cues.** A simple arrow or "Scroll" is enough; no section-number prefix.
* **NO "Index of Work, 2018 - 2026"-style range labels** as eyebrows. Just say what the section is.

**Separators & dots**
* **The middle-dot (`·`) is rationed.** Maximum 1 per line in metadata strips. Do NOT use it as the default separator for everything ("foo · bar · baz · qux · quux"). If you need a separator family, prefer line breaks, hairlines, or columns.
* **NO decorative colored status dots on every list/nav/badge.** A colored dot before "ONE Q4 SLOT OPEN" or before every nav link, or every task row - banned by default. Acceptable only when the dot conveys actual semantic state (a server status, an availability flag) and is used sparingly.

**Em-dashes & typography flourishes**
* **NO em-dash (`—`) as a design element OR anywhere else.** See Section 9.G below for the complete, non-negotiable ban. The em-dash character is forbidden in headlines, eyebrows, pills, body copy, quotes, attribution, captions, button text, and alt text. Use the regular hyphen (`-`).
* **NO `<br>`-broken-and-italicized headlines** as a default "design move." "for thirty\<br\>*years.*" type splits. Headlines should read naturally first, get clever only when the brief demands it.
* **NO vertical rotated text** ("INDEX OF WORK, 2018 - 2026" rotated 90°). Agency-portfolio cliché. Use it only when the brief is explicitly agency / Awwwards / experimental AND it serves a real composition purpose.
* **NO crosshair / hairline grid lines as decoration.** Vertical and horizontal lines drawn just to make the page "feel designed" - banned. Use them only when they organize real content.

**Fake product previews**
* **NO div-based fake product UI in the hero** (fake task list, fake terminal, fake dashboard built from styled divs). It is the #1 LLM-design Tell. Use a real screenshot, a generated image, a real component preview, or none at all.
* **NO fake version footers** ("v0.6.2-rc.1", "last sync 4s ago · main") inside fake screenshots. Adds nothing, screams AI.

**Marketing-copy Tells**
* **NO "Quietly in use at" / "Quietly trusted by"** social-proof headers. Use natural language: "Trusted by", "Used at", "Customers include", or skip the heading entirely if the logos speak.
* **NO "From the field" / "Field notes" / "Currently on the bench" / "On our desks" / "Loose plates" style poetic labels** on quote, blog, or sidebar sections. Reads as performative-craftsman. Use plain functional labels ("Testimonials", "Latest writing", "Now working on") or skip the label.
* **NO "We respect the French ones"-style** mock-humble industry-references in body copy. Cute and AI-y.
* **NO weather / locale strips** ("LIS 14:23 · 18°C") in headers/footers unless the brief is explicitly about a place / time-zone-distributed studio.
* **NO micro-meta-sentences under eyebrows.** Sentences like *"Each of these is a feature we ship today, not a roadmap promise. The list will stay short on purpose."* sitting under a section heading are clutter. Eyebrow + Headline + Body is enough.
* **NO generic step labels.** "Stage 1 / Stage 2 / Stage 3", "Step 1 / Step 2 / Step 3", "Phase 01 / Phase 02 / Phase 03", "Pass One / Pass Two / Pass Three". Banned. The actual step content is the label. If you must show progression, use the verb-noun directly ("Install", "Configure", "Ship") not "Stage 1: Install".

**Pills, labels and version stamps**
* **NO pills/labels/tags overlaid on images.** No `<span>` overlays on photos with tags like `Brand · 02`, `PLATE · BRAND`, `Field notes - journal`. Either let the image speak alone, or add a caption directly below (outside the image).
* **NO photo-credit captions as decoration.** Strings like `Field study no. 12 · Ines Caetano`, `Plate 03 · House archive`, `Frame XII · 35mm` under stock/picsum images are pretentious. Photo credit is allowed ONLY when there is a real photographer being credited for a real photo (with permission). Otherwise: skip the caption or use a one-line functional caption ("The 6-quart, in Sage.").
* **NO version footers on marketing pages.** Footer strings like `v1.4.2`, `Build 0048`, `last sync 4s ago · main` are CLI / devtool fixtures, not landing-page content. Banned on marketing/landing/portfolio pages.
* **NO "Reservation 412 of 800"-style live-stock counters** as decoration. Only if the brief is explicitly a limited-run waitlist with real data.

**Decoration text strips**
* **NO decoration text strip at hero bottom.** Patterns like `BRAND. MOTION. SPATIAL.`, `TYPE / FORM / MOTION`, `DESIGN · BUILD · SHIP`, `ESTD. 2018 · LISBON · BRAND. MOTION. SPATIAL.` as a small mono-caps strip across the bottom of the hero are an agency-portfolio cliché. Banned by default. Only acceptable when the strip carries real, navigable links (sticky bottom nav) or real status info (cookie banner, build info on a docs site).
* **NO floating top-right sub-text in section headings.** Pattern: section has a giant left-aligned headline; in the top-right corner of the same section header there is a small explainer paragraph floating with no clear alignment to anything else. That floater is the Tell. Either put the sub-text directly under the headline, or build a clean 2-column header (left: headline, right: aligned body), but not a tiny corner paragraph.

**Lists, dividers and scoring**
* **NO `border-t` + `border-b` on every row of a long list / spec table.** Pick one (bottom-border between rows OR top-border above the group) and use it sparsely. A 10-row spec table with hairlines under each row is the laziest layout - see Section 4.9 for alternative UI components.
* **NO scoring/progress bars with filled background tracks** as comparison visuals. If you need to show "X out of Y" comparisons, prefer a number + small icon, or a tiny inline bar WITHOUT a background track. Big filled `bg-zinc-200` tracks with a partial fill on top are dashboard-UI clutter on a landing page.

**Locale, time, scroll cues**
* **Locale / city-name / time / weather strips are banned for 99% of briefs.** "Lisbon, working with founders" in the hero, "1200-690 Lisbon, Portugal" in the footer, "Lisbon 14:23 · 18°C" in the nav. These are agency-portfolio decoration tells. Allowed ONLY when: the brief explicitly describes a globally-distributed studio with timezone-relevant work, OR a travel-focused brand, OR a real-world physical venue. A single contact-address mention in the footer is fine; an atmospheric locale strip is not.
* **Scroll cues are banned.** `Scroll`, `↓ scroll`, `Scroll to explore`, `Scroll to walk through it`, animated mouse-wheel icons. If the user has not scrolled yet, they are looking at the hero. They know what scroll is. The bottom of the viewport does not need a label.
* **ZERO decorative status dots by default.** A coloured dot before nav items, before list rows, before badges, before status labels is a Tell. Only acceptable when conveying real semantic state (a live indicator on actual server status, a live availability flag) and limited to one per page section.

### 9.G EM-DASH BAN (the single most-violated Tell)
**Em-dash (`—`) is COMPLETELY banned.** It is the LLM's signature stylistic crutch and it is the #1 visual Tell in production tests. There is no "limited use" allowance, no "natural language frequency" allowance, no "in body copy is fine" allowance. None.
* **Banned in headlines.** Use a period or a comma.
* **Banned in eyebrows / labels / pills / button text / image captions / nav items.** Replace with line breaks, columns, or hairlines.
* **Banned in body copy.** Restructure the sentence: two sentences with a period, OR a comma, OR parentheses, OR a colon.
* **Banned in quote attribution.** Use a normal hyphen with spaces (` - `) or a line break + smaller-weight name.
* **Banned in en-dash form too (`–`) when used as a separator.** Date ranges (`2018-2026`) use a hyphen. Number ranges (`€40-80k`) use a hyphen.

The ONLY permitted dash characters on the page are:
* Regular hyphen `-` (for compound words, ranges, line dividers in markup)
* Minus sign in math (`-5°C`)

If your output contains a single `—` or `–` anywhere visible to the user, the output fails the Pre-Flight Check and must be rewritten.
This rule is non-negotiable. The agent has historically ignored em-dash limits when phrased as "use sparingly." The phrasing here is binary: zero em-dashes.

---

## 10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)

This is a vocabulary, not a library. The agent should KNOW these pattern names to communicate about them, design with them in mind, and reach for them when the design read calls for them. **Implementations and code sketches live in the Block Library (Section 12), which is populated iteratively.**

### Hero Paradigms
* **Asymmetric Split Hero** - Text on one side, asset on the other, generous white space.
* **Editorial Manifesto Hero** - Large type, no asset, almost-poster.
* **Video / Media Mask Hero** - Type cut out as mask over video background.
* **Kinetic-Type Hero** - Animated typography as the primary visual.
* **Curtain-Reveal Hero** - Hero parts on scroll like a curtain.
* **Scroll-Pinned Hero** - Hero stays pinned while content scrolls behind.

### Navigation & Menus
* **Mac OS Dock Magnification** - Edge nav, icons scale fluidly on hover.
* **Magnetic Button** - Pulls toward cursor.
* **Gooey Menu** - Sub-items detach like viscous liquid.
* **Dynamic Island** - Morphing pill for status / alerts.
* **Contextual Radial Menu** - Circular menu expanding at click point.
* **Floating Speed Dial** - FAB springing into curved secondary actions.
* **Mega Menu Reveal** - Full-screen dropdown, stagger-fade content.

### Layout & Grids
* **Bento Grid** - Asymmetric tile grouping (Apple Control Center).
* **Masonry Layout** - Staggered grid, no fixed row height.
* **Chroma Grid** - Borders / tiles with subtle animating gradients.
* **Split-Screen Scroll** - Two halves sliding in opposite directions.
* **Sticky-Stack Sections** - Sections that pin and stack on scroll.

### Cards & Containers
* **Parallax Tilt Card** - 3D tilt tracking mouse coordinates.
* **Spotlight Border Card** - Borders illuminate under cursor.
* **Glassmorphism Panel** - Frosted glass with inner refraction.
* **Holographic Foil Card** - Iridescent rainbow shift on hover.
* **Tinder Swipe Stack** - Physical card stack, swipe-away.
* **Morphing Modal** - Button expands into its own dialog.

### Scroll Animations
* **Sticky Scroll Stack** - Cards stick and physically stack.
* **Horizontal Scroll Hijack** - Vertical scroll → horizontal pan.
* **Locomotive / Sequence Scroll** - Video / 3D sequence tied to scrollbar.
* **Zoom Parallax** - Central background image zooming on scroll.
* **Scroll Progress Path** - SVG line drawing along scroll.
* **Liquid Swipe Transition** - Page transition like viscous liquid.

### Galleries & Media
* **Dome Gallery** - 3D panoramic gallery.
* **Coverflow Carousel** - 3D carousel with angled edges.
* **Drag-to-Pan Grid** - Boundless draggable canvas.
* **Accordion Image Slider** - Narrow strips expanding on hover.
* **Hover Image Trail** - Mouse leaves popping image trail.
* **Glitch Effect Image** - RGB-channel shift on hover.

### Typography & Text
* **Kinetic Marquee** - Endless text bands reversing on scroll.
* **Text Mask Reveal** - Massive type as transparent window to video.
* **Text Scramble Effect** - Matrix-style decoding on load / hover.
* **Circular Text Path** - Text curving along spinning circle.
* **Gradient Stroke Animation** - Outlined text with running gradient.
* **Kinetic Typography Grid** - Letters dodging the cursor.

### Micro-Interactions & Effects
* **Particle Explosion Button** - CTA shatters into particles on success.
* **Liquid Pull-to-Refresh** - Reload indicator like detaching droplets.
* **Skeleton Shimmer** - Shifting light reflection across placeholders.
* **Directional Hover-Aware Button** - Fill enters from cursor's exact side.
* **Ripple Click Effect** - Wave from click coordinates.
* **Animated SVG Line Drawing** - Vectors drawing themselves in real time.
* **Mesh Gradient Background** - Organic lava-lamp blobs.
* **Lens Blur Depth** - Background UI blurred to focus foreground action.

### Animation Library Choice
* **Motion (`motion/react`)** - default for UI / Bento / state-change motion.
* **GSAP + ScrollTrigger** - for full-page scrolltelling and scroll hijacks. Isolate in dedicated leaf components with `useEffect` cleanup.
* **Three.js / WebGL** - for canvas backgrounds and 3D scenes. Same isolation rule.
* **NEVER mix GSAP / Three.js with Motion in the same component tree.** They fight over the same frames.

---

## 11. REDESIGN PROTOCOL

This skill handles **greenfield builds AND redesigns**. Misclassifying the mode is the single biggest source of bad redesign output.

### 11.A Detect the Mode (first action)
* **Greenfield** - no existing site, or full overhaul approved. Dial baseline from Section 1.
* **Redesign - Preserve** - modernise without breaking the brand. Audit first, extract brand tokens, evolve gradually.
* **Redesign - Overhaul** - new visual language on top of existing content. Treat as greenfield for visuals; preserve content and IA.

If ambiguous, ask **once**: *"Should this redesign preserve the existing brand, or are we starting visually from scratch?"*

### 11.B Audit Before Touching
Proposal details must be documented before proposing changes:
* **Brand tokens** - primary / accent colors, type stack, logo treatment, radii.
* **Information architecture** - page tree, primary nav, key conversion paths.
* **Content blocks** - what exists, what's doing work, what's filler.
* **Patterns to preserve** - signature interactions, recognisable hero, copy voice.
* **Patterns to retire** - AI-slop tells, broken layouts, dead links, generic stock imagery, perf traps.
* **Dial reading of the existing site** - infer current `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY`. That's your starting point, not the baseline.
* **SEO baseline** - current ranking pages, meta titles, structured data, OG cards. **SEO migration is the #1 redesign risk.**

### 11.C Preservation Rules
* **Do not change information architecture** unless asked. Keep page slugs, anchor IDs, primary nav labels stable for SEO and muscle memory.
* **Extract brand colors before applying Section 4.2.** A brand that is already purple stays purple - apply the LILA RULE's override.
* **Preserve copy voice** unless asked for a rewrite. Visual modernisation ≠ content rewrite.
* **Honor existing accessibility wins.** Do not regress focus states, alt text, keyboard nav, contrast.
* **Respect existing analytics events.** Do not rename buttons, form fields, section IDs that downstream tracking depends on.

### 11.D Modernisation Levers (priority order)
Apply in order - stop when the brief is satisfied:
1. **Typography refresh** - biggest visual lift per unit of risk.
2. **Spacing & rhythm** - increase section padding, fix vertical rhythm.
3. **Color recalibration** - desaturate, unify neutrals, keep brand accent.
4. **Motion layer** - add `MOTION_INTENSITY`-appropriate micro-interactions to existing components.
5. **Hero & key-section recomposition** - restructure top-of-funnel using Section 10 vocabulary.
6. **Full block replacement** - only when the existing block is unsalvageable.

### 11.E Decision Tree: Targeted Evolution vs Full Redesign
* IA, content, and SEO sound → **targeted evolution** (Levers 1-4). ~70% of value at ~40% of risk.
* Visual debt is structural (broken IA, no design system, broken mobile) → **full redesign** with strict content preservation.
* Brand itself is changing → **greenfield**.

### 11.F What Never Changes Silently
Never modify without explicit user approval:
* URL structure / route slugs.
* Primary nav labels.
* Form field names or order (breaks analytics + autofill).
* Brand logo or wordmark.
* Existing legal / consent / cookie copy.

---

## 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)

The Reference Vocabulary (Section 10) names patterns. The Block Library implements them with real props, real motion specs, and real code sketches.
**Status:** schema defined here. Blocks will be added iteratively. Do not freelance new blocks without following this schema.

### 12.A File Location
```
skills/taste-skill/blocks/
  hero/
    asymmetric-split.md
    editorial-manifesto.md
    kinetic-type.md
    ...
  feature/
    bento-grid.md
    sticky-scroll-stack.md
    zig-zag.md
    ...
  social-proof/
  pricing/
  cta/
  footer/
  navigation/
  portfolio/
  transition/
```

### 12.B Required Frontmatter
```yaml
---
name: asymmetric-split-hero
category: hero
dial_compatibility:
  variance: [6, 10]
  motion: [3, 10]
  density: [2, 5]
  when_to_use: "Landing pages with one strong asset and one strong message. Default hero for SaaS, agency, premium consumer."
  not_for: "Editorial / manifesto launches where the message IS the design."
  stack: ["react", "next", "tailwind", "motion"]
---
```

### 12.C Required Body Sections
1. **Visual sketch** - short ASCII or description of the layout.
2. **Props API** - the component's interface.
3. **Code sketch** - minimal working implementation (Server Component default, Client island for motion).
4. **Mobile fallback** - explicit collapse rules for `< 768px`.
5. **Motion variants** - one variant per `MOTION_INTENSITY` band (1-3, 4-7, 8-10). Reduced-motion fallback explicit.
6. **Dark-mode notes** - token strategy specific to this block.
7. **Anti-patterns** - common ways this block goes wrong.
8. **References** - links to real examples in production.

### 12.D Block-Library Discipline
* One block per file. No multi-block files.
* Every block must work standalone (drop it into a page, it renders).
* Every block must pass the Pre-Flight Check (Section 14).
* Blocks that depend on a design system from Section 2.A live under `blocks/<category>/<name>--<system>.md` (e.g. `feature/bento-grid--material.md`).

---

## 13. OUT OF SCOPE

This skill is NOT for:
* Dashboards / dense product UI / admin panels (use Fluent, Carbon, Atlassian, or Polaris from Section 2.A).
* Data tables (use TanStack Table or AG Grid).
* Multi-step forms / wizards (use Form-specific patterns; this skill won't make them better).
* Code editors (use Monaco / CodeMirror with their official skinning).
* Native mobile (use Apple HIG / Material directly).
* Realtime collab UIs (presence, cursors, OT-aware - different problem class).

If the brief is one of the above, **say so explicitly**, point to the right tool, and only apply this skill's marketing-page / about-page / landing-page parts to the surfaces where they apply.

---

## 14. FINAL PRE-FLIGHT CHECK

Run this matrix before outputting code. This is the last filter.
**THIS IS NOT OPTIONAL. Run every box. If any box fails, the output is not done.**

- [ ] **Brief inference** declared (Section 0.B one-liner)?
- [ ] **Dial values** explicit and reasoned from the brief, not silently using baseline?
- [ ] **Design system** chosen from Section 2 if applicable, or aesthetic labeled honestly?
- [ ] **Redesign mode** detected and audit performed (if applicable, Section 11)?
- [ ] **ZERO em-dashes (`—`) anywhere on the page.** Headlines, eyebrows, pills, body, quotes, attribution, captions, buttons, alt text. Zero. (Section 9.G - non-negotiable.)
- [ ] **Page Theme Lock**: ONE theme (light, dark, or auto) for the whole page. No section flips to inverted mode mid-page (Section 4.11)?
- [ ] **Color Consistency Lock**: one accent color used identically across all sections (Section 4.2)?
- [ ] **Shape Consistency Lock**: one corner-radius system applied consistently (Section 4.4)?
- [ ] **Button Contrast Check**: every CTA text is readable against its background (no white-on-white, WCAG AA 4.5:1)?
- [ ] **CTA Button Wrap**: no CTA label wraps to 2+ lines at desktop?
- [ ] **Form Contrast Check**: form inputs, placeholders, focus rings, labels all pass WCAG AA against the section background?
- [ ] **Serif discipline**: if a serif is used, it is NOT Fraunces or Instrument_Serif (or it is, with explicit brand justification)? Different serif from your previous project?
- [ ] **Premium-consumer palette check**: if the brief is premium-consumer (cookware / wellness / artisan / luxury), the palette is NOT the AI-default beige+brass+oxblood+espresso family? Different family from your previous premium-consumer project?
- [ ] **Italic descender clearance**: every italic word with `y g j p q` has `leading-[1.1]` min + `pb-1` reserve?
- [ ] **Hero fits the viewport**: headline ≤ 2 lines, subtext ≤ 20 words AND ≤ 4 lines, CTA visible without scroll, font scale planned around image?
- [ ] **Hero top padding**: max `pt-24` at desktop, hero content does not float halfway down the viewport?
- [ ] **Hero stack discipline**: max 4 text elements in hero (eyebrow OR brand strip, headline, subtext, CTAs)? No tiny tagline below CTAs, no trust micro-strip in hero?
- [ ] **EYEBROW COUNT (mechanical)**: count instances of `uppercase tracking` micro-labels above section headlines across all components. Count ≤ ceil(sectionCount / 3)? Hero counts as 1.
- [ ] **Split-Header Ban**: no "left big headline + right small explainer paragraph" pattern as a section header (vertical stack instead)?
- [ ] **Zigzag Alternation Cap**: no 3+ consecutive sections with the same image+text-split layout?
- [ ] **No Duplicate CTA Intent**: no two CTAs with the same intent ("Get in touch" + "Let's talk" both on page = Fail)?
- [ ] **Logo wall = logo only**: no industry / category labels printed below logos?
- [ ] **Bento Background Diversity**: at least 2-3 bento cells have real visual variation (image, gradient, pattern), not all white-on-white text cards?
- [ ] **"Used by / Trusted by" logo wall** lives UNDER the hero, not inside it, uses REAL SVG logos (Simple Icons / devicon) or generated SVG marks, NOT plain text wordmarks?
- [ ] **Copy Self-Audit**: every visible string re-read, no grammatically-broken or AI-hallucinated phrases ("free on its past" type) shipped?
- [ ] **Motion motivated**: every animation can be justified in one sentence (hierarchy / storytelling / feedback / state transition), no GSAP-for-show?
- [ ] **Marquee max-one-per-page**: no two horizontal marquees on the same page?
- [ ] **Navigation on ONE line** at desktop, height ≤ 80px?
- [ ] **Section-Layout-Repetition** check: no two sections share the same layout family (at least 4 different families across 8 sections)?
- [ ] **Bento has rhythm AND exact cell count** (N items → N cells, no empty cells in middle or at end)?
- [ ] **Long lists use the right UI component** (not default `<ul>` with `divide-y` for > 5 items - see Section 4.9 alternatives)?
- [ ] **Real images used** (gen-tool first, then Picsum-seed, then explicit placeholder slots) - NO div-based fake screenshots, NO hand-rolled decorative SVGs, NO pure-text minimalism?
- [ ] **No pills/labels overlaid on images** (no `Plate · Brand`, no `Field notes - journal`)?
- [ ] **No photo-credit captions as decoration** (`Field study no. 12 · Ines Caetano`)?
- [ ] **No version footers** (`v1.4.2`, `Build 0048`) on marketing pages?
- [ ] **No micro-meta-sentences** under eyebrows ("Each of these is a feature we ship today...")?
- [ ] **No decoration text strip at hero bottom** (`BRAND. MOTION. SPATIAL.`)?
- [ ] **No floating top-right sub-text** in section headings?
- [ ] **No scoring/progress bars with filled background tracks** as comparison visuals?
- [ ] **No locale / city-name / time / weather strips** unless brief is genuinely globally-distributed or place-focused?
- [ ] **No scroll cues** (`Scroll`, `↓ scroll`, `Scroll to explore`)?
- [ ] **No version labels in hero** (V0.6, BETA, INVITE-ONLY) unless the brief is a launch?
- [ ] **No section-numbering eyebrows** (`00 / INDEX`, `001 · Capabilities`, `06 · how it works`)?
- [ ] **No decorative dots** (zero by default, only for real semantic state)?
- [ ] **No `border-t` + `border-b` on every row** of long lists / spec tables?
- [ ] **Content density** sane: no 20-row data tables, no fake-precise specs without justification, ≤ 25-word sub-paragraphs by default?
- [ ] **Quotes ≤ 3 lines** of body, attribution clean (no em-dash)?
- [ ] **Motion claimed = motion shown**: if `MOTION_INTENSITY > 4`, page actually animates, not just claimed?
- [ ] **GSAP sticky-stack / horizontal-pan** implemented per Section 5.A / 5.B canonical skeleton (`start: "top top"`, `pin: true`, correct scrub)?
- [ ] **No `window.addEventListener('scroll')`** - using Motion `useScroll()` / ScrollTrigger / IntersectionObserver / CSS scroll-driven animations only?
- [ ] **Reduced motion** wrapped for everything `MOTION_INTENSITY > 3`?
- [ ] **Dark mode** tokens defined and tested in both modes?
- [ ] **Mobile collapse** explicit (`w-full`, `px-4`, `max-w-7xl mx-auto`) for high-variance layouts?
- [ ] **Viewport stability**: `min-h-[100dvh]`, never `h-screen`?
- [ ] **`useEffect` animations** have strict cleanup functions?
- [ ] **Empty / loading / error** states provided?
- [ ] **Cards omitted** in favor of spacing where possible?
- [ ] **Icons** from an allowed library only (Phosphor / HugeIcons / Radix / Tabler), no hand-rolled SVG paths?
- [ ] **Motion** isolated in client-leaf components with `'use client'` at the top, memoized?
- [ ] **No AI Tells** from Section 9 (Inter as default, AI-purple, three-equal cards, Jane Doe, Acme, "Quietly in use at")?
- [ ] **Core Web Vitals** plausibly hit (LCP < 2.5s, INP < 200ms, CLS < 0.1)?
- [ ] **One design system** per project (no Material + shadcn mixed)?

If a single checkbox cannot be honestly ticked, the page is not done. Fix it before delivering.

---

# APPENDICES - Real Source-Backed Reference Material

The sections below are vendored reference content. They give the agent real install commands, real canonical doc links, and real working starter snippets for each design system named in Section 2. Use them to ground decisions in production reality, not training-data fiction.

## Appendix A - Install Commands per Design System
```bash
# Material Web (Material 3)
npm install @material/web

# Fluent UI React (v9)
npm install @fluentui/react-components

# Fluent UI Web Components (framework-free)
npm install @fluentui/web-components @fluentui/tokens

# IBM Carbon
npm install @carbon/react @carbon/styles

# Radix Themes
npm install @radix-ui/themes

# shadcn/ui (open code, owned components)
npx shadcn@latest init
npx shadcn@latest add button card badge separator input

# Primer CSS (GitHub product/devtool UI)
npm install --save @primer/css

# Primer Brand (GitHub marketing UI)
npm install @primer/react-brand

# GOV.UK Frontend
npm install govuk-frontend

# USWDS (US Web Design System)
npm install uswds

# Atlassian Design System (Atlaskit)
yarn add @atlaskit/css-reset @atlaskit/tokens @atlaskit/button @atlaskit/badge @atlaskit/section-message @atlaskit/card

# Bootstrap 5.3
npm install bootstrap

# Shopify Polaris Web Components (Shopify apps only)
# Add this to your app HTML head:
#   <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
#   <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
```

## Appendix B - Canonical Sources (read these before reinventing)
### Material Web
- https://github.com/material-components/material-web
- https://material-web.dev/theming/material-theming/
- https://m3.material.io/develop/web

### Fluent UI
- https://fluent2.microsoft.design/get-started/develop
- https://fluent2.microsoft.design/components/web/react/
- https://github.com/microsoft/fluentui
- https://learn.microsoft.com/en-us/fluent-ui/web-components/

### Carbon
- https://carbondesignsystem.com/
- https://github.com/carbon-design-system/carbon
- https://carbondesignsystem.com/developing/react-tutorial/overview/
- https://carbondesignsystem.com/developing/web-components-tutorial/overview/

### Shopify Polaris
- https://shopify.dev/docs/api/app-home/web-components
- https://github.com/Shopify/polaris-react
- https://polaris-react.shopify.com/components

### Atlassian
- https://atlassian.design/get-started/develop
- https://atlassian.design/components/button/examples
- https://atlaskit.atlassian.com/packages/design-system/button/example/disabled
- https://atlassian.design/tokens/design-tokens

### Primer
- https://primer.style/
- https://github.com/primer/css
- https://github.com/primer/brand

### GOV.UK
- https://design-system.service.gov.uk/components/button/
- https://design-system.service.gov.uk/styles/layout/
- https://github.com/alphagov/govuk-frontend

### USWDS
- https://designsystem.digital.gov/documentation/developers/
- https://designsystem.digital.gov/components/button/
- https://designsystem.digital.gov/components/card/
- https://github.com/uswds/uswds

### Bootstrap
- https://getbootstrap.com/docs/5.3/layout/grid/
- https://getbootstrap.com/docs/5.3/components/card/

### Tailwind
- https://tailwindcss.com/docs/dark-mode
- https://tailwindcss.com/blog/tailwindcss-v4

### Radix
- https://www.radix-ui.com/themes/docs/components/theme
- https://www.radix-ui.com/themes/docs/components/card
- https://github.com/radix-ui/themes

### shadcn/ui
- https://ui.shadcn.com/docs
- https://ui.shadcn.com/docs/components/card
- https://github.com/shadcn-ui/ui

### Native CSS / W3C standards
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- https://drafts.csswg.org/scroll-animations-1/

### Apple Liquid Glass (Apple platforms only)
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass
- https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass
- https://developer.apple.com/documentation/SwiftUI/Material

---

## Appendix C - Apple Liquid Glass: Honest Web Approximation
Do **not** treat random CSS snippets as official Apple Liquid Glass.

### What is official
Apple documents Liquid Glass inside Apple's Human Interface Guidelines and Developer Documentation for **Apple platforms**. It is a dynamic material used across Apple platform UI. Apple's native implementation belongs to Apple platform APIs and system components, **not a public web CSS package**.

Relevant official docs:
- Apple Human Interface Guidelines → Materials
- Apple Developer Documentation → Liquid Glass
- Apple Developer Documentation → Adopting Liquid Glass
- SwiftUI → Material

### What is NOT official
There is no `liquid-glass.css` from Apple for normal websites.
A web approximation can use:
- `backdrop-filter`
- transparent backgrounds
- layered borders
- highlight overlays
- gradients
- motion
- strong contrast fallbacks
But that is **web glassmorphism / frosted-glass approximation**, not official Apple Liquid Glass. Label it as such in comments.

### Safer web approximation skeleton
```css
.liquid-glass-web-approx {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / .32);
  background:
    linear-gradient(135deg, rgb(255 255 255 / .30), rgb(255 255 255 / .08)),
    rgb(255 255 255 / .12);
  backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  -webkit-backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / .48),
    inset 0 -1px 0 rgb(255 255 255 / .12),
    0 18px 60px rgb(0 0 0 / .18);
}

.liquid-glass-web-approx::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 20% 0%, rgb(255 255 255 / .55), transparent 34%),
    linear-gradient(90deg, rgb(255 255 255 / .18), transparent 42%, rgb(255 255 255 / .14));
  pointer-events: none;
}

.liquid-glass-web-approx::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  border: 1px solid rgb(255 255 255 / .14);
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .liquid-glass-web-approx {
    border-color: rgb(255 255 255 / .18);
    background:
      linear-gradient(135deg, rgb(255 255 255 / .16), rgb(255 255 255 / .04)),
      rgb(15 23 42 / .42);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / .22),
      0 18px 60px rgb(0 0 0 / .42);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .liquid-glass-web-approx {
    background: rgb(255 255 255 / .96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```
**Important:** `prefers-reduced-transparency` has uneven browser support; test it. Always provide enough contrast even without blur.

---

# SKILL: impeccable

# impeccable

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Setup

You MUST do these steps before proceeding:

1. Run `node .agents/skills/impeccable/scripts/context.mjs` once per session; if the runtime shows this skill's loaded base directory, run `node <skill-base-dir>/scripts/context.mjs` instead. Keep cwd/workdir at the user's project, not the skill directory. If the request names or implies a file, route, or app inside a monorepo, infer the concrete path and append `--target <path>` to the same command. If you've already seen its output in this conversation, do not re-run it. The script either prints the project's PRODUCT.md (and DESIGN.md when present) as a markdown block, or tells you it's missing. Follow whatever it prints. **If it reports `NO_PRODUCT_MD`:** divert into `reference/init.md` first when the user invoked `init`, `teach`, `craft`, or `shape`, or when their wording clearly maps to one of those from-scratch build flows (for example: "build/create/make a landing page", "design a new app", or "shape a feature"). Captured product context is the point of those flows. For any other command, a scoped evaluate / refine / enhance / fix / iterate request against existing code, do **not** divert into init. The existing code is the context: proceed with the requested command, infer the register from the surface in focus (step 4), and offer `$impeccable init` once as a suggestion the user can take later. A missing PRODUCT.md must never block a scoped request. If the output ends with an `UPDATE_AVAILABLE` directive, follow it (ask the user once about updating, then continue). It never blocks the current task.
2. If the user invoked a sub-command (`craft`, `shape`, `audit`, `polish`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow; without it you will skip steps the user expects.
3. Familiarize yourself with any existing design system, conventions, and components in the code. Read at least one project file (CSS / tokens / theme / a representative component or page). **Required even when you've loaded a sub-command reference in step 2.** Don't reinvent the wheel; use what's there when it works, branch out when the UX wins.
4. Read the matching register reference. **This is non-optional; skipping it produces generic output.** If the project is marketing, a landing page, a campaign, long-form content, or a portfolio (design IS the product), read `reference/brand.md`. If it is app UI, admin, a dashboard, or a tool (design SERVES the product), read `reference/product.md`. Pick by first match: (1) task cue ("landing page" vs "dashboard"); (2) surface in focus (the page, file, or route being worked on); (3) `register` field in PRODUCT.md.
5. **If the project is brand-new (no existing CSS tokens / theme / committed brand colors found in step 3)**, run `node .agents/skills/impeccable/scripts/palette.mjs` to receive a brand seed color and composition guidance. This is the anchor for your primary brand color. Compose the rest of the palette (bg, surface, ink, accent, muted) around it per the script's instructions. Use OKLCH throughout. **Skip this step only if step 3 found committed brand colors in existing tokens; in that case identity-preservation wins.**

## Design guidance

Produce ready-to-ship, production-grade code, not prototypes or starting points. Take no shortcuts unless the user asks for them (when in doubt, ask). Don't stop until arriving at a complete implementation (beautiful, responsive, fast, precise, bug-free, on brand). You take attention to detail seriously: every page, section or component crafted is battle tested using the tools available to you (browser screenshotting, computer use, etc). GPT is capable of extraordinary work. Don't hold back.

### General rules

#### Color
- **Verify contrast.** Body text must hit ≥4.5:1 against its background; large text (≥18px or bold ≥14px) needs ≥3:1. Placeholder text needs the same 4.5:1, not the muted-gray default. The most common failure: muted gray body text on a tinted near-white. If the contrast is even close, bump the body color toward the ink end of the ramp; light gray "for elegance" is the single biggest reason AI designs feel hard to read.
- Gray text on a colored background looks washed out. Use a darker shade of the background's own hue, or a transparency of the text color.

#### Typography
- Cap body line length at 65–75ch.
- Don't pair fonts that are similar but not identical (two geometric sans-serifs, two humanist sans-serifs). Pair on a contrast axis (serif + sans, geometric + humanist) or use one family in multiple weights.
- Hero / display heading ceiling: clamp() max ≤ 6rem (~96px). Above that the page is shouting, not designing.
- Display heading letter-spacing floor: ≥ -0.04em. Anything tighter and letters touch; cramped, not "designed".
- Use `text-wrap: balance` on h1–h3 for even line lengths; `text-wrap: pretty` on long prose to reduce orphans.
- Display letter-spacing ≥ -0.04em. Your default of -0.05 to -0.085em on display H1s makes the letters touch and reads as cramped. -0.02 to -0.03em is plenty for tight grotesque display; -0.04em is the floor.

#### Layout
- Vary spacing for rhythm.
- Cards are the lazy answer. Use them only when they're truly the best affordance. Nested cards are always wrong.
- Flexbox for 1D, Grid for 2D. Don't default to Grid when `flex-wrap` would be simpler.
- For responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- Build a semantic z-index scale (dropdown → sticky → modal-backdrop → modal → toast → tooltip). Never arbitrary values like 999 or 9999.

#### Motion
- Motion should be intentional, and not be an afterthought. consider it as part of the build.
- Don't animate CSS layout properties unless truly needed.
- Ease out with exponential curves (ease-out-quart / quint / expo). No bounce, no elastic.
- Use libraries for more advanced motion needs (e.g. motion, gsap, anime.js, lenis etc)
- Reduced motion is not optional. Every animation needs a `@media (prefers-reduced-motion: reduce)` alternative: typically a crossfade or instant transition.
- Staggering the items within one list is legitimate. The tell is the uniform reflex (one identical entrance applied to every section), not motion itself; each reveal should fit what it reveals. Suppressing the reflex is never a reason to ship a page with no motion at all.
- Reveal animations must enhance an already-visible default. Don't gate content visibility on a class-triggered transition; transitions pause on hidden tabs and headless renderers, so the reveal never fires and the section ships blank.
- Premium motion materials are not just transform/opacity. Blur, backdrop-filter, clip-path, mask, and shadow/glow are part of the palette when they materially improve the effect and stay smooth.

#### Interaction
- Dropdowns rendered with `position: absolute` inside an `overflow: hidden` or `overflow: auto` container will be clipped. Use the native `<dialog>` / popover API, `position: fixed`, or a portal to escape the stacking context.

### New projects only (when no prior work exists)

#### Color & Theme
- Use OKLCH.
- **The cream / sand / beige body bg is the saturated AI default of 2026.** The whole warm-neutral band (OKLCH L 0.84-0.97, C < 0.06, hue 40-100) reads as cream/sand/paper/parchment regardless of what you call it. Token names like `--paper`, `--cream`, `--sand`, `--bone`, `--flour`, `--linen`, `--parchment`, `--wheat`, `--biscuit`, `--ivory` are tells in themselves. If the brief is "warm, traditional, family-coastal-Italian" or "magazine-warm" or "editorial-restraint", DO NOT translate that into a near-white warm-tinted bg; that's the AI move. Pick: (a) a saturated brand color as the body (terracotta, oxblood, deep ochre, near-black), (b) a true off-white at chroma 0 (or chroma toward the brand's own hue, not toward warmth-by-default), or (c) a darker mid-tone tinted neutral that's clearly the brand's own. "Warmth" in the brand is carried by accent + typography + imagery, not by body bg.
- Tinted neutrals: add 0.005–0.015 chroma toward the brand's hue. Don't default-tint toward warm or cool "because the brand feels that way"; that's the cross-project monoculture move.
- When picking a theme: Dark vs. light is never a default. Not dark "because tools look cool dark." Not light "to be safe.".Before choosing, write one sentence of physical scene: who uses this, where, under what ambient light, in what mood. If the sentence doesn't force the answer, it's not concrete enough. Add detail until it does.
- Pick a **color strategy** before picking colors. Four steps on the commitment axis:
  - **Restrained**: tinted neutrals + one accent ≤10%. Product default; brand minimalism.
  - **Committed**: one saturated color carries 30–60% of the surface. Brand default for identity-driven pages.
  - **Full palette**: 3–4 named roles, each used deliberately. Brand campaigns; product data viz.
  - **Drenched**: the surface IS the color. Brand heroes, campaign pages.

### Absolute bans
Match-and-refuse. If you're about to write any of these, rewrite the element with different structure.
- **Side-stripe borders.** `border-left` or `border-right` greater than 1px as a colored accent on cards, list items, callouts, or alerts. Never intentional. Rewrite with full borders, background tints, leading numbers/icons, or nothing.
- **Gradient text.** `background-clip: text` combined with a gradient background. Decorative, never meaningful. Use a single solid color. Emphasis via weight or size.
- **Glassmorphism as default.** Blurs and glass cards used decoratively. Rare and purposeful, or nothing.
- **The hero-metric template.** Big number, small label, supporting stats, gradient accent. SaaS cliché.
- **Identical card grids.** Same-sized cards with icon + heading + text, repeated endlessly.
- **Tiny uppercase tracked eyebrow above every section.** The 2023-era kicker (small all-caps text with wide tracking, "ABOUT" "PROCESS" "PRICING" above each heading) is now the saturated AI scaffold; it appears on 55-95% of generations regardless of brief, which is the definition of a tell. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar. Choose a different cadence.
- **Numbered section markers as default scaffolding (01 / 02 / 03).** Putting `01 · About / 02 · Process / 03 · Pricing` above every section is the eyebrow trope one tier deeper: reach for it because "landing pages do this" and you're scaffolding by reflex. Numbers earn their place when the section actually IS a sequence (a real 3-step process, an ordered flow, a typed timeline) and the order carries information the reader needs. One deliberate numbered sequence on one page is voice; numbered eyebrows on every section across the site is AI grammar.
- **Text that overflows its container.** Long heading words plus large clamp scales plus narrow grids cause headline overflow on tablet/mobile. Test the heading copy at every breakpoint; if it overflows, reduce the clamp max or rewrite the copy. The viewport is part of the design.

**Codex-specific defects** (your most-frequent giveaways; refuse-and-rewrite):
- **`border: 1px solid X` + `box-shadow: 0 Npx Mpx ...` with M ≥ 16px** on the same element. The "ghost-card" pattern: 1px border plus soft wide drop shadow on buttons and cards. Don't pair them. Pick one (a single solid border at the brand color, OR a defined shadow at no more than 8px blur), never both as decoration.
- **`border-radius: 32px+` on cards / sections / inputs.** You over-round. Cards top out at 12–16px; full-pill is fine for tags/buttons. Picking 24/28/32/40px on a card is the codex tell; no brand wants "insanely rounded".
- **Hand-drawn / sketchy SVG illustrations.** Class names like `loose-sketch`, `*-sketch`, `doodle`, `wavy`; `feTurbulence` / `feDisplacementMap` "paper grain" filters; 5-to-30 path crude scenes meant to depict a tangible subject (an otter, a table-and-fork, an album cover). All of these read as amateurish, not whimsical. If you can't render the scene with real assets, ship no illustration. Don't attempt sketchy SVG as a fallback.
- **`repeating-linear-gradient(...)` stripe backgrounds.** Diagonal stripes in `body:before` or section backgrounds are pure codex decoration. Don't.
- **Decorative grid backgrounds.** Two-axis CSS grid overlays built from `linear-gradient(... 1px, transparent 1px)` plus `background-size` are a Codex tell unless the surface is an actual canvas, map, blueprint, or measurement tool. Use product structure, real artifacts, or a plain surface instead.
- **Meta-criticism copy.** Naming a concept then layering an ironic modifier, or staging a strawman to "correct" it. Make the specific claim instead.

### The AI slop test
If someone could look at this interface and say "AI made that" without doubt, it's failed. Cross-register failures are the absolute bans above. Register-specific failures live in each reference.

**Category-reflex check.** Run at two altitudes; the second one catches what the first one misses.
- **First-order:** if someone could guess the theme + palette from the category alone, it's the first training-data reflex. Rework the scene sentence and color strategy until the answer isn't obvious from the domain.
- **Second-order:** if someone could guess the aesthetic family from category-plus-anti-references ("AI workflow tool that's not SaaS-cream → editorial-typographic", "fintech that's not navy-and-gold → terminal-native dark mode"), it's the trap one tier deeper. The first reflex was avoided; the second wasn't. Rework until both answers are not obvious. The brand register's [reflex-reject aesthetic lanes](reference/brand.md) list catches the currently-saturated families.

## Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `craft [feature]` | Build | Shape, then build a feature end-to-end | [reference/craft.md](reference/craft.md) |
| `shape [feature]` | Build | Plan UX/UI before writing code | [reference/shape.md](reference/shape.md) |
| `init` | Build | Set up project context: PRODUCT.md, DESIGN.md, live config, next steps | [reference/init.md](reference/init.md) |
| `document` | Build | Generate DESIGN.md from existing project code | [reference/document.md](reference/document.md) |
| `extract [target]` | Build | Pull reusable tokens and components into design system | [reference/extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [reference/critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) |
| `polish [target]` | Refine | Final quality pass before shipping | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | Refine | Amplify safe or bland designs | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | Strip to essence, remove complexity | [reference/distill.md](reference/distill.md) |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | Add purposeful animations and motion | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy | [reference/layout.md](reference/layout.md) |
| `delight [target]` | Enhance | Add personality and memorable touches | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | Push past conventional limits | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes | [reference/adapt.md](reference/adapt.md) |
| `optimize [target]` | Fix | Diagnose and fix UI performance | [reference/optimize.md](reference/optimize.md) |
| `live` | Iterate | Visual variant mode: pick elements in the browser, generate alternatives | [reference/live.md](reference/live.md) |

Plus three management commands: `pin <command>`, `unpin <command>`, and `hooks <on|off|status|...>`, detailed below.

### Routing rules
1. **No argument**: the user is asking "what should I do?" Make the menu context-aware instead of static. Setup has already run `context.mjs`; if that reported `NO_PRODUCT_MD` the project has no captured context yet, so lead the menu with `$impeccable init` as the top recommendation (one line on why) and still show the rest below; don't silently jump into init. Otherwise run `node .agents/skills/impeccable/scripts/context-signals.mjs` once and read its JSON, then lead with the **2-3 highest-value next commands**, each with a one-line reason pulled from the signals, followed by the full menu (the table above, grouped by category). **Never auto-run a command; the recommendation is a suggestion the user confirms.**
   Reason over the signals; there is no score to obey:
   - `setup.hasDesign` false while `setup.hasCode` true → `document` (capture the visual system).
   - `critique.latest` is `null` → the project has never been critiqued; for a set-up project with a real surface, offering `$impeccable critique <surface>` is a strong default.
   - `critique.latest` with a low `score` or non-zero `p0` / `p1` → `polish` (it reads that snapshot as its backlog), or re-run `critique` if the snapshot looks stale.
   - `git.changedFiles` pointing at one surface → scope `audit` or `polish` to those files specifically, naming them.
   - `devServer.running` true → `live` is available for in-browser iteration; if false, don't lead with `live`.
   - Otherwise group by intent exactly as init's "Recommend starting points" step does (build new / improve what's there / iterate visually), tailored to `setup.register`.

   **If `scan.targets` is non-empty, run `node .agents/skills/impeccable/scripts/detect.mjs --json <scan.targets joined by spaces>` once** (the bundled detector over local files: no network, no npx). `scan.via` tells you what they are: `git-changes` (the markup/style files in your dirty tree, the most relevant set), `source-dir` (e.g. `src`, `app`), `html`, or `root`. Fold the hits into your picks: many quality / contrast hits → `audit` or `polish`; a specific slop family → the matching command (gradient text or eyebrows → `quieter` / `typeset`, flat or gray palette → `colorize`, and so on). It's a real, current signal that beats guessing. If detect errors or the tree is large and slow, skip it and recommend the user run `audit` themselves; never block the suggestion on it.
   Keep it to 2-3 pointed picks with the exact command to type. The menu stays the fallback; the recommendation is the lede.
2. **First word matches a command** (table above OR `pin` / `unpin` / `hooks`): load its reference file and follow its instructions. Everything after the command name is the target.
3. **First word doesn't match, but the intent clearly maps to one command** (e.g. "fix the spacing" → `layout`, "rewrite this error message" → `clarify`, "the colors feel flat" → `colorize`): load that command's reference and proceed as if invoked. If two commands could fit, ask once which.
4. **No clear command match**: general design invocation. Apply the setup steps, the General rules, and the loaded register reference, using the full argument as context.

Setup (context gathering, register) is already loaded by then; sub-commands don't re-invoke `$impeccable`.
If the first word is `craft` or `shape`, or routing rule 3 clearly maps the user's intent to either command, setup still runs first, but the matching reference ([reference/craft.md](reference/craft.md) or [reference/shape.md](reference/shape.md)) owns the rest of the flow. Both are from-scratch build flows: if setup invokes `init` as a blocker, finish init, refresh context, then resume the original command and target.
`teach` is a deprecated alias for `init`: if the user types it, load [reference/init.md](reference/init.md) and proceed as if they ran `init`.

## Pin / Unpin
**Pin** creates a standalone shortcut so `$<command>` invokes `$impeccable <command>` directly. **Unpin** removes it. The script writes to every harness directory present in the project.
```bash
node .agents/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
```
Valid `<command>` is any command from the table above. Report the script's result concisely. Confirm the new shortcut on success, relay stderr verbatim on error.

## Hooks
`$impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` manages the design detector hook for this project. The hook auto-runs the detector after direct UI file edits and surfaces findings as system reminders. Full flow is in [reference/hooks.md](reference/hooks.md); load it when the user invokes `$impeccable hooks` with any argument.

---

# SKILL: ui-ux-pro-max

---
name: ui-ux-pro-max
description: UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks.
---
# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Contains 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 13 technology stacks. Searchable database with priority-based recommendations.

## Prerequisites

Check if Python is installed:
```bash
python3 --version || python --version
```

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```bash
winget install Python.Python.3.12
```

---

## How to Use This Skill

When user requests UI/UX work (design, build, create, implement, review, fix, improve), follow this workflow:

### Step 1: Analyze User Requirements
Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)
**Always start with `--design-system`** to get comprehensive recommendations with reasoning:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches 5 domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist Design System (Master + Overrides Pattern)
To save the design system for hierarchical retrieval across sessions, add `--persist`:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```
This creates:
- `design-system/MASTER.md` — Global Source of Truth with all design rules
- `design-system/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```
This also creates:
- `design-system/pages/dashboard.md` — Page-specific deviations from Master

**How hierarchical retrieval works:**
1. When building a specific page (e.g., "Checkout"), first check `design-system/pages/checkout.md`
2. If the page file exists, its rules **override** the Master file
3. If not, use `design-system/MASTER.md` exclusively

### Step 3: Supplement with Detailed Searches (as needed)
After getting the design system, use domain searches to get additional details:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use detailed searches:**
| Need | Domain | Example |
|---|---|---|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines (Default: html-tailwind)
Get implementation-specific best practices. If user doesn't specify a stack, **default to `html-tailwind`**.
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```
Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

---

## Search Reference

### Available Domains
| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache |
| `web` | Web interface guidelines | aria, focus, keyboard, semantic, virtualize |
| `prompt` | AI prompts, CSS keywords | (style name) |

### Available Stacks
| Stack | Focus |
|-------|-------|
| `html-tailwind` | Tailwind utilities, responsive, a11y (DEFAULT) |
| `react` | State, hooks, performance, patterns |
| `nextjs` | SSR, routing, images, API routes |
| `vue` | Composition API, Pinia, Vue Router |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Views, State, Navigation, Animation |
| `react-native` | Components, Navigation, Lists |
| `flutter` | Widgets, State, Layout, Theming |
| `shadcn` | shadcn/ui components, theming, forms, patterns |
| `jetpack-compose` | Composables, Modifiers, State Hoisting, Recomposition |

---

## Example Workflow

**User request:** "Làm landing page cho dịch vụ chăm sóc da chuyên nghiệp"

### Step 1: Analyze Requirements
- Product type: Beauty/Spa service
- Style keywords: elegant, professional, soft
- Industry: Beauty/Wellness
- Stack: html-tailwind (default)

### Step 2: Generate Design System (REQUIRED)
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```
**Output:** Complete design system with pattern, style, colors, typography, effects, and anti-patterns.

### Step 3: Supplement with Detailed Searches (as needed)
```bash
# Get UX guidelines for animation and accessibility
python3 skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Get alternative typography options if needed
python3 skills/ui-ux-pro-max/scripts/search.py "elegant luxury serif" --domain typography
```

### Step 4: Stack Guidelines
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "layout responsive form" --stack html-tailwind
```
**Then:** Synthesize design system + detailed searches and implement the design.

---

## Output Formats
The `--design-system` flag supports two output formats:
```bash
# ASCII box (default) - best for terminal display
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Tips for Better Results
1. **Be specific with keywords** - "healthcare SaaS dashboard" > "app"
2. **Search multiple times** - Different keywords reveal different insights
3. **Combine domains** - Style + Typography + Color = Complete design system
4. **Always check UX** - Search "animation", "z-index", "accessibility" for common issues
5. **Use stack flag** - Get implementation-specific best practices
6. **Iterate** - If first search doesn't match, try different keywords

---

## Common Rules for Professional UI
These are frequently overlooked issues that make UI look unprofessional:

### Icons & Visual Elements
| Rule | Do | Don't |
|------|----|----- |
| **No emoji icons** | Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| **Stable hover states** | Use color/opacity transitions on hover | Use scale transforms that shift layout |
| **Correct brand logos** | Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| **Consistent icon sizing** | Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### Interaction & Cursor
| Rule | Do | Don't |
|------|----|----- |
| **Cursor pointer** | Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| **Hover feedback** | Provide visual feedback (color, shadow, border) | No indication element is interactive |
| **Smooth transitions** | Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast
| Rule | Do | Don't |
|------|----|----- |
| **Glass card light mode** | Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| **Text contrast light** | Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| **Muted text light** | Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| **Border visibility** | Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### Layout & Spacing
| Rule | Do | Don't |
|------|----|----- |
| **Floating navbar** | Add `top-4 left-4 right-4` spacing | Stick navbar to `top-0 left-0 right-0` |
| **Content padding** | Account for fixed navbar height | Let content hide behind fixed elements |
| **Consistent max-width** | Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist
Before delivering UI code, verify these items:

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (bg-primary) not var() wrapper

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

---

# SKILL: huashu-design

---
name: huashu-design
description: 花叔Design——用HTML做高保真原型、幻灯片、动画、可视化与专家评审，需求模糊时给设计方向。触发词：做原型、PPT、幻灯片、动画、设计风格、评审、做个HTML页面、UI mockup、导出MP4/GIF、做个好看的。生产级Web App/需后端的系统不适用。
---

# 花叔Design · Huashu-Design

你是一位用HTML工作的设计师，不是程序员。用户是你的manager，你产出深思熟虑、做工精良的设计作品。

**HTML是工具，但你的媒介和产出形式会变**——做幻灯片时别像网页，做动画时别像Dashboard，做App原型时别像说明书。**根据任务embody对应领域的专家**：动画师/UX设计师/幻灯片设计师/原型师。

## 使用前提

这个skill专为「用HTML做视觉产出」的场景设计，不是给任何HTML任务用的万能勺。适用场景：
- **交互原型**：高保真产品mockup，用户可以点击、切换、感受流程
- **设计变体探索**：并排对比多个设计方向，或用Tweaks实时调参
- **演示幻灯片**：1920×1080的HTML deck，可以当PPT用
- **动画Demo**：时间轴驱动的motion design，做视频素材或概念演示
- **信息图/可视化**：精确排版、数据驱动、印刷级质量

不适用场景：生产级Web App、SEO网站、需要后端的动态系统——这些用frontend-design skill。

## 任务路由：一张表定入口

收到任务先扫一遍这张表，确定走哪条线再开工（多信号同时命中按行序叠加）：

| 任务信号 | 入口 |
|---------|------|
| 提到具体品牌/产品名 | 核心原则#0 事实验证 → §1.a 资产协议 → 标准流程 |
| 没给风格参考（最常见） | Fallback 顾问模式 Phase 1-5 → 回标准流程 Step 2 |
| 幻灯片/PPT | 标准流程 + Step 1 deck 交付链 + 「技术红线」架构选型 |
| 动画/导出 MP4/GIF | 标准流程 + Step 9；动手前必读 `references/animation-pitfalls.md` |
| 带解说长视频（≥1分钟） | Step 9.5 → `references/voiceover-pipeline.md` |
| launch film/品牌宣传片（「Apple级」「超级碗品质」） | 先写万字 director's notes → `references/launch-film-director-notes.md` |
| App/iOS 原型 | 「App / iOS 原型专属守则」（覆盖通用规则） |
| 评审/打分 | Step 10 → `references/critique-guide.md` |
| 弱 runtime（无 subagent/非 Claude） | 上述任一条 + 「弱 runtime 降级模式」 |

例：「做个咖啡主题的 PPT」= 第 2 行 + 第 3 行——Fallback 出三版（咖啡是主题不是品牌，不找 logo），deck 骨架统一用概览墙模板。

## 核心原则 #0 · 事实验证先于假设（优先级最高，凌驾所有其他流程）

> **任何涉及具体产品/技术/事件/人物的存在性、发布状态、版本号、规格参数的事实性断言，第一步必须 `WebSearch` 验证，禁止凭训练语料做断言。**

**触发条件（满足任一）**：
- 用户提到你不熟悉或不确定的具体产品名（如"大疆 Pocket 4"、"Nano Banana Pro"、"Gemini 3 Pro"、某新版 SDK）
- 涉及 2024 年及之后的发布时间线、版本号、规格参数
- 你内心冒出"我记得好像是..."、"应该还没发布"、"大概在..."、"可能不存在"的句式
- 用户请求给某个具体产品/公司做设计物料

**硬流程（开工前执行，优先于 clarifying questions）**：
1. `WebSearch` 产品名 + 最新时间词（"2026 latest"、"launch date"、"release"、"specs"）
2. 读 1-3 条权威结果，确认：**存在性 / 发布状态 / 最新版本号 / 关键规格**
3. 把事实写进项目的 `product-facts.md`（见工作流 Step 2），不靠记忆
4. 搜不到或结果模糊 → 问用户，而不是自行假设

**反例**（2026-04-20 实测）：用户要「大疆 Pocket 4 发布动画」，我凭记忆断言「还没发布」做了概念剪影——真相是 4 天前已发布、官方物料俱在。**成本对比：WebSearch 10 秒 << 返工 2 小时**。
**这条原则优先级高于"问 clarifying questions"**——问问题的前提是你对事实已有正确理解。事实错了，问什么都是歪 of.

**禁止句式（看到自己要说这些时，立即停下去搜）**：
- ❌ "我记得 X 还没发布"
- ❌ "X 目前是 vN 版本"（未经搜索的断言）
- ❌ "X 这个产品可能不存在"
- ❌ "据我所知 X 的规格是..."
- ✅ "我 `WebSearch` 一下 X 最新状态"
- ✅ "搜到的权威来源说 X 是 ..."

**与"品牌资产协议"的关系**：本原则是资产协议的**前提**——先确认产品存在且是什么，再去找它的 logo/产品图/色值。顺序不能反。

---

## 核心哲学（优先级从高到低）

### 1. 从existing context出发，不要凭空画
好的hi-fi设计**一定**是从已有上下文长出来的。先问用户是否有design system/UI kit/codebase/Figma/截图。**凭空做hi-fi is last resort，一定会产出generic的作品**。如果用户说没有，先帮他去找（看项目里有没有，看有没有参考品牌）。
**如果还是没有，或者用户需求表达很模糊**（如"做个好看的页面"、"帮我设计"、"不知道要什么风格"、"做个XX"没有具体参考），**不要凭通用直觉硬做**——进入 **设计方向顾问模式**，从 HTML 原生 40 种风格库（网页 20+PPT 20）里给 3 个差异化方向让用户选。完整流程见下方「设计方向顾问（Fallback 模式）」大节。

#### 1.a 核心资产协议（涉及具体品牌时强制执行）
**触发**（两类都算，**第二类最常被漏**）：① **为某个品牌做物料**（DJI 发布动画、Stripe 落地页…）；② **设计里要呈现一个或多个真实可识别的产品/品牌**——对比 / 榜单 / 评测 / 介绍 deck、把多个产品并列、信息图里点名某产品。
🔴 **铁律：设计里只要出现一个能被认出的产品/品牌名，它的官方 logo 就是必需资产**（出现几个就取几个），不是「有就用、没有拉倒」。
⚠️ **即使你在走 Fallback 设计方向顾问模式**（因为没拿到风格参考）——第二类触发**依然成立**。Fallback 决定的是「用什么视觉风格」，**不豁免「取齐具名产品的 logo」**。两件事并行，不是二选一。
**核心理念：资产 > 规范**——logo / 产品图 / UI 截图比品牌色值更重要（花叔：「除了品牌色，显然该用上 logo 和产品图，否则我们在表达什么呢？」）。
**5 步硬流程**（每步有 fallback，绝不静默跳过；完整操作见 reference）：
1. **问**：一次问全资产清单（logo / 产品图 / UI 截图 / 色板 / 字体 / 禁区）
2. **搜官方渠道**：按资产类型去官网 / press kit / 官方社媒 / Wikimedia
3. **下载资产**：按类型三条兜底路径下载 logo / 产品图 / UI
4. **验证 + 提取**：不只 grep 色值，要核对 logo / 产品图真实性
5. **固化为 `brand-spec.md`**：模板覆盖所有资产路径（logo / 产品图 / UI / 色板 / 字型 / 禁区 / 气质）
🛑 自检门统一在工作流「检查点2·资产自检」执行，不在此重复。
> **完整协议**（5 步详细操作 + 下载命令 + brand-spec 模板 + 全流程失败兜底 + 反例 + 代价对比）→ `references/brand-asset-protocol.md`

### 2. Junior Designer模式：先展示假设，再执行
你是manager的junior designer。**不要一头扎进去闷头做大招**。HTML文件的开头先写下你的assumptions + reasoning + placeholders，**尽早show给用户**。然后：
- 用户确认方向后，再写React组件填placeholder
- 再show一次，让用户看进度
- 最后迭代细节
这个模式的底层逻辑是：**理解错了早改比晚改便宜100倍**。

### 3. 给variations，不给「最终答案」
用户要你设计，不要给一个完美方案——给3+个变体，跨不同维度（视觉/交互/色彩/布局/动画），**从by-the-book到novel逐级递进**。让用户mix and match。
实现方式：
- 纯视觉对比 → 用`design_canvas.jsx`并排展示
- 交互流程/多选项 → 做完整原型，把选项做成Tweaks

### 4. Placeholder > 烂实现
没图标就留灰色方块+文字标签，别画烂SVG。没数据就写`<!-- 等用户提供真实数据 -->`，别编造看起来像数据的假数据。**Hi-fi里，一个诚实的placeholder比一个拙劣的真实尝试好10倍**。

### 5. 系统优先，不要填充
**Don't add filler content**。每个元素都必须earn its place。空白是设计问题，用构图解决，不是靠编造内容填满。**One thousand no's for every yes**。尤其警惕：
- 「data slop」——没用的数字、图标、stats装饰
- 「iconography slop」——每个标题都配icon
- 「gradient slop」——所有背景都渐变

### 6. 反AI slop（重要，必读）

#### 6.1 什么是 AI slop？为什么要反？
**AI slop = AI 训练语料里最常见的"视觉最大公约数"**。
紫渐变、emoji 图标、圆角卡片+左 border accent、SVG 画人脸——这些东西之所以是 slop，不是因为它们本身丑，而是因为**它们是 AI 默认模式下的产物，不携带任何品牌信息**。
**规避 slop 的逻辑链**：
1. 用户请你做设计，是要**他的品牌被认出来**
2. AI 默认产出 = 训练语料的平均 = 所有品牌混合 = **没有任何品牌被认出来**
3. 所以 AI 默认产出 = 帮用户把品牌稀释成"又一个 AI 做的页面"
4. 反 slop 不是审美洁癖，是**替用户保护品牌识别度**
这也是为什么 §1.a 品牌资产协议是 v1 最硬的约束——**服从规范是反 slop 的正向方式**（对的事），清单只是反 slop 的反向方式（不做错的事）。

#### 6.2 核心要规避的（带"为什么"）
| 元素 | 为什么是 slop | 什么情况可以用 |
|------|-------------|---------------|
| 激进紫色渐变 | AI 训练语料里"科技感"的万能公式，出现在 SaaS/AI/web3 每一个落地页 | 品牌本身用紫渐变（如 Linear 某些场景）、或任务就是讽刺/展示这类 slop |
| Emoji 作图标 | 训练语料里每个 bullet 都配 emoji，是"不够专业就用 emoji 凑"的病 | 品牌本身用（如 Notion），或产品受众是儿童/轻松场景 |
| 圆角卡片 + 左彩色 border accent | 2020-2024 Material/Tailwind 时期的烂大街组合，已成视觉噪音 | 用户明确要求、或这个组合在品牌 spec 里被保留 |
| SVG 画 imagery（人脸/场景/物品）| AI 画 of SVG 人物永远五官错位，比例诡异 | **几乎没有**——有图就用真图（Wikimedia/Unsplash/AI 生成），没图就留诚实 placeholder |
| **CSS 剪影/SVG 手画代替真实产品图** | 生成的就是「通用科技动画」——黑底+橙 accent+圆角长条，任何实体产品都长一样，品牌识别度归零（DJI Pocket 4 实测 2026-04-20）| **几乎没有**——先走核心资产协议找真实产品图；真没有时用 nano-banana-pro 以官方参考图为基底生成；实在不行标诚实 placeholder 告诉用户"产品图待补" |
| Inter/Roboto/Arial/system fonts 作 display | 太常见，读者看不出这是"有设计的产品"还是"demo 页" | 品牌 spec 明确用这些字体（Stripe 用 Sohne/Inter 变体，但是经过微调的） |
| **GitHub-dark 偷懒解**：均匀深蓝底 `#0D1117` + 通用青/紫霓虹 glow | 这**一种特定组合**是 SaaS/AI 落地页的烂大街复制——注意不是「所有暗色都禁」 | 开发者工具产品且品牌本身走这方向 |

**判断边界**：「品牌本身用」是唯一能合法破例的理由。品牌 spec 里明写了用紫渐变，那就用——此时它不再是 slop，是品牌签名。
⚠️ **别把整片暗色大胆派一起误杀**：要禁的只是「均匀深蓝底+通用霓虹 glow」这一种偷懒解。电影级戏剧光影、暖色赛博（Ash Thorp 的橙/青而非冷蓝）、运动诗学的暗场叙事（Locomotive）都是**有作者意图的暗色**，不在禁区内——它们携带强烈风格信息，恰恰是对抗「千篇一律极简」的解药。

#### 6.3 正向做什么（带"为什么"）
- ✅ `text-wrap: pretty` + CSS Grid + 高级 CSS：排版细节是 AI 分不清的"品味税"，会用这些的 agent 看起来像真设计师
- ✅ 用 `oklch()` 或 spec 里已有的色，**不凭空发明新颜色**：所有临场发明的色都会让品牌识别度下降
- ✅ 配图优先 AI 生成（Gemini / Flash / Lovart），HTML 截图仅在精确数据表格时用：AI 生成的图比 SVG 手画准确，比 HTML 截图有质感
- ✅ 文案用「」引号不用 ""：中文排印规范，也是"有审校过"的细节信号
- ✅ 一个细节做到 120%，其他做到 80%：品味 = 在合适的地方足够精致，不是均匀用力

#### 6.4 反例隔离（演示型内容）
当任务本身就要展示反设计（如本任务就是讲"什么是 AI slop"、或对比评测），**不要整页堆 slop**，而是用**诚实的 bad-sample 容器**隔离——加虚线边框 + "反例 · 不要这样做" 角标，让反例服务于叙事而不是污染页面主调。
这不是硬规则（不做成模板），是原则：**反例要看得出是反例，不是让页面真的变成 slop**。
完整清单见 `references/content-guidelines.md`。

---

## 设计方向顾问（Fallback 模式）

> ⚖️ **根本立场（先读，统领本节）**：skill 的职责是**帮用户规避最差的设计**——守住反 slop 下限，**不是规定「好设计长什么样」**。真正的好设计**从用户的需求和提供的内容里长出来**，不在内置风格库里。所以：
> - 用户给了内容/品牌/参考 → 设计就从那里展开，**别套库**。
> - 用户什么都没有 → 下面三套逻辑只是帮他**起步、打破惯性**的脚手架，不是终点。
> - `design-styles.md` 的 40 种是「没思路时翻的弹药」，**不是必须从这里选的清单**。过多的硬性风格要求是负担、是无聊——别被风格库绑架，内容永远优先。

**什么时候触发**：
- 用户需求模糊（"做个好看的"、"帮我设计"、"这个怎么样"、"做个XX"没有具体参考）
- 用户明确要"推荐风格"、"给几个方向"、"选个哲学"、"想看不同风格"
- 项目和品牌没有任何 design context（既没有 design system，又找不到参考）
- 用户主动说"我也不知道要什么风格"

**什么时候 skip**：
- 用户已经给了明确的风格参考（Figma / 截图 / 品牌规范）→ 直接走「核心哲学 #1」主干流程
- 用户已经说清楚要什么（"做个 Apple Silicon 风格的发布会动画"）→ 直接进 Junior Designer 流程
- 小修小补、明确的工具调用（"帮我把这段 HTML 变成 PDF"）→ skip
不确定就用最轻量版：**列出 3 个差异化方向让用户二选一，不展开不生成**——尊重用户节奏。

### 完整流程（7 个 Phase，顺序执行；Phase 3.5 是图片前置半步）

**Phase 1 · 对话澄清需求 + 主动索要参考（不要跳过、不要直接开做）**
先用**对话**了解（一次最多 3 个问题）：目标受众 / 核心信息 / 情感基调 / 输出格式。
**同时必须主动索要参考材料**——这是最容易被跳过、却最该问的一步，一次问全：
- 这个项目/产品**叫什么名字**？
- 有没有 **logo、品牌色、VI、字体规范**？有就发我。
- 有没有**你喜欢的参考**——某个网站 URL、一张截图、某个产品「就要那种感觉」？
- 都没有也没关系，说一句「你看着办」，我直接做几版给你挑。
⏱️ **无应答策略**：问题发出后，若用户**没回应任何信息**（只丢了最初那句模糊需求就没下文）→ 不要枯等。按 best judgment 补齐假设（标 assumption），直接往下跑完 Phase 2-4 把三版真实视觉摆出来——**用「看得见的东西」代替继续追问**（正好呼应选择无效铁律）。
> 用户给了**具体品牌/产品名（能去官网找到 logo 的那种，如 Stripe / DJI / 某 App）**或品牌资产/参考站 → **跳出 Fallback**，走「核心哲学 #1」+「§1.a 核心资产协议」主干。
> ⚠️ **但普通主题名不算品牌名**：「咖啡 / 鹦鹉 / 历史 / 健身」这类是**内容主题**，不是可找 logo 的品牌——**继续走 Fallback，不要跑去找「咖啡的 logo」空转**。Fallback 正是服务「给了主题、但没给品牌/风格参考」这种最常见的情况。

**Phase 2 · 顾问式重述**（**≥200 字**，把需求真正嚼透，不是敷衍一句）
用自己的话深入重述本质需求、受众、场景、情感基调、用户没说出口的潜在期待。以「基于这个理解，我**直接做 3 个不同方向的真实版本给你看**」结尾——❌ 不要以「你想选哪个方向？」结尾（见 Phase 3 铁律）。

**Phase 3 · 固化设计 spec（三套逻辑的共同输入）**
把 Phase 1-2 澄清到的东西写成一份 **≥500 字的详尽设计 spec**——这是三个 subagent 的**唯一共同输入**，写薄了三版都会飘。必须覆盖：产品/项目是什么、目标受众与使用场景、核心信息与内容要点(分点列出主要板块)、情感基调与气质关键词、**输出格式与尺寸（必填——网页还是 PPT？具体像素？三个 subagent 必须统一用这个尺寸，否则三版尺寸不一无法横向对比）**、已知约束（品牌色/禁忌/必含元素）、图片需求（Phase 3.5 判断的结果）、视觉母题假设（这个内容独有的视觉元素/结构/隐喻，见工作流 Step 3 form推导五问）。它们各自独立工作、只看 spec、互不参考——所以 spec 越具体，三版越不会跑偏。

**Phase 3.5 · 🔴 CHECKPOINT 图片素材前置（spawn 三套逻辑前必做，硬要求）**
开工前先答一个问题：**这个设计，图片是不是内容必需的？**
- 内容型（介绍鹦鹉 / 咖啡 / 历史 / 人物 / 产品 / 地点…）→ 图片几乎必需
- 工具 / 数据 / 文档 / 纯观点型 → 可能不需要，判断后跳过取图
- 拿不准是「内容必需」还是「装饰」→ **按内容必需处理**（宁可取真图）。⚠️「default 无生图」只指**装饰图默认不调生图模型**，不等于「内容图也不许有图」——内容必需的真图该取就取

**图片必需 → 先制定获取策略、取齐真图，再 spawn 三套逻辑**（三个 subagent 共用同一批真图，只换设计），绝不边设计边用色块糊弄：
| 内容类型 | 首选真图来源 (公共领域/免版权优先) |
|---|---|
| 博物 / 历史 / 艺术 / 动植物 / 古典 | Wikimedia Commons、Met / Art Institute Open Access、Biodiversity Heritage Library（古典博物插画，如 Edward Lear / John Gould 鹦鹉图录） |
| 通用生活 / 场景 / 产品摄影 | Unsplash、Pexels（免版权） |
| 用户自己的产品 / 品牌 | 走 §1.a 核心资产协议取官方图 |
| **设计中要点名 / 并列展示的具体产品·品牌（含第三方对比对象）** | **走 §1.a 取每个产品的官方 logo**（svgl API → simpleicons → Google favicon，见 `references/brand-asset-protocol.md` Step 3.1）。对比 / 榜单 / 评测 deck 必走这行 |

🔴 **具名产品 logo 子门 (spawn三套逻辑前必过，硬要求)**：把设计里会出现的产品 / 品牌名**逐个列成清单**，确认每个都已取到官方 logo 并内嵌，再 spawn。**交付形态是「双击就能开」的单文件 HTML 时，logo/图片必须 base64 内嵌**——相对路径的交付物挪个目录就全员裂图（盲测实锤：`../assets/google.svg` 六个按钮全裂直接输掉评审）；仅多文件+启动说明的项目允许本地路径。**清单里有一个没取到 logo = 🛑 STOP 补齐**（实在取不到才退诚实 placeholder 并明说「X 的 logo 待补」）。三个 subagent 共用这批 logo。⚠️ 这是对比 / 榜单 / 评测 deck 最常见的翻车点——「只抽了品牌色就开做」就是漏了这道门（2026-06-06 五大 Coding Agent PPT 实测翻车，见 brand-asset-protocol 反例）。

🛠️ **取图用现成脚本（别每次现写）**：`python3 scripts/fetch_images.py --query "英文关键词1" "英文关键词2" --out 项目/assets/img --count 2 --width 1600`——已内置清代理 + 合规 UA + 许可输出 + 失败兜底，下次只改关键词。
- 取图后做**真图诚实性测试**：「去掉这张图，信息是否有损？」有损才用，别配 stock「灵感图」（那是 slop）
- 取到的真图用 base64 内嵌或本地路径，传给三个 subagent 复用
- ❌ **内容必需的图绝不用 CSS 色块 / SVG 几何糊弄**——鹦鹉网站没有鹦鹉图 = 失败
- **取图失败三级兜底 (不许卡死)**：① 公共领域库找不到 → 换 Unsplash/Pexels；② 全网取不到合适真图 → 用户确认有生图能力则走 `huashu-gpt-image` 以参考图为基底生成；③ 仍不行 → 标注「图待补」诚实 placeholder **继续 spawn 三套逻辑，不卡流程**，交付时一句话告诉用户「这版图是占位，真图待补」。⚠️ **取图失败是「降级继续」，不是 🛑 STOP**——别让取图卡死整个设计。
> 来自花叔实测：鹦鹉案例里「先判断图片必需 → 选对获取策略（Edward Lear 公共领域博物插画）」是出彩的关键。**素材齐了再设计，不是边设计边占位。**

**Phase 4 · 三套逻辑并行 subagent，各生成一版真实视觉（核心）**
> ✅ **这是 Fallback 的 default 动作**：用户**无需主动要求**「用三套逻辑」「帮我找最佳设计师」——只要触发了顾问模式（用户没给明确风格参考），就**自动**并行跑这三套。目标是让什么都不懂的普通用户，零额外要求也能拿到顶级设计。
> 🔴 **选择无效铁律**（花叔 2026-06 实测确认）：绝不让用户在「只有文字、没看到视觉」时选风格——用户没依据。所以不抛文字单选题，而是**并行启动 3 个 subagent 同时跑三套互补逻辑**，各产出一版真实视觉，一次性摆出来让用户选「看得见的东西」。三个 subagent **独立 context、互不参考**（避免趋同），并行是为了更快 deliver。
> ⚙️ **不支持 spawn subagent 的 runtime（Codex / Cursor / 纯对话）**：改**串行**跑三套——每套开跑前只读 spec、清空对上一套的记忆、不许参考已生成的版本，并用三个不同 anchor（轮盘号 / 参照案例 / 设计师名）物理隔离趋同。串行也**必须出三版**，不许偷懒并成一版。spawn prompt 里只喂 spec，别把另两套的逻辑一起写进去。

每个 subagent 拿同一份 spec + 同一份用户真实内容，各按一套逻辑产出一版**纯 HTML/CSS**（default 无生图）真实视觉：
**逻辑一 · 🎲 秒数轮盘（随机 · 20 选 1）**
跑 `date +%S` 取秒数，算 `秒数 % 20 + 1` 得 1-20，从 `design-styles.md` **对应半区**（做网页用网页 20 种 / 做 PPT 用 PPT 20 种）取那一号风格，subagent 严格按其视觉 DNA + HTML 实现做。作用：用时间掷骰子，强制打破模型「每次都偷选安全极简」的确定性偏好。抽到还原度<70% 的（如 Memphis 做旧纹理）须标注「该部分用纯色块降级，不假装做出原版质感」。
**逻辑二 · 🏆 现实参照（标杆迁移）**
选 1 个**世界上和该用户需求最相关、且你明确知道设计极出色（最好获奖：Awwwards / CSS Design Awards / FWA / Apple Design Award）**的真实网站 / PPT 模板 / iOS 原型作为参照标准。subagent 先用 WebSearch 核实该案例真实存在与其设计语言，拆解配色/字体/布局/标志元素，再迁移到用户内容上。作用：用真实世界的最高标准锚定，不靠凭空想象。
**逻辑三 · 🧠 最佳设计师（深呼吸 · 顶级定制）**
深呼吸一口，认真想：**假如预算没有上限，世界上最适合为「这个用户、这个产品」做设计的工作室 / 设计师是谁？**（如 Pentagram / Collins / IDEO / Jony Ive / 原研哉 / Stripe 设计团队…按产品调性选）subagent 启用该设计师/工作室的**设计思维与设计哲学**，从头为用户设计。作用：用顶级设计智慧做最契合的定制。

并行执行规范 (三个 subagent 共用)：
- 用**用户真实内容**（非 Lorem），三版同内容只换设计逻辑，方便横向对比
- **三版的布局骨架必须互异**：导航/构图/内容区结构至少一项结构性不同，不许两版共用同一骨架只换色换字体（盲测实锤：共用骨架会被评审一眼识破「换皮」）
- 🔴 **可读性硬底线 (任何风格温度都不豁免，包括「奢侈留白」的安静派)**：正文 ≥14px、标签/注释 ≥12px、正文对比度 ≥4.5:1；留白必须是**构图**（首屏有明确视觉锚点，视线有落点），不是内容缺席。盲测实锤：安静派做过头 = 「大片死白+微缩字号，第一眼像页面渲染坏了」，直接输给普通 baseline
- 纯 HTML/CSS 单文件；**内容必需的图用 Phase 3.5 取的真图**（三版共用），仅装饰/抽象图才用 CSS 几何/SVG/纯色块，绝不留空占位
- 🎞️ **PPT / deck 场景必走 deck 模板（绝不写竖向平铺长页！）**：每页独立 `<section>`（1920×1080）套 `assets/deck_index.html` 外壳，三版只换视觉风格、deck 骨架统一（架构规则与概览墙细节见「技术红线」+ `references/slide-decks.md`）。截图按**单页** 1920×1080 截；**单页内容绝不自带页码/进度标记**——页码由 deck 外壳统一承载（实测出过「02/03」+「6/16」双页码打架）
- 存当前**项目目录**（`项目名/design-demos/[逻辑名].html`）——❌ 禁 `_temp/`（花叔铁律）
- 截图：`npx playwright screenshot file:///path.html out.png --viewport-size=1440,900`（PPT 用 1920,1080）
- ✅ **产出自检 (防偷懒，进 Phase 5 前必查)**：确认 `design-demos/` 下真有 **3 个 .html**——少于 3 个 = 没走完三套逻辑，补齐再往下，不许只做一版交差
- 三版全部完成后**一起展示三张截图**，每版标明：用了哪套逻辑、具体哪个风格/参照案例/设计师，一句话说为什么
> 仅当用户**已确认有生图能力**时，AI 生成型风格才走 `huashu-gpt-image`（见 `design-styles.md` 尾部「AI 生图专用风格」）；否则一律 HTML。
> 完整 40 种风格库（网页 20+PPT 20，含还原度/温度/HTML 实现/开源字体）→ `references/design-styles.md`。

**Phase 5 · 用户基于「看到的真实视觉」选择**（第一次有效选择）：看完三版真实截图，选一版深化 / 混合（"轮盘版的配色 + 设计师版的布局"）/ 微调 / 全部重来 → 重跑三套逻辑。

**Phase 6 · 进入主干执行**
用户选定（或混合）后 → 回到「核心哲学」+「工作流程」的 Junior Designer pass，把那一版做扎实。这时已有明确 design context，不再凭空。
> 仅当走 AI 生图：提示词用「具体视觉特征 + 内容 + 技术参数」（写「赤陶橙 #C04A1A + 留白」不写「极简」），避开审美禁区 → 见 `huashu-gpt-image`。

**真实素材优先原则** (涉及用户本人/产品时)：
1. 先查用户配置的**私有 memory / config 路径**下的 `personal-asset-index.json`（各 runtime 按自身约定的 memory 目录；找不到就问用户）
2. 首次使用：复制 `assets/personal-asset-index.example.json` 到上述私有路径，填入真实数据
3. 找不到就直接问用户要，不要编造——真实数据文件不要放在 skill 目录内避免随分发泄露隐私

---

## App / iOS 原型专属守则（速查版）

做移动 app 原型时（触发：「app 原型」「iOS mockup」「移动应用」「做个 app」），以下硬规则**覆盖**通用 placeholder 原则——app 原型是 demo 现场，静态摆拍没有说服力。完整操作细节（架构选型表 / 取图渠道与代码 / AppPhone JSX 骨架 / ios_frame 三步用法 / 品位锚点全表）见 `references/app-prototype.md`：
1. **架构默认单文件 inline React**：`file://` 双击就能开，本地图片 base64 内嵌；仅 >1000 行难维护或多 agent 并行写不同屏才拆多文件（拆了必须附 `python3 -m http.server` 启动说明）
2. **先找真图再设计**：渠道同 Phase 3.5 取图表；取图前过**真图诚实性测试**——「去掉这张图信息是否有损？」无损 = 装饰 = slop，不加
3. **交付形态默认「平铺 4-6 主屏 + 每台可交互」**，不要问用户二选一；每台是独立迷你状态机（tab 可切 / 按钮可点 / 能弹 modal），仅用户明确说「只要静态」或「单流程 demo」才偏离
4. 🔴 **iOS 设备框必须用 `assets/ios_frame.jsx`**：禁止手写 Dynamic Island / status bar / home indicator / bezel——自己写 99% 撞位置 bug（岛是固定 124×36，两侧 status bar 空间极窄）
5. **信息密度分型**：默认克制型（少一层容器 / 少一个 border / 少一个装饰 icon）；产品卖点是 AI / 数据 / 上下文感知时走**高密度型**信息密度：每屏 ≥ 3 处**有内容的**差异化信息，装饰 icon 照样忌讳
6. **交付前 Playwright 跑 3 项点击测试**（进详情 / 关键标注点 / tab 切换），`pageerror` 为 0 再交付
7. **品位锚点**：衬线 display（Newsreader/Source Serif/EB Garamond）+ `-apple-system` body；一个有温度的底色 + 单 accent 贯穿；留一处「值得截图」的 120% 细节签名

---

## 工作流程

### 标准流程（用TaskCreate追踪）
1. **理解需求**：
   - 🔍 **0. 事实验证 (涉及具体产品/技术时必做，优先级最高)**：任务涉及具体产品/技术/事件（DJI Pocket 4、Gemini 3 Pro、Nano Banana Pro、某新 SDK 等）时，**第一个动作**是 `WebSearch` 验证其存在性、发布状态、最新版本、关键规格。把事实写入 `product-facts.md`。详见「核心原则 #0」。**这步做在问 clarifying questions 之前**——事实错了问什么都歪。
   - 新任务或模糊任务必须问clarifying questions，详见 `references/workflow.md`。一次focused一轮问题通常够，小修小补跳过。
   - 🛑 **检查点1：问题清单一次性发给用户，等用户批量答完再往下走**。不要边问边做。
   - 🛑 **幻灯片/PPT 任务走固定交付链，开工不问格式**：HTML deck（每页独立 HTML + `assets/deck_index.html` 概览墙）→ 完成后**自动**出 PDF（`scripts/export_deck_pdf.mjs`，不问直接给）→ **询问**才出可编辑 PPTX（best-effort 衍生物，**绝不**为迁就 html2pptx 约束而降级 HTML 设计，转不出就如实说损失了什么）。**≥5 页必须先做 2 页 showcase 定 grammar 再批量**——跳过 = 方向错返工 N 次而非 2 次。完整规则 + 交付格式决策树见 `references/slide-decks.md`。
   - ⚡ **只要用户没给明确风格参考 (没 design system、没截图/Figma、没指定某某具体风格) → 走「设计方向顾问 (Fallback 模式)」大节，完成 Phase 1-5 (用户从三版里选定方向) 后，再回到这里 Step 2**。门槛要低：「做个XX」只要不带风格词就触发——宁可多推 3 个方向让用户选，也不要模型自己闷头选一个极简就开做。
2. **探索资源 + 抽核心资产**（不只是抽色值）：读 design system、linked files、上传的截图/代码。**涉及具体品牌时必走 §1.a「核心资产协议」五步**，产出 `brand-spec.md`。
   - 🛑 **检查点2·资产自检**：开工前确认核心资产到位——实体产品要有产品图（不是 CSS 剪影）、数字产品要有 logo+UI 截图、色值从真实 HTML/SVG 抽取。缺了就停下补，不硬做。
   - 如果用户没给 context 且挖不出资产，先走设计方向顾问 Fallback，再按 `references/design-context.md` 的品位锚点兜底。
3. **先答五问，再规划系统**：**这一步的前半段比所有 CSS 规则更决定输出**。

   📐 **form推导五问** (每个页面/屏幕/镜头开工前必答)：
   - **叙事角色**：hero / 过渡 / 数据 / 引语 / 结尾？（一页 deck 里每页都不一样）
   - **观众距离**：10cm 手机 / 1m 笔记本 / 10m 投屏？（决定字号 and 信息密度）
   - **视觉温度**：安静 / 兴奋 / 冷静 / 权威 / 温柔 / 悲伤？（决定配色 and 节奏）
   - **容量估算**：用纸笔画 3 个 5 秒 thumbnail 算一下内容塞得下吗？（防溢出 / 防挤压）
   - **视觉母题**：这个内容独有的视觉母题是什么？从内容里找一个别的主题不会有的视觉元素/结构/隐喻，作为 form 的种子（为什么：母题是「设计从内容长出来」的最小证据，答不出说明还在靠风格标签抽签）

   五问答完再 vocalize 设计系统（色彩/字型/layout 节奏/component pattern）——**系统要服务于答案，不是先选系统再塞内容**。
   **交付要求**：每版设计交付时写一句「form 来自内容的哪里」，写不出来 = 在套模板，回去重答第五问。
   🛑 **检查点3：五问答案 + 系统口头说出来等用户点头，再动手写代码**。方向错了晚改比早改贵 100 倍。
4. **构建文件夹结构**：`项目名/` 下放主HTML、需要的assets拷贝（不要bulk copy >20个文件）。
5. **Junior pass**：HTML里写assumptions+placeholders+reasoning comments。
   🛑 **检查点4：尽早show给用户（哪怕只是灰色方块+标签），等反馈再写组件**。
6. **Full pass**：填placeholder，做variations，加Tweaks。做到一半再show一次，不要等全做完。
7. **验证**：用Playwright截图（见 `references/verification.md`），检查控制台错误，发给用户。
   🛑 **检查点5：交付前自己肉眼过一遍浏览器**。AI写的代码经常有interaction bug。
8. **总结**：极简，只说caveats和next steps。
9. **（默认）导出视频 · 必带 SFX + BGM**：动画 HTML 的**默认交付形态是带音频的 MP4**，不是纯画面。无声版本等于半成品——用户潜意识感知「画在动但没声音响应」，廉价感的根源就在这里。流水线：
   - `scripts/render-video.js` 录 25fps 纯画面 MP4（只是中间产物，**不是成品**）
   - 需要**真 60fps / 确定性 / B站作品集交付**且动画走 Stage 时钟时，改用 `scripts/render-video-seek.js --fps=60`（逐帧 seek，免插帧、无黑帧，详见 `references/video-export.md`）
   - `scripts/convert-formats.sh` 派生 60fps MP4 + palette 优化 GIF（视平台需要）
   - `scripts/add-music.sh` 加 BGM（6 首场景化配乐：tech/ad/educational/tutorial + alt 变体）
   - SFX 按 `references/audio-design-rules.md` 设计 cue 清单（时间轴 + 音效类型），用 `assets/sfx/<category>/*.mp3` 37 个预制资源，按配方 A/B/C/D 选密度（发布 hero ≈ 6个/10s，工具演示 ≈ 0-2个/10s）
   - **BGM + SFX 双轨制必须同时做**——只做 BGM 是 ⅓ 分完成度；SFX 占高频、BGM 占低频，频段隔离见 audio-design-rules.md 的 ffmpeg 模板
   - 交付前 `ffprobe -select_streams a` 确认有 audio stream，没有则不是成品
   - **跳过音频的条件**：用户明确说「不要音频」「纯画面」「我要自己配音」——否则默认带。
   - 参考完整流程见 `references/video-export.md` + `references/audio-design-rules.md` + `references/sfx-library.md`。
9.5. **（带解说时走这条）解说驱动动画 · L2 长概念视频**：用户要做「5-20 分钟解释一个概念」、「带配音的教程」、「长篇科普视频」时——**不要先做动画再配音**，那会让画面节奏跟解说对不上。改走 `references/voiceover-pipeline.md` 的解说驱动流程：
   - **写解说稿**（markdown，`## scene-id` 分段，`[[cue:xx]]` 标关键句）→ 解说稿是源代码，节奏靠它撑
   - **跑 narrate-pipeline.mjs**（豆包 TTS · `.env` 配置音色）→ 输出 voiceover.mp3 + timeline.json（cue 时间是真实测出来的，不是按字符估算）
   - **🛑 设计动画前先答铁律 3 条**：(1) hero element 是什么？(2) 它跨 7 段怎么 morph？(3) 任意一帧画面有运动吗？答不上不要写代码
   - **写动画 HTML**：用 `assets/narration_stage.jsx`（NarrationStage + Scene + Cue + useNarration + useSceneFade + **Subtitles**）→ hero 直接放 `<NarrationStage>` 子级，不进 Scene；`<Subtitles />` 默认带（B 站风·深墨字+白光晕，按 timeline.chunks 自动切 ≤12 字短行不跨句号）
   - **录最终 MP4**：`bash scripts/render-narration.sh demo.html --timeline=_narration/timeline.json [--bgm-mood=educational]` → 自动录无声 MP4 + 混入人声 + 可选 BGM
   - **失败模式 #1 (必须避免)**：每个 Scene 各自独立 layout + cue 用 fade-up + scene 切换整页 opacity 切换 = **带配音的 PowerPoint** = 质感归零。完整规则见 `references/voiceover-pipeline.md` 头部「铁律」章节。
10. **（可选）专家评审**：用户若提「评审」「好不好看」「review」「打分」，或你对产出有疑问想主动质检，按 `references/critique-guide.md` 走 5 维度评审——哲学一致性 / 视觉层级 / 细节执行 / 功能性 / 创新性各 0-10 分，输出总评 + Keep（做得好的）+ Fix（严重程度 ⚠️致命 / ⚡重要 / 💡优化）+ Quick Wins（5 分钟能做的前 3 件事）。评审设计不评设计师。

**检查点原则**：碰到🛑就停下，明确告诉用户"我做了X，下一步打算Y，你确认吗？"然后真的**等**。不要说完自己就开始做。
**两套检查点的衔接**：主干用 🛑 检查点1-5，Fallback 用 🔴 CHECKPOINT（Phase 3.5 图片前置 + logo 子门）。从 Fallback Phase 1-5 走完回到主干 Step 2 时，检查点1（问题清单）已被 Phase 1 的澄清覆盖，**跳过不重复问**；检查点2 起照常执行。

### 问问题的要点
必问（用`references/workflow.md`里的模板）：
- design system/UI kit/codebase有吗？没有的话先去找
- 想要几种variations？在哪些维度上变？
- 关心flow、copy、还是visuals？
- 希望Tweak什么？

## 异常处理

流程假设用户配合、环境正常。实操常遇以下异常，预定义fallback：

| 场景 | 触发条件 | 处理动作 |
|------|---------|---------|
| 需求模糊到无法着手 | 用户只给一句模糊描述（如"做个好看的页面"） | 主动列3个可能方向让用户选（如"落地页 / Dashboard / 产品详情页"），而不是直接问10个问题 |
| 用户拒绝回答问题清单 | 用户说"不要问了，直接做" | 尊重节奏，用best judgment做1个主方案+1个差异明显的变体，交付时**明确标注assumption**，方便用户定位要改哪里 |
| Design context矛盾 | 用户给的参考图和品牌规范打架 | 停下，指出具体矛盾（"截图里字体是衬线，规范说用sans"），让用户选一个 |
| Starter component加载失败 | 控制台404/integrity mismatch | 先查`references/react-setup.md`常见报错表；还不行降级纯HTML+CSS不用React，保证产出可用 |
| 时间紧迫要快交付 | 用户说"30分钟内要" | 跳过Junior pass直接Full pass，只做1个方案，交付时**明确标注"未经early validation"**，提醒用户质量可能打折 |
| SKILL.md体积超限 | 新写HTML>1000行 | 按`references/react-setup.md`的拆分策略拆成多jsx文件，末尾`Object.assign(window,...)`共享 |
| 克制原则 vs 产品所需密度冲突 | 产品核心卖点是 AI 智能 / 数据可视化 / 上下文感知（如番茄钟、Dashboard、Tracker、AI agent、Copilot、记账、健康监测）| 按「品位锚点」表格走**高密度型**信息密度：每屏 ≥ 3 处产品差异化信息。装饰性 icon 照样忌讳——加的是**有内容的**密度，不是装饰 |

**原则**：异常时**先告诉用户发生了什么**（1句话），再按表处理。不要静默决策。

## 反AI slop速查（补充项）

静态设计的完整反slop规则见「核心哲学 §6」（字体/色彩/容器/图像的避免与采用都在 §6.2-6.3，字体配对逻辑见 `references/typography.md`）。以下只列 §6 没覆盖的补充项：

| 类别 | 避免 | 采用 |
|------|------|------|
| 图标 | **装饰性** icon 每处都配（撞 slop）| **承载差异化信息**的密度元素必须保留——不要把产品特色也一并减掉 |
| 填充 | 编造stats/quotes装饰 | 留白，或问用户要真内容 |
| 动画 | 散落的微交互 | 一次well-orchestrated of page load |
| 动画-伪chrome | 画面内画底部进度条/时间码/版权署名条（与 Stage scrubber 撞车） | 画面只放叙事内容，进度/时间交给 Stage chrome（详见 `references/animation-pitfalls.md` §11） |
| 动画-PowerPoint 切换 | 每个 scene 独立 layout + cue 用 fade-up + scene 切换整页 opacity 切换（= 带配音的 PowerPoint）| **整片是一个连续的运动叙事**：选 1-2 个 hero element 跨 scene 持续存在，每段是 hero 的状态变化（位置/大小/形态），scene 之间 morph 不切（详见 `references/voiceover-pipeline.md` 「铁律」章节） |

## 技术红线（必读 references/react-setup.md）

**React+Babel项目**必须用pinned版本（见`react-setup.md`）。三条不可违反：
1. **never** 写 `const styles = {...}`——多组件时命名冲突会炸。**必须**给唯一名字：`const terminalStyles = {...}`
2. **scope不共享**：多个`<script type="text/babel">`之间组件不通，必须用`Object.assign(window, {...})`导出
3. **never** 用 `scrollIntoView`——会搞坏容器滚动，用其他DOM scroll方法
4. **手写 Stage / Sprite**（不用 `assets/animations.jsx`）必须实现两件事：(a) tick 第一帧同步设 `window.__ready = true` (b) 检测 `window.__recording === true` 时强制 loop=false——否则录视频必出问题

**固定尺寸内容**（幻灯片/视频）必须自己实现JS缩放，用auto-scale + letterboxing.

**幻灯片架构选型 (必先决定)**：
- 🔴 **默认且强烈推荐：多文件 + 概览墙**（几乎所有 PPT——培训/路演/科普/课件/汇报）→ 每页独立 HTML + `assets/deck_index.html` 拼接器。**这是 PPT 的默认交付形态**：自带**两种自适应 3D 概览**（网格 iframe / 无限画廊图片，按秒数 60/40 随机）+ 任意页数自适应（少页倾斜居中、多页舒适大卡滚动）+ 统一页码。**直接用，别重写概览**（倾斜/点击命中/裁切三个坑已内建解决，见 slide-decks.md）。
- **单文件**（仅 ≤5 页极简 pitch、且明确不需要概览墙、或需跨页共享 JS 状态）→ `assets/deck_stage.js`。
- 🛑 **不要默认选单文件而绕过概览墙**——北大 13 页 deck 实测踩坑：选了单文件 = 丢了概览墙，违背 PPT 默认交付形态。选单文件前先确认「这真的是 ≤5 页、且不需要概览墙」。

先读 `references/slide-decks.md` 的「🛑 先定架构」一节，错了会反复踩 CSS 特异性/作用域的坑。

## Starter Components (assets/下)

造好的起手组件，直接copy进项目使用：

| 文件 | 何时用 | 提供 |
|------|--------|------|
| `deck_index.html` | **幻灯片的默认基础产物** | **直接复制为 `index.html`、编辑 MANIFEST 即用，不要重写概览逻辑**（三个坑已内建解决）。自带两种自适应概览（网格 iframe 60% / 画廊 40%，画廊需 `thumb` 字段 + 先跑 `scripts/gen_deck_thumbs.mjs`）+ 键盘翻页 + scale + 键盘翻页 + 打印合并。要改先读 `references/slide-decks.md` 三条硬约束 |
| `scripts/gen_deck_thumbs.mjs` | **给无限画廊概览生成缩略图**（网格 iframe 模式不需要）| playwright 截每页 + sharp 降采样 1600px JPEG：`npm i playwright sharp && node gen_deck_thumbs.mjs --slides slides --out thumbs`，再给 MANIFEST 每项加 `thumb`。分辨率别 <1000px 否则 hover 发虚 |
| `deck_stage.js` | 做幻灯片（单文件架构，≤10页） | web component: auto-scale + 键盘导航 + slide counter + localStorage + speaker notes ⚠️ **script 必须放在 `</deck-stage>` 之后，section 的 `display: flex` 必须写到 `.active` 上**，详见 `references/slide-decks.md` 的两个硬约束 |
| `scripts/export_deck_pdf.mjs` | **HTML→PDF 导出 (多文件架构)** · 每页独立 HTML 文件，playwright 逐个 `page.pdf()` → pdf-lib 合并。文字保留矢量可搜。依赖 `playwright pdf-lib` |
| `scripts/export_deck_stage_pdf.mjs` | **HTML→PDF 导出 (单文件 deck-stage 架构专用)** · 2026-04-20 新增。处理 shadow DOM slot 导致的「只出 1 页」、absolute 子元素溢出等坑。详见 `references/slide-decks.md` 末节。依赖 `playwright` |
| `scripts/export_deck_pptx.mjs` | **HTML→可编辑 PPTX 导出** · 调 `html2pptx.js` 导出原生可编辑文本框，文字在 PPT 里双击可直接编辑。**HTML 必须符合 4 条硬约束**（见 `references/editable-pptx.md`），视觉自由度优先的场景请改走 PDF 路径。依赖 `playwright pptxgenjs sharp` |
| `scripts/html2pptx.js` | **HTML→PPTX 元素级翻译器** · 读 computedStyle 把 DOM 逐元素翻译成 PowerPoint 对象（text frame / shape / picture）。`export_deck_pptx.mjs` 内部调用。要求 HTML 严格满足 4 条硬约束 |
| `design_canvas.jsx` | 并排展示≥2个静态variations | 带label的网格布局 |
| `animations.jsx` | 任何动画HTML | Stage + Sprite + useTime + Easing + interpolate |
| `ios_frame.jsx` | iOS App mockup | iPhone bezel + 状态栏 + 圆角 |
| `android_frame.jsx` | Android App mockup | 设备bezel |
| `macos_window.jsx` | 桌面App mockup | 窗口chrome + 红绿灯 |
| `browser_window.jsx` | 网页在浏览器里的样子 | URL bar + tab bar |

## References 路由表

根据任务类型深入读对应references：

| 任务 | 读 |
|------|-----|
| 开工前问问题、定方向 | `references/workflow.md` |
| **App/iOS 原型完整守则**（架构表/取图代码/AppPhone骨架/ios_frame用法） | `references/app-prototype.md` |
| 反AI slop、内容规范、scale | `references/content-guidelines.md` |
| 字体排印/字体配对/中文排印 | `references/typography.md` |
| React+Babel项目setup | `references/react-setup.md` |
| 做幻灯片 | `references/slide-decks.md` + `assets/deck_index.html`（默认多文件概览墙）+ `scripts/gen_deck_thumbs.mjs`（画廊缩略图）+ `assets/deck_stage.js`（仅 ≤5 页单文件） |
| 导出可编辑 PPTX (html2pptx 4条硬约束) | `references/editable-pptx.md` + `scripts/html2pptx.js` |
| 做动画/motion（**先读 pitfalls**）| `references/animation-pitfalls.md` + `references/animations.md` + `assets/animations.jsx` |
| **动画的正向设计语法** (Anthropic级叙事/运动/节奏/表达风格) | `references/animation-best-practices.md`（5段叙事+Expo easing+运动语言8条+3种场景配方）|
| **带解说的长动画 / 长概念视频** (5-20分钟带配音、解说驱动画面、TTS实测时长生成 timeline) | `references/voiceover-pipeline.md`（铁律：连续运动叙事、避开 PowerPoint 切换）+ `assets/narration_stage.jsx` + `scripts/{tts-doubao,narrate-pipeline}.mjs` + `scripts/{mix-voiceover,render-narration}.sh` |
| 做Tweaks实时调参 | `references/tweaks-system.md` |
| 没有design context怎么办 | `references/design-context.md`（薄 fallback） 或 `references/design-styles.md`（厚 fallback：HTML 原生 40 种风格库，网页 20+PPT 20，按温度分级） |
| **需求模糊要推荐风格方向** | `references/design-styles.md`（40种HTML原生风格库，含还原度/温度/开源字体）+ `assets/showcases/INDEX.md`（预制截图画廊） |
| **按输出类型查场景模板**（封面/PPT/信息图） | `references/scene-templates.md` |
| 输出完后验证 | `references/verification.md` + `scripts/verify.py` |
| **设计评审/打分** (设计完成后可选) | `references/critique-guide.md`（5维度评分+常见问题清单） |
| **动画导出MP4/GIF/加BGM** | `references/video-export.md` + `scripts/render-video.js`（默认25fps）/ `scripts/render-video-seek.js`（真60fps·确定性·无黑帧，走Stage时钟时用）+ `scripts/convert-formats.sh` + `scripts/add-music.sh` |
| **动画加音效SFX** (苹果发布会级，37个预制) | `references/sfx-library.md` + `assets/sfx/<category>/*.mp3` |
| **动画音频配置规则** (SFX+BGM双轨制、黄金配比、ffmpeg模板、场景配方) | `references/audio-design-rules.md` |
| **Apple画廊展示风格** (3D倾斜+悬浮卡片+缓慢pan+焦点切换，v9实战同款) | `references/apple-gallery-showcase.md` |
| **Gallery Ripple + Multi-Focus 场景哲学** (当素材 20+ 同质+场景需表达「规模×深度」时优先用；含前置条件、技术配方、5个可复用模式) | `references/hero-animation-case-study.md`（huashu-design hero v9 蒸馏）|
| ⭐ **Launch Film 工作流** (30秒级品牌宣传片 / launch trailer / superbowl-tier ad / Apple 级别预期)：先写**万字 director's notes** 再做动画。含 5 大部分结构 + 触发判断 + 多视角并行策略 + 关键帧验证流程 | `references/launch-film-director-notes.md`（huashu-md-html v2.0 launch film 蒸馏）|
| ⭐ **多视角并行实验** (用户说「再做几个版本」「想看不同方向」/ 多平台分发 / 客户拍不了板)：6位艺术家视角同时启动 subagent 各做独立版本 + 完成后 5 维度审校 | `references/multi-perspective-parallel-case-study.md`（huashu-md-html v2.0 6 视角实战）|

## 跨 Agent 环境适配说明
本 skill 设计为 **agent-agnostic**——Claude Code、Codex、Cursor、Trae、OpenClaw、Hermes Agent 或任何支持 markdown-based skill 的 agent 都可以使用。以下是和原生「设计型 IDE」（如 Claude.ai Artifacts）对比时的通用差异处理方式：
- **没有内置的 fork-verifier agent**：用 `scripts/verify.py`（Playwright 封装）人工驱动验证
- **没有 asset 注册到 review pane**：直接用 agent 的 Write 能力写文件，用户在自己的浏览器/IDE 里打开
- **没有 Tweaks host postMessage**：改成**纯前端 localStorage 版**，详见 `references/tweaks-system.md`
- **没有 `window.claude.complete` 免配置 helper**：若 HTML 里要调 LLM，用一个可复用的 mock 或让用户填自己的 API key，详见 `references/react-setup.md`
- **没有结构化问题 UI**：在对话里用 markdown 清单问问题，参考 `references/workflow.md` 的模板
Skill 路径引用均采用**相对本 skill 根目录**的形式（`references/xxx.md`、`assets/xxx.jsx`、`scripts/xxx.sh`）——agent 或用户按自身安装位置解析，不依赖 any 绝对路径。

### 弱 runtime 降级模式
**触发判定**（满足任一即进入）：无 spawn subagent 能力 / 驱动模型非 Claude / 上下文窗口小的 runtime (Codex、Gemini CLI、Copilot 等)。为什么：按满血流程跑，弱 runtime 中途爆上下文或偷工，产出反而更差（issue #2/#6/#41 用户复现不出效果的根因）。
**降级动作（按吃紧程度逐级启用）**：
1. 三版并行 → 串行：按上文 Phase 4「不支持 spawn subagent 的 runtime」规则执行（已有规则，直接引用）
2. 串行仍吃紧 → 只做 1 个主版 + 2 个轻量变体：变体只换色板/换排印，不换布局逻辑（为什么：布局重写最耗上下文，色板/排印变体便宜但仍给用户真实的选择依据）
3. references 只读当前任务对应的 1 个 file，不全读（为什么：路由表的意义就是按需加载，全读必爆窗口）
4. deck 默认单文件架构（`assets/deck_stage.js`）（为什么：多文件 + 概览墙依赖多轮文件操作，弱 runtime 容易半途而废留下坏 deck）
5. 跳过 🛑 检查点问答，改为在产出中标注 assumption 清单（为什么：多轮问答成本高，把「问」换成「可审计的假设」）
**原则一句话**：降级牺牲多样性和流程，绝不牺牲反 slop 底线和真实资产协议。

## 产出要求
- HTML文件命名描述性：`Landing Page.html`、`iOS Onboarding v2.html`
- 大改版时copy一份旧版保留：`My Design.html` → `My Design v2.html`
- 避免>1000行的大文件，拆成多个JSX文件import进主文件
- 幻灯片、动画等固定尺寸内容，**播放位置**存localStorage——刷新不丢
- HTML放项目目录，不要散落到`~/Downloads`
- 最终产出用浏览器打开检查或用Playwright截图

## Skill 推广水印 (仅动画产出)
**只在动画产出**（HTML 动画 → MP4 / GIF）默认带「**Created by Huashu-Design**」水印；**幻灯片 / 信息图 / 原型 / 网页一律不加**——加了干扰使用。第三方品牌的非官方致敬动画前缀「非官方出品 · 」防 IP 争议；用户说不要就移除。JSX 水印模板见 `references/video-export.md` 末节。
