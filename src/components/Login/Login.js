import React, {useState, useContext} from "react";
import '../../index.css';
import './login.css';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function LoginForm(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div>
            <form class="login-forms" id="login-form" onSubmit={handleFormSubmit}>
                <h2>Log In</h2>
                <div>
                    <label htmlFor="email-login">Email address:</label>
                    <input
                        placeholder="youremail@email.com"
                        name="email"
                        type="email"
                        id="email-login"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password-login">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="password-login"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">Email or password not recognized. Please try again or sign up if you do not already have an account.</p>
                    </div>
                ) : null}
                <div>
                    <button type="submit">Log Me In!</button>
                    <Link to="/signup">← Go to Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;