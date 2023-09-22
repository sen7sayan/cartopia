import React from "react";
import { Link } from "react-router-dom";

function Card(props){
    return(
        <Link to={"/product"}>
        <div id="acard">
            <a>
                <img id="card-img" src={props.img} alt="imgs"/>
                <div id="about-card">
                    <h5 id="card-title">{props.tit}</h5>
                    <h3 id="card-">&#36;{props.pri}</h3>
                </div>
            </a>
            
        </div>
        </Link>
    );
}

export default Card;