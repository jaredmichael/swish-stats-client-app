import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegisterForm from './register-form';
import NavBar from './nav-bar';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/player-profile" />;
    }
    return (
        <div className="register-page">
            <NavBar />
            <RegisterForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);