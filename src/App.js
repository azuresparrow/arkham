
import Card from './components/card';
import { investigator_data, card_data } from './utils';
import "./app.css";
import Investigator from './components/investigator';
import { Link, BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  const investigatorList = [];
  for(let investigator in investigator_data()) {
    investigatorList.push(<Investigator info={investigator_data()[investigator]}></Investigator>)
  }
  const cardList = [];
  for(let card in card_data()) {
    cardList.push(<Card info={card_data()[card]}></Card>)
  }

  return (
    <div className="App">
        
        <BrowserRouter>
        <div className='App-header'>
            <Link to={`/`}><h2>Cursed Bag</h2> </Link>
            <div className='navBar'>
                  <Link to={`/cards/`}>
                    <span>Cards</span>
                  </Link>
                  <Link to={`/decks/`}>
                  <span>Decks</span>
                  </Link>
                  <Link to={`/investigators/`}>
                  <span>Investigators</span>
                  </Link>
                </div>
            </div>
          <Router/>
        </BrowserRouter>
      </div>
  );
}

export default App;
