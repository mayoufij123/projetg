import React ,{useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import './Products.css'

function Products({paz}) {
  const navigate = useNavigate()
  const [prices,setPrices]=useState({Small:10, Medium: 0, Large: 0 })
  const[name,setName]=useState('')
  const prop=paz.prices
  console.log(prop)
 // const navigateProduit=()=>{
   // navigate(`/updatepizza/${paz._id}`)
 // }

  return (

    <div>

<div className='prd' >
        <input type="text" value={paz.name}  onChange={(e)=>setName(e.target.value)} />
        
        <input type='text' value={paz.prices.map((obj) => JSON.stringify(obj)).join(', ')} onChange={(e) => setPrices(e.target.value )} />
        
        <Link to = {`/updatepizza/${paz._id}`}> <button>update</button> </Link>
        <button>delete</button>
        </div>
      
    </div>
  )
}

export default Products
