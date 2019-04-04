export const ADD_COUNT = 'ADD_COUNT';
export const addCount = (count, key) => ({
    type: ADD_COUNT,
    count, 
    key
});

export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const subtractCount = (count, key) => ({
    type: SUBTRACT_COUNT,
    count,
    key
});

export const UPDATE_AVERAGE = 'UPDATE_AVERAGE';
export const updateAverage = average => ({
    type: UPDATE_AVERAGE,
    average
});

export const STAT_SHEET = 'STAT_SHEET';
export const statSheet = sheet => ({
    type: STAT_SHEET,
    sheet
});
 
export const ADD_GAME = 'ADD_GAME';
export const addGame = game => ({
    type: ADD_GAME,
    game
});