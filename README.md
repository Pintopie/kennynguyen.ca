# Kenny Nguyen Portfolio

Modern, animated personal site built with Next.js 15, React 19, and Tailwind CSS v4. The experience highlights projects, work history, education, and tools with motion-first UI and a keyboard-driven command palette.

Primary domain: https://kennynguyen.ca

## What’s Inside
- Animated hero with rotating roles, current date badge, and metric cards fed by [src/constants.ts](src/constants.ts)
- Resume preview modal and downloadable PDF from [public/resumes/resume.pdf](public/resumes/resume.pdf)
- Command palette (Cmd/Ctrl+K) with navigation, theme toggle, and quick links; uses [src/features/portfolio/components/CommandMenu.tsx](src/features/portfolio/components/CommandMenu.tsx)
- Light/dark theme persisted in localStorage via [src/shared/hooks/useTheme.ts](src/shared/hooks/useTheme.ts)
- Aurora canvas background reacting to theme in [src/shared/layout/AuroraBackground.tsx](src/shared/layout/AuroraBackground.tsx)
- Section lineup: About, Skills, Work Experience, Education, Projects, Hackathons, Tools, GitHub contribution chart, contact shortcuts
- Framer Motion and AOS for staggered scroll-reveals; shared motion variants live in [src/constants.ts](src/constants.ts)
- Data-driven content for jobs, projects, hackathons, skills, and tooling editable in one place

## Stack
- Next.js 15 (App Router) and React 19 with TypeScript
- Tailwind CSS v4 for theming and utility styling ([src/app/globals.css](src/app/globals.css))
- Framer Motion 12 for interaction and enter/exit animations; AOS for progressive scroll effects
- Keyboard shortcuts with react-hotkeys-hook; iconography from Lucide and react-icons
- Cloudflare Workers hosting via @opennextjs/cloudflare and Wrangler; fonts from Geist and Outfit

## Project Structure
- [src/app/layout.tsx](src/app/layout.tsx) – global fonts, metadata, and initial loading screen
- [src/app/page.tsx](src/app/page.tsx) – page assembly and section ordering
- [src/features/portfolio/components](src/features/portfolio/components) – section components (Hero, About, Skills, Experience, Hackathons, Projects, Tooling, ContactChart, ResumePreview, CommandMenu)
- [src/shared/layout](src/shared/layout) – NavBar, AuroraBackground, Footer
- [src/shared/ui](src/shared/ui) – AnimatedCard, ScrollReveal helpers
- [src/shared/hooks/useTheme.ts](src/shared/hooks/useTheme.ts) – theme persistence
- [public/](public/) – logos, resumes, and images

## Run Locally
Prerequisites: Node.js 18+ and npm.

1) Install dependencies
```bash
npm install
```
2) Start dev server
```bash
npm run dev
```
Open http://localhost:3000.

## Scripts
- npm run dev — start Next.js dev server
- npm run build — production build
- npm run start — serve the built app
- npm run lint — run ESLint
- npm run build:worker — compile for Cloudflare (OpenNext)
- npm run preview — build then preview on Cloudflare
- npm run deploy — build then deploy via Wrangler
- npm run upload — build then upload assets via Wrangler
- npm run cf-typegen — generate Cloudflare env types to cloudflare-env.d.ts

## Content Editing
- Copy and data live in [src/constants.ts](src/constants.ts): nav links, skills, projects, experience, education, hackathons, and tooling.
- Replace the resume at [public/resumes/resume.pdf](public/resumes/resume.pdf) to update the modal/download.
- Avatar and logos live under [public/logos](public/logos).

## Styling and Motion
- Theme tokens and radii are defined in [src/app/globals.css](src/app/globals.css). Dark mode is applied by toggling the html.dark class.
- Shared motion variants (container/item/card) are exported from [src/constants.ts](src/constants.ts) and reused by AnimatedCard and ScrollReveal.

## Deployment (Cloudflare Workers)
- OpenNext config: [open-next.config.ts](open-next.config.ts)
- Worker entrypoint and routing: [wrangler.jsonc](wrangler.jsonc)
- Build and preview locally: `npm run preview`
- Deploy to configured custom domains (kennynguyen.ca, www.kennynguyen.ca): `npm run deploy`

## Notes and Constraints
- No runtime env vars required for the current UI; all data is static.
- Three.js packages are available for future 3D sections but not currently rendered.

Last updated: January 2026
