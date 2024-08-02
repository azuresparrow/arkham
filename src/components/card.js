import React from "react";
import './card.css';
import CardHeader from "./cardHeader";
import CardSidebar from "./cardSidebar";
import CardContent from "./cardContent";
import CardFooter from "./cardFooter";

//The scaffolding template for formatting cards from their db file
function Card({info}){
    //Set player card class, allow weaknesses to also have a unique color despite being 'neutral'
    const card_class = info.subtype_code == "weakness" ? "weakness" : info.faction_code;

    return (
        <section className="card">
            <CardSidebar info={info}/>          
           <div>
                <CardHeader info={info} card_class={card_class}/> 
                <CardContent info={info} card_class={card_class}/> 
           </div>
           <CardFooter info={info} card_class={card_class}/>
        </section>
    );
}

export default Card;