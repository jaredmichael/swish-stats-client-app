import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegisterForm extends React.Component {
    
    
    render() {
        return (
            <form className="register-form">
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName"
                    id="firstName"
                    required
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    id="lastName"
                    required
                />                
                <label htmlFor="jerseyNum">Jersey Number</label>
                <input 
                    type="number" 
                    name="jerseyNum"
                    id="jerseyNum"
                    required
                />
                <label htmlFor="age">Age</label>
                <input 
                    type="number" 
                    name="age"
                    id="age"
                    required
                />
                <label htmlFor="height">Height</label>
                <input 
                    type="text" 
                    name="height"
                    id="height"
                    required
                />
                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    name="position"
                    id="position"
                    required
                />
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    id="username"
                    required
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    required
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    required
                />
                <button type="submit-register">Register</button>
            </form>
        );
    }
}
