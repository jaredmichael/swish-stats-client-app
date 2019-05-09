import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page';
import LoginForm from './components/login-form';
import PlayerProfile from './components/player-profile';
import StatsCard from './components/stats-card';
import {refreshAuthToken} from './actions/auth';
import {connect} from 'react-redux';
import { RegistrationPage } from './components/registration-page';

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
        <div className="app">
          <main>
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login-form" component={LoginForm} />
            <Route exact path="/registration-page" component={RegistrationPage} />
            <Route exact path="/player-profile" component={PlayerProfile} />
            <Route exact path="/stats-card" component={StatsCard} />
            <Route exact path="/stats-card/:statsId" component={StatsCard} />

            </Switch>
          </main>
        </div>

    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);