import React from 'react'
import './Navbar.css'
import { Link, } from 'react-router-dom'
const Navbar = ({size}) => {

  return (
    <div className='nav'>
      <ul>
      <li><a><Link to={'/'}  >Livrable</Link><span>58238048</span></a></li>
      <li><a><Link to={'/produit non livrable'}  >Pizza</Link></a></li>
     
       <li><a><Link to={'/reg'}  >Register</Link></a></li>
       <li style={{float:"right"}}   ><a><Link to={'/log'}>Login</Link></a></li>
       <li style={{float:"right"}}   ><a><Link to={'/cart'}>cart</Link><span id='spa' >{size}</span></a></li>
       </ul>
    </div>
  )
}

export default Navbar
