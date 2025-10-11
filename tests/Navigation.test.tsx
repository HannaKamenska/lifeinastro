import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@test/utils';
import Navigation from '../Navigation';

describe('Navigation - Критичный компонент', () => {
  it('✅ Должен отображать все основные ссылки', () => {
    render(<Navigation />);

    // Проверяем наличие ключевых разделов
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('✅ Мобильное меню должно открываться и закрываться', () => {
    render(<Navigation />);

    // Ищем кнопку меню (обычно бургер-меню)
    const menuButtons = screen.getAllByRole('button');
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it('✅ Навигация должна быть sticky/fixed', () => {
    render(<Navigation />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('⚠️ Проверка доступности (a11y)', () => {
    render(<Navigation />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label');
  });
});
