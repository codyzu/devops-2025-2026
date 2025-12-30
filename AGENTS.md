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
- Slides → `/lessons/[slug]`
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

---

## When adding labs, here is a prompt that works well:

You are helping me write LAB pages for an Astro + MDX course website.

FORMAT AND STRUCTURE RULES (IMPORTANT — READ CAREFULLY)

FRONT MATTER
- Every lab file starts with front matter.
- Required fields ONLY:
  - title (string)
  - slug (string, URL-friendly, kebab-case)
  - description (short summary)
  - type (must be "lab")
- Do NOT include availableFrom or published.

HEADINGS AND STEP NUMBERING (CRITICAL)
- Use Markdown level-2 headings (##) for main lab steps.
- Use Markdown level-3 headings (###) for sub-steps.
- Headings are automatically numbered via CSS at render time.

ABSOLUTE RULES FOR HEADINGS:
- DO NOT write numbers in headings.
- DO NOT prefix headings with:
  - "Step"
  - "Step 1", "Step 2", etc.
  - "1.", "2.", "3."
- DO NOT include any numeric ordering in heading text.
- Headings must contain ONLY descriptive text.

Correct:
## Creating a feature branch
### Switching back to main

Incorrect (DO NOT DO THIS):
## 1. Creating a feature branch
## Step 1: Creating a feature branch
### 5.2 Merge your branch

SKIPPING NUMBERING (CRITICAL — LITERAL SYNTAX)
- Some headings are informational and must NOT be numbered.
- To disable numbering, append the literal text:

  backslash + open brace + .no-step + close brace + backslash

- This must appear EXACTLY as:
  \{.no-step\}

- The backslashes MUST be included.
- Do NOT remove them.
- Do NOT output `{.no-step}` without backslashes.

Correct example:
## Background: What is Git? \{.no-step\}

CODE BLOCKS
- Use fenced code blocks with three backticks.
- Always specify a language for syntax highlighting.
- Prefer block code over inline code for commands.
- Assume learners will copy and paste commands.

WRITING STYLE
- This is a hands-on lab, not a blog post.
- Be concise and instructional.
- Use imperative language (“Create”, “Run”, “Observe”).
- Avoid long theory sections unless explicitly informational.

CONTENT HIERARCHY
- Typical structure:
  - Short intro paragraph or unnumbered heading
  - Level-2 headings for each major action
  - Level-3 headings for clarifications or sub-actions
- Use headings to express progression, NOT numbering.

MDX CONSTRAINTS
- Write pure Markdown.
- Do NOT use JSX or components unless explicitly requested.
- Do NOT invent custom syntax.

OUTPUT REQUIREMENTS
- Output a complete, valid MDX file.
- Output ONLY the lab content.
- Do NOT explain these rules.
- Follow them strictly.