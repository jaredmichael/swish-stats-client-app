import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './nav-bar.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        return (<Redirect to="/" />);
    }

    render() {
        //Only render log-out/new stat sheet if we are logged in 
        let logOutButton;
        let newStatSheet;
        let profile;
        if (this.props.loggedIn) {
            logOutButton = (
                <h3>
                    <Link className="nav" onClick={() => this.logOut()} to="/">LOG OUT</Link>
                </h3>
            );
            newStatSheet = (
                <h3>
                    <Link to="/stats-card" className="nav">+ STAT SHEET</Link> 
                </h3>
            );
            profile = (
                <h3>
                    <Link to="/player-profile" className="nav">PROFILE</Link>
                </h3>
            );

        } 
        //Only render login/register if we are logged out
        let login;
        let register;
        if (!this.props.loggedIn) {
            login = (
                <h3>
                    <Link to="/login-form" className="nav">LOGIN</Link>
                </h3>
            );
            register = (
                <h3>
                    <Link to='/registration-page' className="nav">REGISTER</Link>
                </h3>
            );
        }
        
        return (
            
            <div className="nav-bar">
                <header>
                    <h1 className="header"><Link to="/" >SWISH STATS</Link></h1>
                    <ul className="top-nav">
                        <li className="nav-bar">{login}</li>
                        <li className="nav-bar">{register}</li>
                        <li className="nav-bar">{profile}</li>
                        <li className="nav-bar">{newStatSheet}</li>
                        <li className="nav-bar">{logOutButton}</li>
                    </ul>
                </header>            
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps,
    null,
    null,
    {
        pure: false
    }
    )(NavBar));