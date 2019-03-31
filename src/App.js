import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page';
import LoginForm from './components/login-form';
import RegisterForm from './components/register-form';
import PlayerProfile from './components/player-profile';
import StatSheet from './components/stat-sheet';
import {refreshAuthToken} from '../actions.auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }


  render() {
    return (

      <Router>
        <div className="app">
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

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));