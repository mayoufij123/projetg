import React from 'react'
import './PizzaCard.css'
import { useState } from 'react'

function PizzaCard({pizzas}) {
    const [quantity,setQuantity]=useState(1)
    const [varient,setVarient]=useState('small')
  return (
    <div style={{margin:"100px"}} className='box'>
      <h1>{pizzas.name}</h1>
      <img src={pizzas.image} className="img-fluid" style={{height :"200px" ,width:"200px"}}/>
      <div className='flex-container'>
          <div className="w-100">
<p> varientes</p>
<select value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
    {pizzas.varients.map(varient=>{ return   <option value={varient}>{varient}</option>   })}
</select>
                </div>
         <div className="w-100">
      <p>Quantity</p>
      <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} >
      {[...Array(10).keys()].map((x,i)=>{
    return <option value={i+1}>{i+1}</option>
     })}
    </select>
    </div>
      </div>
      <div className="flex-container">
        <div className='m-1 w-100'>
<h1>Price:{pizzas.prices[0][varient]*quantity}</h1>
        </div>
        <div className='m-1 w-100'>
<button className='btn'>Add to cart</button>
        </div>
      </div>


    </div>
  )
}

export default PizzaCard
