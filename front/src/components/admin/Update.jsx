import React,{ useEffect, useState }  from 'react'
import { useNavigate, useParams } from 'react-router'
import { updatepizzas,getUniquepizzar } from '../../api/pizza'
import './Update.css'
const Update = () => {
 

  //const GetPizzabyid =async (pizId)=>{
   //const data = await getUniquepizzar(pizId)
   //console.log('data updted',data)
  //}
  //useEffect(()=>{
  //GetPizzabyid(id)
 // },[id])



  const navigatep=useNavigate()
  const {id}=useParams()
  
  const  HandelModf=async(id,values)=>{
  await  updatepizzas(id,values)
  navigatep('/produit non livrable')
  }
  const[name,setName]=useState('')
  const[ varients ,setVarients]=useState(["Small","Medium","Large"])
  const [prices,setPrices]=useState({Small:10, Medium: 0, Large: 0 })
  return (
    <div className='updat'>
     
    name:
  
    <input className='ipt' type="text"  name='name' value={name}  onChange={(e) => setName(e.target.value )} />
 varients:
   <input 
  type="text"
  placeholder="variant1"
  value={varients[0]}
  onChange={(e) => {
    const updatedVariants = [
      e.target.value,
      varients[1],
      varients[2]
    ];
    setVarients(updatedVariants);
    setPrices({
      ...prices,
      [updatedVariants[0]]: prices[updatedVariants[0]]
    });
  }}
  className='ipt'/>

<input
  type="text"
  placeholder="variant2"
  value={varients[1]}
  onChange={(e) => {
    const updatedVariants = [
      varients[0],
      e.target.value,
      varients[2]
    ];
    setVarients(updatedVariants);
    setPrices({
      ...prices,
      [updatedVariants[1]]: prices[updatedVariants[1]]
    });
  }}
  className='ipt'/>
<input
  type="text"
  placeholder="variant3"
  value={varients[2]}
  onChange={(e) => {
    const updatedVariants = [
      varients[0],
      varients[1],
      e.target.value
    ];
    setVarients(updatedVariants);
    setPrices({
      ...prices,
      [updatedVariants[2]]: prices[updatedVariants[2]]
    });
  }}
  className='ipt'/>
  


<div className=' prc'>
   <input
  type="text"
  placeholder="prices large"
  value={prices[varients[2]]}
  onChange={(e) => setPrices({ ...prices, [varients[2]]: e.target.value })}
  className='ipt'/>

<input
  type="text"
  placeholder="prices medium"
  value={prices[varients[1]]}
  onChange={(e) => setPrices({ ...prices, [varients[1]]: e.target.value })}
  className='ipt'/>

<input
  type="text"
  placeholder="prices small"
  value={prices[varients[0]]}
  onChange={(e) => setPrices({ ...prices, [varients[0]]: e.target.value })}
  className='ipt'/>
 
   </div>
   
   <button onClick={()=>HandelModf(id,{name,prices})} className='ipt'>update</button>
    </div>

  )
}

export default Update
