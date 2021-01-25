import { createStore, combineReducers } from 'redux';
import { data } from './data';
import { userNameReducer } from './reducers/usernameReducer';
import { challengeRatingReducer} from './reducers/challengeRatingReducer';
import { gamesListReducer } from './reducers/gamesListReducer';

export const initialState = data;

const reducers = {
    username: userNameReducer,
    challengeRating: challengeRatingReducer,
    games: gamesListReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);