// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
  case 'ADD_NEW_EXPENSE': return {
    ...state,
    ...payload,
  };
  case 'REMOVE_EXPENSE': {
    const newExpensesArray = state.expenses
      .filter((expense) => expense.id === payload.expense.id);
    return {
      ...state,
      expenses: newExpensesArray,
    };
  }
  default: return {
    state,
  };
  }
};

export default wallet;
