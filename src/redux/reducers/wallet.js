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
      .filter((expense) => expense.id !== action.expenseId);
    return {
      ...state,
      expenses: newExpensesArray,
    };
  }
  case 'ALLOWS_EDIT_EXPENSE': {
    return {
      ...state,
      editor: true,
      idToEdit: action.idToEdit,
    };
  }
  case 'EDIT_EXPENSE': {
    console.log(action.payload);
    const newExpensesArray = state.expenses
      .map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      });
    return {
      ...state,
      expenses: newExpensesArray,
      editor: false,
      idToEdit: 0,
    };
  }
  default: return {
    ...state,
  };
  }
};

export default wallet;
