import React from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch,} from 'react-redux'
import { fetchContacts } from '../../api/contact';
import {setAccounts} from '../../store/contactSlice'
 import './Admin.css'
import LIstcontact from './LIstcontact/LIstcontact';
function Admin({auth,logout}) {
  const contact=useSelector(state=>state.account)
  console.log('contact',contact)
  const dispatch=useDispatch()
  const getContact=async()=>{
      const data= await fetchContacts  ()
  
      console.log(data.cont,'data get user')
      dispatch(setAccounts(data.cont))
      
  }
  useEffect(()=>{
    getContact()
  },[])
  return (
    <div>
      <ul className='add'>
        <li style={{color:'white'}}>{auth.name}</li>
        <button onClick={()=>logout()} className='log'>log out</button>
        
        </ul>
        {contact.map((e)=><LIstcontact contacts={e}/>)}
    </div>
  )
}

export default Admin
