import React, { useState } from 'react';
import { changeChallengeRatingAction } from '../action/challengeRatingAction';

export default function ChallengeRating({ store }) {

    const challengeRating = store.getState().challengeRating;

    return (
        <div>
            <h1>{challengeRating}</h1>
            <button onClick={() => {store.dispatch(changeChallengeRatingAction(1))}}> 1 x 1 </button>
            <button onClick={() => {store.dispatch(changeChallengeRatingAction(5))}}> 5 x 5 </button>
            <button onClick={() => {store.dispatch(changeChallengeRatingAction(10))}}> 10 x 10 </button>
        </div>
    )
}