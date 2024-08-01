import React from "react";
import parser from "html-react-parser";
import './card.css';
import {v4 as uuidv4} from "uuid";
import { find_icon } from "../utils";
import CardHeader from "./cardHeader";
import CardDurability from "./cardDurability";
import CardSidebar from "./cardSidebar";

function Card({info}){
    

    //XP COST VISUAL
    let xp = ""
    for(let i = 0; i < info.xp; i++){
        info.exceptional ? xp+= '✸':xp+= '✦';
    }

    
    
    //Set player card class, allow weaknesses to also have a unique color despite being 'neutral'
    const card_class = info.subtype_code == "weakness" ? "weakness" : info.faction_code;


    //PARSE PRIMARY CARD TEXT
    //first for line breaks then special symbols
    const text_result = [];
    if(info.text){
        const parse_text = info.text.split('\n');
        for(let line in parse_text){
            let parse_line = parse_text[line].split(/[\[,\]]/);
            for(let symbol in parse_line){
                let snippet = parse_line[symbol];
                if(find_icon(snippet)) {
                    text_result.push(<span key={uuidv4()} className="symbol">{find_icon(snippet)}</span>)
                } else if (snippet.length > 0) {
                    text_result.push(<React.Fragment key={uuidv4()}> {parser(snippet)}</React.Fragment>);
                }
            }
            text_result.push(<br/>);
        }
    }
    
    return (
        <section className="card">
            <CardSidebar info={info}/>            
           <div>
            <CardHeader info={info} card_class={card_class}/>
            <div className="card_content">
                <span className={`experience ${card_class}`}>{xp}</span>
                <span className="card_traits">{info.traits}</span>
                <span className="card_text">{text_result.map((i)=> (<React.Fragment key={uuidv4()}>{(i)}</React.Fragment>))}</span>
                <span className="card_flavor">{info.flavor}</span>
            </div>
            
           </div>
           <div className="card_footer">
            <CardDurability health={info.health} sanity={info.sanity}/>           
            {info.slot ? (<span className="slots symbol">{find_icon(info.slot)}</span>) : ("")}
                
            </div>
            <span className="set_symbol symbol">{find_icon(info.pack_code)}</span>

        </section>
    );
}

export default Card;