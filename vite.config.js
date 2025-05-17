import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      '~': '/node_modules',
      '$assets': '/src/assets',
      '$lib': '/src/lib',
      '$routes': '/src/routes',
      '@atoms': '/src/components/01-atoms',
      '@molecules': '/src/components/02-molecules',
      '@organisms': '/src/components/03-organisms',
      '@templates': '/src/components/04-templates',
      '@pages': '/src/components/05-pages',
    },
  },
  server: {
    allowedHosts: [
      '.lndo.site',
      '.tommaso.cc',
    ],
  },
});
