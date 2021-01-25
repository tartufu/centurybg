import React, { useState } from 'react';
import { changeUsernameAction } from '../action/usernameAction';

export default function Username({store}) {

    const username = store.getState().username;
    const [newName, setName] = useState(username);

    const inputName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    const clickHandler = () => {
        store.dispatch(changeUsernameAction(newName));
        // console.log("tgtgtgtg", newName);
    }

    return (
        <div>
            <h1> {username}</h1>
                <input onChange={inputName}></input>
                <button onClick={clickHandler}> change username </button>
        </div>
    )
} 