import { createStore } from 'redux';

const initialState = {  
    username: 'Tartufu'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'username/change':
            return {...state, username: action.payload}
        default:
            return state
    }
}

export const store = createStore(reducer);