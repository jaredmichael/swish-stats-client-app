import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { Field, reduxForm, focus } from 'redux-form';
import { addCount, subtractCount, setStats } from '../actions/actions';
import { createStatSheet, getStatSheetById, deleteStatSheet, updateStatSheet } from '../actions/stat-sheet';
import './stat-sheet.css';

export class StatSheet extends React.Component {
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
    onDelete() {
        this.props.dispatch(deleteStatSheet(this.props.statSheet.statsId))
        .then(e => {
            this.props.history.push('/player-profile')
        })
    }

    onSubmit(values) {
        values.statsId = this.props.statSheet.statsId;
        values.ast = parseInt(this.props.statSheet.ast);
        values.twoShot = parseInt(this.props.statSheet.twoShot);
        values.threeShot = parseInt(this.props.statSheet.threeShot);
        values.ftShot = parseInt(this.props.statSheet.ftShot);
        values.oReb = parseInt(this.props.statSheet.oReb);
        values.stl = parseInt(this.props.statSheet.stl);
        values.twoMade = parseInt(this.props.statSheet.twoMade);
        values.threeMade = parseInt(this.props.statSheet.threeMade);
        values.ftMade = parseInt(this.props.statSheet.ftMade);
        values.dReb = parseInt(this.props.statSheet.dReb);
        values.blk = parseInt(this.props.statSheet.blk);
        values.points = parseInt(this.props.statSheet.points);
        values.twoPer = parseInt(this.props.statSheet.twoPer);
        values.threePer = parseInt(this.props.statSheet.threePer);
        values.ftPer = parseInt(this.props.statSheet.ftPer);
        values.totReb = parseInt(this.props.statSheet.totReb);
        values.to = parseInt(this.props.statSheet.to);

        if(this.props.statSheet.statsId) {
            this.props.dispatch(updateStatSheet(values))
            .then(e => {
                this.props.history.push('/player-profile')
            })
            .then(setStats({}))
        } else {
            this.props.dispatch(createStatSheet(values))
            .then(e => {
                this.props.history.push('/player-profile')
            })
            .then(setStats({}))
        }
    }

    render() {
        let twoPer = 0;
        if (this.props.statSheet.twoMade >= 1 || this.props.statSheet.twoShot >= 1) {
            twoPer = Math.floor((this.props.statSheet.twoMade / this.props.statSheet.twoShot) * 100);
        } else {
            twoPer = 0;
        }

        let threePer = 0;
        if (this.props.statSheet.threeMade >= 1 || this.props.statSheet.threeShot >= 1) {
            threePer = Math.floor((this.props.statSheet.threeMade / this.props.statSheet.threeShot) * 100);
        } else {
            threePer = 0;
        }

        let ftPer = 0;
        if (this.props.statSheet.ftMade >= 1 || this.props.statSheet.ftShot >= 1) {
            ftPer = Math.floor((this.props.statSheet.ftMade / this.props.statSheet.ftShot) * 100);
        } else {
            ftPer = 0;
        }


        let totReb = 0;
        if (this.props.statSheet.oReb >= 1 || this.props.statSheet.dReb >= 1) {
            totReb = parseInt(this.props.statSheet.oReb) + parseInt(this.props.statSheet.dReb)
        } else {
            totReb = 0;
        }

        let points = 0;
        if (this.props.statSheet.twoMade >= 1 || this.props.statSheet.threeMade >= 1 || this.props.statSheet.ftMade >= 1) {
            points = (parseInt(this.props.statSheet.twoMade) * 2) + (parseInt(this.props.statSheet.threeMade) * 3) + parseInt(this.props.statSheet.ftMade)
        } else {
            points = 0;
        }


        return (
            <div className="stat-card">
                <h2>STAT SHEET</h2>

                <form
                    className="stat-sheet"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <div className="row" id="date-vs">
                        <div className="col-6" id="date">
                            <div className="date">
                                <label htmlFor="date"><h3>DATE</h3></label>
                                <Field
                                    component={Input}
                                    type="date"
                                    name="date"
                                    id="date"
                                    validate={[required, nonEmpty]}
                                />
                            </div>
                        </div>
                        <div className="col-6" id="vs">
                            <div className="vs">
                                <label htmlFor="vs"><h3>VERSUS</h3></label>
                                <Field
                                    component={Input}
                                    type="text"
                                    name="vs"
                                    id="vs"
                                    validate={[required, nonEmpty]}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="row" id="twoPts">
                        <div className="col-3" id="stat-sheet">
                            <h4 className="twoPt">2PT</h4>
                        </div>
                        <div className="col-3" id="stat-sheet">
                            <h3>SHOT</h3>
                            <p className="count">{this.props.statSheet.twoShot}</p>

                            <button
                                type="button"
                                id="+twoShot"
                                name="+twoShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('twoShot'))}
                            >+
                                </button>
                            <button
                                type="button"
                                id="-twoShot"
                                name="-twoShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('twoShot'))}
                            >-
                                </button>
                        </div>
                        <div className="col-3" id="stat-sheet">
                            <h3>MADE</h3>
                            <p className="count">{this.props.statSheet.twoMade}</p>

                            <button
                                type="button"
                                id="+twoMade"
                                name="+twoMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('twoMade'))}
                            >+
                                </button>
                            <button
                                type="button"
                                id="-twoMade"
                                name="-twoMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('twoMade'))}
                            >-
                                </button>
                        </div>
                        <div className="col-3" id="stat-sheet">
                            <h3 className="twoPer">2PT%</h3>
                            <p className="count" id="twoPer">{twoPer}%</p>
                        </div>
                    </div>

                    <div className="row" id="threePts">
                        <div className="col-3" id="stat-sheet">
                            <h4 className="threePt">3PT</h4>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <p className="count">{this.props.statSheet.threeShot}</p>
                            <button
                                type="button"
                                id="+threeShot"
                                name="+threeShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('threeShot'))}
                            >+</button>
                            <button
                                type="button"
                                id="-threeShot"
                                name="-threeShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('threeShot'))}
                            >-</button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <p className="count">{this.props.statSheet.threeMade}</p>

                            <button
                                type="button"
                                id="+threeMade"
                                name="+threeMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('threeMade'))}
                            >+</button>
                            <button
                                type="button"
                                id="-threeMade"
                                name="-threeMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('threeMade'))}
                            >-</button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <h3 className="threePer">3PT%</h3>
                            <p className="count" id="threePer">{threePer}%</p>
                        </div>
                    </div>

                    <div className="row" id="fts">
                        <div className="col-3" id="stat-sheet">
                            <h4 className="ft">FT</h4>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <p className="count">{this.props.statSheet.ftShot}</p>
                            <button
                                type="button"
                                id="+ftShot"
                                name="+ftShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('ftShot'))}
                            >+</button>
                            <button
                                type="button"
                                id="-ftShot"
                                name="-ftShot"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('ftShot'))}
                            >-</button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <p className="count">{this.props.statSheet.ftMade}</p>

                            <button
                                type="button"
                                id="+ftMade"
                                name="+ftMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('ftMade'))}
                            >+</button>
                            <button
                                type="button"
                                id="-ftMade"
                                name="-ftMade"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('ftMade'))}
                            >-</button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <h3 className="ftPer">FT%</h3>
                            <p className="count" id="ftPer">{ftPer}%</p>
                        </div>
                    </div>

                    <div className="row" id="rebs">
                        <div className="col-3" id="stat-sheet">
                            <h4 className="reb">REB</h4>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <h3>OFF</h3>
                            <p className="count">{this.props.statSheet.oReb}</p>

                            <button
                                type="button"
                                id="+oReb"
                                name="+oReb"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('oReb'))}
                            >+
                                </button>
                            <button
                                type="button"
                                id="-oReb"
                                name="-oReb"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('oReb'))}
                            >-
                                </button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <h3>DEF</h3>
                            <p className="count">{this.props.statSheet.dReb}</p>
                            <button
                                type="button"
                                id="+dReb"
                                name="+dReb"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('dReb'))}
                            >+</button>
                            <button
                                type="button"
                                id="-dReb"
                                name="-dReb"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('dReb'))}
                            >-</button>
                        </div>

                        <div className="col-3" id="stat-sheet">
                            <h3 className="totReb">TOT REB</h3>
                            <p className="count" id="totRebs">{totReb}</p>
                        </div>
                    </div>


                    <div className="row" id="statline">
                        <div className="col-2" id="pts">
                            <h4 className="points">PTS</h4>
                            <p className="count" id="points">{points}</p>
                        </div>

                        <div className="col-2">
                            <h4 className="ast">AST</h4>
                            <p className="count">{this.props.statSheet.ast}</p>
                            <button
                                type="button"
                                id="+ast"
                                name="+ast"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('ast'))}
                            >+</button>
                            <button
                                type="button"
                                id="-ast"
                                name="-ast"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('ast'))}
                            >-</button>
                        </div>

                        <div className="col-2">
                            <h4 className="stl">STL</h4>
                            <p className="count">{this.props.statSheet.stl}</p>
                            <button
                                type="button"
                                id="+stl"
                                name="+stl"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('stl'))}
                            >+</button>
                            <button
                                type="button"
                                id="-stl"
                                name="-stl"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('stl'))}
                            >-</button>
                        </div>

                        <div className="col-2">
                            <h4 className="blk">BLK</h4>
                            <p className="count">{this.props.statSheet.blk}</p>
                            <button
                                type="button"
                                id="+blk"
                                name="+blk"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('blk'))}
                            >+</button>
                            <button
                                type="button"
                                id="-blk"
                                name="-blk"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('blk'))}
                            >-</button>
                        </div>

                        <div className="col-2">
                            <h4 className="to">TO</h4>
                            <p className="count">{this.props.statSheet.to}</p>

                            <button
                                type="button"
                                id="+to"
                                name="+to"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(addCount('to'))}
                            >+</button>
                            <button
                                type="button"
                                id="-to"
                                name="-to"
                                className="addSubtract"
                                onClick={() => this.props.dispatch(subtractCount('to'))}
                            >-</button>
                        </div>
                    </div>


                    <div className="row" id="save-delete">
                        <div className="col-6">
                            <button
                                id="save-delete"
                                type="submit"
                            >SAVE</button>
                        </div>

                        <div className="col-6">
                            <button
                                id="save-delete"
                                type="submit"
                                onClick={() => this.onDelete()}
                            >DELETE</button>
                        </div>
                    </div>

                </form >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    statSheet: state.stats.statSheet,
    initialValues: state.stats.statSheet
});

export default withRouter(connect(mapStateToProps)(reduxForm({
    form: 'statSheet',
    onSubmitFail: (errors, dispatch) => {
        if (errors) {
            dispatch(focus('statSheet', Object.keys(errors)[0]))
        }
    }

})(StatSheet)));