import React from 'react'
import './PizzaCard.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios  from 'axios';

function PizzaCard({pizzas,userId}) {
    const [quantity,setQuantity]=useState(1)
    const [varient,setVarient]=useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    const choicePizza = async(pizzasId) => {
     const _pizzasId=pizzasId
    //userId=userId
     const quantity=1
     const price =1

console.log({pizzasId:_pizzasId,quantity,price})
const data={pizzasId:_pizzasId,quantity,price}
try{const res = await axios.post('http://localhost:5000/api/cart/createcart',data)   
    
await localStorage.getItem('token',res.data.token)
    
console.log(res.data.token,res)

}


    
    
    catch(err){
      
  console.log(err)
  }

}






//const res = await axios.post('http://localhost:5000/api/cart/createcart',cartItem)
      // quantité ?
      //  post request 
      // const handelLogin=async(values)=>{
      //   try{
      //   const res = await axios.post('http://localhost:5000/authe/user/signin',values)
    
      //   await localStorage.setItem('token',res.data.token)
      //   console.log(res.data.token,res)
      //   navigate('/app/private')
        
      //   }catch(err){
          
      //   console.log(err)
      //   }
      //   }

   // }

  return (
    <div style={{margin:"100px"}} className='box'>
      
      <div onClick={handleShow}>
      <h1>{pizzas.name}</h1>
      
      <img src={pizzas.image} className="img-fluid" style={{height :"200px" ,width:"200px"}}/>
      
  
      
      </div>
      
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
<button className='btn'  onClick={()=>choicePizza(pizzas._id)}>
  {/* - excetute fnc get el product , send to cart  backend  */}
  Add to cart</button>
        </div>
      </div>
      <Modal show={show} className='jalel'>
    
      <Modal.Title>  <h1>{pizzas.name} </h1></Modal.Title>
    
<img src= {pizzas.image} className="ha" style={{height :"380px" ,width:"300px"}}/>
    <Modal.Body>
   <p> {pizzas.description} </p>
    </Modal.Body>

    <Modal.Footer>
      <button className='btn' onClick={handleClose}> close</button>
    </Modal.Footer>
  </Modal>
  
  
      
  </div>
  )
}

export default PizzaCard
