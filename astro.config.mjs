// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [
        expressiveCode({
            plugins: [pluginLineNumbers()],
        }),
        mdx(), 
        react()],
    vite: {
        plugins: [UnoCSS()],
    },
});
