import React, { useState } from 'react';
import { changeChallengeRatingAction } from '../action/challengeRatingAction';
import {useSelector, useDispatch, useStore} from 'react-redux';
import axios from 'axios';


export default function ChallengeRating() {

    const challengeRating = useSelector(state => state.challengeRating);
    const globalState = useSelector(state => state);
    const dispatch = useDispatch();

    const postRequest = () => {
        axios.post('http://localhost:3000/users/update', globalState
        ).then( (res) => {
            // console.log(res)
        })

        // console.log("global", globalState);
    };

    return (
        <div>
            <h1>{challengeRating}</h1>
            <button onClick={() => {dispatch(changeChallengeRatingAction(1))}}> 1 x 1 </button>
            <button onClick={() => {dispatch(changeChallengeRatingAction(5))}}> 5 x 5 </button>
            <button onClick={() => {dispatch(changeChallengeRatingAction(10))}}> 10 x 10 </button>
            <button onClick={postRequest}> UPDATE POST REQUEST </button>
        </div>
    )
}