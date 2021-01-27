import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUsernameAction, getUsernameGamesAction, resetUsernameAction} from '../action/usernameAction';
import { getGamesListAction } from '../action/gamesListAction';
import { getChallengeRatingAction } from '../action/challengeRatingAction';
import axios from 'axios';

export default function Username() {

    const usernameSelector = state => state.username;
    const dispatch = useDispatch();

    const username = useSelector(usernameSelector);
    const [newName, setName] = useState();
    const [errorMsg, setErrorMsg] = useState('')

    const inputName = (e) => {
        setName(e.target.value)
        console.log(newName);
    }

    useEffect(() => {
    }, [])

    const clickHandler = async () => {
        const data = await getUserGames();
        console.log('asdasd', data);
        if (data !== 'user not found!') {
            dispatch(getUsernameGamesAction(data.username))
            dispatch(getGamesListAction(data.games))
            dispatch(getChallengeRatingAction(data.challengeRating))
            setErrorMsg('')
        } else {
            setErrorMsg(data);
            dispatch(getGamesListAction([]))
            dispatch(getChallengeRatingAction(''))
            dispatch(resetUsernameAction())
            setName('');
        }
    }

    const getUserGames = async () => {

        const response = await axios.get('http://localhost:3000/users/search/' + newName)
        .then( response => {
            console.log(response);
            return response.data;
        }, error => {
            console.log(error)
        })
        return response;
    }
    
    return (
        <div>
            <h1> {username}</h1>
            <p> {errorMsg} </p>
            <input onChange={inputName} value={newName}></input>
            <button onClick={clickHandler} > submit username </button>
        </div>
    )
} 

// https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g