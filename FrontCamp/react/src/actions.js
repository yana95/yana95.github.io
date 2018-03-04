import axios from 'axios';
export const FILTER_TWITTS = 'FILTER_TWITTS';
export const GET_TWITTS = 'GET_TWITTS';

export function filterTwitts(query) {
    return {
        type: FILTER_TWITTS,
        query,
    }
}

export function getTwitts (response) {
    const twitts = response.data;
    return {
        type: GET_TWITTS,
        twitts
    }
}

export function fetchGetTwitts () {
    return (dispatch) => {
        axios.get(`http://localhost:3030/blogs`)
            .then( (response) => {
                    dispatch(getTwitts(response));
                }
            );
    }
}

export function fetchAddTwitt(newTwitt) {
    return (dispatch) => {
        axios.post(`http://localhost:3030/blogs`, newTwitt )
            .then( (response) => {
                    dispatch(fetchGetTwitts());
                }
            );
    }
}

export function fetchDeleteTwitt(index) {
    return (dispatch) => {
        axios.delete(`http://localhost:3030/blogs/${index}` )
            .then( (response) => {
                    dispatch(fetchGetTwitts());
                }
            );
    }
}


