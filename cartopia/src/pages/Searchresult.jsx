import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router";
import Card from '../components/Card';
import './searchresult.css'
const Searchresult = () => {
  let data = useLocation();
  const isearch = data.state
  const search = data.state.productType;
  
  const URL =  "https://fakestoreapi.com/products";
    const [filteredData, setdata] = useState([]);

    function filterResult(ask){
      if(ask.title.toLowerCase().includes(search)){
        return true;
      }else if(ask.description.toLowerCase().includes(search)){
        return true;
      }else{
        return false;
      }
    }

    function filterCategory(askFilter){   
        return fetch(URL)
            .then((response)=>response.json())
            .then((datas)=> setdata(datas.filter(filterResult)))
            .catch(rejected => {console.log(rejected);});
    }


    useEffect(()=>{
        filterCategory();
    },[isearch]);

  return (
      <div className='search-result'>      
        {filteredData.map((item)=>{ return <Card key={item.id} id={item.id} img={item.image} tit={item.title} pri={item.price}/>})}
      </div>
  )
}

export default Searchresult;