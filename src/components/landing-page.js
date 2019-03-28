import React from 'react';

import NavBar from './nav-bar.js';

export default class LandingPage extends React.Component {
    
    render() {
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
}