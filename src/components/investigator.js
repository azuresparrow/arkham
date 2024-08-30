import React from "react";
import './investigator.css';
import './card.css';
import CardDurability from "./cardDurability";
import CardHeader from "./cardHeader";
import CardFooter from "./cardFooter";
import CardContent from "./cardContent"

//The scaffolding template for formatting investigators from their db file
function Investigator({info}){

    return (
        <React.Fragment>
                    <div><img src={`../images/investigators/${info.code}.webp`}></img></div>
       
        <div className="investigator">
            <CardHeader info={info} card_class={info.faction_code}></CardHeader>
            <div className="statline symbol">

                <div className="investigator_stat">
                    {info.skill_willpower} 
                    <div className="icon_bundle">
                        <span className="skill_icon investigator_willpower">W</span>
                        <span className="skill_icon skill_cover">w</span>
                    </div>
                </div>
                <div className="investigator_stat">
                    {info.skill_intellect} 
                    <div className="icon_bundle">
                        <span className="skill_icon investigator_intellect">I</span>
                        <span className="skill_icon skill_cover">i</span>
                    </div>
                </div>
                <div className="investigator_stat">
                    {info.skill_combat} 
                    <div className="icon_bundle">
                        <span className="skill_icon investigator_combat">C</span>
                        <span className="skill_icon skill_cover">c</span>
                    </div>
                </div>
                <div className="investigator_stat">
                    {info.skill_agility} 
                    <div className="icon_bundle">
                        <span className="skill_icon investigator_agility">A</span>
                        <span className="skill_icon skill_cover">a</span>
                    </div>
                </div>
           </div>
            <CardContent info={info} />
           
           <CardFooter info={info}></CardFooter>
        </div>
        <div className="investigator">
            <CardContent info={info} isBack='true'/>
        </div>
 
        </React.Fragment>
    );
}

export default Investigator;