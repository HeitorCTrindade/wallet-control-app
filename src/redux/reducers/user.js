// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
  case 'SUCESS_LOGIN': return {
    ...state,
    user: {
      email: payload.email,
    },
  };
  default: return {
    state,
  };
  }
};

export default user;
