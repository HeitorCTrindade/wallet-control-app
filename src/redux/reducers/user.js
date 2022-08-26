// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case 'SUCESS_LOGIN': return {
    ...state,
    ...action.payload,
  };
  default: return {
    ...state,
  };
  }
};

export default user;
