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

export {
    increaseGamePlayAction,
    decreaseGamePlayAction
}