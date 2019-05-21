import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './login-form.css';
import NavBar from './nav-bar';


export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        if (this.props.loggedIn) {
            return (<Redirect to="/player-profile" />);
        } 
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return(
            <div className="login-page">
                <NavBar />
                <div className="login-card">
                    <h2>LOGIN PLAYER</h2>
                    <form 
                        className="login-form"
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}>
                        {error}

                        <label htmlFor="username">Username</label>
                        <Field 
                        component={Input} 
                        name="username"
                        id="username"
                        type="text"
                        validate={[required, nonEmpty]}
                        />
                        <label htmlFor="password">Password</label>
                        <Field 
                        component={Input} 
                        name="password"
                        id="password"
                        type="password"
                        validate={[required, nonEmpty]}
                        />
                        <button disabled={this.props.pristine || this.props.submitting}>
                            LOGIN
                        </button>
                    </form>
                </div>
                <div className="demo">
                        <h3 id="demo">TRY A LIVE DEMO</h3>
                        <button className="demo" onClick={e => this.props.dispatch(login('demoUSER', '$wi$hStatS'))}>DEMO</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default reduxForm({
    form: 'login',
    onSubmitFail: (error, dispatch) => dispatch(focus('login', 'username'))
})(connect(mapStateToProps)(LoginForm));