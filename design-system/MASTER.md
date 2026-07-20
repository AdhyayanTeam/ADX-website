# Design System Master File (ADX Webapp)

> [!NOTE]
> **LOGIC:** When building or editing a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. Otherwise, follow the rules below.

---

## 1. Core Configuration (The Dials)
Based on the landing and B2B SMB nature of the ADX project, our visual dials are configured as follows:
* **`DESIGN_VARIANCE: 7`** (Clean layouts, neumorphic card modules, grid structure)
* **`MOTION_INTENSITY: 6`** (Standard scroll reveals, subtle hover glows, and tactile push feedback)
* **`VISUAL_DENSITY: 4`** (Spacious, airy sections prioritizing high-impact typography and clean hierarchy)

---

## 2. Colors & Materiality
The ADX-webapp is built around a premium light mode (Bright configuration) using soft neumorphic details.

### Palette Tokens
| Role | Hex / Value | Tailwind / CSS Token | Purpose |
|---|---|---|---|
| **Background** | `#f0f2f5` | `var(--color-background)` | Clean, soft backdrop |
| **Foreground / Text** | `#0f172a` | `var(--color-foreground)` | High contrast, elegant dark text |
| **Accent / CTA** | `#ff5d73` | `var(--color-accent)` | Soft coral/rose, singular accent |
| **Accent Hover/Dark** | `#e0445a` | `var(--color-brand-blue-dark)` | Accent hover state |
| **Muted / Secondary** | `#475569` | `var(--color-brand-neutral-muted)` | Supporting subtext |
| **Border** | `rgba(15, 23, 42, 0.08)`| `var(--color-border)` | Subtle separator line |
| **Input Background** | `rgba(15, 23, 42, 0.04)`| `var(--color-input)` | Sunken input fields |

### Neumorphic Shadow Standards
* **`neumorphic-flat`**: Light surface elevation. 
  ```css
  box-shadow: 6px 6px 16px rgba(165, 175, 190, 0.6), -6px -6px 16px rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  ```
* **`neumorphic-sunken`**: Recessed surface elevation.
  ```css
  box-shadow: inset 4px 4px 10px rgba(165, 175, 190, 0.6), inset -4px -4px 10px rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  ```
* **Corner Radius**: Pre-defined corners must be kept consistent across all components.
  * Cards / Containers: `16px` (`rounded-2xl` / `var(--radius-lg)`)
  * Inner Elements / Inputs: `12px` (`rounded-xl` / `var(--radius-md)`)
  * Buttons / Badges: `8px` (`rounded-lg` / `var(--radius-sm)`) or `9999px` (`rounded-full`)

---

## 3. Typography & Copy-writing Rules

### Font Pairings
* **Display / Headlines**: **Outfit** (`var(--font-sans)`). High-impact tracking-tighter headlines.
* **Body / Paragraphs**: **Outfit** (`var(--font-sans)`). Clean, high-legibility sans-serif tracking.
* **Numbers / Counters**: **JetBrains Mono** (`var(--font-mono)`). Tabular figures to prevent layout shifts.

### Copy restrictions (CRITICAL)
* **Em-dash and En-dash Ban**: Absolutely **no em-dashes (`—`) or en-dashes (`–`)** are allowed in user-facing text. Use clean parentheses, spaces, colons, or restructure sentences to preserve clean grammar.
* **Emphasis**: Italicized words must clear their descenders (`g`, `y`, `p`, `q`, `j`) without clipping. Ensure `leading-[1.1]` or above for display typography containing italics.

---

## 4. Layout & Viewport Stability
* **No `h-screen`**: Never use `h-screen` for hero sections. Always use `min-h-[100dvh]` to prevent scrolling jumps caused by mobile browser URL bar resizing.
* **Gutter / Grid Alignment**: Always use CSS Grid (`grid grid-cols-1 md:grid-cols-x gap-6`) over complex percentage-based flex layouts.
* **Max Width**: Keep primary content bound within a max width of `max-w-7xl` or `max-w-[1400px]` centered via `mx-auto`.
* **Hero Top Padding Cap**: The maximum hero top padding is capped at `pt-24` (≈6rem) on desktop to keep the primary call to action in the initial fold.

---

## 5. Interaction & Feedback

### Touch Targets
* **Minimum Interactive Size**: Tappable areas must be at least `44x44px` on mobile/tablets. If icons are smaller, use `hitSlop` attributes or wrap them in container padding.

### Tactile States
* **Active Press Feedback**: Interactive buttons and card elements must respond with a physical scale-down: `active:scale-[0.98] active:translate-y-[0.5px]`.
* **Hover Transitions**: All transitions must be smooth: `transition-all duration-200 ease-out`.

### Accessibility (a11y)
* **Contrast Compliance**: Ensure text contrast meets WCAG AA (minimum 4.5:1 ratio for standard text, 3:1 for display). 
* **Input Labels**: Labels must reside above inputs. Placeholders must never be used as structural labels.

---

## 6. Prohibited AI-Slop (The Banned List)
To ensure the ADX brand remains premium, authentic, and free of generic AI-design templates, we enforce these bans:
1. ❌ **No emojis** as structural icons. All icons must use `@phosphor-icons/react` or `@tabler/icons-react` to keep unified glyph weights (stroke width 1.5–2.0).
2. ❌ **No duplicate CTA intent** on a page. Avoid having "Contact Us", "Get in Touch", and "Let's Talk" on the same view. Pick one label and stick to it.
3. ❌ **No button text wrapping**. Buttons must fit on a single line on desktop views.
4. ❌ **No AI-purple glows / gradients**. Avoid generic blue-to-purple background meshes. Stick to off-white/off-black neutrals and the soft rose accent `#ff5d73`.
5. ❌ **No generic stock or hand-drawn SVGs**. If an asset is missing, use a clean screenshot, copy existing logo resources, or display a clean, labeled gray placeholder.
