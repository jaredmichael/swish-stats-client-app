import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav-bar';
import {statSheet, addGame} from '../actions/actions';
import requiresLogin from './requires-login';

export class StatSheet extends React.Component {
    onSubmit(values) {
        const {date, vs, ast, twoShot, threeShot, ftShot, oReb, stl, twoMade, threeMade, ftMade, dReb, blk, twoPer, threePer, ftPer, totReb, to} = values;
        const stats = {date, vs, ast, twoShot, threeShot, ftShot, oReb, stl, twoMade, threeMade, ftMade, dReb, blk, twoPer, threePer, ftPer, totReb, to};
        return this.props
            .dispatch(statSheet(stats))
            .then(() => this.props.dispatch(addGame(date, vs)));
    }
    
    render () {
        return(
            <div>
            <NavBar />

            <form className="stat-sheet" 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                )}>
                <div className="stat-header">
                    <ul>
                        <li>Date:<input type="text" class="date" required></input></li>
                        <li>{this.props.firstName} {this.props.lastName}</li>
                        <li>VS. <input type="text" class="vs" required></input></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>2PT</li>
                        <li>3PT</li>
                        <li>FT</li>
                        <li>REB</li>
                        <li>
                            AST
                            <button 
                                id="ast"
                                name="ast" 
                                className="ast"
                                >{this.props.ast}
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Shot
                            <button 
                                id="twoShot"
                                name="twoShot" 
                                className="twoShot"
                                >{this.props.twoShot}
                            </button>
                        </li>
                        <li>
                            Shot
                            <button 
                                
                                id="threeShot"
                                name="threeShot" 
                                className="threeShot"
                                >{this.props.threeShot}
                            </button>
                        </li>
                        <li>
                            Shot
                            <button 
                                id="ftShot"
                                name="ftShot" 
                                className="ftShot"
                                >{this.props.ftShot}
                            </button>
                        </li>
                        <li>      
                            OFF
                            <button 
                                id="oReb"
                                name="oReb" 
                                className="oReb"
                                >{this.props.oReb}
                            </button>
                        </li>
                        <li>
                            STL
                            <button 
                                id="stl"
                                name="stl" 
                                className="stl"
                                >{this.props.stl}
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Made
                            <button 
                                id="twoMade"
                                name="twoMade" 
                                className="twoMade"
                                >{this.props.twoMade}
                            </button>
                        </li>
                        <li>
                            Made
                            <button 
                                id="threeMade"
                                name="threeMade" 
                                className="threeMade"
                                >{this.props.threeMade}
                            </button>
                        </li><li>
                            Made
                            <button 
                                id="ftMade"
                                name="ftMade" 
                                className="ftMade"
                                >{this.props.ftMade}
                            </button>
                        </li><li>
                            DEF
                            <button 
                                id="dReb"
                                name="dReb" 
                                className="dReb"
                                >{this.props.dReb}
                            </button>
                        </li>
                        <li>
                            BLK
                            <button 
                                id="blk"
                                name="blk" 
                                className="blk"
                                >{this.props.blk}
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li>
                            2PT%
                            <button 
                                id="twoPer"
                                name="twoPer" 
                                className="twoPer"
                                >{this.props.twoPer}
                            </button>
                        </li>
                        <li>
                            3PT%
                            <button 
                                id="threePer"
                                name="threePer" 
                                className="threePer"
                                >{this.props.threePer}
                            </button>
                        </li><li>
                            FT%
                            <button 
                                id="ftPer"
                                name="ftPer" 
                                className="ftPer"
                                >{this.props.ftPer}
                            </button>
                        </li><li>
                            TOT
                            <button 
                                id="totReb"
                                name="totReb" 
                                className="totReb"
                                >{this.props.totReb}
                            </button>
                        </li>
                        <li>
                            TO
                            <button 
                                id="to" 
                                name="to" 
                                className="to"
                            >{this.props.to}
                            </button>
                        </li>
                    </ul>
                </div>
                <button
                    type="submit"
                    name="submit"
                    id="submitSheet"
                    className="submitSheetButton"
                >Save Swish Stats Sheet
                </button>
            </form>
        </div>
        );
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

export default requiresLogin()(connect(mapStateToProps)(StatSheet));