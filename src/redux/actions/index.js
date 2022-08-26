const SUCESS_LOGIN = 'SUCESS_LOGIN';
const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const submitLogin = (payload) => ({
  type: SUCESS_LOGIN,
  payload,
});

const addNewExpense = (payload) => ({
  type: ADD_NEW_EXPENSE,
  payload,
});

const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export { submitLogin, addNewExpense, removeExpense };
