import axios from 'axios';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_TWITTS = 'GET_TWITTS';

export function changeFilter(query) {
    return {
        type: CHANGE_FILTER,
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


