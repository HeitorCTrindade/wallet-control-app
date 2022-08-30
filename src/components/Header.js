import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  calcTotalExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses);
    let totalExpense = 0;
    expenses.forEach((element) => {
      const { currency, value } = element;
      const { ask } = element.exchangeRates[currency];
      const currencyInBrlValue = value * ask;
      totalExpense += currencyInBrlValue;
      console.log(`${currency} --- ${value} x ${ask} = ${totalExpense}`);
    });
    return totalExpense.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3> TRYBE WALLET APP </h3>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h3 data-testid="total-field">
          { this.calcTotalExpenses() }
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
