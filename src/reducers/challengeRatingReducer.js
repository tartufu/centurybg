import { initialState } from '../store';

export const challengeRatingReducer = (state = initialState.challengeRating, action) => {
    switch(action.type) {
        case 'challengeRating/change':
            return action.payload
        default:
            return state;
    }
}