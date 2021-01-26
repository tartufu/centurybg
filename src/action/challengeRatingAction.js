const changeChallengeRatingAction = (challenge) => {
    return {
        type: 'challengeRating/change',
        payload: `${challenge} x ${challenge} Challenge`
    }   
}

const getChallengeRatingAction = (response) => {
    return {
        type: 'challengeRating/getAll',
        payload: response
    }
}

export {
    changeChallengeRatingAction,
    getChallengeRatingAction
}