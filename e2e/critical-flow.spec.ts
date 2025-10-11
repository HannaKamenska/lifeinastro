import { test, expect } from '@playwright/test';

test.describe('Критичный пользовательский поток', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('✅ Пользователь может найти услуги и связаться', async ({ page }) => {
    // 1. Загрузка главной страницы
    await expect(page).toHaveTitle(/lifeinastro/i);

    // 2. Навигация к услугам
    await page.click('text=Услуги');
    await expect(page.locator('text=/натальная карта|консультация/i')).toBeVisible();

    // 3. Переход к форме контакта
    await page.click('text=Контакт');

    // 4. Заполнение формы
    await page.fill('input[name="name"]', 'Тестовый Клиент');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Хочу консультацию');

    // 5. Отправка формы
    await page.click('button[type="submit"]');

    // 6. Проверка успешной отправки
    await expect(page.locator('text=/успешно|спасибо|success/i')).toBeVisible({ timeout: 5000 });
  });

  test('✅ Мобильная навигация работает', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Проверяем наличие мобильного меню
    const menuButton = page.locator('button[aria-label*="menu" i]');
    await expect(menuButton).toBeVisible();

    // Открываем меню
    await menuButton.click();

    // Проверяем, что меню открылось
    await expect(page.locator('nav')).toBeVisible();
  });

  test('✅ Сайт загружается быстро', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(3000); // Меньше 3 секунд
  });
});
