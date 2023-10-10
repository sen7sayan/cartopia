import React,{useReducer, useState} from 'react'
import '../pages/productprice.css'
import { useDispatch } from "react-redux";
import { AddItems} from '../states/reducers/Storeitems';
import { AddProduct,RemoveProduct } from '../states/reducers/productDetails';
import { AddTotal} from '../states/reducers/total';
const reducer = (state,action) =>{
  switch(action.type){
    case "Add":
      return state += 1
    case "Delete":{
      if(state<1){
        return state;
      }
      return state -= 1
    }
      
    default:
      return state;
  }
}

function Productprice(props) {
  const [state,dispatchCount] = useReducer(reducer,1);
  const [isWrap,setWrap] = useState('Normal');
  const dispatch = useDispatch();
  
  function wraping(){
    if(isWrap === 'Normal'){
      setWrap('Beautiful Wrap')
    }else{
      setWrap('Normal')
    }
  }
  return (
    <div className='price'> 
      <span>$ <strong>{props.price}</strong></span>
      <h3>In Stock</h3>
      <div className='cred'>
        <button  onClick={()=>{dispatchCount({type:"Add"});} }>+</button>
        <h3>{state}</h3>
        <button onClick={()=>{dispatchCount({type:"Delete"});  dispatch(RemoveProduct({id:props.id})); }}>-</button>
      </div>
      
      
      <button className='cartbutton' 
        onClick={()=>{ dispatch(AddItems({
          quantity: state
        }));
        dispatch(AddProduct({
          id:props.id,
          price:props.price,
          quantity:state,
          makeWrap: isWrap,
          img:props.img,
          title:props.title
        }));
        dispatch(AddTotal({amount:(state*props.price)}));
        }}>Add to Cart</button>

      <div className='wrap'><input type='checkbox' onClick={wraping}></input> <span>Make it wrap</span></div>
      

    </div>
  )
}

export default Productprice;