import React from 'react'
import  {useState} from 'react'
import { useNavigate } from 'react-router';
import {postContact} from '../api/auth';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const handelAdd=async(values)=>{
  await postContact(values)
  navigate('/log')
  }
  return (
    <div>
      <div className='jaber'>
      <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">registrement</label>
					<input type="text" placeholder="Email address "  value={email}  
            
            onChange={(e)=>setEmail(e.target.value)} />
      
            <input type="password" placeholder="Password" value={password}  
            
            onChange={(e)=>setPassword(e.target.value)} />
  
           <input type="text" placeholder="name"  
           value={name}  
            
           onChange={(e)=>setName(e.target.value)}/>
					
					<button type='button'  onClick={()=>handelAdd({name,password,email})} >Register</button>
        
          <button onClick={()=>navigate('/log')} >sign in</button>
				</form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Register
