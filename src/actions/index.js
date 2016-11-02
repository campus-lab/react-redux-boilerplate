import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import {GIPHY_API_KEY} from '../constants/globals';

export function requestByQuerystring(query) {
    // console.info('action REQUEST_BY_QUERYSTRING', query);
    return {
        type: types.REQUEST_BY_QUERYSTRING,
        query
    }
}

export function receiveByQuerystring(query, json) {
    // console.info('action RECEIVE_BY_QUERYSTRING', query, json);
    return {
        type: types.RECEIVE_BY_QUERYSTRING,
        items: json.data
    }
}

export function requestById(query) {
    // console.info('action REQUEST_BY_ID', query);
    return {
        type: types.REQUEST_BY_ID,
        query
    }
}

export function receiveById(query, json) {
    // console.info('action RECEIVE_BY_ID', query, json);
    return {
        type: types.RECEIVE_BY_ID,
        items: json.data
    }
}

// THUNKS

export function fetchByQuerystring(query) {
    return function(dispatch) {
        dispatch(requestByQuerystring(query));

        const q = query.split(' ').join('+');

        return fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${GIPHY_API_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(receiveByQuerystring(query, json)));
    }
}

export function fetchById(id) {
    return function(dispatch) {
        dispatch(requestById(id));

        return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_API_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(receiveById(id, json)));
    }
}
