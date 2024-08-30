import logo from '../curse.png';
import "../app.css";
import './home.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='home'>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            An Arkham Horror Deckbuilder 
            </p>

            <span>
                Putting curses in the chaos bag because I really need this money
            </span>
        </div>
      </header>
    </div>
  );
}

export default App;
