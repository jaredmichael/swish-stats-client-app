import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import NavBar from './nav-bar.js';

export function LandingPage(props) {
    //if logged in redirect to player-profile
    if (props.loggedIn) {
        return <Redirect to="/player-profile" />
    }
    
    return(
        <div className="landing-page">
            <NavBar />
            <main role="main">
                <div class="app-info">
                    <p>
                        Swish Stats assists you on your athletic journey. 
                        Create a player profile and keep history of your stats game by game.   
                        Track your career averages and learn where you can improve.
                        Share your best with friends, family or prospective scouts.  
                    </p>                    
                </div>

            </main>
        </div>
        );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);