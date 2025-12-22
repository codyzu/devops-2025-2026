// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [mdx(), react()],
    vite: {
        plugins: [UnoCSS()],
    },
});
