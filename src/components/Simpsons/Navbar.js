import React from "react";
import "./style.css";
import SimpsonsLogo from "../../images/simpsons-logo.png";

export default function Navbar(){
return(
    <div className="Navbar">
        <nav>
            <img src={SimpsonsLogo} className="Logo"></img>
        </nav>
    </div>
)
}