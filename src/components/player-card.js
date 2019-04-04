import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class PlayerCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return(            
            <div className="player-row">
                <div className="col-4">                    
                    <div className="player-card">                        
                        <div className="player-row">
                            <p className="jersey-number">{this.props.jerseyNum}</p>
                            <p className="first-name">{this.props.firstName}</p>
                            <p className="last-name">{this.props.lastName}</p>
                        </div>
                        <div className="info-row">
                            <p className="age">{this.props.age}</p>
                            <p className="height">{this.props.height}</p>
                            <p className="position">{this.props.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(PlayerCard));