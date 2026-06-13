# WavyGo Project - Phase 3 & 4 Execution Checklist

## ✓ COMPLETED (Phase 2)
- [x] Extracted all data to `/src/data/`
- [x] Created TypeScript types in `/src/types/`
- [x] Created design token system in `/src/config/`
- [x] Created utility hooks in `/src/utils/hooks/`
- [x] Updated 17 components with new imports
- [x] Created barrel export files
- [x] Deleted old useCarousel.ts

---

## Phase 3: CLEANUP & OPTIMIZATION (NEXT)

### 3.1 Remove Unused UI Components ⚠️ REVIEW REQUIRED
The `/src/app/components/ui/` folder contains 50+ shadcn/Radix UI components.
**Status**: Most appear unused in current components
**Action Required**: Review each component before deletion

**Components to potentially delete**:
- accordion.tsx (not used - FAQ uses custom)
- alert-dialog.tsx (not used)
- alert.tsx (not used)
- aspect-ratio.tsx (not used)
- avatar.tsx (not used - but check Testimonials)
- badge.tsx (not used)
- breadcrumb.tsx (not used)
- calendar.tsx (not used)
- carousel.tsx (not used - using custom useCarousel)
- chart.tsx (not used - recharts being removed)
- checkbox.tsx (not used)
- collapsible.tsx (not used)
- command.tsx (not used)
- context-menu.tsx (not used)
- dialog.tsx (not used)
- drawer.tsx (not used)
- dropdown-menu.tsx (not used)
- form.tsx (not used - react-hook-form being removed)
- hover-card.tsx (not used)
- input-otp.tsx (not used)
- input.tsx (used in Hero form - **KEEP**)
- label.tsx (used in Hero form - **KEEP**)
- menubar.tsx (not used)
- navigation-menu.tsx (not used)
- pagination.tsx (not used)
- popover.tsx (not used)
- progress.tsx (not used)
- radio-group.tsx (not used)
- resizable.tsx (not used)
- scroll-area.tsx (not used)
- select.tsx (not used)
- separator.tsx (not used)
- sheet.tsx (not used - but check for mobile menu)
- sidebar.tsx (not used)
- skeleton.tsx (not used)
- slider.tsx (not used)
- sonner.tsx (not used - but can keep for future)
- switch.tsx (not used)
- table.tsx (not used)
- tabs.tsx (not used)
- textarea.tsx (not used)
- toggle-group.tsx (not used)
- toggle.tsx (not used)
- tooltip.tsx (not used)
- use-mobile.ts (utility - **KEEP**)
- utils.ts (utility - **KEEP**)

**Recommendation**: Delete all except `input.tsx`, `label.tsx`, `use-mobile.ts`, `utils.ts`

### 3.2 Review figma/ folder
Location: `/src/app/components/figma/`
**Contents**: ImageWithFallback.tsx
**Status**: Check if this is actually used in components

### 3.3 Remove Unused Dependencies
**Current unused packages**:
```
@mui/material
@mui/icons-material
@popperjs/core
react-popper
canvas-confetti
cmdk
input-otp
react-day-picker
react-dnd
react-dnd-html5-backend
react-hook-form
react-resizable-panels
react-responsive-masonry
react-router
react-slick
recharts
tw-animate-css
vaul
motion
next-themes
```

**Command to remove** (all at once):
```bash
npm uninstall @mui/material @mui/icons-material @popperjs/core react-popper canvas-confetti cmdk input-otp react-day-picker react-dnd react-dnd-html5-backend react-hook-form react-resizable-panels react-responsive-masonry react-router react-slick recharts tw-animate-css vaul motion next-themes
```

**Packages to keep**:
- lucide-react (icons)
- @radix-ui/react-slot (dependency)
- embla-carousel-react (carousel)
- clsx, tailwind-merge (utilities)
- class-variance-authority (component utilities)
- date-fns (date formatting)
- sonner (optional - nice to have)

### 3.4 Clean Root Config Files
- [ ] Review `vite.config.ts` - remove/fix figmaAssetResolver
- [ ] Review `pnpm-workspace.yaml` - seems like monorepo config (this is single app)
- [ ] Check if postcss.config.mjs is needed (for Tailwind)

---

## Phase 4: BUILD & TEST

### 4.1 Verify Installation
```bash
# First: Do a clean install
rm -Force node_modules (PowerShell)
npm install
```

### 4.2 Run Build Check
```bash
npm run build
```
**Expected**: Zero errors, zero warnings if possible

### 4.3 Start Dev Server
```bash
npm run dev
```
**Expected**: Server starts at http://localhost:5173 (or similar)

### 4.4 Visual Testing Checklist
- [ ] Page loads without errors (check console)
- [ ] Header renders correctly
- [ ] Hero section displays booking form
- [ ] All text is readable (fonts loaded correctly)
- [ ] All images load (Unsplash URLs working)
- [ ] BrandMarquee carousel scrolls smoothly
- [ ] BikeCategories displays 6 bikes with pricing
- [ ] DestinationDiscovery carousel works with prev/next buttons
- [ ] ExploreIndia route cards display with difficulty tags
- [ ] HowItWorks steps display (1-4)
- [ ] StatsStrip numbers render correctly
- [ ] FAQ accordion opens/closes
- [ ] Blog cards display 4 posts
- [ ] Testimonials carousel works
- [ ] AppShowcase shows app screens
- [ ] AppDownload features list displays
- [ ] HostSection shows host benefits
- [ ] Footer contains links and contact info
- [ ] WhatsApp button appears in bottom right
- [ ] Mobile menu works (if implemented)
- [ ] Scroll animations trigger on scroll
- [ ] Responsive layout works on different screen sizes

### 4.5 Console Check
- [ ] No import errors
- [ ] No TypeScript errors
- [ ] No undefined variables warnings
- [ ] No network errors (Unsplash images)

### 4.6 Performance Check
- [ ] Page loads in < 3 seconds
- [ ] Carousels scroll smoothly (60 FPS)
- [ ] No layout shifts (CLS)
- [ ] Interactions responsive (no lag)

---

## Phase 5: DOCUMENTATION

### 5.1 Update README.md
Include:
- Quick start (npm install, npm run dev)
- Project structure overview
- How to add new destinations/routes/testimonials
- How to update design tokens
- Build and deployment

### 5.2 Create docs/ARCHITECTURE.md
Include:
- Data flow diagram (components → data layer)
- Design decision justification
- Component dependency graph
- How to extend the app (adding new sections)

### 5.3 Create docs/DATA_STRUCTURE.md
Include:
- Explanation of each data file
- Type definitions for each data structure
- How to add new items to each collection
- Future API integration guide

### 5.4 Create docs/DESIGN_TOKENS.md
Include:
- Color palette with hex codes
- Typography scale
- Spacing system
- Border radii
- Shadow definitions
- How to customize theme

---

## Success Criteria

### Build Phase
- ✓ `npm install` completes successfully
- ✓ `npm run build` produces zero errors
- ✓ `npm run dev` starts without warnings

### Functionality Phase
- ✓ All 17 components render without errors
- ✓ All data imports resolve correctly
- ✓ No console errors about missing imports
- ✓ All images load from Unsplash

### Optimization Phase
- ✓ Bundle size reduced by 30%+ (from removing dependencies)
- ✓ Build time faster (fewer dependencies)
- ✓ Page load time consistent with original

### Documentation Phase
- ✓ README is clear and up-to-date
- ✓ Architecture doc explains decisions
- ✓ Data structure guide is complete

---

## Rollback Plan

If something breaks:
1. Check git diff to see what changed
2. Verify all imports use correct paths (@/data, @/types, @/config, @/utils)
3. Check console for specific errors
4. Review component props match data type definitions

**Key import patterns**:
```typescript
// Data imports
import { BIKE_CATEGORIES } from "@/data";
import { DESTINATIONS } from "@/data/destinations";

// Type imports
import type { BikeCategory, Destination } from "@/types";

// Config imports
import { COLORS, TYPOGRAPHY } from "@/config";

// Hook imports
import { useCarousel } from "@/utils/hooks";
import { useCarousel } from "@/utils";
```

---

## Estimated Timeline

- Phase 3 (Cleanup): 30 mins (delete UI components, remove dependencies)
- Phase 4 (Testing): 45 mins (install, build, test, verify)
- Phase 5 (Documentation): 60 mins (create guides)

**Total**: ~2 hours to complete all phases

---

## Files Modified Summary

### Created (12 new files)
1. `/src/data/index.ts` ✓
2. `/src/data/bikes.ts` ✓
3. `/src/data/destinations.ts` ✓
4. `/src/data/routes.ts` ✓
5. `/src/data/testimonials.ts` ✓
6. `/src/data/faqs.ts` ✓
7. `/src/data/blog.ts` ✓
8. `/src/data/constants.ts` ✓
9. `/src/data/footer.ts` ✓
10. `/src/types/index.ts` ✓
11. `/src/config/theme.ts` ✓
12. `/src/config/index.ts` ✓
13. `/src/utils/hooks/useCarousel.ts` ✓
14. `/src/utils/hooks/index.ts` ✓
15. `/src/utils/index.ts` ✓
16. `MIGRATION_PLAN.md` ✓

### Updated (17 components)
All import statements updated to use new paths

### Deleted
1. `/src/app/components/useCarousel.ts` ✓

### To Delete (Phase 3)
1. `/src/app/components/ui/` - 46 unused UI components
2. `/src/app/components/figma/` - potentially unused

---

**Current Status**: ✅ Phase 2 COMPLETE | ⏳ Ready for Phase 3-5

Generated: Phase 2 Completion Report
