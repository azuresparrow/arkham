import React from "react";
import './card.css';
import { find_icon } from "../utils";

function SkillIcon({icon, count}){
    const res = [];
    
    const classes = "skill_container " + icon;

    for(let i = 0; i < count; i++){
        res.push(<div className={classes} key={i}>
            <span>{find_icon(icon)}</span>
        </div>)
    }
    return res;
}

export default SkillIcon;