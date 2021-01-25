import React, { useState } from 'react';
import { changeChallengeRatingAction } from '../action/challengeRatingAction';
import {useSelector, useDispatch} from 'react-redux';

export default function ChallengeRating({ store }) {

    const challengeRating = useSelector(state => state.challengeRating);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{challengeRating}</h1>
            <button onClick={() => {dispatch(changeChallengeRatingAction(1))}}> 1 x 1 </button>
            <button onClick={() => {dispatch(changeChallengeRatingAction(5))}}> 5 x 5 </button>
            <button onClick={() => {dispatch(changeChallengeRatingAction(10))}}> 10 x 10 </button>
        </div>
    )
}