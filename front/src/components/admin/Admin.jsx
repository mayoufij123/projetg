import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch,} from 'react-redux'
import { fetchContacts } from '../../api/contact';
import {setAccounts} from '../../store/contactSlice'
import { fetchPizza } from '../../api/pizza'
import { setPizza } from '../../store/pizzaSlice ';
 import './Admin.css'
 import { PostPizza } from '../../api/pizza';
import LIstcontact from './LIstcontact/LIstcontact';

import { useNavigate } from 'react-router';
function Admin({auth,logout}) {
  const authpizza= useSelector(state=>state.authpizza)
    const dispatch=useDispatch()
    const getPizza=async()=>{
        const data= await fetchPizza()
    
        console.log(data.pizz,'data get pizza')
        dispatch(setPizza(data.pizz))
        
    }
    useEffect(()=>{
getPizza()
    },[])
  const[name,setName]=useState('')

 
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('')
  const [prices,setPrices]=useState({})
  const [image,setImage]=useState('')
  const contact=useSelector(state=>state.account)
  console.log('contact',contact)
  
  const getContact=async()=>{
      const data= await fetchContacts  ()
  
      console.log(data.cont,'data get user')
      dispatch(setAccounts(data.cont))
      
  }
  useEffect(()=>{
    getContact()
  },[])
  const navigate = useNavigate()
  const AddProduit= async(values)=>{
    await PostPizza (values)
    navigate('/')

  }
  return (
    <div>
     <div className='left'>
           <h1>{auth.name}</h1>

           <a href="#">home</a>
          <a href="#users">users</a>
         <a href="#add"> products</a>
          < button onClick={()=>logout()}>logout</button>
         </div>
         <div className='ajou' id='add'>
         <div className='cd'>
          <h2 className='h2'> ajout product</h2>
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
         <div className='ka'>
         
         {
        authpizza.map((e)=> 
        <div className='prd' >
        <input type="text" value={e.name} />
        <input type="text" value={e.prices.map((e)=>e ) }/>
        <button>apdate</button>
        <button>delete</button>
        </div>
     )
      }
         </div>
</div>
     
    <div className='list' id='users'>
      
    {contact.map((e)=><LIstcontact contacts={e} auth={auth} />)}
    </div>
    
 </div>
    
  )
}

export default Admin
