# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This repository is a minimal Astro 5 + React example, scaffolded from the `framework-react` template. Astro is configured with React and MDX integrations, and TypeScript is configured using Astro's strict TypeScript settings.

## Commands

### Setup
- Install dependencies: `pnpm install`

### Development
- Start the dev server (Astro on the default port, typically 4321): `pnpm dev`
- Run the Astro CLI directly for ad-hoc commands: `pnpm astro <subcommand> [...args]`

### Build & Preview
- Build the static site into `dist/`: `pnpm build`
- Preview the built site locally: `pnpm preview`

### Linting & Tests
- There are currently **no linting or test scripts** defined in `package.json` and no test framework configured in the repo.
- If you add a test runner (e.g., Vitest, Playwright, or similar) or linting (e.g., ESLint), update `package.json` and then extend this section with:
  - Command to run the full test suite.
  - Command to run a single test file or test name.

## Architecture

### Tooling & Configuration
- `astro.config.mjs`
  - Imports `@astrojs/react` and `@astrojs/mdx` and registers them in `integrations`.
  - No adapter is configured, so the default static build is used.
- `tsconfig.json`
  - Extends `astro/tsconfigs/strict`.
  - `include`: `".astro/types.d.ts"` and all project files (`"**/*"`).
  - `exclude`: `dist`.
  - `compilerOptions` sets `"jsx": "react-jsx"` and `"jsxImportSource": "react"` so React components written in `.tsx` compile correctly.

### Application Structure
- `src/pages/`
  - `src/pages/index.astro`
    - Root route (`/`) for the site.
    - Uses frontmatter to:
      - Import the `Counter` React component from `../components/Counter`.
      - Define `someProps` with an initial `count` value.
    - Declares the full HTML structure (`<html>`, `<head>`, `<body>`) inline, including minimal global CSS via a `<style>` block.
    - Renders the React counter island with hydration:
      - `<Counter {...someProps} client:visible>` wraps an `<h1>Hello, React!</h1>` child.
      - The `client:visible` directive means Astro hydrates the React component when it becomes visible in the viewport.

- `src/components/`
  - `src/components/Counter.tsx`
    - A small stateful React component that:
      - Accepts `children: JSX.Element` and a `count: number` prop.
      - Uses `useState` to track the current count, initialized from `count`.
      - Exposes `add` and `subtract` handlers wired to `+` and `-` buttons.
      - Displays the current count between the buttons and renders `children` below.
    - Imports its styles from `./Counter.css`.
  - `src/components/Counter.css`
    - Styles the counter layout using CSS Grid (`.counter`) and centers the message text (`.counter-message`).

### How to Extend This Project
- **New pages / routes**
  - Add new `.astro` files under `src/pages` (e.g., `src/pages/about.astro` for `/about`). Astro's file-based routing will pick them up automatically.
  - Use frontmatter in `.astro` files to import and compose React components and share data.

- **New interactive UI**
  - Add React components under `src/components` (and subdirectories as needed).
  - Import them into `.astro` pages and use an appropriate `client:*` directive (e.g., `client:visible`, `client:load`) to control hydration.

- **Layouts & styling**
  - Currently `index.astro` defines its own HTML shell and inline styles. For more pages, consider extracting a shared layout pattern (e.g., a base `.astro` layout component) and reusing it across `src/pages`.
  - Co-locate component-specific styles with their React components, as done with `Counter.tsx` and `Counter.css`.