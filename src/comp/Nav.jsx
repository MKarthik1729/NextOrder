// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Nav.css'
import { Link, Outlet } from 'react-router-dom'
function Nav() {
  return (<div>
    <div className='nav'>
        <h1><Link to='/'>NextOrder</Link></h1>
        <h1><Link to='cart'>Cart</Link></h1>
    </div>
      <Outlet />
    </div>)
}

export default Nav