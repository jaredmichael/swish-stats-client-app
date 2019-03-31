import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/player-profile" />;
    }
    return (
        <div className="player-profile">
            <h2>Login to Swish Stats</h2>
            <LoginForm />
        </div>
    );
}