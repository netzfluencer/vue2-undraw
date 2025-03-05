import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.vue','.js'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'), // Your entry file
      name: 'Vue2Undraw', // Library name
      fileName: (format) => `vue2-undraw.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Externalize Vue to avoid bundling
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    emptyOutDir: false // Equivalent to --no-clean in Vue CLI
  }
})
