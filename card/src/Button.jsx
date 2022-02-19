import React from "react";
import './App.css';
export const Button = ({ text, classN, event }) =>{
    return(
        <button className={classN} onClick={event}>{text}</button>
    )
}