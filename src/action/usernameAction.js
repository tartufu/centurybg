export const getUsernameGamesAction = (response) => {
    return {
        type: 'username/getGames',
        payload: response
    }
}

export const resetUsernameAction = () => {
    return {
        type: 'username/reset',
        payload: ''
    }
}