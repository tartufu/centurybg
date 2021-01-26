const increaseGamePlayAction = (index) => {
    return {
        type: 'gamesList/increase',
        payload: index
    }
}

const decreaseGamePlayAction = (index) => {
    return {
        type: 'gamesList/decrease',
        payload: index
    }
}

const getGamesListAction = (response) => {
    return {
        type: 'gamesList/getAll',
        payload: response
    }    
}

export {
    increaseGamePlayAction,
    decreaseGamePlayAction,
    getGamesListAction
}