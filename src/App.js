import logo from './logo.svg';
import './App.css';
import Username from './components/Username';
import ChallengeRating from './components/ChallengeRating';
import GamesList from './components/GamesList';

function App() {

  return (
    <div className="App">
      <Username/>
      <ChallengeRating/>
      <GamesList/>
    </div>
  );
}

export default App;
