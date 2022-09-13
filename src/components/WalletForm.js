import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, addNewExpense, editExpense } from '../redux/actions';

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

  handleEditExpenseClickButton = async () => {
    const { expenses, saveEditExpense, idToEdit } = this.props;
    const newExpense = {
      id: idToEdit,
      ...this.state,
      exchangeRates: expenses[idToEdit].exchangeRates,
    };
    saveEditExpense(newExpense);
    this.setState({ ...DEFAULT_STATE });
  };

  generateRegularFormElements = () => {
    const {
      value,
      description,
      method,
      tag,
    } = this.state;
    return (
      <div>
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
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleNewExpenseClickButton }
          data-testid="add-button"
        >
          Adicionar despesa
        </button>
      </div>
    );
  };

  generateEditorFormElements = () => {
    // const { idToEdit, expenses } = this.props;
    // const currencyToEdit = expenses[idToEdit];
    const {
      value,
      description,
      method,
      tag,
    } = this.state;

    return (
      <div>
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
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          data-testid="edit-button"
          onClick={ () => this.handleEditExpenseClickButton() }
        >
          Editar despesa
        </button>
      </div>
    );
  };

  render() {
    const { editor } = this.props;
    return ( // colocar dentro de um form quando for revisar!! + semantico
      <section>
        { editor
          ? this.generateEditorFormElements()
          : this.generateRegularFormElements()}
      </section>
    );
  }
}

WalletForm.propTypes = {
  getCurrenciesFromApi: PropTypes.func.isRequired,
  saveNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  currentConversionValue: PropTypes.shape(
    PropTypes.object.isRequired,
  ).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  saveEditExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFromApi: () => dispatch(fetchAPI()),
  saveNewExpense: (newExpense) => dispatch(addNewExpense(newExpense)),
  saveEditExpense: (editedExpense) => dispatch(editExpense(editedExpense)) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  currentConversionValue: state.wallet.currentConversionValue,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
