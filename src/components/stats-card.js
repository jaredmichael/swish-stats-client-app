import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import NavBar from './nav-bar';
import PlayerCard from './player-card';
import StatSheet from './stat-sheet';
import { getStatSheetById } from '../actions/stat-sheet';
import { setStats } from '../actions/actions';

export class StatsCard extends React.Component {
    componentDidMount() {
        if (this.props.match.params.statsId) {
            this.props.dispatch(getStatSheetById(this.props.match.params.statsId));
        } else {
            this.props.dispatch(setStats({
                date: '',
                vs: '',
                ast: '0',
                twoShot: '0',
                threeShot: '0',
                ftShot: '0',
                oReb: '0',
                stl: '0',
                twoMade: '0',
                threeMade: '0',
                ftMade: '0',
                dReb: '0',
                blk: '0',
                twoPer: '0',
                threePer: '0',
                ftPer: '0',
                totReb: '0',
                to: '0'
            }))
        }
    }

    componentDidUpdate() {
            this.props.dispatch(getStatSheetById(this.props.match.params.statsId));
    }

    render() {
        return (
            <div>
                <NavBar />
                <PlayerCard />
                <StatSheet />
            </div>
        )
    };
}

export default requiresLogin()(connect()(StatsCard));