import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Searchbar(){
    const [productType , changetype] = useState('');
    


    function handleChange(e){
        const userTyped = e.target.value;
        changetype(userTyped);
    }


    return(
        <div id="searchbar-main">
            <input onChange={handleChange} className="searchbar" placeholder="Search.."/>
            <Link to= "/search" state={{productType}}><a  class="searchicon fa-solid fa-magnifying-glass fa-lg" /></Link>
        </div>
        
    );
}

export default Searchbar;