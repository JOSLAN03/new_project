// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '/dist', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets
    sourcemap: true // Enable source maps
  },
  server: {
    port: 3000, // Port number for development server
    open: true // Automatically open browser on server start
  },
  plugins: [], // Array of plugins to use
  resolve: {
    alias: {
      '@': '/src' // Corrected alias path for src directory
    }
  }
});
