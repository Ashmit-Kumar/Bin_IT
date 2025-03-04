import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change the port if needed
    open: true, // Auto open browser on start
    strictPort: true, // Ensures it uses the exact port
  },
  build: {
    outDir: 'dist', // Ensure Vite outputs to 'dist' for Vercel
    target: 'esnext', // Optimize for modern browsers
    minify: 'terser', // Reduce bundle size
    sourcemap: false, // Disable source maps for smaller builds
  },
  resolve: {
    alias: {
      '@': '/src', // Simplify imports like '@/components'
    },
  },
  define: {
    'process.env': {}, // Ensure compatibility with some libraries expecting Node.js process.env
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-import React in JSX files
  },
  preview: {
    port: 5000, // Different preview port
    strictPort: true,
  }
})
