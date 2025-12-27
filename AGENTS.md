This is an Astro 5 static course site.

STACK
- Astro 5, static output only (no server)
- MDX enabled
- Reveal.js v5 for slides
- UnoCSS with preset-wind4 (Tailwind 4–style utilities)
- Expressive Code for syntax highlighting (Markdown/MDX only)
- pnpm for package management
- Vite bundler

CONTENT MODEL
- All course content is called “lessons”
- Single content collection located at: `src/lessons`
- Frontmatter schema:

  export const lessonContentSchema = z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['lab', 'slides']),
    availableFrom: z.coerce.date().optional(),
    published: z.boolean().default(true),
  });

- Collection entries control:
  - listing and ordering
  - routing
  - availability
  - publication
- Collection entries are metadata/catalog only; rendered content may live elsewhere

ROUTING
- Labs → `/lessons/[slug]`
- Slides → `/slides/[slug]`
- Routing is determined by `type`:
  - type === 'lab' → lesson page
  - type === 'slides' → Reveal slide deck

SLIDES
- Slides use Reveal.js via `SlidesLayout.astro`
- Slide content is authored in MDX
- MDX emits `<section>` elements (each section = one slide)
- Reveal is initialized in `<script type="module">`
- Reveal themes (light/dark) are switched by swapping theme CSS URLs
- DO NOT use `deck.configure({ theme })` (not supported)
- Reveal highlight plugin is disabled

CODE HIGHLIGHTING
- Expressive Code is the ONLY code highlighter
- Runs at build time on Markdown/MDX fenced code blocks
- Do NOT rely on raw `<pre><code>` if Expressive Code features are needed
- Slides and labs must share the same highlighting system

LAYOUT & STYLING
- Header is full-bleed glass (backdrop-filter blur)
- Inner header content aligns with prose width
- Mobile:
  - Full-bleed header and hero
  - No rounded corners on full-bleed elements
- Desktop:
  - Inset layout
  - Rounded corners on floating elements
- UnoCSS utilities are preferred
- Avoid global CSS unless necessary
- Preserve commented class lines when editing layouts

ASTRO / VITE RULES (CRITICAL)
- Bare imports must be in frontmatter OR in `<script type="module">`
- Inline `<script>` without `type="module"` cannot access imports
- Frontmatter variables are NOT available in browser scripts unless passed explicitly
- Keep everything static; do not introduce servers, APIs, or runtime backends

GENERAL RULES
- Prefer explicit, readable solutions over abstractions
- Match existing patterns before inventing new ones
- Modify files directly
- Preserve structure and comments