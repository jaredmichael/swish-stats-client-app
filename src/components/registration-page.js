import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegisterFrom from './register-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/player-profile" />;
    }
    return (
        <div className="register-page">
            <h2>Register for Swish Stats</h2>
            <RegistraterForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currectUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);