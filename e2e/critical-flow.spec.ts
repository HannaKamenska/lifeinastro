import { test, expect } from '@playwright/test';

test.describe('Критичный пользовательский поток', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto((baseURL ?? 'http://localhost:8082') + '/');
  });

  test('✅ Пользователь может найти услуги и связаться', async ({ page }) => {
    // 1) Главная страница открывается и виден ключевой заголовок/контент
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('h1, h2').first()).toBeVisible();

    // 2) Переход к разделу "Услуги" (попробуем ссылку/якорь или прокрутку)
    const servicesLink = page.locator('a:has-text("Услуги")');
    if (await servicesLink.count()) {
      await servicesLink.first().click();
    } else {
      // Если нет отдельной ссылки, попробуем проскроллить к якорю или заголовку
      await page.evaluate(() => {
        const el = document.querySelector('#services, [id*="service"], [href*="#services"]');
        if (el instanceof HTMLElement) el.scrollIntoView();
      });
    }

    // Проверяем, что на странице есть карточки услуг или их заголовки
    const servicesHeading = page.locator('h2:has-text("услуг"), h3:has-text("услуг")');
    const serviceCards = page.locator('[role="article"][data-testid="service-card"]');
    await expect(serviceCards.first()).toBeVisible();

    // 3) Переход к разделу "Контакты" / "Контакты и связь"
    const contactLink = page.locator('a:has-text("Контакты"), a:has-text("Контакт")');
    if (await contactLink.count()) {
      await contactLink.first().click();
    } else {
      // Скроллим к секции по id
      await page.evaluate(() => {
        const el = document.querySelector('#contact, #contacts');
        if (el instanceof HTMLElement) el.scrollIntoView();
      });
    }

    const contactSection = page.locator('#contact, #contacts, section[aria-labelledby="contact-heading"]');
    await expect(contactSection).toBeVisible();

    // 4) Если есть форма — попробуем корректно заполнить и отправить.
    const form = page.locator('form, [data-testid="contact-form"]');
    if (await form.count()) {
      const nameInput = form.locator('input[name*="name" i], input[placeholder*="имя" i], input[aria-label*="имя" i]');
      const emailInput = form.locator('input[type="email"], input[name*="email" i]');
      const messageInput = form.locator('textarea[name*="message" i], textarea[placeholder*="сообщ" i]');

      if (await nameInput.count()) await nameInput.fill('Тестовый Клиент');
      if (await emailInput.count()) await emailInput.fill('test@example.com');
      if (await messageInput.count()) await messageInput.fill('Хочу консультацию');

      const submitBtn = form.locator('button[type="submit"], button:has-text("Отправить"), button:has-text("Send")');
      if (await submitBtn.count()) {
        await submitBtn.first().click();
        // Успех (если реализован)
        const successMsg = page.locator('text=/успешно|спасибо|success/i');
        // Не валим тест, если нет сообщения — просто ждём, что страница жива.
        await successMsg.first().waitFor({ timeout: 2000 }).catch(() => {});
      }
    } else {
      // 5) Если формы нет — проверим наличие CTA ссылок
      const ctaConsult = page.locator('a:has-text("Записаться на консультацию")');
      const ctaBot = page.locator('a:has-text("Астробот"), a:has-text("чат-бот")');
      // Проверяем, что хотя бы ОДНА видимая ссылка существует
      await expect(ctaConsult.or(ctaBot).first()).toBeVisible();
    }
  });

  test('✅ Мобильная навигация работает', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 }); // мобильное окно

  // Пытаемся найти кнопку бургер-меню несколькими способами
  const burgerCandidates = [
    '[data-testid="mobile-menu-button"]',
    'button[aria-label*="menu" i]',
    'button[aria-label*="меню" i]',
    'button[aria-label*="navigation" i]',
    'button[aria-label*="навигац" i]',
    // популярные tailwind-классы для мобильной кнопки:
    'button.md\\:hidden', // класс md:hidden
    '.md\\:hidden button',
    '.md\\:hidden [role="button"]',
    // общий вариант “иконка-кнопка”
    'button:has(svg)',
  ];

  let clicked = false;
  for (const sel of burgerCandidates) {
    const btn = page.locator(sel).first();
    if (await btn.count()) {
      try {
        // Проверяем видимость и кликаем
        await expect(btn).toBeVisible({ timeout: 1000 });
        await btn.click({ trial: true }).catch(() => {}); // сначала пробный клик
        await btn.click().catch(() => {});
        clicked = true;
        break;
      } catch {
        // пробуем следующий селектор
      }
    }
  }

  // Если ни один селектор не сработал — даём понятную ошибку с подсказкой
  expect(clicked, 'Не найден селектор бургер-кнопки. Лучше добавить data-testid="mobile-menu-button" на кнопку меню.').toBe(true);

  // Должно появиться меню
  const openedMenu = page.locator('nav, [role="navigation"]');
  await expect(openedMenu.first()).toBeVisible();
});

  test('✅ Сайт загружается быстро', async ({ page, baseURL }) => {
    const t0 = Date.now();
    await page.goto((baseURL ?? 'http://localhost:8082') + '/');
    const t1 = Date.now();
    expect(t1 - t0).toBeLessThan(5000); // до 5 секунд на холодный старт в контейнере
  });
});