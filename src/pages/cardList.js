
import Card from '../components/card';
import { investigator_data, card_data, core_data } from '../utils';
import "../app.css";
import Investigator from '../components/investigator';


function CardList() {
  const cardList = [];
  for(let card in core_data()) {
    console.log(core_data()[card]);
    if(core_data()[card].type_code != 'investigator'){
        cardList.push(<Card info={core_data()[card]}></Card>);
    }
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

export default CardList;
