import React,{useState,useEffect} from 'react'
import Productdescription from '../components/Productdescription';
import Productprice from '../components/Productprice';
import Productimg from '../components/Productimg';
import { useLocation } from "react-router";
import './product.css'

const Product = () => {
  let data = useLocation();
  const {id} = data.state;

  const URL =  `https://fakestoreapi.com/products/${id}`;
  const [filteredData, setdata] = useState([]);

  function filterCategory(askFilter){   
      return fetch(URL)
          .then((response)=>response.json())
          .then((datas)=> setdata(datas))
          .catch(rejected => {console.log(rejected);});
  }

  
  useEffect(()=>{
      filterCategory();
  },[]);

  const {ids,title,price,description,category,rating,image} = filteredData;

  return (
    <div id="product-page" className='container'>
      <Productimg src={image}/>
      <Productdescription  title={title} category={category} desc={description} />
      <Productprice price={price} id={id}/>
    </div>
  )
}

export default Product