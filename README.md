<div align="center">

#  WavyGo

**India's Bike & Scooter Rental Marketplace — Frontend Web Application**

[![TypeScript](https://img.shields.io/badge/TypeScript-92.7%25-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-MIT-black?style=flat-square)](https://ui.shadcn.com/)
[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/design/f13GAW0wP04Ju0Y2CKsEh6/Wavygo-website)

A production-ready, single-page marketing website for **WavyGo** — a platform connecting riders with self-drive bikes and scooters across Uttarakhand, Himachal Pradesh, and beyond. Originally exported from Figma Make and progressively refactored into a clean, data-driven, type-safe React application.

[📐 View Figma Design](https://www.figma.com/design/f13GAW0wP04Ju0Y2CKsEh6/Wavygo-website) · [📦 Repository](https://github.com/Abhay-Chand/Wavygo)

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Screenshots](#screenshots)
- [Architecture Summary](#architecture-summary)
- [Feature Overview](#feature-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Component Architecture](#component-architecture)
- [Data Layer](#data-layer)
- [Type System](#type-system)
- [Design System & Tokens](#design-system--tokens)
- [Styling Architecture](#styling-architecture)
- [Custom Hooks](#custom-hooks)
- [Build Configuration](#build-configuration)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Engineering Decisions](#engineering-decisions)
- [Refactoring Phases](#refactoring-phases)
- [Adding New Content](#adding-new-content)
- [Phase 3 Cleanup Guide](#phase-3-cleanup-guide)
- [Attributions](#attributions)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)

---

## Project Overview

WavyGo is a bike rental marketplace targeting riders across northern India — from casual city commuters renting scooters for ₹299/day to adventure seekers booking Royal Enfield Himalayans for Leh-Ladakh routes. The website serves as the primary marketing and booking entry point, showcasing:

- A browsable bike inventory categorised by type, destination, and price
- Location-aware destination discovery surfacing nearby riding routes from the user's region
- A host-side section for bike owners to list their bikes and earn passive income
- Social proof through rider testimonials, aggregate ratings, and a blog editorial layer
- App download conversion for iOS and Android

The codebase was initially exported from **Figma Make** (Figma's design-to-code tool). It has since undergone a structured two-phase refactoring to separate concerns, extract a typed data layer, codify a design token system, and make the codebase maintainable without a backend dependency. The current `main` branch reflects a completed Phase 2; Phases 3–5 (cleanup, testing, documentation) are pending.

---

## Screenshots

> Replace these placeholders with actual screenshots once added to the repository.

| Section | Preview |
|---|---|
| Hero + Booking Form | ![Hero](/assets/home-page.png) |
| Browse by Bike Type | ![Browse](/assets/bike-type.png) |
| Destination Discovery | ![Destinations](/assets/Destination.png) |
| App Showcase | ![App](/assets/App.png) |
| Host Section | ![Host](/assets/Busniess-Vendor.png) |
| Testimonials + FAQ | ![Reviews](/assets/Reviews.png) |

---

## Architecture Summary

WavyGo is a **single-page React application** — all content lives on one scrollable canvas with no client-side routing. The architecture enforces a deliberate separation between four layers:

```
┌─────────────────────────────────────────────────────────────┐
│  Presentation Layer  →  /src/components/  (17 components)   │
│         Pure UI rendering. No hardcoded content.            │
├─────────────────────────────────────────────────────────────┤
│  Data Layer          →  /src/data/        (9 typed files)   │
│         Single source of truth for all site content.        │
├─────────────────────────────────────────────────────────────┤
│  Type Layer          →  /src/types/       (1 index file)    │
│         TypeScript interfaces for every data shape.         │
├─────────────────────────────────────────────────────────────┤
│  Config Layer        →  /src/config/      (theme tokens)    │
│         Colors, typography, spacing, radii, shadows.        │
└─────────────────────────────────────────────────────────────┘
                            ↑
          /src/utils/hooks/useCarousel.ts
          Shared Embla Carousel logic (reused by 2 components)
```

Updating any piece of content — a bike price, a destination's difficulty, a testimonial — requires editing exactly one file in `/src/data/` with no component changes. The same import pattern used today (`import { DESTINATIONS } from "@/data"`) can be replaced with an API call in a single line when a backend is ready.

---

## Feature Overview

### Page Sections (top → bottom)

| Component | Badge / Label | Description |
|---|---|---|
| `Header` | — | Fixed nav with logo, primary links (Destinations, Explore India, Riding Guides), and CTAs (List Your Bike, Get App, Login) |
| `Hero` | `10,000+ bikes` | Full-bleed hero with headline, destination search form, date pickers, featured route cards (Leh–Ladakh, Mussoorie Hills), and 3-stat row (10K+ Bikes / Unlimited km / 24/7 Support) |
| `BrandMarquee` | — | Auto-scrolling marquee of India's top manufacturers: TVS, Bajaj, Hero MotoCorp, Yamaha, Suzuki, KTM, Jawa, Ather Energy, Royal Enfield, Honda |
| `BikeCategories` | "Browse by Type" | 6 bike type cards — Scooter (₹299/day, Most Popular), Commuter (₹399, Best Value), Adventure (₹799, Top Rated), Premium, Thrill Seekers, Eco Choice — each with a labelled CTA |
| `HowItWorks` | — | 4-step booking guide |
| `DestinationDiscovery` | "From Dehradun" | Location-aware carousel of 6 nearby destinations with difficulty tags (Easy / Moderate / Challenging), km, hours, highlights, and bike type recommendations |
| `ExploreIndia` | "Road Trip Inspiration" | Editorial route cards for iconic Indian rides |
| `AppShowcase` | "iOS & Android · Free download" | Dark-background section with 3 phone mockups (home screen, booking detail, map view) and 4 feature callouts (Smart Search, Live Map, Instant Booking, Ride Protected) |
| `AppDownload` | "Book in 60 Seconds" | App Store + Google Play download buttons, QR code, and feature list (real-time availability, instant confirmation, digital KYC, exclusive deals, 4.8★ / 50K+ reviews) |
| `HostSection` | "For Bike Owners" | 3-step host onboarding (List → Set Price → Start Earning) with a potential earnings card (₹18,000 avg/month, 3,200+ active hosts, 92% booking fulfilment) |
| `Testimonials` | "Real Riders, Real Stories" | Carousel of 6 reviews with 5-star ratings, role labels, and route context. Aggregate stats: 4.8★ · 50K+ reviews · 98% would recommend |
| `FAQ` | "Got Questions?" | Accordion with 7 questions: minimum age, required documents, security deposit, km limits, breakdowns, cancellations, fuel |
| `Blog` | "Rider Stories" | Editorial grid — "Roads Worth Riding" — with 1 featured article and 3 side stories |
| `Footer` | — | 4-column footer: Company · Explore · Support · For Hosts. Contact: hello@wavygo.in · +91 98765 43210. Address: C/o Rambhakta Mktrs, Ward No. 05, Pithoragarh, Uttarakhand – 262501 |
| `WhatsAppButton` | — | Sticky floating WhatsApp CTA, bottom-right |

### UX Highlights

- **Location context**: Destination discovery section reads "From Dehradun" and surfaces geographically relevant routes
- **Difficulty badges**: Colour-coded Easy (green) / Moderate (orange) / Challenging (red) on destination cards
- **Trust indicators**: Inline signals ("100% Trip Protection", "Instant Booking", "4.8★ Rated Platform") near every primary CTA
- **Card badges**: "Most Popular", "Best Value", "Top Rated", "Premium", "Thrill Seekers", "Eco Choice" guide quick decisions
- **Carousel pagination**: Dot indicators + prev/next arrows on both Destination Discovery and Testimonials
- **Social proof at scale**: Aggregate stats (4.8★, 50K+, 98%) lead the testimonials section before individual reviews
- **Editorial depth**: The blog section ("Roads Worth Riding") includes author names, categories, and read times to build brand authority

---

## Tech Stack

### Core

| Package | Version | Purpose |
|---|---|---|
| `react` | 18.3.1 | UI rendering (peer dependency) |
| `react-dom` | 18.3.1 | DOM mounting (peer dependency) |
| `typescript` | (devDep via Vite) | Static typing throughout |
| `vite` | 8.x (overridden to 6.3.5 via pnpm) | Build tool, dev server, HMR |
| `@vitejs/plugin-react` | ^6.0.2 | Vite React plugin |
| `tailwindcss` | 4.1.12 | Utility-first CSS |
| `@tailwindcss/vite` | ^4.3.1 | Tailwind v4 Vite plugin (replaces PostCSS config) |

### UI & Icons

| Package | Version | Purpose |
|---|---|---|
| `lucide-react` | 0.487.0 | Icon system used throughout the UI |
| `@radix-ui/react-slot` | 1.1.2 | Slot primitive (dep of shadcn/ui utilities) |
| `class-variance-authority` | 0.7.1 | Component variant definitions |
| `clsx` | 2.1.1 | Conditional class composition |
| `tailwind-merge` | 3.2.0 | Tailwind class conflict resolution |

### Carousel

| Package | Version | Purpose |
|---|---|---|
| `embla-carousel-react` | 8.6.0 | Headless carousel engine (Destination Discovery + Testimonials) |

### Utilities

| Package | Version | Purpose |
|---|---|---|
| `date-fns` | 3.6.0 | Date formatting (booking form date pickers) |
| `sonner` | 2.0.3 | Toast notification system |
| `@emotion/react` | 11.14.0 | CSS-in-JS (scaffolded by Figma Make, pending cleanup) |
| `@emotion/styled` | 11.14.1 | Emotion styled components (scaffolded, pending cleanup) |

### Installed but Unused (Pending Phase 3 Removal)

The following packages were scaffolded by Figma Make and are not referenced in any current component. They are scheduled for removal in Phase 3:

```
@mui/material, @mui/icons-material, @popperjs/core, react-popper,
canvas-confetti, cmdk, input-otp, react-day-picker,
react-dnd, react-dnd-html5-backend, react-hook-form,
react-resizable-panels, react-responsive-masonry, react-router,
react-slick, recharts, tw-animate-css, vaul, motion, next-themes
```

> Removing these is expected to reduce bundle size by approximately 30–40%.

---

## Folder Structure

```
Wavygo/
│
├── src/
│   │
│   ├── components/                    # 17 page-section components (post-refactor home)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── BrandMarquee.tsx
│   │   ├── BikeCategories.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── DestinationDiscovery.tsx
│   │   ├── ExploreIndia.tsx
│   │   ├── AppShowcase.tsx
│   │   ├── AppDownload.tsx
│   │   ├── HostSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Blog.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   ├── data/                          # Single source of truth for all site content
│   │   ├── index.ts                   # Barrel export — import anything from "@/data"
│   │   ├── bikes.ts                   # 6 bike categories with pricing and badge labels
│   │   ├── destinations.ts            # 6 destinations with km, hours, difficulty, highlights
│   │   ├── routes.ts                  # 5 iconic India routes with rating and ride count
│   │   ├── testimonials.ts            # 6 customer reviews with role and route context
│   │   ├── faqs.ts                    # 7 FAQ question/answer pairs
│   │   ├── blog.ts                    # 4 blog posts with author, date, category, read time
│   │   ├── constants.ts               # Stats, steps, brand list, locations, trust cards, colors
│   │   └── footer.ts                  # Footer nav link groups and contact information
│   │
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces for every data shape
│   │
│   ├── config/
│   │   ├── index.ts                   # Barrel export
│   │   └── theme.ts                   # Design tokens: COLORS, TYPOGRAPHY, SPACING, RADII, SHADOWS, BREAKPOINTS, Z_INDEX
│   │
│   ├── utils/
│   │   ├── index.ts                   # Barrel export
│   │   └── hooks/
│   │       ├── index.ts               # Barrel export
│   │       └── useCarousel.ts         # Embla Carousel wrapper hook
│   │
│   ├── styles/
│   │   ├── index.css                  # CSS entry point
│   │   ├── globals.css                # Resets and base styles
│   │   ├── fonts.css                  # Font-face declarations
│   │   ├── tailwind.css               # Tailwind directives
│   │   └── theme.css                  # CSS custom property definitions
│   │
│   ├── assets/                        # SVGs and static images
│   │
│   ├── app/
│   │   ├── App.tsx                    # Legacy app root (pre-refactor location)
│   │   └── components/
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx   # Figma Make image helper (review in Phase 3)
│   │       └── ui/                    # ⚠️ 46 shadcn/Radix UI components — MOSTLY UNUSED
│   │           ├── input.tsx          # ✅ KEEP — used in Hero booking form
│   │           ├── label.tsx          # ✅ KEEP — used in Hero booking form
│   │           ├── utils.ts           # ✅ KEEP — cn() utility
│   │           ├── use-mobile.ts      # ✅ KEEP — responsive hook
│   │           └── [42 others]        # ❌ DELETE in Phase 3
│   │
│   ├── App.tsx                        # Root component — composes all 17 sections
│   └── main.tsx                       # React DOM entry point
│
├── dist/                              # Production build output (git-tracked — consider .gitignore)
├── guidelines/                        # Internal project guidelines
├── node_modules/                      # Dependencies (git-tracked — should be in .gitignore)
│
├── index.html                         # HTML entry point
├── vite.config.ts                     # Vite config: figmaAssetResolver, React, Tailwind, @ alias
├── postcss.config.mjs                 # PostCSS config
├── package.json                       # name: "@figma/my-make-file" · scripts: dev, build
├── pnpm-workspace.yaml                # pnpm workspace config (review in Phase 3)
├── default_shadcn_theme.css           # shadcn/ui CSS variable baseline
│
├── MIGRATION_PLAN.md                  # Full refactoring roadmap (Phases 1–5)
├── PHASE_3_4_CHECKLIST.md            # Execution checklist for Phase 3 cleanup and Phase 4 testing
├── TERMINAL_COMMANDS.md               # Developer quick-reference for common terminal commands
└── ATTRIBUTIONS.md                    # Open source and photography attributions
```

> **Note**: `dist/` and `node_modules/` are currently committed to the repository. Both should be added to `.gitignore`. This is a known item in the cleanup backlog.

---

## Component Architecture

Every component follows an identical import pattern established during Phase 2:

```tsx
// Standard pattern across all 17 section components
import { SOME_DATA, SOME_CONSTANT } from "@/data";
import type { SomeType } from "@/types";
import { COLORS } from "@/config";          // only if design tokens are needed inline
import { useCarousel } from "@/utils/hooks"; // only if this component uses a carousel

export function ComponentName() {
  // Component reads from imported data — no hardcoded content
  return (/* JSX */);
}
```

Components are purely presentational. None of them fetch data, manage global state, or hold content in local variables. Everything comes from `@/data`.

### Composition Tree

```
App.tsx (root)
│
├── Header
├── Hero
├── StatsStrip
├── BrandMarquee
├── BikeCategories
├── HowItWorks
├── DestinationDiscovery   ← useCarousel
├── ExploreIndia
├── AppShowcase
├── AppDownload
├── HostSection
├── Testimonials           ← useCarousel
├── FAQ
├── Blog
├── Footer
└── WhatsAppButton
```

---

## Data Layer

All site content lives as typed TypeScript modules inside `/src/data/`. The barrel export at `/src/data/index.ts` re-exports everything, so components can use a single import:

```ts
import { BIKE_CATEGORIES, DESTINATIONS, TESTIMONIALS, FAQS } from "@/data";
```

Or import directly from a specific file if preferred:

```ts
import { ROUTES } from "@/data/routes";
```

### Data Files Reference

| File | Export(s) | Contents |
|---|---|---|
| `bikes.ts` | `BIKE_CATEGORIES` | 6 bike categories: id, name, badge, pricePerDay, description, ctaText, imageUrl |
| `destinations.ts` | `DESTINATIONS` | 6 destinations: id, name, tagline, difficulty, distanceKm, durationHrs, bikeTypes[], highlights[], imageUrl |
| `routes.ts` | `ROUTES` | 5 iconic routes: id, name, type, rating, rideCount, imageUrl |
| `testimonials.ts` | `TESTIMONIALS` | 6 reviews: id, name, initials, role, location, rating, review, tag, route, avatarColor |
| `faqs.ts` | `FAQS` | 7 FAQ items: question, answer |
| `blog.ts` | `BLOG_POSTS` | 4 posts: id, category, categoryColor, title, excerpt, author, date, readTime, imageUrl, featured |
| `constants.ts` | `STATS`, `HOW_IT_WORKS_STEPS`, `BRANDS`, `TAG_COLORS`, `LOCATIONS`, `HERO_TRUST_CARDS`, `APP_DOWNLOAD_FEATURES`, `HOST_STATS`, `HOST_STEPS`, `WHATSAPP_PHONE`, `WHATSAPP_MESSAGE` | Platform stats, step guides, brand names, colour mappings, trust signals, app features, host programme data |
| `footer.ts` | `FOOTER_LINKS`, `FOOTER_CONTACT` | Footer nav columns (Company, Explore, Support, For Hosts) and contact info |

---

## Type System

All data shapes are defined as TypeScript interfaces in `/src/types/index.ts`. A representative subset:

```ts
interface BikeCategory {
  id: string;
  name: string;
  badge: string;           // e.g. "Most Popular" | "Best Value" | "Top Rated"
  pricePerDay: number;
  description: string;
  ctaText: string;
  imageUrl: string;
}

interface Destination {
  id: string;
  name: string;
  tagline: string;         // e.g. "Hidden Gem" | "Offbeat Escape" | "Colonial Hill Town"
  difficulty: "Easy" | "Moderate" | "Challenging";
  distanceKm: number;
  durationHrs: number;
  bikeTypes: string[];     // e.g. ["Adventure", "Cruiser"]
  highlights: string[];    // e.g. ["Tiger Falls", "Deoban", "Budher Caves"]
  imageUrl: string;
}

interface Route {
  id: string;
  name: string;
  type: string;            // e.g. "ADVENTURE ROUTE" | "WEEKEND ESCAPE"
  rating: number;
  rideCount: number;
  imageUrl: string;
}

interface Review {
  id: string;
  name: string;
  initials: string;
  role: string;            // e.g. "Adventure Rider" | "Tourist" | "Student" | "Host"
  location: string;
  rating: number;
  review: string;
  tag: string;
  route: string;
  avatarColor: string;     // hex — used for avatar background
}

interface FAQ {
  question: string;
  answer: string;
}

interface BlogPost {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured: boolean;       // true = large featured card, false = side card
}
```

Additional interfaces: `Step`, `Stat`, `Feature`, `HostStat`, `HostStep`, `FooterLinks`, `NavLink`.

---

## Design System & Tokens

All visual constants are codified in `/src/config/theme.ts` and exported as named TypeScript constants. The full token set:

### COLORS

```ts
COLORS: {
  primary: {
    DEFAULT: "#1a3b2e",   // Dark forest green — brand color, CTA backgrounds, header
    light: "...",
    dark: "...",
  },
  accent: {
    DEFAULT: "#e8a12d",   // Warm amber — "Adventure" headline, active states, stars
    light: "...",
  },
  background: {
    light: "...",         // Off-white — page background, card surfaces
    dark: "...",          // Deep moss green — AppShowcase, Footer sections
  },
  text: {
    primary: "...",       // Near-black — headings, body copy
    secondary: "...",     // Medium grey — metadata, secondary labels
    muted: "...",         // Light grey — placeholder text
  },
  semantic: {
    easy: "...",          // Mint green — Easy difficulty badge
    moderate: "...",      // Orange — Moderate difficulty badge
    challenging: "...",   // Red — Challenging difficulty badge
  },
  border: { ... },
  white: "#ffffff",
}
```

### TYPOGRAPHY

```ts
TYPOGRAPHY: {
  fontFamily: {
    display: "...",   // Heavy display face for hero headings
    body: "...",      // Readable body face for copy
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  fontSize: { xs, sm, base, lg, xl, "2xl", "3xl", "4xl", "5xl" },
  lineHeight: { tight, snug, normal, relaxed },
}
```

### SPACING, RADII, SHADOWS, BREAKPOINTS, Z_INDEX

```ts
SPACING:     { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 6: "24px", 8: "32px", ... }
RADII:       { sm: "6px", md: "12px", lg: "16px", xl: "24px", "2xl": "32px", full: "9999px" }
SHADOWS:     { sm, md, lg, xl }
BREAKPOINTS: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }
Z_INDEX:     { base: 0, dropdown: 10, sticky: 20, overlay: 30, modal: 40, toast: 50 }
```

---

## Styling Architecture

**Primary methodology**: Tailwind CSS v4 utility classes, written directly in JSX. Styles are collocated with markup — no per-component CSS files.

**Tailwind v4 integration**: The `@tailwindcss/vite` plugin is used directly inside `vite.config.ts`. This is the Tailwind v4 approach — no separate `tailwind.config.js` is needed, and PostCSS is not required for Tailwind itself (though `postcss.config.mjs` is still present in the project).

**Class composition**: `clsx` + `tailwind-merge` are used together to handle conditional and potentially conflicting Tailwind classes:

```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard pattern from /src/app/components/ui/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Path alias**: `@` resolves to `./src`, configured in `vite.config.ts`. All imports use this alias consistently (`@/data`, `@/types`, `@/config`, `@/utils`).

**Global CSS**: Structured across `/src/styles/`:

| File | Purpose |
|---|---|
| `globals.css` | CSS resets, base element styles |
| `fonts.css` | `@font-face` declarations |
| `tailwind.css` | Tailwind `@import` or `@layer` directives |
| `theme.css` | CSS custom properties (`--color-primary`, etc.) |
| `index.css` | Master entry file that imports the others |

**shadcn/ui theme**: `default_shadcn_theme.css` at the root provides the CSS variable baseline that shadcn/ui components expect (used by the `input.tsx` and `label.tsx` components kept in Phase 3).

---

## Custom Hooks

### `useCarousel` — `/src/utils/hooks/useCarousel.ts`

Wraps Embla Carousel React to provide a clean, minimal interface for both carousel components in the app.

```ts
import { useCarousel } from "@/utils/hooks";

// Inside DestinationDiscovery or Testimonials:
const { emblaRef, prevSlide, nextSlide, currentIndex, slideCount } = useCarousel();
```

**History**: This hook originally lived at `/src/app/components/useCarousel.ts` — tightly coupled to a single component. It was moved to `/src/utils/hooks/` during Phase 2 to make it reusable and was removed from its original location. Any consumer now imports from `@/utils/hooks` or `@/utils`.

---

## Build Configuration

### `vite.config.ts` (verified)

```ts
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Maps "figma:asset/<filename>" imports to src/assets/<filename> at build time.
// This was generated by Figma Make. Review and consider removing in Phase 3
// if no components reference figma:asset/ protocol imports.
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    // Note: Both react() and tailwindcss() are required by Figma Make.
    // Do not remove tailwindcss() even if Tailwind utilities appear unused.
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // SVG and CSV files can be imported as raw asset references.
  // Never add .css, .tsx, or .ts to this list.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

### `package.json` key facts

- **Package name**: `@figma/my-make-file` (Figma Make default — rename when publishing)
- **Type**: `"module"` (ESM throughout)
- **React declared as `peerDependencies`** with `optional: true` (Figma Make pattern)
- **pnpm override**: Vite is overridden to `6.3.5` via `pnpm.overrides` (the installed version is Vite 8.x in devDependencies, but pnpm resolves it to 6.3.5 at runtime)

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** (included with Node.js) or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhay-Chand/Wavygo.git
cd Wavygo

# Install dependencies
npm install

# Or with pnpm (a workspace config is included):
pnpm install
```

### Development Server

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173` (port may vary if occupied — check terminal output). Hot Module Replacement is enabled — changes to any `.tsx`, data file, or stylesheet reflect instantly in the browser.

### Production Build

```bash
npm run build
```

Output is written to `/dist`. To preview the built output locally:

```bash
npx vite preview
```

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Compile for production to `/dist` |

No `lint`, `test`, or `typecheck` scripts are defined yet. Adding these is a Phase 5 item.

---

## Engineering Decisions

### Why no React Router?

WavyGo is currently a single-page marketing experience. Every section lives on one scroll canvas and there is no navigational state to manage. Adding a router adds bundle weight and architectural complexity without any user-facing benefit at this stage. `react-router` is installed (as an unused Figma Make dependency) but is being removed in Phase 3. When the product grows to require search result pages, destination detail pages, or a user dashboard, it can be introduced without changing the data or component layers.

### Why extract a separate data layer?

Figma Make exports with all content hardcoded inside JSX — a pragmatic shortcut that becomes painful the moment a price changes or a destination is added. By moving all content to `/src/data/`, the rule becomes: content editors edit data files, engineers edit components. A TypeScript interface enforces the correct shape at every boundary.

This also makes API integration trivial. Today:
```ts
import { DESTINATIONS } from "@/data/destinations";
```
Tomorrow, with an API:
```ts
const DESTINATIONS = await fetchDestinations(); // same shape, same component, zero refactor
```

### Why Tailwind v4 + the Vite plugin?

Tailwind CSS v4 ships with native Vite integration (`@tailwindcss/vite`) that eliminates a separate PostCSS configuration step for Tailwind. The project was initialised this way by Figma Make, and there was no reason to change it. The plugin handles CSS generation and HMR automatically.

### Why `clsx` + `tailwind-merge` instead of just one?

`clsx` handles conditional class logic cleanly — it accepts objects, arrays, and falsy values. But it cannot resolve Tailwind class conflicts: if you pass both `p-2` and `p-4`, `clsx` keeps both and the last one wins based on CSS specificity (which is non-deterministic with Tailwind). `tailwind-merge` intelligently resolves those conflicts. Using both together is the accepted pattern for Tailwind component libraries.

### Why Embla Carousel instead of a pre-built slider?

Embla Carousel is a headless engine. It provides scroll physics and touch behaviour without imposing any UI decisions. The `useCarousel` hook wraps it to expose only `emblaRef`, `prevSlide`, `nextSlide`, `currentIndex`, and `slideCount` — giving components exactly what they need with no carousel library markup leaking into the JSX.

### Why codify a design token system if Tailwind already has a config?

Tailwind CSS v4 moves toward CSS-first configuration, and Figma Make does not emit a `tailwind.config.js`. The token system in `/src/config/theme.ts` serves a different purpose: it provides named, typed constants that can be imported into TypeScript (for inline styles, dynamic class names, or non-CSS contexts). It also documents the visual language in a readable, searchable format without requiring anyone to parse a config file.

---

## Refactoring Phases

The project originated as a Figma Make export and is being refactored in five phases:

| Phase | Status | What Was Done |
|---|---|---|
| **Phase 1**: Analysis | ✅ Complete | Identified 13+ unused dependencies, 46+ unused UI components, hardcoded data across all 17 components, wrong location for `useCarousel` |
| **Phase 2**: Code Organisation | ✅ Complete | Created `/src/data/` (9 files), `/src/types/`, `/src/config/`, `/src/utils/hooks/`; updated all 17 components; deleted old `useCarousel.ts` from legacy location |
| **Phase 3**: Cleanup | ⏳ Pending | Delete 42 unused UI components, remove ~20 unused npm packages, review `figmaAssetResolver`, clean `pnpm-workspace.yaml`, add `.gitignore` |
| **Phase 4**: Build & Test | ⏳ Pending | Clean install, `npm run build` validation, full visual test checklist across all 17 sections |
| **Phase 5**: Documentation | ⏳ In Progress | README (this file), `ARCHITECTURE.md`, `DATA_STRUCTURE.md`, `DESIGN_TOKENS.md`, `DEPLOYMENT.md` |

### Phase 2 — Detailed Component Update Log

| Component | Data Source(s) Connected |
|---|---|
| `BrandMarquee` | `BRANDS` |
| `StatsStrip` | `STATS` |
| `BikeCategories` | `BIKE_CATEGORIES` |
| `HowItWorks` | `HOW_IT_WORKS_STEPS` |
| `DestinationDiscovery` | `DESTINATIONS` + `useCarousel` |
| `ExploreIndia` | `ROUTES` + `TAG_COLORS` |
| `Hero` | `LOCATIONS` + `HERO_TRUST_CARDS` |
| `FAQ` | `FAQS` |
| `Blog` | `BLOG_POSTS` + category color mappings |
| `Testimonials` | `TESTIMONIALS` + `useCarousel` |
| `AppDownload` | `APP_DOWNLOAD_FEATURES` |
| `HostSection` | `HOST_STATS` + `HOST_STEPS` |
| `Footer` | `FOOTER_LINKS` + `FOOTER_CONTACT` |
| `WhatsAppButton` | `WHATSAPP_PHONE` + `WHATSAPP_MESSAGE` |
| `Header` | No data extraction needed |
| `App.tsx` | No changes needed |
| `AppShowcase` | No data extraction (contains static app mockup) |

---

## Adding New Content

### Add a Destination

Edit `/src/data/destinations.ts`:

```ts
import type { Destination } from "@/types";

export const DESTINATIONS: Destination[] = [
  // ... existing entries ...
  {
    id: "auli",
    name: "Auli",
    tagline: "Snow Paradise",
    difficulty: "Challenging",
    distanceKm: 250,
    durationHrs: 7,
    bikeTypes: ["Adventure", "Cruiser"],
    highlights: ["Gorson Bugyal", "Nanda Devi View", "Cable Car"],
    imageUrl: "https://unsplash.com/...",
  }
];
```

`DestinationDiscovery` automatically renders the new card. No component changes needed.

### Add a Testimonial

Edit `/src/data/testimonials.ts`:

```ts
{
  id: "review-7",
  name: "Priya Singh",
  initials: "PS",
  role: "Tourist",
  location: "Bangalore",
  rating: 5,
  review: "Rented a scooter for Rishikesh — best decision of the trip.",
  tag: "Tourist",
  route: "Rishikesh exploration",
  avatarColor: "#7C3AED",
}
```

### Update a Bike Price

Edit `/src/data/bikes.ts` — change the `pricePerDay` field for the relevant entry. The `BikeCategories` component reads directly from this data.

### Change a Design Token

Edit `/src/config/theme.ts`. The change propagates to every component that imports from `@/config`. No component-level edits needed.

---

## Phase 3 Cleanup Guide

For maintainers working through Phase 3, the following is a summary of actions required. See `PHASE_3_4_CHECKLIST.md` for the full checklist.

### Remove Unused npm Packages

```bash
npm uninstall \
  @mui/material @mui/icons-material \
  @popperjs/core react-popper \
  canvas-confetti cmdk input-otp \
  react-day-picker \
  react-dnd react-dnd-html5-backend \
  react-hook-form \
  react-resizable-panels react-responsive-masonry \
  react-router react-slick \
  recharts tw-animate-css \
  vaul motion next-themes
```

### Delete Unused UI Components

Delete everything in `/src/app/components/ui/` **except**:
- `input.tsx` — used in Hero booking form
- `label.tsx` — used in Hero booking form
- `utils.ts` — provides the `cn()` utility function
- `use-mobile.ts` — responsive breakpoint hook

### Add `.gitignore`

At minimum, add:

```
node_modules/
dist/
```

### Review `pnpm-workspace.yaml`

This is a single-application repo, not a monorepo. The workspace config may not be needed unless pnpm is being used specifically for the `pnpm.overrides` feature (which pins Vite to 6.3.5). Evaluate before removing.

---

## Attributions

- UI components sourced from [shadcn/ui](https://ui.shadcn.com/) — [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Photography from [Unsplash](https://unsplash.com) — [Unsplash License](https://unsplash.com/license)
- Original design exported from [Figma Make](https://www.figma.com/design/f13GAW0wP04Ju0Y2CKsEh6/Wavygo-website)

---

## Roadmap

**Near-term (Phase 3–5)**
- [ ] Delete 42 unused UI components from `/src/app/components/ui/`
- [ ] Remove ~20 unused npm packages (estimated 30–40% bundle size reduction)
- [ ] Add `.gitignore` (exclude `node_modules/` and `dist/`)
- [ ] Validate `npm run build` with zero errors post-cleanup
- [ ] Complete visual test checklist across all 17 sections
- [ ] Create `ARCHITECTURE.md`, `DATA_STRUCTURE.md`, `DESIGN_TOKENS.md`, `DEPLOYMENT.md`
- [ ] Add ESLint + Prettier configuration
- [ ] Rename package from `@figma/my-make-file` to `wavygo-website`

**Medium-term**
- [ ] Integrate a real bike availability API — replace data imports with API calls
- [ ] Add React Router for multi-page experience (search results, destination detail pages)
- [ ] Implement the booking flow (date selection, KYC, payment integration)
- [ ] Add i18n support (Hindi / regional languages)
- [ ] Add `tsconfig.json` and enforce `strict` mode

**Longer-term**
- [ ] User authentication and rider dashboard
- [ ] Host dashboard (earnings calendar, renter profiles, payout management)
- [ ] Real-time bike availability map
- [ ] Push notification support via service worker

---

## Contributing

Contributions are welcome. Please follow these conventions:

1. Fork the repository and create a feature branch: `git checkout -b feature/your-feature`
2. **Content changes** (new destinations, updated prices, new testimonials): edit files in `/src/data/` only — no component changes should be necessary
3. **Component changes**: keep components purely presentational; all content must come from `@/data`, never hardcoded
4. **New data types**: add the TypeScript interface to `/src/types/index.ts` first, then create the data file
5. Run `npm run dev` and visually verify all affected sections before opening a PR
6. Run `npm run build` and confirm zero errors
7. Open a pull request with a clear description of what changed and why

### Import Conventions

```ts
// All imports use the @ alias — no relative imports from components
import { BIKE_CATEGORIES, DESTINATIONS } from "@/data";
import { ROUTES } from "@/data/routes";               // direct import also fine
import type { BikeCategory, Destination } from "@/types";
import { COLORS, TYPOGRAPHY } from "@/config";
import { useCarousel } from "@/utils/hooks";
```

---

## Author

**Abhay Chand**

- GitHub: [@Abhay-Chand](https://github.com/Abhay-Chand)
- Repository: [github.com/Abhay-Chand/Wavygo](https://github.com/Abhay-Chand/Wavygo)

---

<div align="center">

Built with React 18 · TypeScript · Tailwind CSS 4 · Vite · Embla Carousel · Lucide React

Designed in Figma · Exported with Figma Make · Refactored by hand

© 2026 WavyGo · Pithoragarh, Uttarakhand, India

</div>
