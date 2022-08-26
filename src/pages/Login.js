import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogin } from '../redux/actions';

const MIN_PASSWORD_LENGTH = 6;

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isLoginButtonDisabled: true,
  };

  isValidEmail = (email) => String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  handleChanges = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { email, senha } = this.state;
      if (this.isValidEmail(email) && senha.length >= MIN_PASSWORD_LENGTH) {
        this.setState({ isLoginButtonDisabled: false });
      } else {
        this.setState({ isLoginButtonDisabled: true });
      }
    });
  };

  handleLoginClickButton = () => {
    const { email } = this.state;
    const { history, loginButton } = this.props;
    loginButton({ email });
    history.push('/carteira');
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
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginButton: (state) => dispatch(submitLogin(state)) });

Login.propTypes = {
  loginButton: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
