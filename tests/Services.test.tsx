import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@test/src-test-utils';
import Services from '../src/components/Services';

describe('Services - Критичный компонент', () => {
  it('✅ Должен отображать список услуг', () => {
    render(<Services />);

    // Проверяем наличие услуг
    const byRole = screen.queryAllByRole('article');
    const services = byRole.length ? byRole : screen.queryAllByTestId('service-card');
    
    expect(services.length).toBeGreaterThan(0);
  });

  it('✅ Каждая услуга должна иметь название и цену', () => {
    render(<Services />);

    const byRole = screen.queryAllByRole('article');
    const serviceCards = byRole.length ? byRole : screen.queryAllByTestId('service-card');
    
    expect(serviceCards.length).toBeGreaterThan(0);

    serviceCards.forEach(card => {
      const utils = within(card as HTMLElement);

      // Проверяем наличие заголовка
      const heading = utils.queryByRole('heading') ?? utils.queryByText(/.+/);
      expect(heading).toBeInTheDocument();

      // Проверяем наличие цены (€, EUR, или числа)
      const priceText = utils.queryByText(/€|EUR|\d+/) ?? utils.queryByText(/price|цена/i);
      expect(priceText).toBeInTheDocument();
    });
  });

  it('✅ Должны быть кнопки для получения дополнительной информации', () => {
    render(<Services />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});