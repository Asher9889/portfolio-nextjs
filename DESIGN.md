---
name: Saurabh Kushwaha Portfolio
description: Personal portfolio — Bold, Confident, Playful brand surface
colors:
  gold: "#E8B84B"
  coral: "#E8553A"
  emerald: "#34D399"
  sapphire: "#60A5FA"
  cyan: "#22D3EE"
  rose: "#FB7185"
  violet: "#A78BFA"
  bg-light: "#fdfdfd"
  bg-dark: "#070708"
  surface-dark: "#0c0c10"
  text-primary: "#FAFAFA"
  text-secondary: "rgba(250,250,250,0.55)"
  text-muted: "rgba(250,250,250,0.25)"
  border-dark: "rgba(255,255,255,0.06)"
  border-light: "rgba(0,0,0,0.05)"
typography:
  display:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, monospace"
    fontWeight: 500
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  pill: "9999px"
  card-lg: "2rem"
  card-md: "1.5rem"
  card-sm: "1rem"
  icon: "0.75rem"
spacing:
  section-x: "clamp(1.5rem, 5vw, 7rem)"
  section-y: "8rem"
  card-inner: "clamp(1.5rem, 3vw, 3rem)"
  stack: "1.5rem"
components:
  button-primary-dark:
    backgroundColor: "#222222"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-primary-gold:
    backgroundColor: "{colors.gold}"
    textColor: "#000000"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "rgba(255,255,255,0.7)"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  nav-link-default:
    textColor: "rgba(0,0,0,0.6)"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  nav-link-active:
    backgroundColor: "#111111"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  tilt-card:
    backgroundColor: "rgba(255,255,255,0.03)"
    rounded: "{rounded.card-md}"
  stat-card:
    backgroundColor: "rgba(255,255,255,0.02)"
    rounded: "{rounded.card-sm}"
    borderColor: "{colors.border-dark}"
---

# Design System: Saurabh Kushwaha Portfolio

## 1. Overview

**Creative North Star: "The Studio Window"**

Every section is a framed exhibit of craft — precisely composed, meant to be studied. The viewer stands outside looking in at work that reveals its making. Nothing is off-the-shelf; every interaction, transition, and layout choice carries the maker's signature.

This system is **Vibrant & Eclectic** — not one palette, but a deliberate rotation. Gold anchors the About narrative, coral/emerald/sapphire own the project showcase, cyan/rose/violet drive expertise cards. Each section gets its own mood without losing coherence. The unifying thread is the dark canvas (#070708) that frames every exhibit, alternating with clean white (#fdfdfd) for breathing room.

Design IS the credential. The portfolio's own interface proves Saurabh's skill before a single project is read.

### Key Characteristics:
- **Framed vignettes** — each section is a distinct visual set piece
- **Accent per section** — color rotates to signal context shifts
- **Glass craftsmanship** — subtle blur, border glow, and spotlight effects replace flat surfaces
- **Mono as meta voice** — counters, labels, dates, tags in monospace for technical authority
- **Generous rhythm** — wide horizontal padding, deep vertical sections, nothing cramped

## 2. Colors

A rotating palette where each section owns its accent. No color carries over from one section to the next — the shift itself is the signal.

### Primary
- **Gold** (#E8B84B / oklch(78% 0.14 85)): Brand anchor. Used for About headlines, philosophy elements, expertise section headers, and all CTAs. Warm, premium, confident. Never used as a background — always as accent text, icon, or small element fill.

### Secondary
- **Coral** (#E8553A / oklch(58% 0.2 30)): Lead project accent. The first card in ProjectShowcase ("Face Vision") carries this hue. Also used for section eyebrow labels ("Portfolio").
- **Emerald** (#34D399 / oklch(72% 0.16 160)): Second project accent. Healthcare-themed project card.
- **Sapphire** (#60A5FA / oklch(66% 0.14 250)): Third project accent. Enterprise project card.

### Tertiary
- **Cyan** (#22D3EE / oklch(78% 0.12 195)): Expertise accent for Full Stack Engineering card. Also used for typewriter text in About.
- **Rose** (#FB7185 / oklch(68% 0.18 10)): Expertise accent for System Architecture card.
- **Violet** (#A78BFA / oklch(68% 0.16 280)): Expertise accent for Creative Development card.

### Neutral
- **Off-white background** (#fdfdfd): Light theme canvas. Only Contact and Footer sections use this.
- **Near-black canvas** (#070708): Dark theme canvas. Hero, ProjectShowcase, AboutMe, ExpertiseSection use this.
- **Surface dark** (#0c0c10): Card surface on dark canvas. Slightly lighter than the canvas.
- **White** (#FAFAFA): Primary text on dark surfaces.
- **Faded white** (rgba(250,250,250,0.55)): Secondary text — descriptions, subtitles.
- **Muted white** (rgba(250,250,250,0.25)): Lowest priority text — decorative numbers, background elements.

### Named Rules
**The Accent Per Section Rule.** Color maps to section, not to role. Gold for About, coral/emerald/sapphire for projects, cyan/rose/violet for expertise. If a new section is added, it gets its own accent — never re-use another section's color.

**The One Element Rule.** Accent color occupies at most one visual element at a time within a viewport — an eyebrow label, a divider line, a highlight word. Never two simultaneously. Rarity is the point.

## 3. Typography

**Display Font:** Geist (Vercel's typeface), variable weight.
**Body Font:** Geist, variable weight.
**Label/Mono Font:** Geist Mono, variable weight.
**Serif Accent:** Playfair Display (italic only, for the tagline and the "SK" monogram).

**Character:** Technical precision meets editorial confidence. Geist's clean geometric forms carry the engineering voice; Playfair's italic serif adds the creative counterpoint. The contrast between massive display scales (220px hero name) and tiny mono labels (10px) creates the dynamic range.

### Hierarchy
- **Display** (900 weight, clamp(4rem, 12vw, 220px), 0.8 line-height, -0.05em tracking): Hero name only. Massive, commanding, uppercase.
- **Headline** (700 weight, clamp(2rem, 5vw, 5rem), 1.1 line-height, -0.03em tracking): Section titles. "Selected Works", "What I Craft", "Have a project in mind?".
- **Title** (600 weight, clamp(1.25rem, 2.5vw, 2.75rem), 1.2 line-height): Card titles. Project names, expertise card headers.
- **Body** (400 weight, clamp(0.875rem, 1vw, 1rem), 1.6 line-height): Descriptions, project details, about copy. Max width 65ch.
- **Label** (500 weight, clamp(0.625rem, 0.8vw, 0.75rem), 0.05em letter-spacing, uppercase): Section eyebrows, metadata, counters, tech tags, timeline dates. Always Geist Mono.

### Named Rules
**The Mono Meta Rule.** Any text that labels, counts, dates, or categorizes uses Geist Mono. It's the system's "technical annotation" voice — never body copy, never headlines, always secondary.

**The Scale Gap Rule.** No adjacent size steps. Skip from display to headline, headline to body. If a step is missing, the content doesn't need it. The 13x range from label (10px) to display (220px) is intentional — flat scales are monotonous.

## 4. Elevation

Layered glass with hover-activated depth. Surfaces are flat at rest with subtle border definition. Depth reveals itself on interaction — card borders shift from transparent tint to accent color, shadows bloom from ambient to focused, spotlight gradients track the cursor. The dark canvas provides natural contrast, so shadows are soft and colored rather than hard and dark.

### Light Theme (Contact, Footer)
Flat with tonal layering. No shadows. Division through spacing, border lines (1px solid rgba(0,0,0,0.05)), and generous whitespace.

### Dark Theme (Hero, ProjectShowcase, About, Expertise)
- **Project cards at rest:** `0 8px 40px rgba(0,0,0,0.3)` — ambient shadow for card separation.
- **Project cards hover:** `0 0 80px {accent}12, 0 25px 60px rgba(0,0,0,0.5)` — the accent glow blooms.
- **Tilt cards at rest:** `0 4px 24px -8px rgba(0,0,0,0.5)` — subtle card separation.
- **Tilt cards hover:** `0 20px 60px -15px {accentGlow}` — colored shadow paired with 3D tilt rotation.
- **Stat cards:** No resting shadow. Border shifts from rgba(255,255,255,0.06) to accent on hover.

### Named Rules
**The Flat-By-Default Rule.** All surfaces are flat at rest. Shadows and glows appear only as responses to cursor interaction. A surface that's elevated at rest must justify itself — and most can't.

## 5. Components

### Buttons
- **Shape:** Fully pill-shaped (rounded-full, 9999px).
- **Primary (Dark CTA — "Book a Call"):** Background #222222, text white. Hover: background black. Transition: 0.3s colors.
- **Primary (Gold CTA — "Let's Connect"):** Background #E8B84B, text black. Hover: scale 1.05 with shadow-lg. Always paired with ArrowUpRight icon.
- **Ghost (Border — "See My Work"):** Transparent background, 1px border rgba(255,255,255,0.15), text rgba(255,255,255,0.7). Hover: background rgba(255,255,255,0.05), text brighten.
- **Contact CTA ("Say Hello"):** Background neutral-900 (#111), text white. Hover: background neutral-800. Includes Mail icon.

### Navigation
- **Position:** Fixed top, z-50. Uses mix-blend-difference on dark sections (text auto-inverts), standard text color on light sections.
- **Structure:** Logo monogram (SK, Playfair italic bold) + nav pill container + theme toggle + command button.
- **Nav pill:** White background, 0 2px 10px rgba(0,0,0,0.05) shadow, 1px rgba(0,0,0,0.05) border, rounded-full.
- **Link default:** text-black/60, hover text-black + hover:bg-black/5.
- **Link active:** bg-[#111111] text-white rounded-full.
- **Theme toggle:** 40x40px circular button, blue-500 border + text, hover:bg-blue-50.

### Project Cards (Signature Component)
- **Corner Style:** 2rem radius (rounded-[2rem]).
- **Background:** #0c0c10 surface, 1px border at rgba(255,255,255,0.06).
- **Hover:** Border shifts to accent at 30% opacity. Accent spotlight gradient follows cursor (radial-gradient 600px circle at mouse position). Accent glow shadow blooms.
- **Layout:** 12-column grid. Odd cards: image right (7 cols), content left (5 cols). Even cards: flipped. Alt layout reverses image side.
- **Image:** Fill container with gradient overlay (transparent 40% → surface) for text legibility.
- **Category badge:** Rounded-full, accent background at 15% opacity, accent border at 25%, accent text. backdrop-blur-xl.
- **Title:** text-3xl to text-[2.75rem] font-bold text-white.
- **Description:** Max 65ch, rgba(255,255,255,0.45).
- **Tech tags:** Rounded-full pills, border and background at tech-specific brand color. Hover: scale 1.05.
- **CTA link:** Accent colored, underline appears on hover via absolute positioned pseudo-element.

### Tilt Cards (Expertise Section)
- **Corner Style:** 1.5rem radius (rounded-3xl).
- **Surface:** Glass gradient (165deg radial), backdrop-blur(20px), 1px padding gradient border for animated border glow effect.
- **Aurora background:** Three animated blur gradients that drift at different speeds.
- **Interaction:** 3D tilt on mouse move (spring physics, 8-10deg max rotation). Glare effect follows cursor. Shadow shifts from ambient to accent-enabled.
- **Content:** Icon container (rounded-xl, border) + title + subtitle + divider (accent gradient line, scaleX animated on entrance) + skill pills.
- **Skill pills:** rounded-lg, 11px font, border rgba(255,255,255,0.06). Hover: accent border, accent background, text brightens. Shimmer sweep animation on hover.

### Inputs / Fields
No form inputs in the current system. Contact is a simple CTA button with mailto link. If inputs are added later, follow: rounded-2xl, border rgba(0,0,0,0.05) light / rgba(255,255,255,0.06) dark, focus ring in accent color.

## 6. Do's and Don'ts

### Do:
- **Do** use section-specific accent palettes to signal context shifts — gold for narrative, coral/emerald/sapphire for projects, cyan/rose/violet for expertise.
- **Do** use Geist Mono for all metadata — labels, counters, dates, tag names, stats.
- **Do** keep accent color to one element per viewport. The rarity makes it powerful.
- **Do** use generous spacing — wide horizontal padding (clamp 1.5rem to 7rem) and deep vertical sections (8rem) for editorial breathing room.
- **Do** animate with `easeOut` exponential curves (`cubic-bezier(0.16, 1, 0.3, 1)` throughout the codebase).
- **Do** use the dark canvas (#070708) as the primary container for craft-forward sections.

### Don't:
- **Don't** repeat the same visual template across sections. Each section must earn its layout — no identical card grids.
- **Don't** use gradient text (`background-clip: text` with gradient). The only exception is the "Selected Works" headline — all other emphasis uses solid color, weight, or size.
- **Don't** use glassmorphism as default. Glass effects are reserved for cards and badges; never decorate full sections with blur.
- **Don't** build a "hero-metric template" — big number + small label is only used for stat counters, never as the primary section layout.
- **Don't** use side-stripe borders (border-left > 1px as accent). Use full borders, background tints, or divider lines instead.
- **Don't** use em dashes. Use commas, colons, or periods.
- **Don't** make the portfolio look like a generic dev template. If a section could come from a "10 modern portfolio templates" article, rewrite it.
