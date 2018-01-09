/**
 * Created by Yana_Zaitsava on 1/9/2018.
 */
const reducer = ( state = "All channels", action)=>{
    switch (action.type){
        case 'OPEN_CHANNEL': return action.name;
        default: return 'All channels';
    }
};

const createStore = (reducer) => {
    let state;
    let listeners = [];
    const getState = () => state;
    const dispatch = (action) =>{
        state = reducer(state, action);
        listeners.forEach( listener => listener());
    };
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners => listeners.filter( l => l !== listener );
        }
    };
    dispatch({});
    return { getState, dispatch, subscribe};
};

export default createStore(reducer);