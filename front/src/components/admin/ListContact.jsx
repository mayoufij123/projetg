import React from 'react'
import { useState } from 'react';
import './ListContact.css'
import { DeleteContact } from '../../api/contact'
const ListContact = ({contacts}) => {
 const [users, setUsers] = useState([]);
  
    const handleDeleteUser = async (id) => {
      await DeleteContact(id);
      
      window.location.reload();
    }
  

  
 
  return (
    <div className='hi'>
    <table border='1px'>
      <ul>
        <td>
        <li className='name'>{contacts.name}</li></td>
        <td>
        <li className='name'>{contacts.email}</li></td>
        <td className='del'><button onClick={()=>handleDeleteUser()} >delete</button>
        </td>
      </ul>
      </table>
    </div>
  )
}

export default ListContact
