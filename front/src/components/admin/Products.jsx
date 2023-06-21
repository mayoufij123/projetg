import React ,{useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {Deletepizza} from '../../api/pizza'
import './Products.css'

function Products({paz}) {
  const navigate = useNavigate()
  const handleDeltepizza = async (id) => {
    await Deletepizza (id);
    
    window.location.reload();
    
  }
 
  const [prices,setPrices]=useState({Small:10, Medium: 0, Large: 0 })
  const[name,setName]=useState('')
  const prop=paz.prices
  console.log(prop)
 // const navigateProduit=()=>{
   // navigate(`/updatepizza/${paz._id}`)

 // }
 //const PrintBtn= document.getElementById('print')
// PrintBtn.addEventListener('click',function () {
// print();

// })
 

  return (

    <div>

<div className='prd' >
  
        <input type="text" value={paz.name} className='oo'  onChange={(e)=>setName(e.target.value)} />
        
        <input type='text'className='oo'  value={paz.prices.map((obj) => JSON.stringify(obj)).join(', ')} onChange={(e) => setPrices(e.target.value )} />
        <div className='pt'>
        <Link to = {`/updatepizza/${paz._id}`}> <button>update</button> </Link>
        </div>
        <button id='nn' onClick={()=>handleDeltepizza()}>delete</button>
      
        </div>
        
    </div>
  )
}

export default Products
