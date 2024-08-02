import logo from './logo.svg';
import Card from './components/card';
import { investigator_data, card_data } from './utils';
import "./app.css";
import Investigator from './components/investigator';


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
      <header className="App-header">

       <div style={{display:'flex', flexWrap:'wrap'}}>
          {investigatorList[0]}
          {cardList}
       </div>
     </header>
    </div>
  );
}

export default App;
