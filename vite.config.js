import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Drop/',  // GitHub Pages serves at jackharrows.github.io/Drop/
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})