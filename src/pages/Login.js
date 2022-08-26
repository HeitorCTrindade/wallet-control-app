import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isLoginButtonDisabled: true,
  };

  render() {
    const { email, senha, isLoginButtonDisabled } = this.state;
    return (
      <main>
        <div>Bem vindo ao Trybe Wallet!</div>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ handleChanges }
        />
        <input
          type="password"
          name="password"
          value={ senha }
          data-testid="password-input"
          onChange={ handleChanges }
        />
        <button
          type="button"
          disabled={ isLoginButtonDisabled }
          onClick={ handleChanges }
        >
          Entrar
        </button>
      </main>
    );
  }
}

export default Login;
