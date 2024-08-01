import React from "react";
import './cardCost.css';
import './card.css';
import { find_icon } from "../utils";

//The region of the card dedicated to it's cost, or if a skill a class icon to fill space 
function CardCost({type, card_class, cost}){
    let fixed_cost = cost;
    //special case for cards with flexible (X) cost, marked by costing '-2'
    if(fixed_cost == -2) fixed_cost = 'X';
    //force there to be a visual difference between cards without a cost - and cards that cost 0
    if(fixed_cost !== 0 && !fixed_cost) fixed_cost = '-';

    if(type != "skill"){
        return (
        <div className="cost_container">
            <span className={`cost ${card_class}`}>{fixed_cost}</span>    
        </div>)
    } else {
        return (
            <div className="skill_spacer"><span>{find_icon(card_class)}</span></div>
        )
    }
}

export default CardCost;