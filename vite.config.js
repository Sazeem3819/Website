import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from the domain root (custom domain). Override with VITE_BASE only
  // if hosting under a subpath again (e.g. VITE_BASE=/Website/).
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
