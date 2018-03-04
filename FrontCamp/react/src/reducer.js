import { combineReducers } from 'redux';
import {
    FILTER_TWITTS,
    REMOVE_TWITT,
    ADD_TWITT} from './actions';


function twitts(state = [], action) {
    switch (action.type) {
        case REMOVE_TWITT:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        case ADD_TWITT:
            return [...state, action.newTwitt]
        default:
            return state
    }
}

function filter(state = 'all', action) {
    switch (action.type) {
        case FILTER_TWITTS:
            return action.query;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    twitts, filter
})

export default rootReducer;
