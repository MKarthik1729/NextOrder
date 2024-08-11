import React from 'react'

function Card({ele,AddtoCart}) {
  return (
    <div className='card'>
        <img src={ele.image} />
        <h2 className='h1-size'>{ele.title}</h2>
        <p className='content'>{ele.description}</p>
        <div className='flex'>
        <p>₹{ele.price*80}</p>
        <p onClick={()=>AddtoCart(ele)}>Add to Cart</p>
        </div>
    </div>
  )
}

export default Card