import React from 'react'

function Productdescription({title,category,desc,rating}) {

  return (
    <div className='product-desc'>
    {/* <span>{rating.rate}</span> */}
    <i class="fa-regular fa-heart"></i>
    <h1>{title}</h1>
    <h5>{category}</h5>
    <p>{desc}</p>
    </div>
  )
}

export default Productdescription;