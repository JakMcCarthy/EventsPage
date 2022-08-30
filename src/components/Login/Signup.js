import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
        <form class="login-forms" id="signup-form" onSubmit={handleFormSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username-signup">Username:</label>
                <input
                    placeholder="New-User123"
                    name="username"
                    type="username"
                    id="username-signup"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email-signup">Email Address:</label>
                <input
                    placeholder="youremail@email.com"
                    name="email"
                    type="email"
                    id="email-signup"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password-signup">Password:</label>
                <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password-signup"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Sign Me Up!</button>
                <Link to="/login">← Go to Login</Link>
            </div>
        </form>
      );
    }
    
export default Signup;