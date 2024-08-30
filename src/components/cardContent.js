import React from "react";
import parser from "html-react-parser";
import './card.css';
import './cardContent.css';
import {v4 as uuidv4} from "uuid";
import { find_icon } from "../utils";

function CardContent({info, card_class, isBack=false}){
    //XP COST VISUAL
    let xp = ""
    for(let i = 0; i < info.xp; i++){
        info.exceptional ? xp+= '✸':xp+= '✦';
    }
    //or
    let damage = "";
    let horror = "";
    if(info.type_code == "enemy"){
        //Enemy damage/horror values
        for(let i = 0; i < info.enemy_damage; i++){
            damage += ' Q';
        }
        for(let i = 0; i < info.enemy_horror; i++){
            horror += ' q';
        }
    }
    

    //PARSE PRIMARY CARD TEXT
    //first for line breaks then special symbols
    const target_text = isBack ? info.back_text : info.text;
    const text_result = [];
    if(target_text){
        const parse_text = target_text.split('\n'); //Split on line breaks to insert <br/>
        for(let line in parse_text){
            let parse_line = parse_text[line].split(/[\[,\]]/); //split on [] to add the images within the text
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

    const flavor = isBack ? info.back_flavor : info.flavor;

    return (
        <div className="card_content">
            {xp != "" &&
                <span className={`top_right`}>{xp}</span>
            }
            {info.type_code == 'enemy' &&
                 <span className='top_right symbol'><span className="damage">{damage}</span><span className="horror">{horror}</span></span>
            }
            {(info.type_code == 'treachery') &&
                <span className="card_type2">Treachery<br/></span>
            }
            <span className="card_traits">{info.traits}</span>
            <span className="card_text">{text_result.map((i)=> (<React.Fragment key={uuidv4()}>{(i)}</React.Fragment>))}</span>
            <span className="card_flavor">{flavor}</span>
        </div>
    );
}

export default CardContent;