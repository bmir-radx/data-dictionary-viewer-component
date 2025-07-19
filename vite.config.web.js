import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/web.jsx'),
            name: 'Data Dictionary Viewer',
            formats: ['es', 'umd'],
            fileName: 'data-dictionary-viewer'
        },
        sourcemap: true,
        emptyOutDir: true,
        outDir: 'web'
    },
    plugins: [react(), cssInjectedByJsPlugin()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    }
})
