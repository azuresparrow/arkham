import React from "react";
import './cardDurability.css';
import './card.css';
import { find_icon } from "../utils";

//The region of the card dedicated to it's cost, or if a skill a class icon to fill space 
function CardDurability({health, sanity}){
    if(health || sanity) {
        return (
            <span className="durability symbol">
                <span className="health">Q
                    <span className="durability_numb">
                        {health || '-'}
                    </span>
                </span>
                <span className="sanity">q
                    <span className="durability_numb">
                        {sanity || '-'}
                    </span>
                </span>
            </span>
        )
    }
}

export default CardDurability;
