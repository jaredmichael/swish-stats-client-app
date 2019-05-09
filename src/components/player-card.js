import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './player-card.css';

export class PlayerCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="player-card">
                <h2>PLAYER CARD</h2>
                <div className="player-row">
                    <div id="player" className="col-6">
                        <p className="hashtag">#</p>
                        <p className="jersey-number">{this.props.user.jerseyNum}</p>
                    </div>
                    <div id="player" className="col-6">
                        <p className="first-name">{this.props.user.firstName}</p>
                        <p className="last-name">{this.props.user.lastName}</p>
                    </div>
                </div>

                <div className="player-row">
                    <div id="player" className="col-4">
                        <h3>AGE</h3>
                        <p className="age">{this.props.user.age}</p>
                    </div>
                    <div id="player" className="col-4">
                        <h3>HEIGHT</h3>
                        <p className="height">{this.props.user.height}</p>
                    </div>
                    <div id="player" className="col-4">
                        <h3>POSITION</h3>
                        <p className="position">{this.props.user.position}</p>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        user: currentUser
    };
};

export default requiresLogin()(connect(mapStateToProps)(PlayerCard));