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
                            <p className="career-avg-header">Career Averages</p>
                            <p className="ppg">PPG</p>
                            <p className="ast">AST</p>
                            <p className="reb">REB</p>
                            <p className="stl">STL</p>
                            <p className="fg">FG%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(CareerAvg));