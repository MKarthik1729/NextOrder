import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './NextOrder.css'
function NextOrder({AddtoCart}) {
    const [first, setfirst] = useState()
    useEffect(() => {
axios.get("https://fakestoreapi.com/products?limit=15")
.then(e=>{setfirst(e.data)
})
.catch(e=>console.log(e))
    }, [])
    
  return (
    <div className='grid'>
        {first && first.map((e)=><Card ele={e} AddtoCart={AddtoCart} />)}
    </div>
  )
}

export default NextOrder