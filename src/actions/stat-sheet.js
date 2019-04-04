import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const statSheet = stats => dispatch => {
    return fetch(`${API_BASE_URL}/users/stats`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(stats)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const addGame = game => dispatch => {
    return fetch(`${APE_BASE_URL}/users/history`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(game)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};