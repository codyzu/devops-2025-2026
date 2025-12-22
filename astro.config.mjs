// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [react(), mdx()],
});