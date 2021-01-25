import { createStore, combineReducers } from 'redux';
import { userNameReducer } from './reducers/usernameReducer';

export const initialState = {  
    username: 'Tartufu'
}

const reducers = {
    username: userNameReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);