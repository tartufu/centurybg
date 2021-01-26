import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUsernameAction, getUsernameGamesAction} from '../action/usernameAction';
import { getGamesListAction } from '../action/gamesListAction';
import { getChallengeRatingAction } from '../action/challengeRatingAction';
import axios from 'axios';

export default function Username({store}) {

    const usernameSelector = state => state.username;
    const dispatch = useDispatch();

    const username = useSelector(usernameSelector);
    const [newName, setName] = useState();
    const [world, setWorld] = useState('');
    const [userGames, setUserGames] = useState({})

    const inputName = (e) => {
        setName(e.target.value)
    }

    const getHelloWorld = async () => {
        const response = await axios.get('http://localhost:3000')
        .then( response => {
            console.log(response.data);
            console.log(response);
            return response.data
        }, error => {
            console.log(error)
        })
        setWorld(response);
        // console.log("asdasd", world)
    }

    useEffect(() => {
        // getHelloWorld()
    }, [])

    const clickHandler = async () => {
        // console.log(changeUsernameAction(newName));
        // dispatch(changeUsernameAction(newName))
        const data = await getUserGames();
        console.log(data)
        dispatch(getUsernameGamesAction(data.username))
        console.log(data.games);
        dispatch(getGamesListAction(data.games))
        dispatch(getChallengeRatingAction(data.challengeRating))
    }

    const getUserGames = async () => {
        const response = await axios.get('http://localhost:3000/users/tartufu')
        .then( response => {
            // console.log(response.data);
            return response.data;
        }, error => {
            console.log(error)
        })
        return response;
    }
    
    return (
        <div>
            <h1> {username}</h1>
            <p> {world} </p>
            <input onChange={inputName}></input>
            <button onClick={clickHandler}> change username </button>
        </div>
    )
} 

// https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g