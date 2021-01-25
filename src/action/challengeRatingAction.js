export const changeChallengeRatingAction = (challenge) => {
    return {
        type: 'challengeRating/change',
        payload: `${challenge} x ${challenge} Challenge`
    }   
}