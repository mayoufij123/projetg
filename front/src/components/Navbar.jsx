import React from 'react'
import './Navbar.css'
import { Link, } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <div>
      <ul>
      <li><a><Link to={'/'}  >home</Link></a></li>
       
       <li><a><Link to={'/reg'}  >Register</Link></a></li>
       <li style={{float:"right"}}   ><a><Link to={'/log'}>Login</Link></a></li>
       
       </ul>
    </div>
  )
}

export default Navbar
