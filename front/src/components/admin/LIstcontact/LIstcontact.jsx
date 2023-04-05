import React from 'react'
import './LIstcontact.css'
import { DeleteContact } from '../../../api/contact';
function LIstcontact({contacts,auth}) {
  const HandelDelete=async(id,values)=>{
     await  DeleteContact()
  }
  
  return (
  
  
    <div className='rigth'  style={{"paddingBottom":"20px"}}>
      
      <table border='1px'>
      <ul>
        <td>
        <li className='name'>{contacts.name}</li></td>
        <td>
        <li className='name'>{contacts.email}</li></td>
        <td className='del'><button  onClick={()=>HandelDelete()}>delete</button>
        </td>
      </ul>
      </table>


    </div>
  
  


          
 
  )

  }
export default LIstcontact
