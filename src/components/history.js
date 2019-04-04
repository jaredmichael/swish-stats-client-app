import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class History extends React.Component { 

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
    const games = this.props.games.map((game, index) => (
            <li key={index}>
                {game}
            </li>
        ))
        return(
            <div className="history">
                <h1>Swish Stats Game History</h1>
                <div>
                    <ul id="gamesList">
                        {games}
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    games: state.games
});

export default requiresLogin()(connect(mapStateToProps)(History));