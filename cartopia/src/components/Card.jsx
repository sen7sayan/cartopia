import React from "react";
import { Link } from "react-router-dom";

function Card({id,img,tit,pri}){
    return(
        <Link to="/product" state={{id}}>
        <div id="acard">
            <a>
                <img id="card-img" src={img} alt="imgs"/>
                <div id="about-card">
                    <h5 id="card-title">{tit}</h5>
                    <h3 id="card-">&#36;{pri}</h3>
                </div>
            </a>

        </div>
        </Link>
    );
}

export default Card;