export const ADD_COUNT = 'ADD_COUNT';
export const addCount = (key) => ({
    type: ADD_COUNT,
    key
});

export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const subtractCount = (key) => ({
    type: SUBTRACT_COUNT,
    key
});

export const SET_STATS = 'SET_STATS';
export const setStats = statSheet => ({
    type: SET_STATS,
    statSheet
});

export const SET_STATLIST = 'SET_STATLIST';
export const setStatlist = stats => ({
    type: SET_STATLIST,
    stats
});
