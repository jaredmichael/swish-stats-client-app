import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegisterForm extends React.Component {
    
    onSubmit(values) {
        const {username, password, firstName, lastName, jerseyNum, age, height, position} = values;
        const user = {username, password, firstName, lastName, jerseyNum, age, height, position};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }
    

    render() {
        return (
            <form 
                className="register-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First Name</label>
                <Field 
                    component={Input}
                    type="text" 
                    name="firstName"
                    id="firstName"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="lastName">Last Name</label>
                <Field
                    component={Input}
                    type="text" 
                    name="lastName"
                    id="lastName"
                    validate={[required, nonEmpty,isTrimmed]}
                />                
                <label htmlFor="jerseyNum">Jersey Number</label>
                <Field
                    component={Input}
                    type="number" 
                    name="jerseyNum"
                    id="jerseyNum"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="age">Age</label>
                <Field
                    component={Input} 
                    type="number" 
                    name="age"
                    id="age"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="height">Height</label>
                <Field
                    component={Input} 
                    type="text" 
                    name="height"
                    id="height"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="position">Position</label>
                <Field
                    component={Input} 
                    type="text" 
                    name="position"
                    id="position"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text" 
                    name="username"
                    id="username"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field 
                    component={Input}
                    type="password" 
                    name="password"
                    id="password"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <Field
                    component={Input}
                    type="password" 
                    name="password"
                    id="password"
                    validate={[required, nonEmpty,isTrimmed]}
                />
                <button type="submit-register"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterForm);