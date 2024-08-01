import React from "react";
import './card.css';
import { find_icon } from "../utils";
import CardCost from "./cardCost";
import "./cardHeader.css";


function CardHeader({info, card_class}){
    //Set card image within gradient/bg colors
    const style=  {'--img-path': `url('/images/${info.code}.png')`}
    const type = info.type_code;
    return (
        <div className={`card_header_container ${card_class}_name_container`} style={style}>
            <span className="type_label">{type}</span>
            <CardCost type={type} card_class={card_class} cost={info.cost} />
            {info.is_unique &&
                <div className="unique symbol">*</div>
            }
            <div className={`card_name_container`}>
                <span>{info.name}</span>
                <span className="sub_name">{info.subname}</span>
            </div>
            
        </div>
        
    );

}

export default CardHeader;