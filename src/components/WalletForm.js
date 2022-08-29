import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    // currencyInput: '',
    // methodInput: '',
    // tagInput: '',
  };

  componentDidMount() {
    const { getCurrenciesFromApi } = this.props;
    getCurrenciesFromApi();
  }

  creatCurrencySelectOpitionElement = () => {
    const { currencies } = this.props;
    console.log(this.props);
    return (
      <select
        name="currency-input"
        data-testid="currency-input"
      >
        { currencies.map((currency) => (
          <option
            key={ currency }
            value={ currency }
          >
            { currency }
          </option>
        ))}
      </select>
    );
  };

  render() {
    const {
      value,
      description,
      // currencyInput,
      // methodInput,
      // tagInput,
    } = this.state;
    return (
      <section>
        <div>Bem vindo ao Trybe Wallet!</div>
        <input
          type="number"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ this.handleChanges }
        />
        <input
          type="text"
          name="description"
          value={ description }
          data-testid="description-input"
          onChange={ this.handleChanges }
        />
        {/* <label htmlFor="currency-input">Choose a car:</label> */}
        { this.creatCurrencySelectOpitionElement() }
        <select
          name="method-input"
          id="method-input"
          data-testid="method-input"
        >
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
        <select
          name="tag-input"
          id="tag-input"
          data-testid="tag-input"
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
        {/* <button
          type="button"
          disabled={ isLoginButtonDisabled }
          onClick={ this.handleLoginClickButton }
        >
          Entrar
        </button> */}
      </section>
    );
  }
}

WalletForm.propTypes = {
  getCurrenciesFromApi: PropTypes.func.isRequired,
  currencies: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFromApi: () => dispatch(fetchAPI()) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
