import React from 'react';
import NavBar from './nav-bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class StatSheet extends React.Component {
    render () {
        return(
            <div>
            <NavBar />

            <div className="stat-sheet">
                <div className="stat-header">
                    <ul>
                        <li>Date:<input type="text" class="vs" required></input></li>
                        <li>Player</li>
                        <li>VS. <input type="text" class="vs" required></input></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>2PT FG</li>
                        <li>3PT FG</li>
                        <li>FT</li>
                        <li>REB</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>4</li>
                        <li>2</li>
                        <li>50%</li>
                    </ul>
                    <ul>
                        <li><button>Shot</button></li>
                        <li><button>Made</button></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>2</li>
                        <li>2</li>
                        <li>100%</li>
                    </ul>
                    <ul>
                        <li><button>Shot</button></li>
                        <li><button>Made</button></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Shot</li>
                        <li>Made</li>
                        <li>%</li>
                    </ul>
                    <ul>
                        <li><button>Shot</button></li>
                        <li><button>Made</button></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>2</li>
                        <li>6</li>
                        <li>8</li>
                    </ul>
                    <ul>
                        <li><button>OFF</button></li>
                        <li><button>DEF</button></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>5</li>
                        <li>2</li>
                        <li>1</li>
                        <li>4</li>
                    </ul>
                    <ul>
                        <li><button>AST</button></li>
                        <li><button>STL</button></li>
                        <li><button>BLK</button></li>
                        <li><button>TO</button></li>
                    </ul>
                </div>
            </div> 
        </div>
        );
    }
}