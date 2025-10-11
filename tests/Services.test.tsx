import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@test/src-test-utils';
import Services from '../Services';

describe('Services - Критичный компонент', () => {
  it('✅ Должен отображать список услуг', () => {
    render(<Services />);

    // Проверяем наличие услуг
    const services = screen.getAllByRole('article') || screen.getAllByTestId('service-card');
    expect(services.length).toBeGreaterThan(0);
  });

  it('✅ Каждая услуга должна иметь название и цену', () => {
    render(<Services />);

    const serviceCards = screen.getAllByRole('article') || screen.getAllByTestId('service-card');

    serviceCards.forEach(card => {
      // Проверяем наличие заголовка
      const heading = within(card).getByRole('heading') || within(card).queryByText(/.+/);
      expect(heading).toBeInTheDocument();

      // Проверяем наличие цены (€, EUR, или числа)
      const priceText = within(card).getByText(/€|EUR|\d+/) || within(card).queryByText(/price|цена/i);
      expect(priceText).toBeInTheDocument();
    });
  });

  it('✅ Должны быть кнопки для получения дополнительной информации', () => {
    render(<Services />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
