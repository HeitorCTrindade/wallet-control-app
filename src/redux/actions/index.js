const SUCESS_LOGIN = 'SUCESS_LOGIN';
const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const FILL_ARRAY_CURRENCIES = 'FILL_ARRAY_CURRENCIES';
const ALLOWS_EDIT_EXPENSE = 'ALLOWS_EDIT_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';

const submitLogin = (payload) => ({
  type: SUCESS_LOGIN,
  payload,
});

const requestCurrenciesFromApi = (data) => ({
  type: FILL_ARRAY_CURRENCIES,
  data,
});

const addNewExpense = (payload) => ({
  type: ADD_NEW_EXPENSE,
  payload,
});

const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  expenseId,
});

const allowsEditExpense = (idToEdit) => ({
  type: ALLOWS_EDIT_EXPENSE,
  idToEdit,
});

const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    // dispatch(requestAPI()); // chama o defult/loading enquanto faz a requisição.
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await response.json();
      dispatch(requestCurrenciesFromApi(json));
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  submitLogin,
  addNewExpense,
  removeExpense,
  requestCurrenciesFromApi,
  allowsEditExpense,
  editExpense,
};
