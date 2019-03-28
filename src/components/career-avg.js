import React from 'react';

export default class CareerAvg extends React.Component {
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