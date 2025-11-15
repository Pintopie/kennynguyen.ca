# Kenny Nguyen's Portfolio

A modern, animated, and fully accessible personal portfolio website showcasing projects, skills, and professional experience. Built with Next.js, TypeScript, and Framer Motion for smooth, delightful interactions.

**Live Demo**: [https://kennyngdev.vercel.app](https://kennyngdev.vercel.app)

## ✨ Features

### 🎬 **Smooth Animations & Interactions**
- **Framer Motion** integration with scroll-triggered reveals and staggered animations
- **Interactive cards** with hover/tap effects, spring physics, and elevation changes
- **Floating background elements** with continuous parallax motion
- **Modal animations** for resume preview and command palette with smooth entrance/exit
- **Syntax-highlighted code snippets** with atom-one-dark theme for About section
- Fully **respects `prefers-reduced-motion`** for accessibility

### 🎨 **Modern Design**
- Responsive grid-based layout with optimal spacing and typography
- Dark/Light mode toggle with smooth transitions
- Glassmorphic cards with backdrop blur effects
- Gradient backgrounds that pan and zoom on scroll
- Custom-built metric badges and skill displays

### 🧰 **Tech Stack**
- **Frontend**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS v4 with custom utility patterns
- **Animation**: Framer Motion with scroll inview triggers
- **Code Highlighting**: react-syntax-highlighter with atom-one-dark theme
- **Icons**: React Icons (Font Awesome, Simple Icons), Lucide
- **Accessibility**: AOS (Animate On Scroll), keyboard navigation, semantic HTML

### ⚡ **Performance**
- Edge rendering via Vercel
- Image optimization with Next.js Image component
- GPU-accelerated transforms (`transform`, `opacity` only)
- Lazy-loaded sections with `whileInView` triggers
- Minimal CSS-in-JS, Tailwind utility-first approach
- ~350KB gzipped bundle

### 🎯 **User Experience**
- **Command Palette** (Cmd+K / Ctrl+K) for quick navigation
- Smooth scroll behavior with parallax background
- Responsive design from mobile to 4K displays
- Focus-visible states for keyboard navigation
- Loading optimized for Core Web Vitals

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Pintopie/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page (client-side)
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles, CSS variables, animations
├── public/               # Static assets (resumes, images)
└── (other Next.js files)
```

### Key Components

All components are **inline within `page.tsx`** for simplicity. Major building blocks:

- **`ScrollReveal`**: HOC for scroll-triggered animations using `useInView`
- **`AnimatedCard`**: Reusable card with hover effects, stagger delays, and variants
- **`Magnetic`** (removed): Previously handled hover-based magnetic effects
- **Hero Section**: Sequenced avatar, title, and CTA animations with 0.1s delays
- **Quick Actions**: Four-column grid with arrow animations on hover
- **About Section**: Code snippet viewer with syntax highlighting and language tabs
- **Skills Grid**: 11 technologies with icon rotation effects
- **Projects Showcase**: Two-column card grid with tech tags and external links
- **Ship Log**: Real-time project updates with status badges
- **Workflow Guardrails**: Four-card feature highlighting
- **Tooling Section**: Two-column grid of dev tools with descriptions
- **Contact**: Email, LinkedIn, GitHub links with hover animations
- **Modals**: Resume preview (iframe) and Command Palette (searchable nav)

## 🎭 Animation Variants

All animations use consistent **Framer Motion variants**:

### `containerVariants`
Staggered container animation for lists:
```typescript
{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}
```

### `itemVariants`
Individual item fade-in with y-offset:
```typescript
{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
```

### `cardVariants`
Card scale + hover lift effect:
```typescript
{
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: { y: -8, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)" }
}
```

## 🎬 Key Animations in Detail

### Hero Section Sequence
- Portfolio badge: `delay: 0.1`
- Avatar + Title: `delay: 0.2`
- Typing role: `delay: 0.35`
- Description: `delay: 0.4-0.5`
- CTA buttons: `delay: 0.55`
- Metrics: `delay: 0.6-0.75`

Avatar hover: `whileHover={{ scale: 1.08, rotate: 2 }}`

### Section Reveals
All sections use `useInView` with:
- `once: true` (animate only once)
- `amount: 0.2-0.3` (trigger at 20-30% visibility)
- Staggered children with `containerVariants`

### Interactive Elements
- **Card hover**: `-translate-y-1` (CSS) → `-8px` (Framer)
- **Button tap**: `whileTap={{ scale: 0.98 }}`
- **Icon spin**: `whileHover={{ scale: 1.2, rotate: 8 }}`
- **Links**: `whileHover={{ x: 2, y: -2 }}`

### Background Effects
- **Scroll-reactive gradient**: Pans and scales based on `window.scrollY`
- **Floating orbs**: Two continuous orbiting blur gradients with 8s/10s cycles
- **Z-index layering**: `-z-10` for backgrounds, `-z-5` for floating elements

### Modals
- **AnimatePresence** wrapper for exit animations
- Spring physics: `damping: 25, stiffness: 300`
- Backdrop fade: `opacity: 0 → 1` on entry
- Content scale + translate: `scale: 0.9, y: 20 → 1, y: 0`

## 🎨 Styling & Theme

### CSS Variables (globals.css)
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #024dbee2;
  --muted: #64748b;
  --border: #111111;
  --card: #fffef8;
}

.dark {
  --background: #0a0a0a;
  --primary: #dcefff;
  /* ... */
}
```

### Color Scheme
- **Light**: Warm whites, dark grays, primary blue
- **Dark**: Deep black, light grays, bright cyan
- **Transition**: 1.5s background, 1s color changes

### Typography
- **Font**: Space Grotesk (Google Fonts)
- **Scale**: 4xl → 5xl for h1, 2xl for h2, sm–base for body
- **Weight**: 600 (bold headers), 500 (semibold), 400 (regular)

### Code Snippet Theme
- **Library**: react-syntax-highlighter
- **Theme**: atomOneDark (Atom editor colors)
- **Font**: Monospace, 0.875rem
- **Line height**: 1.5

## 📱 Responsive Design

- **Mobile**: Full-width, single-column layout, touch-friendly tap targets
- **Tablet (640px+)**: Two-column grids start
- **Desktop (1024px+)**: Three+ column grids, side-by-side layouts
- **Large (1280px+)**: Full-width content with max-width constraints

Breakpoints via Tailwind: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

## 🔍 SEO & Performance

- **Next.js Metadata**: Title, description, OG tags in `layout.tsx`
- **Image Optimization**: Avatar with `Image` component, priority loading
- **Semantic HTML**: Proper heading hierarchy, nav links, landmarks
- **Schema Markup**: Implicit via proper document structure
- **Core Web Vitals**: Optimized for LCP, FID, CLS

## 🚢 Deployment

### Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Auto-deploy on push to main
3. Edge functions and image optimization included

```bash
npm run build
npm run start
```

### Docker (Optional)
```dockerfile
# Use Node image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
(None required for basic setup—all config is hardcoded or relative)

## 🛠️ Development Notes

### Adding New Sections
1. Create a new data array (e.g., `const NEW_SECTION = [...]`)
2. Wrap in `<ScrollReveal>` or `<section>` with motion
3. Use `AnimatedCard` for grid items
4. Add nav link in `NAV_LINKS`
5. Add section ID for scroll-to navigation

### Customizing Animations
- Edit `containerVariants`, `itemVariants`, `cardVariants` at top of file
- Adjust delays, durations, easing in variant definitions
- Use `whileHover`, `whileTap`, `animate` for element-specific effects

### Color Tweaks
- Edit CSS variables in `globals.css`
- Dark mode: Toggle via useState, class on `<html>`
- Syntax highlighting: Swap `atomOneDark` import in page.tsx

### Adding Icons
```typescript
import { SiXYZ } from "react-icons/si"; // Largest icon library
import { FaXYZ } from "react-icons/fa";
import { LuXYZ } from "lucide-react";
```

## 📦 Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| next | React framework | 15.3.1 |
| react | UI library | 19.0.0 |
| typescript | Type safety | 5 |
| tailwindcss | Utility CSS | 4 |
| framer-motion | Animations | 12.9.4 |
| react-icons | Icon library | 5.5.0 |
| react-syntax-highlighter | Code highlighting | latest |
| aos | Scroll animations | 2.3.4 |
| react-hotkeys-hook | Keyboard shortcuts | 5.0.1 |
| lucide-react | Modern icons | 0.503.0 |

### Dev Dependencies
- @types/* (TypeScript definitions)
- eslint, eslint-config-next (Linting)
- @tailwindcss/postcss (PostCSS plugin)

## 🐛 Troubleshooting

### Animations Not Triggering
- Check `whileInView` conditions: `once: true`, `amount: 0.2`
- Verify Framer Motion is imported from "framer-motion"
- Ensure `<AnimatePresence>` wraps conditional components

### Syntax Highlighting Not Working
- Install react-syntax-highlighter: `npm install react-syntax-highlighter`
- Import atomOneDark: `import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"`
- Language prop must match: `"javascript"`, `"python"`, `"typescript"`

### Dark Mode Toggle Not Working
- Check `dark` class applied to `document.documentElement`
- Verify CSS variables defined in `.dark { }` block
- Ensure dark mode icon renders correctly

### Scroll Background Lag
- Already optimized with `will-change-transform`
- Use Chrome DevTools Performance tab to check frame rate
- Reduce opacity of floating elements if needed

## 📄 License

MIT License – Feel free to use this portfolio as a template!

## 🤝 Contributing

Contributions welcome! Fork, create a feature branch, and submit a PR.

## 📧 Contact

- **Email**: hoangnhan20192@gmail.com
- **LinkedIn**: [kennyngdev-ca](https://www.linkedin.com/in/kennyngdev-ca/)
- **GitHub**: [Pintopie](https://github.com/Pintopie)
- **Location**: Toronto, ON Canada

---

**Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS.**

*Last updated: November 2025*
