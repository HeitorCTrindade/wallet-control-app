import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  handleDeleteButton = (expenseId) => {
    const { deleteExpense } = this.props;
    deleteExpense(expenseId);
  };

  fillTableDescription = () => {
    const { expenses } = this.props;
    const tableElement = expenses.map((element) => {
      const {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      } = element;
      return (
        <tr key={ id }>
          <td className="tg-0lax">{ description }</td>
          <td className="tg-buh4">{ tag }</td>
          <td className="tg-0lax">{ method }</td>
          <td className="tg-buh4">{ parseFloat(value).toFixed(2) }</td>
          <td className="tg-0lax">{ exchangeRates[currency].name }</td>
          <td className="tg-buh4">
            { parseFloat(exchangeRates[currency].ask).toFixed(2) }
          </td>
          <td className="tg-0lax">
            {this.convertCurrencyValue(value, exchangeRates[currency].ask) }
          </td>
          <td className="tg-buh4">Real</td>
          <td className="tg-0lax">
            <button
              type="button"
              onClick={ () => this.handleDeleteButton(id) }
              data-testid="delete-btn"
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
    return tableElement;
  };

  convertCurrencyValue = (sourceCurrency, convertCurrency) => (
    parseFloat(sourceCurrency) * parseFloat(convertCurrency)).toFixed(2);

  render() {
    return (
      <div>
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-0lax">Descrição</th>
              <th className="tg-0lax">Tag</th>
              <th className="tg-0lax">Método de pagamento</th>
              <th className="tg-0lax">Valor</th>
              <th className="tg-0lax">Moeda</th>
              <th className="tg-0lax">Câmbio utilizado</th>
              <th className="tg-0lax">Valor convertido</th>
              <th className="tg-0lax">Moeda de conversão</th>
              <th className="tg-0lax">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.fillTableDescription()}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(removeExpense(expenseId)) });

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
