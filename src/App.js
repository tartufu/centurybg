import logo from './logo.svg';
import './App.css';
import Username from './components/Username';

function App( { store }) {
  console.log("sfsdfs", store)
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Username store={store}/>
    </div>
  );
}

export default App;
