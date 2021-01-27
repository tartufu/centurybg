import React, { useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function NewUser() {

    const gameArray=[];
    for (let i = 0; i < 10; i++ ) {
        gameArray.push(i);
        // console.log(gameArray);
    }

    // handles changes in username
    const [newUser, setNewUser] = useState('');
    const changeUsernameHandler = (e) => {
        setNewUser(e.target.value);
        let index = e.target.getAttribute("data-index");

    }

    // handles changes in games based on index
    const [gamesArray, setGamesArray] = useState([]);
    const changeGameNameHandler = (e) => {
        let currentIndex = e.target.getAttribute("data-index");
        let gameName = e.target.value;
        let currentGamesArray = [...gamesArray];
        currentGamesArray[currentIndex] = gameName;
        setGamesArray(currentGamesArray);
    }

    // handles post request
    const createNewUser = async (e) => {
        e.preventDefault()

        // changes to object in array for playcount in document creation
        const GameNameWithPlayCount = [...gamesArray];
        for (let i = 0; i < GameNameWithPlayCount.length; i++) {
            GameNameWithPlayCount[i] = {
                game: GameNameWithPlayCount[i],
                timesPlayed: 0
            }
        }

        const newUserDetails = {
            username: newUser,
            challengeRating: '10x10',
            games: GameNameWithPlayCount
        }

        console.log("Yoooooo", newUserDetails);

        await axios.post("http://localhost:3000/users/new", newUserDetails).then( (res) => {
            console.log(res);
        }, error => {
            console.log(error);
        });
    } 


    return (
        <div className="new-user-details-page">
            <h1> Create New Details </h1>
            <p> {newUser} </p>
            <Container>
            
            <Form onSubmit={createNewUser}>
                <Form.Group controlId="userEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={newUser} onChange={changeUsernameHandler} required/>
                </Form.Group>

                {gameArray.map((index) => {
                    return (
                        <Form.Group controlId={"game" + index}>
                        <Form.Label>{"Game " + (index + 1)}</Form.Label>
                        <Form.Control type="text" placeholder="Enter game" value={gamesArray[index]} onChange={changeGameNameHandler} key={index} data-index={index} required/>
                        </Form.Group>
                    )
                })}

                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
}