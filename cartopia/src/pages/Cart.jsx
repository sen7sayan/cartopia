import React, { useState } from 'react'
import { useSelector } from "react-redux";
import './cart.css'
import { AddItems ,RemoveItems,RemoveAll} from '../states/reducers/Storeitems';
import { AddProduct,RemoveProduct,DecProduct } from '../states/reducers/productDetails';
import { AddTotal,RemoveTotal } from '../states/reducers/total';
import { useDispatch } from "react-redux";
const Cart = () => {
  const currentItems = useSelector((state) => state.itemDetails);
  const totalMoney = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();
  return (
    <div>
    <div className='product-features'>
      <span>Title</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Make Wrap</span>
      <span>Total</span>
      <span>Remove</span>
    </div>
      {currentItems.map((cur)=>{return <div className='added-items'>
      <span>{cur.id}</span>
      <span>{cur.price}</span>
      <span><button onClick={()=>{dispatch(RemoveTotal({amount:cur.price})); dispatch(DecProduct({id:cur.id})); dispatch(RemoveItems()); }}>-</button>{cur.quantity}<button onClick={()=>{dispatch(AddProduct({id:cur.id, quantity:1})); dispatch(AddItems({quantity:1})); dispatch(AddTotal({amount:cur.price})); }}>+</button></span>
      <span>{`${cur.makeWrap}`}</span>
      <span>{Math.round(cur.price * cur.quantity*100)/100}</span>
      <span onClick={()=>{dispatch(RemoveProduct({id:cur.id})); dispatch(RemoveTotal({amount:(cur.price* cur.quantity)})); dispatch(RemoveAll({quantity:cur.quantity}))}}><i class="fa-solid fa-trash"></i></span>
      </div>})}
      <div className='added-items'><h2>Total to pay : {Math.round(totalMoney*100)/100}</h2></div>
    </div>
    
  )
}

export default Cart