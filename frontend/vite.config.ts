import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Static copy plugin configuration
    viteStaticCopy({
      targets: [
        {
          // Copy the 'functions' directory from the project root (frontend/functions)
          src: 'functions',
          // Place it directly into the output directory (dist/functions)
          dest: '.' // Destination is relative to the 'dist' directory
        }
      ]
    })],
})
