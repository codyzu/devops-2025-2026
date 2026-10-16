# RES507 Course Site

Static course site built with Astro 5. Lessons live in `src/lessons` as MDX and can render as labs or Reveal.js slide decks depending on frontmatter.

This repo covers **RS507/RES507 (DevOps)** and **RS509/RES509 (Virtualisation avancée)**. Start with the [course documentation](docs/README.md) for the lesson map, agent workflow, feedback from both courses, and remaining work. Read [AGENTS.md](AGENTS.md) before editing content.

![Hero image](src/assets/hero.png)

Highlights
- Astro 5 (static output) + Vite
- MDX for lesson content
- Reveal.js v5 for slides
- UnoCSS with preset-wind4 utilities
- Expressive Code for Markdown/MDX code highlighting
- pnpm for package management

Install
```sh
pnpm install
```

Development
```sh
pnpm dev
```

Build
```sh
pnpm build
```

Preview the production build
```sh
pnpm preview
```
