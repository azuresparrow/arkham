
import React from "react";
import './cardFooter.css';
import './card.css';
import CardDurability from "./cardDurability";
import { find_icon } from "../utils";

//The region of the card dedicated to it's cost, or if a skill a class icon to fill space 
function CardFooter({info, card_class}){
    return (
        <React.Fragment>
            <div className="card_footer">
                <span className="set_symbol symbol">{find_icon(info.pack_code)}</span>
                {info.type_code != 'enemy' &&
                    <CardDurability health={info.health} sanity={info.sanity}/>
                }    
                {info.slot ? (<span className="slots symbol">{find_icon(info.slot)}</span>) : ("")}
            </div>
        </React.Fragment>
    )
}

export default CardFooter;