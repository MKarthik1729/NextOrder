// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import React from 'react'
import './Nav.css'
import { Link, Outlet } from 'react-router-dom'
function Nav() {
  return (<div>
    <div className='nav'>
        <h1><Link to='/'>NextOrder</Link></h1>
        <h1><Link to='fav'><FaRegHeart /></Link></h1>
        <h1><Link to='cart'><IoCartOutline/></Link></h1>
    </div>
      <Outlet />  
    </div>)
}

export default Nav