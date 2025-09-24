import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pxtorem from 'postcss-pxtorem'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer(),
    mdx({
      remarkPlugins: [remarkGfm]
    })
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16,
          propList: ['*'],
        }),
      ],
    },
  },
})
