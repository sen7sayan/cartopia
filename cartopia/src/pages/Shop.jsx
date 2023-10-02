import React ,{useEffect, useState}from "react";
import './shop.css'

import Card from '../components/Card';

const Shop = () => {

  const productURL =  "https://fakestoreapi.com/products";
  const categoryURL =  "https://fakestoreapi.com/products/categories";

  const [allitem, getItems] = useState([]);
  const [categoryList,getList] =useState([]);
  const [itemAsk, setAsk] = useState('');
  function getPrdouct(ask=""){ 
        if(ask ===""){
          return fetch(productURL)
          .then((response)=>response.json())
          .then((datas)=> {getItems(datas)})
          .catch(rejected => {console.log(rejected);});
        }else{
          return fetch(productURL+'/category/'+ask)
          .then((response)=>response.json())
          .then((datas)=> {getItems(datas)})
          .catch(rejected => {console.log(rejected);});
        }
  }

  function getCategory(){  
    return fetch(categoryURL)
      .then((response)=>response.json())
      .then((datas)=> {getList(datas)})
      .catch(rejected => {console.log(rejected);});

}


  useEffect(()=>{
    getCategory();
    getPrdouct(itemAsk);
  },[itemAsk]);

  return (
    <div id="search-product">
      <div className="category-list">
        <h2>Categories</h2>
        <div className="categories">
          {categoryList.map((item)=>{return <a onClick={()=>{setAsk(item)}}>{item}</a>})}
          
        </div>
        
      </div>
      <div id='product-lists'>
        {allitem.map((aI)=>{
          return <Card key={aI.id} id={aI.id}img={aI.image} tit={aI.title} pri={aI.price}/>
        })}
      </div>
    </div>
  )
}

export default Shop;