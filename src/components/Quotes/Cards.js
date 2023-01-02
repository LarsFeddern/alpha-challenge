import React from "react";
import { useParams } from 'react-router-dom';
import "./style.css"

var defaultCardCount = 5

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function CheckParams(defaultValue){
    let { id } = useParams();
    id = (id === undefined) ? defaultValue : id;
    id = parseInt(id)
    id = (isNaN(id)) ? defaultValue : id;
    return id 
}

export default function Cards(){
    const id = CheckParams(defaultCardCount)

    let response = JSON.parse(httpGet(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${id}`));

    let view = []
    response.forEach(element => {
        view.push(
            <div className="Card">
                <img src={element.image} className="Card-image" alt={element.character}></img>
                <h3 className="Card-name">{element.character}</h3>
                <hr></hr>
                <div className="Card-stats">
                    <span className="Card-stats-quote">{element.quote}</span>
                </div>
            </div>
    )});

    return(
        <>
            <div className="Cards">
                {view}
            </div>   
        </>
    )
}