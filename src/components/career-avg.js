import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class CareerAvg extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return(
            <div className="career-row">
                <div className="col-4">                
                    <div className="career-card">
                        <div className="averages-row">
                            <h1 className="career-avg-header">Career Averages</h1>
                            <div id="ppg" name="ppg" className="ppg">PPG: {this.props.ppg}</div>
                            <div id="ast" name="ast" className="ast">AST: {this.props.ast}</div>
                            <div id="reb" name="reb"className="reb">REB: {this.props.reb}</div>
                            <div id="stl" name="stl"className="stl">STL: {this.props.stl}</div>
                            <div id="fg" name="fg"className="fg">FG%: {this.props.fg}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
};

export default requiresLogin()(connect(mapStateToProps)(CareerAvg));