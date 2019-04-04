import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        //Only render log-out if we are logged in 
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log Out</button>
            );
        } 
        //Only render login/register if we are logged out
        let login;
        let register;
        if (!this.props.loggedIn) {
            login = (
                <button><Link to="./login-form">Login</Link></button>
            );
            register = (
                <button><Link to='./register-form'>Register</Link></button>
            );
        }
        
        return (
            <Router>
            <div className="nav-bar">
                <header>
                    <h1><Link to="/">Swish Stats</Link></h1>
                    <ul>
                        <li>{login}</li>
                        <li>{register}</li>
                        <li>{logOutButton}</li>
                    </ul>
                </header>            
            </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);