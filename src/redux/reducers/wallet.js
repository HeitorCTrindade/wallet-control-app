// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  currentConversionValue: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FILL_ARRAY_CURRENCIES': {
    const newCurrenciesArray = Object.keys(action.data)
      .filter((currency) => currency !== 'USDT');
    return {
      ...state,
      currencies: newCurrenciesArray,
      currentConversionValue: action.data,
    };
  }
  case 'ADD_NEW_EXPENSE': return {
    ...state,
    expenses: [...state.expenses, action.payload],
  };
  case 'REMOVE_EXPENSE': {
    const newExpensesArray = state.expenses
      .filter((expense) => expense.id === action.expense.id);
    return {
      ...state,
      expenses: newExpensesArray,
    };
  }
  default: return {
    ...state,
  };
  }
};

export default wallet;
