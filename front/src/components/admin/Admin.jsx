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
    navigate('/')

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
  const [prices,setPrices]=useState({})
  const [image,setImage]=useState('')
  const authpizza= useSelector(state=>state.authpizza)
    
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
      <div className='ba'>
        <h1 className='h1'>list contact</h1>
    {contact.map((e)=><ListContact contacts={e}  />)}
    

    <section>
      
    
    <div className='ajou' id='add'>
     
         <div className='cd'>
          <h2 className='h2'> add product</h2>
          <button className='bout' onClick={()=>AddProduit({name,description,prices,image,category})}>add</button>
          </div>
          <div className='inp'>
          <input type="text"  placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}  />
          
          <select name="" id="list"  >
            <option >small</option>
            <option >meduim</option>
            <option >large</option>
          </select>
          
          <input type="text"  placeholder='description' value={description}    onChange={(e)=>setDescription(e.target.value)}/>
           <input type="text"  placeholder='categorie' value={category} onChange={(e)=>setCategory(e.target.value)} />
           
           <input type="text" placeholder='prices'  value={prices} onChange={(e)=>setPrices(e.target.value)} />
           <input type="text" placeholder='image'  value={image} onChange={(e)=>setImage(e.target.value)} />

          
         </div>
         </div>
         </section>
<div className='pp'>
          {
        authpizza.map((e)=> <Products  paz={e}  /> )
         }
         </div>
    </div>
      
     </div>
     

  )
}

export default Admin
