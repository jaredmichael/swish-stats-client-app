import React from 'react';

export default class PlayerCard extends React.Component {
    render() {
        return(            
            <div className="player-row">
                <div className="col-4">                    
                    <div className="player-card">                        
                        <div className="player-row">
                            <p className="jersey-number">001</p>
                            <p className="first-name">Jared</p>
                            <p className="last-name">Juan</p>
                        </div>
                        <div className="info-row">
                            <p className="age">Age</p>
                            <p className="height">Height</p>
                            <p className="position">Position</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}