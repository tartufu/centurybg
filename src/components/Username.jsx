import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUsernameAction } from '../action/usernameAction';

export default function Username({store}) {

    const usernameSelector = state => state.username;
    const dispatch = useDispatch();

    const username = useSelector(usernameSelector);
    const [newName, setName] = useState();

    const inputName = (e) => {
        setName(e.target.value)
    }

    const clickHandler = () => {
        console.log(changeUsernameAction(newName));
        dispatch(changeUsernameAction(newName))
    }

    return (
        <div>
            <h1> {username}</h1>
                <input onChange={inputName}></input>
                <button onClick={clickHandler}> change username </button>
        </div>
    )
} 