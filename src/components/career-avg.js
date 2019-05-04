import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './career-avg.css';

export class CareerAvg extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="career-card">
                <div className="averages-row">
                    <h2>CAREER AVERAGES</h2>
                    <div id="ppg" name="ppg" className="avg-stat">PPG: {this.props.ppg}</div>
                    <div id="ast" name="ast" className="avg-stat">AST: {this.props.ast}</div>
                    <div id="reb" name="reb" className="avg-stat">REB: {this.props.reb}</div>
                    <div id="stl" name="stl" className="avg-stat">STL: {this.props.stl}</div>
                    <div id="fg" name="fg" className="avg-stat">FG%: {this.props.fg}</div>
                </div>
            </div>
        )
    }
}

export default requiresLogin()(connect()(CareerAvg));