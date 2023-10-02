import React ,{useEffect, useState}from "react";
import Card from "./Card";
import { Link } from "react-router-dom";



function Cardmenu(props){

    const URL =  "https://fakestoreapi.com/products";
    const [filteredData, setdata] = useState([]);

    function filterCategory(askFilter){   
        return fetch(URL)
            .then((response)=>response.json())
            .then((datas)=> setdata(datas.filter((dat)=>{return dat.category === askFilter})))
            .catch(rejected => {console.log(rejected);});
    }


    useEffect(()=>{
        filterCategory(props.category);
    },[]);
    

    return(
        <div id="menu-box">
            <div id="menu-heading" className="container">
                <h2 id="menu-heading-category">{props.category}</h2>
                <Link to="/category" state={{category: props.category}}><button className="cartbutton">Explore</button> </Link>
            </div>
            <div className="menu-card container">
                {filteredData.map((fd)=>{return <Card key={fd.id} id={fd.id} img={fd.image} pri={fd.price} tit={fd.title}/>})}
            </div>
        </div>
        
    );
}

export default Cardmenu;