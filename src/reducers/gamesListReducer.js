import { initialState } from '../store';

export const gamesListReducer = (state = initialState.games, action) => {
    switch(action.type) {
        case 'gamesList/increase':
            const newIncreaseState = [...state];
            newIncreaseState[action.payload].timesPlayed = newIncreaseState[action.payload].timesPlayed + 1;
            if (newIncreaseState[action.payload].timesPlayed > 10) {
                newIncreaseState[action.payload].timesPlayed = 10;
            };
            return [...newIncreaseState ]

        case 'gamesList/decrease':
            const newDecreaseState = [...state];
            newDecreaseState[action.payload].timesPlayed = newDecreaseState[action.payload].timesPlayed - 1;
            if (newDecreaseState[action.payload].timesPlayed < 0) {
                newDecreaseState[action.payload].timesPlayed = 0;
            };
            return [...newDecreaseState ]

        default:
            return state;
    }
}

