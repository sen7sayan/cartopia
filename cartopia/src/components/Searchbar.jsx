import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Searchbar(){
    const [productType , changetype] = useState('');
    


    function handleChange(e){
        const userTyped = e.target.value;
        changetype(userTyped);
    }

    function handleClick(){
        localStorage.setItem('searchBox',`${productType}`)
    }
    return(
        <div>
            <input onChange={handleChange} className="searchbar" placeholder="Search.."/>
            <Link to={"/search"}><a  onClick={handleClick} class="searchicon fa-solid fa-magnifying-glass fa-lg" /></Link>
        </div>
        
    );
}

export default Searchbar;