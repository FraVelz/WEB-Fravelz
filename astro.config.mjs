import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

const isProd = process.env.NODE_ENV === 'production' || process.env.CI === 'true';
const basePath = isProd ? '/WEB-Fravelz/' : '/';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  base: basePath,
  site: 'https://fravelz.github.io',
  server: {
    host: 'localhost',
    port: 4321,
  },
  vite: {
    server: {
      cors: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
