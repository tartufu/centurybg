import logo from './logo.svg';
import './App.css';
import Username from './components/Username';
import ChallengeRating from './components/ChallengeRating';
import GamesList from './components/GamesList';

function App( { store }) {
  console.log("sfsdfs", store)
  return (
    <div className="App">
      <Username store={store}/>
      <ChallengeRating store={store}/>
      <GamesList store={store} />
    </div>
  );
}

export default App;
