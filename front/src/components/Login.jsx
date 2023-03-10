import React from 'react'
import axios from 'axios';
import  {useState} from 'react'
import { useNavigate } from 'react-router';
import {postContact} from '../api/auth'

function Login() {
  const navigate = useNavigate()
     const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
  const handelLogin=async(values)=>{
    try{
    const res = await axios.post('http://localhost:5000/authe/user/signin',values)
    

    await localStorage.setItem('token',res.data.token)
    
    console.log(res.data.token,res)
    navigate('/app/private')
    
    }catch(err){
      
    console.log(err)
    }
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
  
           
					
        
          <button type='button' onClick={()=>handelLogin({email,password})} >sign in</button>
				</form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login
