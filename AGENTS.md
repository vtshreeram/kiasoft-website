# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Kiasfot Technologies landing page — a single-page marketing site for a healthcare SaaS platform. Built with React 19, TypeScript, Vite 7, and Tailwind CSS 4.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server with HMR
npm run build        # TypeScript check + production build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Architecture

### Component Structure

- **`src/components/ui/`** — Reusable shadcn/ui-style primitives (Button, Card, Input, etc.) built with Radix UI + CVA (class-variance-authority). These use the `cn()` utility for Tailwind class merging.

- **`src/components/landing/`** — Landing page section components (Hero, Impact, Approach, FAQ, etc.). Each file is a self-contained section rendered sequentially in `App.tsx`.

- **`src/components/layout/`** — Persistent layout components (Navbar, Footer).

### Key Patterns

- **Path alias**: `@` resolves to `./src` (configured in `vite.config.ts` and `tsconfig.app.json`)
- **Styling utility**: Use `cn()` from `@/lib/utils` for conditional/merged Tailwind classes
- **Component variants**: UI components use CVA for variant props (e.g., `<Button variant="outline" size="lg">`)

### Styling System

Tailwind CSS 4 with CSS custom properties defined in `src/index.css`:

- **Design tokens**: `--primary`, `--secondary`, `--muted`, `--accent`, etc. accessed via `hsl(var(--token))`
- **Fonts**: DM Sans (body, `font-sans`) and Sora (headings, `font-display`)
- **Dark mode**: Supported via `.dark` class; variables adjust automatically
- **Custom utilities**: `.gradient-text`, `.glass`, `.card-shadow`, `.card-shadow-hover`
- **Animation utilities**: `.animation-delay-2000`, `.animation-delay-4000`

### Dependencies

- **Radix UI**: Headless primitives for Accordion, Dialog, Sheet, Label
- **Framer Motion**: Page animations and transitions
- **Lucide React**: Icon library
