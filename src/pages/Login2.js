import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogin } from '../redux/actions';

const MIN_PASSWORD_LENGTH = 6;

function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const isValidEmail = (inputEmail) => String(inputEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  const handleChanges = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleLoginClickButton = () => {
    const { history, loginButton } = props;
    loginButton(email);
    history.push('/carteira');
  };

  useEffect(() => {
    const verifyLoginRequest = () => {
      if (isValidEmail(email) && password.length >= MIN_PASSWORD_LENGTH) {
        setIsLoginButtonDisabled({ isLoginButtonDisabled: false });
      } else {
        setIsLoginButtonDisabled({ isLoginButtonDisabled: true });
      }
    };
    verifyLoginRequest();
  }, [email, password]);

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
        name="senha"
        value={ senha }
        data-testid="password-input"
        onChange={ handleChanges }
      />
      <button
        type="button"
        disabled={ isLoginButtonDisabled }
        data-testid="button-login"
        onClick={ handleLoginClickButton }
      >
        Entrar
      </button>
    </main>
  );
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
