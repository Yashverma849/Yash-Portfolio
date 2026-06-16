---
name: generate
description: >-
  Generate portfolio landing pages with full product, UX, and UI design discipline.
  Use when the user invokes /generate, asks to generate a landing page, create a
  new portfolio section, scaffold a project showcase page, or build a new route
  for the Yash portfolio site. Applies competitive analysis, user research,
  design tokens, wireframing, high-fidelity UI, and interactive state design.
disable-model-invocation: true
---

# /generate — Portfolio Landing Page Generator

Generate websites and landing pages that match this project's stack, design system, and conventions — following product design strategy, UX research, and UI craft before writing code.

## Design Disciplines

Apply all three disciplines in order: **Product → UX → UI → Code**.

### Product design

**Includes:**
- Competitive analysis
- Detailed roadmapping
- Feature prioritization
- Market research

**Bigger picture.** Not just the screens, but the strategy behind them. Product designers work at the intersection of business goals, project management, and user-centered design, which gives them a wider remit than most design roles.

**Greater sway.** Product designers help shape the product roadmap, making decisions that prioritize features and functionality that maximize ROI.

**Long-term vision.** Product design supports long-term business goals and overall company strategy. Companies like Atlassian and Spotify focus on scalability in their designs, using tools like variables to maintain consistency as they grow.

### UX design

**Includes:**
- Comprehensive user research
- UI organisation and labelling
- Usability testing and feedback
- Wireframing and prototyping

**Short-term focus.** UX designers often zero in on improving specific features or flows within a current sprint, prioritizing immediate improvements to user experience.

**Narrower scope.** The UX design process is centered on creating a user experience that's easy to navigate and actually works with less emphasis on the broader business context.

**Narrower mandate.** UX designers focus on the user—what they need, what confuses them, what works. Business priorities are someone else's problem, at least for now.

### UI design

**Includes:**
- Design systems and style guides
- Interactive element design
- Typography and colour palettes
- High-fidelity visual mockups

**Visual execution.** UI designers translate UX decisions into the interface, including typography, color, and layout.

**Pixel-level precision.** They focus on how each element looks and behaves.

**Aesthetic craft.** UI design shapes how polished and trustworthy a product feels.

## Product Design Process

Run this process before implementation. Document decisions briefly in the response when generating.

1. **Goal setting** — Define business objective, target audience, and success metrics
2. **Research** — Competitive analysis, market research, user research
3. **Analysis** — Synthesize findings; identify gaps and opportunities
4. **Product strategy** — Roadmap, feature prioritization, information architecture
5. **Execution and post launch** — Build, usability test, gather feedback, iterate

## Before Writing Code

Gather from the user (ask if missing):

1. **Scope** — New homepage section vs. standalone route (`app/<slug>/page.tsx`)
2. **Content** — Headline, subcopy, CTA, images, links, tags/tech stack
3. **Sections** — Which blocks to include (hero, features, projects grid, contact, etc.)
4. **Product context** — Who is this for, what problem it solves, how it differs from competitors
5. **UX structure** — Page flow, labelling, wireframe-level layout (sections and hierarchy)
6. **UI direction** — Typography, colour usage, interactive states for key elements

Default to extending the existing homepage unless the user explicitly wants a separate page.

**Wireframe first:** Describe or sketch section hierarchy and user flow before high-fidelity code. Confirm IA and labelling align with user mental models.

## Design Tokens

Design tokens are the named values that store your team's core design decisions. Each token pairs a raw value with a meaningful name that both designers and developers can reference. So instead of saying, "use #0D99FF," you say "use primary-blue," and that name stays connected to the value everywhere it lives. That shared naming is what keeps a design system from fracturing as it scales across platforms and teams.

### Types of design tokens

1. **Primary token** — Raw values (colour hex, spacing px, font size)
2. **Semantic token** — Purpose-driven names (`primary`, `accent`, `muted-foreground`)
3. **Component token** — Scoped to a component (`button-bg`, `card-shadow`)

Map tokens to `app/globals.css` — **single source of truth** for brand colors:

| Brand token | CSS variable | Tailwind class | Role |
|-------------|--------------|----------------|------|
| Primary | `--color-primary` | `bg-primary` | Main brand (near-black) |
| Secondary | `--color-secondary` | `bg-secondary` | Surfaces & subtle backgrounds |
| CTA | `--color-cta` | `bg-cta` | Buttons & call-to-action (warm orange) |

**Typography colors** (same file, aliased from brand):

| Text role | CSS variable | Tailwind class | Usage |
|-----------|--------------|----------------|-------|
| Primary text | `--color-text-primary` | `text-foreground` | Headings, body copy |
| Secondary text | `--color-text-secondary` | `text-muted-foreground` | Captions, labels |
| Accent text | `--color-text-accent` | `text-accent` | Highlights, links, tags |
| On CTA | `--color-text-on-cta` | `text-cta-foreground` | Text inside CTA buttons |

Use `variant="cta"` on `<Button>` for CTAs. `--accent` aliases `--color-cta` for highlights and tags. Never scatter raw hex in components.

**Layout:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on every section container.

**Cards:** `bg-card rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2`

**Tags:** `px-3 py-1 bg-accent/10 text-accent rounded-full text-sm`

## Interactive Element States

Every interactive element (buttons, links, toggles, form inputs) must implement appropriate states. Use shadcn/ui variants where available; extend with Tailwind when needed.

### Core state

| State | When it appears | Visual treatment | CSS selector | Figma variants |
|-------|-----------------|------------------|--------------|----------------|
| Default | Page load; no interaction | Base color, full opacity, standard border | `.btn` | State=Default |
| Hover | Cursor moves over button | Subtle color shift or shadow lift | `:hover` | State=Hover |
| Active | During click or tap | Darker fill, slight scale-down (0.98) | `:active` | State=Pressed |
| Focused | Tab key or keyboard nav | Visible focus ring (3px outline + offset) | `:focus-visible` | State=Focused |
| Disabled | Action unavailable | Muted fill, reduced contrast, no-cursor | `:disabled` | State=Disabled |

### Functional state

| State | When it appears | Visual treatment | CSS selector | Figma variants |
|-------|-----------------|------------------|--------------|----------------|
| Loading | After click, awaiting response | Spinner or progress bar, reduced opacity | `.is-loading` | State=Loading |
| Success | Action completed successfully | Green fill, checkmark icon, brief animation | `.is-success` | State=Success |
| Error | Action failed | Red fill or border, warning icon | `.is-error` | State=Error |
| Selected | Toggle or filter turned on | Filled or inverted style, persists until deselected | `[aria-pressed="true"]` | State=Selected |

Focus rings are mandatory for keyboard accessibility. Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent`.

## Tech Stack (do not deviate)

| Layer | Use |
|-------|-----|
| Framework | Next.js 14 App Router (`app/`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + semantic tokens from `app/globals.css` |
| UI | shadcn/ui at `@/components/ui/*` |
| Animation | Framer Motion for sections; GSAP only for nav-like interactions |
| Icons | `lucide-react` or `react-icons` |
| Images | `next/image` with paths under `/assets/` in `public/` |
| Utils | `cn()` from `@/lib/utils` |

Path alias: `@/*` → `src/*`

## Decision: Section vs. Route

**Add a homepage section** when content belongs on the main scroll page:
1. Create `src/components/<SectionName>.tsx`
2. Add `id="<section>"` on `<section>` (match nav hash)
3. Import and place in `app/page.tsx`
4. Add entry to `navigationItems` in `page.tsx`

**Create a standalone route** when it's a separate landing (e.g. project detail):
1. Create `app/<slug>/page.tsx` (+ optional `layout.tsx` with `metadata`)
2. Reuse `PillNav`, `Footer`, design tokens, and existing section components
3. Compose like `app/page.tsx` — no separate template exists yet

## Section Component Pattern

Follow existing sections (`Hero.tsx`, `Projects.tsx`, `About.tsx`):

```tsx
'use client' // only when using hooks, motion, or browser APIs

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const SectionName = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="section-id" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Section Title
          </h2>
          {/* content */}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionName
```

## Content Conventions

- **Inline data arrays** at the top of section files (no separate JSON/CMS layer)
- **PascalCase** component filenames with default exports (`Projects.tsx`, not `projects.tsx`)
- **Images** in `public/assets/`, referenced as `/assets/filename.png`
- **Navigation** uses `PillNav` with hash links — do not use legacy `Navigation.tsx`
- **Homepage shell:** `PillNav` → sections → `Footer`

### Project card data shape

```tsx
const items = [
  {
    title: 'Project Name',
    description: 'One-line description.',
    image: '/assets/project.png',
    link: 'https://example.com',
    tags: ['Next.js', 'Supabase'],
  },
]
```

## Page Composition (homepage)

Mirror `app/page.tsx`:

```tsx
'use client'

import PillNav from '@/components/PillNav'
import Footer from '@/components/Footer'
// import new sections

export default function Home() {
  const navigationItems = [
    { label: 'Home', href: '#home' },
    // add new section nav items
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PillNav
        logo="/assets/yv-logo.png"
        logoAlt="YV Logo"
        items={navigationItems}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        pillTextColor="#000000"
      />
      {/* sections */}
      <Footer />
    </main>
  )
}
```

## Standalone Route Metadata

For new routes, add a server `layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title — Yash Verma',
  description: 'Page description for SEO.',
  openGraph: { title: '...', description: '...', type: 'website' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

## Workflow Checklist

Copy and track:

```
Generation Progress:

Product design:
- [ ] Goals and success metrics defined
- [ ] Competitive analysis / market research noted
- [ ] Feature prioritization and roadmap clear

UX design:
- [ ] User research or persona assumptions documented
- [ ] Information architecture and labelling decided
- [ ] Wireframe / section hierarchy confirmed
- [ ] Usability considerations addressed

UI design:
- [ ] Design tokens mapped (no raw hex in components)
- [ ] Typography and colour palette applied
- [ ] Interactive states defined for key elements
- [ ] High-fidelity layout matches design system

Implementation:
- [ ] Scope decided (section vs route)
- [ ] Content gathered from user
- [ ] Component(s) created in src/components/
- [ ] Images placed in public/assets/ (or placeholders noted)
- [ ] Wired into app/page.tsx or app/<slug>/page.tsx
- [ ] Navigation updated (navigationItems / PillNav)
- [ ] Metadata added (if standalone route)
- [ ] 'use client' only where needed
- [ ] Lint check on changed files
```

## Quality Bar

- Run Product → UX → UI process before coding; summarize decisions in the response
- Match existing visual rhythm: responsive headings, section padding, scroll animations
- Mobile-first responsive grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- External links: `target="_blank" rel="noopener noreferrer"`
- All interactive elements implement core states; forms/async actions implement functional states
- Minimize scope — one focused change per request; reuse existing components
- Do not introduce new dependencies unless the user asks
- Do not commit unless explicitly requested

## Reference Files

Read these before generating to match live patterns:

- `app/page.tsx` — homepage composition and nav
- `src/components/Hero.tsx` — hero layout and motion
- `src/components/Projects.tsx` — card grid and inline data
- `app/globals.css` — design tokens and custom utilities
- `app/layout.tsx` — root metadata pattern
