import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { setStats, setStatlist } from './actions';

export const createStatSheet = stats => dispatch => {
    return fetch(`${API_BASE_URL}/stats`, {
        method: 'POST',
        headers: {
            'authorization': `bearer ${localStorage.authToken}`,
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

export const updateStatSheet = stats => dispatch => {
    return fetch(`${API_BASE_URL}/stats/${stats.statsId}`, {
        method: 'PUT',
        headers: {
            'authorization': `bearer ${localStorage.authToken}`,
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

export const getStatSheetById = statsId => dispatch => {
    return fetch(`${API_BASE_URL}/stats/${statsId}`, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.authToken}`,
            'content-type': 'application/json'
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(stats => {
            dispatch(setStats(stats));
        })
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

export const getAllStatSheet = stats => dispatch => {
    return fetch(`${API_BASE_URL}/stats`, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.authToken}`,
            'content-type': 'application/json' 
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(stats => {
            dispatch(setStatlist(stats.stats));
        })
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

export const deleteStatSheet = statsId => dispatch => {
    return fetch(`${API_BASE_URL}/stats/${statsId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `bearer ${localStorage.authToken}`,
            'content-type': 'application/json'
        },
    })
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