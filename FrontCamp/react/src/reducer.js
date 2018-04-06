import { combineReducers } from 'redux';
import {
    CHANGE_FILTER,
    GET_TWITTS} from './actions';


export function twitts(state = [], action) {
    switch (action.type) {
        case GET_TWITTS:
            return action.twitts;
        default:
            return state
    }
}

export function filter(state = 'all', action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.query;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    twitts, filter
})

export default rootReducer;
