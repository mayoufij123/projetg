import React from 'react'
import { getUniquepizzar } from '../api/pizza'
import { useParams } from 'react-router'

const Cart = ({cart,setCart}) => {
    
    
 
  return (
    <article style={{paddingTop:'200px'}}>

        {cart.map((item)=>(
        <div className='cart_box' key={item.id}>
        <div className='cart_image'>
        <img src={item.image}/>
        <p>{item.name}</p>
        </div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
         <span>{item.prices}</span> 
          <button>remove</button>
        </div>
        </div>
        ))}

    
    <div>
      <span>totalprice</span>
    </div>
     </article>
  )
}

export default Cart
