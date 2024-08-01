import React from "react";
import './card.css';
import SkillIcon from "./skillIcon";
import './cardSidebar.css';
import {v4 as uuidv4} from "uuid";


function CardSidebar({info}){
    //SKILL SIDEBAR
    //Generate skill column
    const skill_col = [];
    const skills = {
        'willpower':info.skill_willpower,
        'intellect': info.skill_intellect,
        'combat': info.skill_combat,
        'agility': info.skill_agility,
        'wild': info.skill_wild
    }
    for(let key in skills) {
        if(skills[key]) skill_col.push(<SkillIcon key={uuidv4()} icon={key} count={skills[key]}/>)
    }

    return (
        <div className="card_side">
            {skill_col}
        </div>
    )

}

export default CardSidebar;