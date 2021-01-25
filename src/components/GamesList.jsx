import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increaseGamePlayAction, decreaseGamePlayAction } from '../action/gamesListAction';

export default function GamesList({ store}) {

    const gamesArray = useSelector(state => state.games);
    const dispatch = useDispatch();
    // console.log("arr", gamesArray);

    const increaseCounter = (index) => {
        dispatch(increaseGamePlayAction(index))
    }

    const decreaseCounter = (index) => {
        dispatch(decreaseGamePlayAction(index))
    }

    return(
        <div>
            {gamesArray.map( (game, index) => (
                <div>
                    <h1 key={index}> {game.gameName} playthrough: {game.timesPlayed}</h1> 
                    <button onClick={() => {increaseCounter(index)}}> +Count </button>
                    <button onClick={() => {decreaseCounter(index)}}> -Count </button>
                </div>
            )
            )}
        </div>
    )
}