import React from "react";
import { useParams } from 'react-router-dom';
import "./style.css"

var defaultCardCount = 5

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function CheckParams(defaultValue){
    let { id } = useParams();
    id = (id == undefined) ? defaultValue : id;
    id = parseInt(id)
    console.log(typeof id, id)
    id = (isNaN(id)) ? defaultValue : id;
    return id 
}

export default function Cards(){
    let id = CheckParams(defaultCardCount)

    let response = []
    let cards = []
    response = JSON.parse(httpGet(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${id}`));
    cards = response

    let view = new Map()
    cards.forEach(element => {
        view.set(
            <div className="Card">
                <img src={element.image} className="Card-image"></img>
                <h3 className="Card-name">{element.character}</h3>
                <div className="Card-stats">
                    <span className="Card-stats-quote">{element.quote}</span>
                </div>
            </div>
    )});

    return(
        <div>
            <div className="Cards">
                {view}
            </div>
            
        </div>
    )
}