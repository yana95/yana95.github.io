export const FILTER_TWITTS = 'FILTER_TWITTS';
export const REMOVE_TWITT = 'REMOVE_TWITT';
export const ADD_TWITT = 'ADD_TWITT';

export function filterTwitts(query) {
    return {
        type: FILTER_TWITTS,
        query,
    }
}

export function removeTwitt(index) {
    return {
        type: REMOVE_TWITT,
        index,
    }
}

export function addTwitt(newTwitt) {
    return {
        type: ADD_TWITT,
        newTwitt,
    }
}

