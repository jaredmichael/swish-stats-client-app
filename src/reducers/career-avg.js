import {UPDATE_AVERAGE} from '../actions/actions';

const initialState = {
    ppg: 0,
    ast: 0,
    reb: 0,
    stl: 0,
    fg: 0,
};

export default (state = initialState, action) => {
    if (action.type === UPDATE_AVERAGE) {
        return Object.assign({}, state, {
            
        })
    }
}