import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Testes LoginPage', () => {
  test('Os inputs de email, password, e o botão "entrar" são renderizados na tela', () => {
    renderWithRouterAndRedux(<App />);
    const testIds = ['email-input', 'password-input', 'button-login'];
    testIds.forEach((testId) => {
      const inputs = screen.getByTestId(testId);
      expect(inputs).toBeInTheDocument();
    });
  });

  test('Ao clicar no botão "entrar" a aplicação deve ser redirecionada para pagina "/carteira"', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const loginBtn = screen.getByTestId('button-login');
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputPassword, 'testeminlenght');
    userEvent.click(loginBtn);
    expect(loginBtn.click).toBeTruthy();
    await waitFor(() => expect(history.location.pathname).toBe('/carteira'));
  });
});

// history.location
//
