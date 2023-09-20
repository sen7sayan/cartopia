import React from "react";
import Card from "./Card";

function Cardmenu(){
    return(
        <div id="menu-box">
            <div id="menu-heading" className="container">
                <h2>Top 10 items </h2>
                <button className="cartbutton">Explore</button>
            </div>
            <div className="menu-card container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        
    );
}

export default Cardmenu;