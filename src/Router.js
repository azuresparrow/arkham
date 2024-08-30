import {Route, Navigate, Routes, useParams} from "react-router-dom"
import Home from "./pages/home";
import CardList from "./pages/cardList";
import DeckList from "./pages/deckList";
import InvestigatorList from "./pages/investigatorList";

import CardDetail from "./pages/cardDetail";


function Router() {

    return (
      
        <Routes>
          <Route exact path="/cards"element={(<CardList/>)}/>
          <Route exact path="/card/:handle" element={(CardDetail)}/>
          <Route exact path="/decks" element={(<DeckList/>)}/>
          <Route exact path="/investigators" element={(<InvestigatorList/>)}/>

           <Route exact path="/" element={<Home></Home>}/>
          <Route path="*" element={<Navigate to="/not-found"/>}/>
        </Routes>
    );
  }
  
  export default Router;
  