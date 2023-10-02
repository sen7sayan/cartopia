import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import { useLocation } from "react-router";
import './category.css'
const Category = () => {
  let data = useLocation();
  const {category} = data.state;


  const URL =  "https://fakestoreapi.com/products";
    const [filteredData, setdata] = useState([]);

    function filterCategory(askFilter){   
        return fetch(URL)
            .then((response)=>response.json())
            .then((datas)=> setdata(datas.filter((dat)=>{return dat.category === askFilter})))
            .catch(rejected => {console.log(rejected);});
    }
    useEffect(()=>{
        filterCategory(category);
    },[category]);


  return (
    
    <div className='category-items'>
      <h2>{category}</h2>
      <div>
      {filteredData.map((item)=>{return <Card id={item.id} img={item.image} tit={item.title} pri={item.price}></Card>})}
      </div>
    </div>
  )
}

export default Category