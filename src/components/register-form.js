import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import SelectList from 'react-widgets/lib/SelectList';
import 'react-widgets/dist/css/react-widgets.css';
import './register-form.css';


const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');
const ageMinMax = length({min: 1, max: 99});

export class RegisterForm extends React.Component {
    onSubmit(values) {
        values.jerseyNum = parseInt(values.jerseyNum);
        values.age = parseInt(values.age);
        const {username, password, firstName, lastName, jerseyNum, age, height, position} = values;
        const user = {username, password, firstName, lastName, jerseyNum, age, height, position};
        return this.props.dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)))
    }
    

    render() {
        if (this.props.loggedIn) {
            return (<Redirect to="/player-profile" />);
        }

        const renderSelectList = ({ input, data }) =>
            <SelectList {...input}
            onBlur={() => input.onBlur()}
            data={data} />
        return (
            <div className="register-card">
                <main role="main">
                    <h2>REGISTER PLAYER</h2>
                    <form 
                        className="register-form"
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}>
                        <div id="register-info" className="row">
                            <div className="col-6">
                                <label htmlFor="firstName">First Name</label>
                                <Field 
                                    component={Input}
                                    type="text" 
                                    name="firstName"
                                    id="firstName"
                                    validate={[required, nonEmpty]}
                                />
                                              
                                <label htmlFor="jerseyNum">Jersey Number</label>
                                <Field
                                    component={Input}
                                    type="text" 
                                    name="jerseyNum"
                                    id="jerseyNum"
                                    defaultValue={24}
                                    validate={[required, nonEmpty]}
                                />
                                <label htmlFor="age">Age</label>
                                <Field
                                    component={Input} 
                                    type="text" 
                                    name="age"
                                    id="age"
                                    defaultValue="16"
                                    validate={[required, ageMinMax, nonEmpty]}
                                />
                                <label htmlFor="height">Height</label>
                                <Field
                                    component={Input} 
                                    type="text" 
                                    name="height"
                                    id="height"
                                    defaultValue={["6'1"]}
                                    validate={[required, nonEmpty]}
                                />
                                
                            </div>

                            <div className="col-6">
                                <label htmlFor="lastName">Last Name</label>
                                <Field
                                    component={Input}
                                    type="text" 
                                    name="lastName"
                                    id="lastName"
                                    validate={[required, nonEmpty]}
                                />  

                                <label id="pos" htmlFor="position">Position</label>
                                <Field
                                    component={renderSelectList} 
                                    name="position"
                                    id="position"
                                    data={[ "Guard", "Forward", "Center" ]}
                                    validate={[required]}
                                />
                            </div>
                        </div>
                        
                            <label htmlFor="username">Username</label>
                            <Field
                                component={Input}
                                type="text" 
                                name="username"
                                id="username"
                                validate={[required, nonEmpty, isTrimmed]}
                            />
                            <label htmlFor="password">Password</label>
                            <Field 
                                component={Input}
                                type="password" 
                                name="password"
                                id="password"
                                validate={[required, passwordLength, isTrimmed]}
                            />
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                            <Field
                                component={Input}
                                type="password" 
                                name="passwordConfirm"
                                id="passwordConfirm"
                                validate={[required, nonEmpty, matchesPassword]}
                            />
                            <button type="submit"
                                disabled={this.props.pristine || this.props.submitting}>
                                REGISTER
                            </button>                  
                    </form>
                </main>
            </div>
        );
    }
}  

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) => {
        if (errors) {
        dispatch(focus('register', Object.keys(errors)[0]))
        }
    }

})(connect(mapStateToProps)(RegisterForm));



