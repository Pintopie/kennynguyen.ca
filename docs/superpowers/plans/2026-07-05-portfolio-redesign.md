# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio around Astryx core components with an asymmetric creative layout, a small hero constellation motif, and a timeline rail for experience and education.

**Architecture:** Keep the existing Next App Router page and current content constants. Replace the custom section markup with Astryx layout primitives, then keep a small amount of custom CSS for the signature spatial layout and responsive behavior.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Astryx core, lucide-react.

---

## File Structure

- Modify `src/app/layout.tsx` to load Astryx reset and component CSS once.
- Replace `src/app/page.tsx` with the new `AppShell` composition.
- Replace `src/shared/layout/NavBar.tsx` with an Astryx `TopNav`.
- Replace `src/shared/layout/Footer.tsx` with Astryx text and stack primitives.
- Replace portfolio section components in `src/features/portfolio/components/`.
- Replace `src/app/globals.css` with token-aware base styles and motif CSS.
- Keep `src/constants.ts` as the data source.

## Tasks

### Task 1: Load Astryx CSS

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] Add these imports before the app global stylesheet:

```ts
import "@astryxdesign/core/reset.css";
import "@astryxdesign/core/astryx.css";
```

- [ ] Run `npx tsc --noEmit`.

Expected: TypeScript starts checking with Astryx CSS import paths resolved.

### Task 2: Replace The Page Frame

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/shared/layout/NavBar.tsx`
- Modify: `src/shared/layout/Footer.tsx`

- [ ] Wrap the page in `AppShell height="auto"` with `topNav={<NavBar ... />}`.
- [ ] Keep `useThemePreference` at the page level.
- [ ] Use the section order: hero, about, projects, timeline, contact.
- [ ] Replace `NavBar` internals with `TopNav`, `TopNavHeading`, `TopNavItem`, and `IconButton`.
- [ ] Keep the theme toggle behavior and all current hrefs.
- [ ] Run `npx tsc --noEmit`.

Expected: the page compiles with the new shell and navigation.

### Task 3: Build The Asymmetric Hero

**Files:**
- Modify: `src/features/portfolio/components/Hero.tsx`

- [ ] Remove GSAP animation code from the hero.
- [ ] Build the hero with `Section`, `Grid`, `VStack`, `HStack`, `Card`, `Heading`, `Text`, `Token`, `StatusDot`, and `Avatar`.
- [ ] Add a non-interactive constellation motif with four nodes: Interface, Backend, AI workflows, Deployment.
- [ ] Keep these outbound links: LinkedIn and GitHub.
- [ ] Keep the resume action pointing to `/resume/Resume.pdf`.
- [ ] Run `npx tsc --noEmit`.

Expected: the hero compiles and no GSAP code remains in `Hero.tsx`.

### Task 4: Rebuild About, Skills, And Projects

**Files:**
- Modify: `src/features/portfolio/components/About.tsx`
- Modify: `src/features/portfolio/components/Skills.tsx`
- Modify: `src/features/portfolio/components/Projects.tsx`

- [ ] Keep About copy grounded in the existing text.
- [ ] Use `Skills` as the focus section with three contribution areas.
- [ ] Use project rows with `Item`, `Token`, and link actions.
- [ ] Show project evidence as concise bullets.
- [ ] Run `npx tsc --noEmit`.

Expected: About, focus areas, and selected work compile with Astryx components.

### Task 5: Combine Experience And Education Into A Timeline

**Files:**
- Modify: `src/features/portfolio/components/Experience.tsx`
- Modify: `src/app/page.tsx`

- [ ] Export one timeline component from `Experience.tsx`.
- [ ] Include `EXPERIENCE`, `EDUCATION`, and the IMI competition from `HACKATHONS`.
- [ ] Use a single rail motif with milestone rows.
- [ ] Keep logo, dates, location, highlights, links, and tokens.
- [ ] Remove the separate `Education` import from `page.tsx`.
- [ ] Run `npx tsc --noEmit`.

Expected: one timeline section replaces separate experience and education sections.

### Task 6: Rebuild Contact And Global Styles

**Files:**
- Modify: `src/features/portfolio/components/ContactChart.tsx`
- Modify: `src/app/globals.css`

- [ ] Replace contact markup with Astryx components and direct actions.
- [ ] Define custom CSS only for the asymmetric canvas, constellation motif, timeline rail, responsive layout, and reduced motion.
- [ ] Remove old portfolio classes that are no longer used.
- [ ] Run `npm run lint`.
- [ ] Run `npx tsc --noEmit`.

Expected: lint and TypeScript pass after the markup and style rewrite.

### Task 7: Final Build Verification

**Files:**
- No new source files.

- [ ] Run `npm run build`.
- [ ] Start the local dev server if needed for visual inspection.
- [ ] Check desktop and mobile widths for clipping, nav usability, theme toggle behavior, and link targets.
- [ ] Commit the implementation changes separately from the spec commit.

Expected: production build completes and the redesigned portfolio is usable at desktop and mobile widths.
