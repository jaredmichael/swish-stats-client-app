import React from 'react';
import NavBar from './nav-bar';
import PlayerCard from './player-card';
import History from './history';

export default class PlayerProfile extends React.Component {
    render() {
        return(
            <div className="player-profile">
                <NavBar />
                <PlayerCard />
                <History />
            </div>
        )
    }
}