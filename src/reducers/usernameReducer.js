import { initialState } from '../store';

export const userNameReducer = (state = initialState.username, action) => {
    switch(action.type) {
        case 'username/change':
            return action.payload
        case 'username/getGames':
            return action.payload
        default:
            return state;
    }
}