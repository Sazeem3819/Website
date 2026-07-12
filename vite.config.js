import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Overridable for subpath hosting (e.g. GitHub Pages: VITE_BASE=/Website/).
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['gsap', 'lenis'],
        },
      },
    },
  },
})
