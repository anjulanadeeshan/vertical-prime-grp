/**
 * Vite Configuration - Production Optimized
 * Features:
 * - Manual chunk splitting for better caching
 * - Path aliases for clean imports
 * - Build optimizations
 * - Image optimization hints
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@/components': path.resolve(__dirname, './src/components'),
            '@/data': path.resolve(__dirname, './src/data'),
            '@/constants': path.resolve(__dirname, './src/constants'),
            '@/types': path.resolve(__dirname, './src/types'),
            '@/assets': path.resolve(__dirname, './src/assets'),
        },
    },

    build: {
        // Target modern browsers for smaller bundles
        target: 'es2020',

        // Output directory
        outDir: 'dist',

        // Generate sourcemaps for production debugging (optional)
        sourcemap: false,

        // Chunk size warning limit (500kb)
        chunkSizeWarningLimit: 500,

        rollupOptions: {
            output: {
                // Manual chunk splitting for better caching
                manualChunks: (id) => {
                    // Vendor chunks
                    if (id.includes('node_modules')) {
                        // React core
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor';
                        }

                        // Framer Motion (large library)
                        if (id.includes('framer-motion')) {
                            return 'framer-vendor';
                        }

                        // React Router
                        if (id.includes('react-router')) {
                            return 'router-vendor';
                        }

                        // Other vendor dependencies
                        return 'vendor';
                    }

                    // Component chunks
                    if (id.includes('/src/components/sections/')) {
                        return 'sections';
                    }

                    if (id.includes('/src/components/features/')) {
                        return 'features';
                    }

                    if (id.includes('/src/pages/')) {
                        return 'pages';
                    }

                    // Data and constants
                    if (id.includes('/src/data/') || id.includes('/src/constants/')) {
                        return 'data';
                    }
                },

                // Asset file naming
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.');
                    const ext = info[info.length - 1];

                    if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
                        return `assets/images/[name]-[hash][extname]`;
                    }

                    if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
                        return `assets/fonts/[name]-[hash][extname]`;
                    }

                    return `assets/[name]-[hash][extname]`;
                },

                // Chunk file naming
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },

        // Minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console.logs in production
                drop_debugger: true,
            },
        },
    },

    // Development server configuration
    server: {
        port: 5173,
        strictPort: false,
        host: true,
        open: true,
    },

    // Preview server configuration
    preview: {
        port: 4173,
        strictPort: false,
        host: true,
        open: true,
    },

    // Dependency optimization
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    },
});
