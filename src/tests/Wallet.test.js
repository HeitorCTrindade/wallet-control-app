import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';
import { expensesArray, expectTotalExpense, currenciesArray } from './data';

const CURRENCY_INPUT = 'currency-input';

describe('Test Wallet Page', () => {
  const initialState = {
    user: {
      email: 'test@test.com', // string que armazena o email da pessoa usuária
    },
    wallet: {
      currencies: currenciesArray, // array de string
      expenses: expensesArray, // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
      currentConversionValue: {},
      editor: false, // valor booleano que indica de uma despesa está sendo editada
      idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
    },
  };

  const initialEntries = ['/carteira'];

  describe('Test Header Component', () => {
    test('Se o valor total das despesas criadas é listado corretamente', () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const totalExpense = screen.getByTestId('total-field');
      expect(totalExpense).toBeInTheDocument();
      expect(totalExpense.innerHTML).toBe(expectTotalExpense);
    });
  });

  describe('Test Table Component', () => {
    test('Se o formnulário de editar despesa é corretamente renderizado', () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const editButton = screen.getAllByTestId('edit-btn');
      expect(editButton[0]).toBeInTheDocument();
      userEvent.click(editButton[0]);
      const saveEditionButton = screen.getByTestId('edit-button');
      expect(saveEditionButton).toBeInTheDocument();
    });

    test('Se é possivel excluir corretamente uma despesa criada', () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const deleteButton = screen.getAllByTestId('delete-btn');
      const currencyDescription = screen.getByText('Hot Dog');
      expect(deleteButton[0]).toBeInTheDocument();
      expect(currencyDescription).toBeInTheDocument();
      userEvent.click(deleteButton[0]);
      expect(currencyDescription).not.toBeInTheDocument();
    });
  });

  describe('Test WalletForm Component', () => {
    test('Se o campo select é renderizado com as opções de cambio corretas', () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const selectCurrencyElement = screen.getByTestId(CURRENCY_INPUT);
      expect(selectCurrencyElement).toBeInTheDocument();
      currenciesArray.forEach((testId) => {
        const optionSelectCurrencyElement = screen.getByRole('option', { name: testId });
        expect(optionSelectCurrencyElement).toBeInTheDocument();
      });
    });

    test('Se é possivel adicionar dados de uma nova despesa e salvar corretamente a despesa criada', async () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const valueInput = screen.getByTestId('value-input');
      const description = screen.getByTestId('description-input');
      const currencyInput = screen.getByTestId(CURRENCY_INPUT);
      const methodInput = screen.getByTestId('method-input');
      const tagInput = screen.getByTestId('tag-input');
      const addButton = screen.getByTestId('add-button');

      userEvent.type(valueInput, '50');
      userEvent.type(description, 'New Currency Test');
      userEvent.selectOptions(currencyInput, 'DOGE');
      userEvent.selectOptions(methodInput, 'Dinheiro');
      userEvent.selectOptions(tagInput, 'Lazer');
      userEvent.click(addButton);

      await waitFor(() => {
        expect(screen.getByText('New Currency Test')).toBeInTheDocument();
      });
    });

    test('Se é possivel editar os dados de uma despesa e salvar corretamente ', async () => {
      renderWithRouterAndRedux(<App />, { initialState, initialEntries });
      const editButton = screen.getAllByTestId('edit-btn');
      expect(editButton[0]).toBeInTheDocument();
      userEvent.click(editButton[0]);
      const valueInput = screen.getByTestId('value-input');
      const description = screen.getByTestId('description-input');
      const currencyInput = screen.getByTestId(CURRENCY_INPUT);
      const methodInput = screen.getByTestId('method-input');
      const tagInput = screen.getByTestId('tag-input');
      const saveEditionButton = screen.getByTestId('edit-button');

      userEvent.type(valueInput, '300');
      userEvent.type(description, 'New HOT DOG');
      userEvent.selectOptions(currencyInput, 'ETH');
      userEvent.selectOptions(methodInput, 'Dinheiro');
      userEvent.selectOptions(tagInput, 'Lazer');
      userEvent.click(saveEditionButton);

      await waitFor(() => {
        expect(screen.getByText('New HOT DOG')).toBeInTheDocument();
      });
    });
  });
});
