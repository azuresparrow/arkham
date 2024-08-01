import logo from './logo.svg';
import Card from './components/card';
import { card_data } from './utils';
import "./app.css";

function App() {
  const cardList = [];
  for(let card in card_data()) {
    cardList.push(<Card info={card_data()[card]}></Card>)
  }

  return (
    <div className="App">
      <header className="App-header">

       <div style={{display:'flex', flexWrap:'wrap'}}>
          {cardList} 
       </div>
     </header>
    </div>
  );
}

export default App;
