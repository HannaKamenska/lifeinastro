import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // ВАЖНО: этот файл предназначен только для Vitest и НЕ должен импортироваться Playwright-ом
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/**/*.{test,spec}.ts?(x)'],
    // Исключаем e2e из Vitest, чтобы он не зацепил Playwright-спеки
    exclude: ['e2e/**', 'node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '**/*.d.ts',
        '**/*.config.*',
        'src/main.tsx',
        'dist',
        'e2e/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './tests'),
    },
  },
});