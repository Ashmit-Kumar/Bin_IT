import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';  // Separate React
            if (id.includes('lodash')) return 'lodash-vendor'; // Separate Lodash
            return 'vendor'; // Default vendor chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Optional: Increases warning limit (default is 500KB)
  }
});
