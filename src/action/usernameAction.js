export const changeUsernameAction = (name) => {
    return {
        type: 'username/change',
        payload: name
    }   
}