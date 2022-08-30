import React, { useState, useContext } from 'react';
import '../../index.css';
import './Login.css';
import { GlobalContext } from '../../context/GlobalState';
// import Main from '../Main';
const { loginHandler,signUpHandler } = require('./userChangeFunctions');

function LoginForm(props) {
  <GlobalContext />
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

  return (
    <div>
      <form className='login-forms' id='login-form' onSubmit={loginHandler}>
        <h2>Log In</h2>
        <div>
          <label for='user-login'>user:</label>
          <input type='text' id='user-login' />
        </div>
        <div>
          <label for='password-login'>password:</label>
          <input type='password' id='password-login' />
        </div>
        <div>
          <button type='submit'>Log Me In!</button>
        </div>
      </form>

      <form className='login-forms' id='signup-form' onSubmit={signUpHandler}>
        <h2>Sign Up</h2>
        <div>
          <label for='username-signup'>username:</label>
          <input type='text' id='username-signup' />
        </div>
        <div>
          <label for='email-signup'>email:</label>
          <input type='text' id='email-signup' />
        </div>
        <div>
          <label for='password-signup'>password:</label>
          <input type='password' id='password-signup' />
        </div>
        <div>
          <button type='submit'>Sign Me Up!</button>
        </div>
      </form>
    </div>
  );
};


export default LoginForm;
