// @ts-check

import react from '@astrojs/react';
import {defineConfig} from 'astro/config';
import unoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkAttributes from 'remark-attributes';

export default defineConfig({
  // MDX by default uses the markdown config
  // Adding rehype plugins after expressive code seems to break expressive code.
  // Configure rehype here and expressive code continues to work.
  // Heading IDs + anchor links for both .md and .mdx
  markdown: {
    // Remark-attributes' published types don't line up with Astro's unified plugin typing under // @ts-check.
    // Runtime is fine; we cast to keep TS happy.
    remarkPlugins: [/** @type {any} */ (remarkAttributes)],
    rehypePlugins: [
      rehypeSlug,
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
    unoCSS({
      injectReset: '@unocss/reset/tailwind-v4.css',
    }),
    // Expressive Code should run before MDX.
    expressiveCode({
      plugins: [pluginLineNumbers()],
    }),

    mdx({
      // In MDX files, curly braces normally start JS expressions.
      // remark-attributes supports attribute syntax in MDX when braces are escaped.
      remarkPlugins: [[/** @type {any} */ (remarkAttributes), {mdx: true}]],
    }),

    react(),
  ],
});
