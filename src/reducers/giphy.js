import * as types from '../constants/actionTypes';

const initState = {
    isFetching: true,
    query: '',
    items: []
}

const goats = (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_BY_QUERYSTRING:
            // console.info('reducer REQUEST_BY_QUERYSTRING', state, action);
            return Object.assign({}, state, {
                isFetching: true,
                query: action.query
            });
        case types.RECEIVE_BY_QUERYSTRING:
            // console.info('reducer RECEIVE_BY_QUERYSTRING', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
            });
        default:
            // console.info('reducer DEFAULT', state);
            return state;
    }
};

export default goats;
