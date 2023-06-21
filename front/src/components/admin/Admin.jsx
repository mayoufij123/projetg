import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch,} from 'react-redux'
import { fetchContacts } from '../../api/contact';
import {setAccounts} from '../../store/contactSlice'
import { fetchPizza } from '../../api/pizza'
import { setPizza } from '../../store/pizzaSlice ';
import { PostPizza } from '../../api/pizza';
import './Admin.css'
 import ListContact from './ListContact';
import Products from './Products';
import { useNavigate } from 'react-router';
function Admin() {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const AddProduit= async(values)=>{
    await PostPizza (values)
    navigate('/produit non livrable')

  }
  const contact=useSelector(state=>state.account)
  console.log('contact',contact)
  
  const getContact=async()=>{
      const data= await fetchContacts  ()
  console.log(data.cont,'data get users')
      dispatch(setAccounts(data.cont))
      }
  useEffect(()=>{
    getContact()
  },[])
  const[name,setName]=useState('')

 
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('')
  const[ varients ,setVarients]=useState(["Small","Medium","Large"])
  const [prices,setPrices]=useState({Small:10, Medium: 1, Large: 1 })
  const [image,setImage]=useState('')
  
  const authpizza= useSelector(state=>state.authpizza)
    console.log("variant", varients)
    const getPizza=async()=>{
        const data= await fetchPizza()
    
        console.log(data.pizz,'data get pizza')
        dispatch(setPizza(data.pizz))
        
    }
    useEffect(()=>{
getPizza()
    },[])
  return (
    <div className='jk' >
      <div id='parti' >
     
      <a href="#h2">prd</a>
      </div>
      <div className='ba'>
        <h1 className='h1'>list contact</h1>
    {contact.map((e)=><ListContact contacts={e}  />)}
    <hr />

    <section>
      
    
    <div className='ajou' id='add'>
     
         <div className='cd'>
          <h2 className='h2'> add product</h2>
          <button className='bout' onClick={()=>AddProduit({name,description,prices,image,category,varients})}>add</button>
          </div>
          <div className='inp'>
          <input type="text"  placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}  />
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
/>

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
/>
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
/>
          
          
          <input type="text"  placeholder='description' value={description}    onChange={(e)=>setDescription(e.target.value)}/>
           <input type="text"  placeholder='categorie' value={category} onChange={(e)=>setCategory(e.target.value)} />
           <input
  type="text"
  placeholder="prices large"
  value={prices[varients[2]]}
  onChange={(e) => setPrices({ ...prices, [varients[2]]: e.target.value })}
/>

<input
  type="text"
  placeholder="prices medium"
  value={prices[varients[1]]}
  onChange={(e) => setPrices({ ...prices, [varients[1]]: e.target.value })}
/>

<input
  type="text"
  placeholder="prices small"
  value={prices[varients[0]]}
  onChange={(e) => setPrices({ ...prices, [varients[0]]: e.target.value })}
/>
           
           
          
         </div>
         </div>
      
         </section>
     
        
<div className='pp'>
<hr />
<h1 id='h2'>list pizza</h1>
          {
        authpizza.map((e)=> <Products  paz={e}  /> )
         }
         </div>
    </div>
      
     </div>
     

  )
}

export default Admin
