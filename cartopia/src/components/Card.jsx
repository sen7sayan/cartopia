import React from "react";

function Card(props){
    return(
        <div id="acard">
            <a>
                <img id="card-img" src={props.img} alt="imgs"/>
                <div id="about-card">
                    <h5 id="card-title">{props.tit}</h5>
                    <h3 id="card-">&#36;{props.pri}</h3>
                </div>
            </a>
            
        </div>
    );
}

export default Card;