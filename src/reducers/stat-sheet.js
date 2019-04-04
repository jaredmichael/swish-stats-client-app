import {ADD_COUNT, SUBTRACT_COUNT, STAT_SHEET} from '../actions/actions';

const initialState = {
    count: 0,
    statSheet: {
        date: 0, 
        vs: 0,
        ast: 0,
        twoShot: 0,
        threeShot: 0,
        ftShot: 0,
        oReb: 0,
         stl: 0,
         twoMade: 0,
         threeMade: 0,
         ftMade: 0,
         dReb: 0,
         blk: 0,
         twoPer: 0,
         threePer: 0,
         ftPer: 0,
        totReb: 0,
        to: 0
    }
};

export default (state = initialState, action) => {
    if (action.type === ADD_COUNT) {
        const statSheet = state.statSheet;
        statSheet[action.key]=statSheet[action.key]+1
        return Object.assign({}, state, {
            statSheet
        });
    }

    if (action.type === SUBTRACT_COUNT) {
        const statSheet = state.statSheet;
        statSheet[action.key]=statSheet[action.key]-1
        return Object.assign({}, state, {
            statSheet
        });
    }

    if (action.type === STAT_SHEET) {
        return Object.assign({}, state, {
            
        })
    }
    return state;
}

