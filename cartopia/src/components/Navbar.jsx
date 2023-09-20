
import React from "react";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import Heading from "./Heading";

function Navbar(){
    return(
        <nav className="navbar">
            <Heading />
            <Searchbar />
            <Cart/>
        </nav>
    );
}


export default Navbar;