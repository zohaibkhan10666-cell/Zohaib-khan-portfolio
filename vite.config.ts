import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1000, // increase limit to avoid warnings for large bundles
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: [
            'react',
            'react-dom',
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            '@tanstack/react-query',
            'framer-motion',
            'gsap',
            'lenis',
            'lucide-react',
          ],
        },
      },
    },
  },
});
