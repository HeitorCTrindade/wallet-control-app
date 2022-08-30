import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, addNewExpense } from '../redux/actions';

const DEFAULT_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  state = DEFAULT_STATE;

  componentDidMount() {
    const { getCurrenciesFromApi } = this.props;
    getCurrenciesFromApi();
  }

  creatCurrencySelectOpitionElement = () => {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <select
        name="currency"
        data-testid="currency-input"
        value={ currency }
        onChange={ this.handleChanges }
      >
        { currencies.map((currencyName) => (
          <option
            key={ currencyName }
            value={ currencyName }
          >
            { currencyName }
          </option>
        ))}
      </select>
    );
  };

  handleChanges = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNewExpenseClickButton = async () => {
    const { expenses, saveNewExpense } = this.props;
    const { getCurrenciesFromApi } = this.props;
    await getCurrenciesFromApi();
    const { currentConversionValue } = this.props;
    const newExpense = {
      id: expenses.length,
      ...this.state,
      exchangeRates: currentConversionValue,
    };
    saveNewExpense(newExpense);
    this.setState({ ...DEFAULT_STATE });
  };

  render() {
    const {
      value,
      description,
      method,
      tag,
    } = this.state;
    return ( // colocar dentro de um form quando for revisar!! + semantico
      <section>
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
        { this.creatCurrencySelectOpitionElement() }
        <select
          name="method"
          id="method-input"
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChanges }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag-input"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChanges }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="Trabalho">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleNewExpenseClickButton }
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

WalletForm.propTypes = {
  getCurrenciesFromApi: PropTypes.func.isRequired,
  saveNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  currentConversionValue: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFromApi: () => dispatch(fetchAPI()),
  saveNewExpense: (newExpense) => dispatch(addNewExpense(newExpense)) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  currentConversionValue: state.wallet.currentConversionValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
