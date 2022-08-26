import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <section>
        <div>Bem vindo ao Trybe Wallet!</div>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleChanges }
        />
        <input
          type="password"
          name="senha"
          value={ senha }
          data-testid="password-input"
          onChange={ this.handleChanges }
        />
        <button
          type="button"
          disabled={ isLoginButtonDisabled }
          onClick={ this.handleLoginClickButton }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default WalletForm;
