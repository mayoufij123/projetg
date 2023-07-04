import React, { useEffect, useState } from 'react'
import { getUniquepizzar } from '../api/pizza'
import { useNavigate, useParams } from 'react-router'
import './Cart.css'

const Cart = ({cart,setCart,HandelChange}) => {
  const navigate=useNavigate()
    const [prices,setPrices]=useState(0)
    
 let HandelPrice=()=>{
  let ans=0;
  cart.map((item)=>{
    ans += item.amount*item.prices
  })
  setPrices(ans)
 }
 let HandelRemouve=(id)=>{
  const arr= cart.filter((item)=>item.id!=id);
    setCart(arr);
    //HandelPrice()
 }

// const printBtn= document.getElementById("prit");
// printBtn.addEventListener("click", function(){
// window.print();
// })

const HabdelVal=()=>{
  window.location.reload();
  navigate('/')
}
 
 useEffect(()=>{
HandelPrice();
 })
  return (
    <article style={{paddingTop:'30px'}}>

        {cart.map((item)=>(
        <div className='cart_box' key={item.id}>
        <div className='cart_image'>
        <img src={item.image}/>
        <p>{item.name}</p>
        </div>
        <div className='but'>
          <button onClick={()=>HandelChange(item,+1)}>+</button>
          <button>{item.amount}</button>
          <button onClick={()=>HandelChange(item,-1)}>-</button>
        </div>
        <div className='ya'>
         <span>{item.prices}</span> 
          <button id='re' onClick={()=>HandelRemouve(item.id)}    >remove</button>
        </div>
        </div>
        ))}
        <input type="text" placeholder='adress de livraison' />

    
    <div className='pri'>
      <span>totalprice</span>
      <span>Rs -{prices}</span>
    </div>
     <button id="prit" type='button' onClick={()=>HabdelVal()}> passer le commande vers livraison</button>
   
    
     </article>
  )
}

export default Cart
