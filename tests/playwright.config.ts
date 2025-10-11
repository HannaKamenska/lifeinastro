import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Ищем e2e-тесты в корневой папке e2e
  testDir: '../e2e',
  testMatch: ['**/*.spec.ts', '**/*.e2e.ts'],

  // Параллельный запуск и ретраи
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Репорт
  reporter: 'html',

  // Глобальные настройки браузера
  use: {
    baseURL: 'http://localhost:8082', // <-- Порт 8082
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Проекты (браузеры/устройства)
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  ],

  // Автозапуск dev-сервера перед тестами
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8082',      // <-- Порт 8082
    reuseExistingServer: !process.env.CI,
  },
});