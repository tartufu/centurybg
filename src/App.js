import logo from './logo.svg';
import './App.css';
import Username from './components/Username';
import ChallengeRating from './components/ChallengeRating';
import GamesList from './components/GamesList';
import Homepage from './components/Homepage';
import NewUser from './components/NewUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route> 

          <Route exact path="/username">
            <Username/>
          </Route>

          <Route exact path="/username/create">
            <NewUser/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


// <Username/>
// <ChallengeRating/>
// <GamesList/>


