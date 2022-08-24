import React, {useState, useContext} from "react";
import '../../index.css';
import './login.css';
import { GlobalContext } from '../../context/GlobalState';

const LoginForm = () => {

    return (
        <div>
            <form class="login-forms" id="login-form">
                <h2>Log In</h2>
                <div>
                    <label for="email-login">email:</label>
                    <input type="text" id="email-login" />
                </div>
                <div>
                    <label for="password-login">password:</label>
                    <input type="password" id="password-login" />
                </div>
                <div>
                    <button type="submit">Log Me In!</button>
                </div>
            </form>

            <form class="login-forms" id="signup-form">
                <h2>Sign Up</h2>
                <div>
                    <label for="username-signup">username:</label>
                    <input type="text" id="username-signup" />
                </div>
                <div>
                    <label for="email-signup">email:</label>
                    <input type="text" id="email-signup" />
                </div>
                <div>
                    <label for="password-signup">password:</label>
                    <input type="password" id="password-signup" />
                </div>
                <div>
                    <button type="submit">Sign Me Up!</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;