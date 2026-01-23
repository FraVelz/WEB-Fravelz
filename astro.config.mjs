import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

// Detectar si estamos en producción (GitHub Pages)
const isProd = process.env.NODE_ENV === 'production' || process.env.CI === 'true';
const isDev = !isProd;
const basePath = isProd ? '/WEB-Fravelz/' : '/';

// https://astro.build/config
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
  devToolbar: {
    enabled: false,
  },
  server: {
    host: 'localhost',
    port: 4321,
  },
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  vite: {
    base: isDev ? '/' : basePath,
    server: {
      fs: {
        strict: false,
        allow: ['..'],
      },
      cors: true,
      strictPort: true,
      host: 'localhost',
      port: 4321,
      hmr: isDev ? {
        protocol: 'ws',
        host: 'localhost',
        port: 4321,
        clientPort: 4321,
      } : undefined,
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(basePath),
    },
    css: {
      devSourcemap: false,
    },
    build: {
      assetsDir: '_assets',
      cssCodeSplit: false,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      preserveSymlinks: false,
    },
    clearScreen: false,
    optimizeDeps: {
      exclude: ['@astrojs/react'],
      include: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: ['@fortawesome/react-fontawesome'],
    },
    plugins: [],
  },
});