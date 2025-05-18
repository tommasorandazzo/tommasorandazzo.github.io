import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
    alias: {
      '~': '/node_modules/*',
      '@atoms': '/src/components/01-atoms/*',
      '@molecules': '/src/components/02-molecules/*',
      '@organisms': '/src/components/03-organisms/*',
      '@templates': '/src/components/04-templates/*',
      '@pages': '/src/components/05-pages/*',
    }
  },
};

export default config;
