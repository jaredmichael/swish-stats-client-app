import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page';
import LoginForm from './components/login-form';
import RegisterForm from './components/register-form';
import PlayerProfile from './components/player-profile';
import StatSheet from './components/stat-sheet';

export default class App extends React.Component {
  render() {
    return (    
      <Router>
        <div className="alertBox">
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login-form" component={LoginForm} />
            <Route exact path="/register-form" component={RegisterForm} />
            <Route exact path="/player-profile" component={PlayerProfile} />
            <Route exact path="/stat-sheet" component={StatSheet} />
          </main>
        </div>
      </Router>
    );
  }
}