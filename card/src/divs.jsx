import React from "react";
import './App.css';

export const Div = ({idN, classH2, name, link, imgIn, imgClas})=>{
    return(
        <div id={idN}>
                <div className="card">
                    <h2 className={classH2}>{name}</h2>
                </div>
                <div className="IMG">
                        <img src={link}alt={imgIn} className={imgClas}/>
                </div>
        </div>

    )
}