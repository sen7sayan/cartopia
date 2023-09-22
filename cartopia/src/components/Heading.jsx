import React from "react";
import { Link } from "react-router-dom";

function Heading(){
    return(
        <Link to={"/"}><h1 className="heading">Cartopia</h1></Link>
    );
}

export default Heading;