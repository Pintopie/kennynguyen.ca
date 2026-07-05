# Portfolio Redesign Design

Date: 2026-07-05
Project: Kenny Nguyen portfolio

## Goal

Redesign the portfolio with the newly installed Astryx design core while keeping the site personal, creative, and readable. The approved direction is a hybrid:

- Asymmetric Canvas as the main layout foundation
- Timeline Rail for experience and education
- A small Constellation Map motif in the hero

The result should feel more designed than a standard developer portfolio, but it should still make Kenny's work, roles, education, and contact paths easy to scan.

## Visual Direction

The site should use an asymmetric editorial layout rather than a centered stack of sections. The hero opens with a large, confident introduction on the left and an offset status panel on the right. Below the hero, section widths vary on purpose: some regions use a two-column split, some use compact rows, and some use narrow side labels.

The creative motif is a quiet systems map. It should appear in the hero as a small connected diagram linking Kenny's working areas: interface, backend, AI workflows, and deployment. The map is a visual signature, not the main navigation model.

The experience and education sections should use a vertical timeline rail. Each role or school is a milestone with dates, organization metadata, concise evidence, and technology tokens.

## Tone And Copy

Preserve Kenny's existing facts. Do not add new claims, extra metrics, or inflated wording.

Use a direct first-person voice where needed. Keep copy short and concrete. Avoid generic portfolio language such as "passionate developer", "innovative solutions", or broad claims that are not already supported by the current content.

Recommended hero copy:

> Kenny Nguyen builds useful software from the first screen to the last API call.

Supporting copy should keep the current positioning:

> Information Science student at the University of Toronto with experience across product interfaces, backend APIs, deployments, and applied AI workflows.

## Astryx Component Strategy

Global setup must import Astryx CSS once from the app root:

```ts
import "@astryxdesign/core/reset.css";
import "@astryxdesign/core/astryx.css";
```

Use Astryx components for structure and interaction:

- `AppShell` with `height="auto"` and a top navigation frame
- `TopNav`, `TopNavHeading`, and `TopNavItem` for primary navigation
- `Section` for page regions
- `Grid`, `VStack`, `HStack`, and `StackItem` for layout
- `Card` only for summary widgets or the compact hero status panel
- `Item` for scannable project, role, education, and contact rows
- `Button` and `IconButton` for calls to action and theme controls
- `Text`, `Heading`, `Token`, `StatusDot`, `Divider`, and `Avatar` for content primitives

Custom CSS should be limited to the signature layout motif: asymmetric region sizing, the constellation lines, the timeline rail, and responsive refinements. Use Astryx tokens and Tailwind token utilities where possible. Avoid raw hex values in production styles unless they are part of a clearly named local theme token.

## Page Structure

1. Top navigation
   - Brand: `KN` or `Kenny Nguyen`
   - Links: About, Work, Experience, Contact
   - End actions: Resume, theme toggle

2. Hero
   - Large asymmetric intro
   - Status panel with location, current school, focus areas, and availability
   - Primary actions: View work, View resume, LinkedIn or GitHub
   - Small constellation map showing interface, backend, AI workflows, and deployment

3. About and focus
   - Keep current about facts
   - Present three contribution areas: product interfaces, backend systems, AI and data workflows
   - Use compact cards or grouped Items, not large decorative cards

4. Selected work
   - Use strong project rows with index markers
   - Each row includes title, description, two or three evidence bullets, links, and technology tokens
   - Featured projects can use a wider row, but all projects remain scannable

5. Experience and education timeline
   - Use one rail that groups work and school chronology
   - Each milestone includes logo, role or degree, organization, dates, location, evidence, and tokens
   - Include the IMI Big Data and AI Hub competition under University of Toronto as supporting context

6. Contact
   - Short closing line
   - Email, resume, LinkedIn, and GitHub actions
   - Keep it direct and practical

## Responsive Contract

Desktop, above 1024px:

- TopNav stays visible
- Hero uses two columns with an offset status panel
- Work rows can use asymmetric two-column layouts
- Timeline rail sits beside milestone content

Tablet, 768px to 1024px:

- Hero remains two columns only if text stays readable
- Status panel can move under the hero copy
- Work rows collapse to a main column with metadata below

Mobile, below 768px:

- Navigation reduces to the essential actions
- Hero becomes one column
- Constellation map becomes a compact horizontal or stacked diagram
- Timeline rail becomes a left accent line or date label, not a cramped full rail
- All text wraps without clipping

## Files To Change

Expected production files:

- `src/app/layout.tsx` for Astryx CSS imports
- `src/app/globals.css` for token-aware global styles and the custom layout motif
- `src/app/page.tsx` for page composition
- `src/shared/layout/NavBar.tsx` for Astryx TopNav
- `src/shared/layout/Footer.tsx` for Astryx layout primitives
- `src/features/portfolio/components/*` for the redesigned sections
- `src/constants.ts` only if content needs small structural additions

The existing data boundaries in `src/constants.ts` should remain the source of truth for projects, experience, education, and hackathon content.

## Testing And Verification

Run these checks after implementation:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Also run a local visual check in the browser at desktop and mobile widths. Confirm:

- Astryx styles load
- Top navigation works
- Theme toggle still works
- Resume, email, LinkedIn, GitHub, company, and project links work
- Layout does not overlap or clip on mobile
- Reduced-motion preference is respected

## Out Of Scope

- New case study pages
- New project claims or rewritten resume facts
- Interactive filtering
- Heavy animation
- A full custom Astryx theme generated by `npx astryx theme`
