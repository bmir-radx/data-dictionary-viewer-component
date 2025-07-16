import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/data-dictionary-viewer-component',
  build: {
    emptyOutDir: true,
    outDir: 'build'
  }
})
