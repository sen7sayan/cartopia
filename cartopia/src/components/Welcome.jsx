import React from "react";
import { Link } from "react-router-dom";

function Welcome(){
    return(<div className="container welcomeshowcase">
            <img className="showcase-img-1" src="https://img.freepik.com/free-vector/online-shop-page-tablet_74855-5906.jpg?w=740&t=st=1695192184~exp=1695192784~hmac=9e593e37bd9e1dfca55eebe21a584262fdbf0ebf3e6d0372c8f7b1d7387b2c61" alt="showcase-img"/>
            <div className="heading-offers">
                <h1>Get Flat 30% OFF*</h1>
                <h1>Latest Fashion</h1>
                <Link to={"/shop"}><button className="cartbutton">Shop Now</button></Link>
            </div>
        </div>
    );
}

export default Welcome;