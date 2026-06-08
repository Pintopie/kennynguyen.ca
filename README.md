# Kenny Nguyen Portfolio

Personal portfolio
Live site: [kennynguyen.ca](https://kennynguyen.ca)

## Overview

The site presents my professional story through:

- A focused hero with profile links
- About and education sections
- Selected projects with engineering outcomes
- Full-stack, interface, and AI capability areas
- Professional experience and company links
- Resume, email, LinkedIn, and GitHub access
- Persistent light and dark themes

The interface intentionally uses restrained motion and a static blue/violet
visual theme. Most hierarchy comes from typography, spacing, and content rather
than decorative effects.

## Technology

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- GSAP for hero interactions
- Lucide React icons
- OpenNext and Wrangler for Cloudflare deployment

## Project Structure

```text
src/
  app/
    globals.css          Global theme and layout system
    layout.tsx           Fonts and site metadata
    page.tsx             Portfolio section composition
  features/portfolio/
    components/          Hero, About, Education, Projects, Skills,
                         Experience, and Contact sections
  shared/
    hooks/useTheme.ts    Persistent light/dark theme
    layout/              Navigation and footer
  constants.ts           Projects, experience, education, and competition data
public/
  logos/                 Company and school marks
  resume/Resume.pdf      Public resume
```

## Local Development

Requires Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Start the Next.js development server
npm run lint         # Run ESLint against src/
npm run build        # Create a production Next.js build
npm run start        # Serve the production build
npm run build:worker # Build for Cloudflare with OpenNext
npm run preview      # Build and preview the Cloudflare worker
npm run deploy       # Build and deploy to Cloudflare
npm run upload       # Build and upload the worker
npm run cf-typegen   # Generate Cloudflare environment types
```

## Updating Content

- Edit projects, work history, education, and competition data in
  [`src/constants.ts`](src/constants.ts).
- Edit section copy and structure in
  [`src/features/portfolio/components`](src/features/portfolio/components).
- Replace [`public/resume/Resume.pdf`](public/resume/Resume.pdf) to update the
  resume link.
- Add or replace organization images under [`public/logos`](public/logos).
- Update theme tokens and responsive layout rules in
  [`src/app/globals.css`](src/app/globals.css).

## Quality Checks

Run these before deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The interface targets WCAG 2.2 AA with keyboard focus states, reduced-motion
support, responsive layouts, semantic headings, and accessible link labels.

## Cloudflare Deployment

Cloudflare configuration lives in:

- [`open-next.config.ts`](open-next.config.ts)
- [`wrangler.jsonc`](wrangler.jsonc)
- [`public/_headers`](public/_headers)

Preview locally with `npm run preview`, then deploy with `npm run deploy`.
