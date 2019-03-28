import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <Router>
            
            <div className="nav-bar">
                <header>
                    <h1><Link to="/">Swish Stats</Link></h1>
                    <p><Link to="./login-form">Login</Link></p>
                    <p><Link to="./register-form">Register</Link></p>
                </header>            
            </div>

            </Router>

        );
    }
}