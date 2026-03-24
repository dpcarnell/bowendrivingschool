# CLAUDE.md - Bowen Driving School

## Project Overview

Static single-page website for Bowen Driving School (bowendrivingschool.com.au), a driving school in Bowen, Queensland, Australia. The site provides information about lessons, pricing, availability scheduling, and contact details.

## Tech Stack

- **Framework:** React 19 with TypeScript 6
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin — no PostCSS config needed)
- **Routing:** React Router DOM 7 (HashRouter for GitHub Pages compatibility)
- **Linting:** ESLint 10 with typescript-eslint
- **Package Manager:** Yarn 4 (via Corepack)
- **Node Version:** 22.16.0 (see `.nvmrc`)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/static.yml`)

## Commands

```bash
yarn dev          # Start dev server (Vite, port 5173)
yarn build        # TypeScript check + Vite production build (outputs to ./public)
yarn lint         # Run ESLint
yarn preview      # Preview production build locally
yarn check:types  # TypeScript type checking only (no emit)
```

## Project Structure

```
src/
  App.tsx              # Root component with HashRouter and route definitions
  main.tsx             # React entry point
  index.css            # Global styles, Tailwind directives, custom @layer components
  vite-env.d.ts        # Vite type declarations
  components/
    Layout.tsx         # Header/nav/footer wrapper with mobile drawer
  pages/
    Home.tsx           # Landing page
    About.tsx          # About the school and instructor
    Lessons.tsx        # Pricing, booking info, lesson details
    Schedule.tsx       # Loads schedule-table.html via fetch and renders it
  config/
    constants.ts       # Route path constants (ROUTES object)
public/
  index.html           # HTML template with SEO meta tags and structured data (JSON-LD)
  schedule-table.html  # Pre-built availability table (loaded by Schedule page)
  images/              # Static images (logo, backgrounds, icons)
  assets/              # Built JS/CSS bundles (Vite output)
  CancellationPolicy.pdf
  robots.txt, sitemap.xml, CNAME, .htaccess, web.config
```

## Architecture Notes

- **No backend/API** - all content is static and hardcoded in components
- **Schedule data** is maintained as a standalone HTML file (`public/schedule-table.html`) and fetched at runtime by `Schedule.tsx`
- **Build output goes to `./public`** with `emptyOutDir: false` to preserve static assets (images, PDFs, schedule HTML) that aren't part of the Vite build
- **HashRouter** is used instead of BrowserRouter for GitHub Pages compatibility (no server-side routing)
- **No testing framework** is configured
- **No environment variables** are used

## Styling Conventions

- Tailwind utility classes for most styling
- Tailwind 4 CSS-first configuration: custom theme defined via `@theme` in `src/index.css` (no `tailwind.config.js`)
- Custom component classes defined in `@layer components` in `src/index.css`:
  - `.primary-content-spacer` - white card container with orange border
  - `.schedule-container` - table with sticky headers/columns (complex z-index layering)
  - `.desktop-background` / `.mobile-background` - responsive background images
- Custom theme colors (defined in `@theme` block):
  - `--color-primary: #0572ce` (blue)
  - `--color-secondary: #fe8100` (orange)
- Responsive breakpoint: `lg:` (1024px) separates mobile/desktop layouts

## TypeScript Configuration

- Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`
- Target: ES2022, Module: ESNext
- `verbatimModuleSyntax` and `erasableSyntaxOnly` enabled
- Project references: `tsconfig.app.json` (src) + `tsconfig.node.json` (vite config)

## ESLint Configuration

- Flat config format (`eslint.config.js`)
- TypeScript-ESLint recommended rules
- React Hooks + React Refresh plugins
- Ignores `public/assets/**/*`

## Deployment

- Push to `main` triggers GitHub Actions workflow
- Workflow: checkout -> setup Node 22.16.0 -> corepack enable -> yarn install -> yarn build -> deploy to GitHub Pages
- Custom domain: bowendrivingschool.com.au (via CNAME file)
