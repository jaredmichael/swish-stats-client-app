import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import NavBar from './nav-bar.js';
import './landing-page.css';

export function LandingPage(props) {
    //if logged in redirect to player-profile
    if (props.loggedIn) {
        return (<Redirect to="/player-profile" />);
    }
    
    return(
        <div className="landing-page">
            <main role="main">
            <NavBar />
                <div className="app-info">
                <h3 className="landing-page">THE ULTIMATE BASKETBALL STAT TRACKER</h3>            
                    <div className="row" id="landing-page">
                        
                        <div className="col-3">
                            <div className="info-card">
                            <i className="material-icons">account_box</i>

                                <div className="card-label">
                                    <p>CREATE PLAYER PROFILE</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3"> 
                            <div className="info-card">
                                <i className="material-icons">assignment</i>
                                <div className="card-label">
                                    <p>COMPILE GAME STATS</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-3">
                            <div className="info-card">
                                <i className="material-icons">assessment</i>
                                <div className="card-label">
                                    <p>TRACK CAREER AVERAGES</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-3">
                            <div className="info-card">
                                <i className="material-icons">history</i>
                                <div className="card-label">
                                    <p>SAVE GAME HISTORY</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <h3 className="landing-page">REGISTER ABOVE AND LET SWISH STATS ASSIST YOUR ATHLETIC JOURNEY</h3>            

                </div>

            </main>
        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));