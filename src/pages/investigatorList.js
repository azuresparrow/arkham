
import Card from '../components/card';
import { investigator_data, card_data } from '../utils';
import "../app.css";
import Investigator from '../components/investigator';


function InvestigatorList() {
  const investigatorList = [];
  for(let investigator in investigator_data()) {
    investigatorList.push(<Investigator info={investigator_data()[investigator]}></Investigator>)
  }

  return (
    <div className="App">
      <header className="App-header">

       <div style={{display:'flex', flexWrap:'wrap'}}>
          {investigatorList}

       </div>
     </header>
    </div>
  );
}

export default InvestigatorList;
