import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './card.css'


function Card({ele,AddtoCart}) {
  return (
    <div className='card'>
        <img src={ele.image} />
        <h2 className='h1-size'>{ele.title}</h2>
        <p className='content'>{ele.description}</p>
        <div className='flex'>
        <p>₹{ele.price*80}</p>
        <p className='icon-data'><CiHeart size='2em'/></p>
        <p onClick={()=>AddtoCart(ele)} className='icon-data'><IoCartOutline size='2em'/></p>
        <p className='buy'>Buy</p>
        </div>
    </div>
  )
}

export default Card