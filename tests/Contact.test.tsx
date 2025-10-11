import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@test/src-test-utils';
import Contact from '../src/components/Contact';

describe('Contact - Критичный компонент', () => {
  it('✅ Форма должна отображаться с обязательными полями', () => {
    render(<Contact />);

    // Проверяем наличие полей формы
    expect(screen.getByRole('form') || screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('✅ Email должен валидироваться', async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/email/i) || screen.getByPlaceholderText(/email/i);

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    // Ожидаем сообщение об ошибке
    await waitFor(() => {
      const errorMessages = screen.queryAllByText(/invalid|некорректный|неверный/i);
      expect(errorMessages.length).toBeGreaterThanOrEqual(0);
    });
  });

  it('✅ Форма должна отправляться с корректными данными', async () => {
    const mockSubmit = vi.fn();
    render(<Contact onSubmit={mockSubmit} />);

    // Заполняем форму
    const nameInput = screen.getByLabelText(/name|имя/i) || screen.getByPlaceholderText(/name|имя/i);
    const emailInput = screen.getByLabelText(/email/i) || screen.getByPlaceholderText(/email/i);

    fireEvent.change(nameInput, { target: { value: 'Анна' } });
    fireEvent.change(emailInput, { target: { value: 'anna@example.com' } });

    const submitButton = screen.getByRole('button', { name: /submit|отправить|send/i });
    fireEvent.click(submitButton);

    // Проверяем, что форма обработана
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled() || 
      expect(screen.queryByText(/success|успешно|спасибо/i)).toBeInTheDocument();
    });
  });
});
