import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {Link} from 'react-router-dom';
import './history.css';
import { getAllStatSheet } from '../actions/stat-sheet';


export class History extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllStatSheet(this.props.stats));
    }

    render() {
        let statSheet;
        if (this.props.stats) {
            statSheet = this.props.stats.map((statSheet, index) => (
                <li key={index}>
                    <Link to={'/stats-card/' + statSheet.statsId}>{statSheet.date} VS {statSheet.vs} </Link>
                </li>
            ))
        }
        return (
            <div className="history-card">
                <h2>GAME HISTORY</h2>
                <div>
                    <ul id="statsHistory">
                        {statSheet}
                    </ul>
                </div>
            </div>
        );
    }
}

History.defaultProps = {
    stats: [],
};


const mapStateToProps = state => ({
    stats: state.stats.stats || []
});

export default requiresLogin()(connect(mapStateToProps)(History));