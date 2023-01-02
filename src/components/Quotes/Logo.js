import React from "react";
import "./style.css";
import SimpsonsLogo from "../../images/simpsons-logo.png";

export default function Logo(){
return(
    <div className="Logo">
        <img src={SimpsonsLogo}></img>
    </div>
)
}