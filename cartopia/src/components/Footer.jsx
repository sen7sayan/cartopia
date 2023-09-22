import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(<footer id="footer">
        <div className="footer-links">
            <div className="footer1">
                <h3>Reach US</h3>
                <a><Link to={"/about"}>  About us  </Link></a>
                <a>Careers</a>
                <a>Customer Care</a>
                <a>Gifts</a>
            
                
            </div>
            <div className="footer2">
                <h3>Work</h3>
                <a>Sell on Cartopia</a>
                <a>Affilate</a>
                <a>Advertise</a>
            </div>
            <div className="footer3">
                <h3>Let Us know You</h3>
                <a>FAQ</a>
                <a>Shipping Charges</a>
                <a>Policies</a>
                <a>Billing</a>
                
            </div>
            <div className="footer4">
                <h3>Offers</h3>
                <a>Electronics</a>
                <a>Summer</a>
                <a>Fashion</a>
                <a>Winter</a>
                <a>80% OFF</a>
            </div>
        </div>
        <h3 id="logo">Cartopia &copy; 2023, All rights reserve</h3>

    </footer>);
}


export default Footer;
