import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/images'),
      '@cmpt': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 5050,
    strictPort: true,
  },
  plugins: [
    Inspect(),
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Convert SVG into icon format
        dimensions: false, // Disable width/height attributes
      },
    }),
    dts({
      outDir: 'dist/types', // Specify output directory for .d.ts files
      tsconfigPath: './tsconfig.json',
    }),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpeg: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
      tiff: {
        quality: 50,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ]
})
