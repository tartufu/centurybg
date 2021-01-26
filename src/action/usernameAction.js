export const changeUsernameAction = (name) => {
    return {
        type: 'username/change',
        payload: name
    }   
}

export const getUsernameGamesAction = (response) => {
    return {
        type: 'username/getGames',
        payload: response
    }
}