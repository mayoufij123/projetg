import React from 'react'
import './Products.css'

function Products({paz}) {
  return (
    <div>

<div className='prd' >
        <input type="text" value={paz.name} />
        <input type="text" value={paz.prices.map((e)=>e ) }/>
        <button>apdate</button>
        <button>delete</button>
        </div>
      
    </div>
  )
}

export default Products
