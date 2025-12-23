// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

export default defineConfig({
  // Heading IDs + anchor links for both .md and .mdx
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          // Append a Tabler link icon (UnoCSS icons preset class)
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['heading-anchor-icon', 'i-tabler-link'],
              ariaHidden: 'true',
            },
            children: [],
          },
          // Add a class so we can style it (e.g., show only on hover).
          properties: {
            className: ['heading-anchor'],
            ariaLabel: 'Link to this section',
          },
        },
      ],
    ],
  },

  integrations: [
    // Expressive Code should run before MDX.
    expressiveCode({
      plugins: [pluginLineNumbers()],
    }),

    // Keep MDX extending the base markdown config (default),
    // so it inherits the markdown rehype plugins above.
    mdx(),

    react(),
  ],

  vite: {
    plugins: [UnoCSS()],
  },
});
