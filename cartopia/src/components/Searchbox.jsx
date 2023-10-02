import React, {useState, useEffect} from 'react'



function Searchbox() {
  const URL =  'https://fakestoreapi.com/products/categories'; 
  const [filteredData, setdata] = useState([]);
  function filterCategory(){   
      return fetch(URL)
          .then((response)=>response.json())
          .then((datas)=> setdata(datas))
          .catch(rejected => {console.log(rejected);});
  }

  useEffect(()=>{
      filterCategory();
  },[]);
  
  return (
    <div id='search-box'>
        <h3>Categories</h3>
        <div id="category-list">
          {filteredData.map((dat)=>
            {return(
                <span >{dat}</span>
            )})} 
        </div>
        <button >Clear</button>
    </div>
  )
}

export default Searchbox