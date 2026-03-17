import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import { fileURLToPath } from 'url';

export default defineConfig({
  site: "https://fravelz.vercel.app/",
  integrations: [react(), sitemap()],

  output: "static",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});