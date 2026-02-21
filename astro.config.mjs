import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import { fileURLToPath } from 'url';

export default defineConfig({
  integrations: [react()],

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
