import React from 'react'
import { useEffect } from "react";
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux'
import User from '../components/user/User'
import Admin from '../components/admin/Admin'
import { setAuth} from '../store/authSlice'
import {fetchAccount} from '../api/auth'
import Login from './Login';
function PrivateRoute() {
  const auth=useSelector(state=>state.authuser)
  // console.log('auth',auth)

const dispatch=useDispatch()
  const getAuth=async()=>{
    const data=await fetchAccount()
    console.log(data,'data account')
    dispatch(setAuth(data))
  }
  useEffect(()=>{
    getAuth()
  },[])
  const token = localStorage.getItem('token')
  console.log('token',token)
  
  
const navigation=useNavigate()
const navigate = useNavigate()

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/log')
}



  return(
  <div>
    { token  ? (  auth.role === "admin" ? (<Admin  auth={auth}  logout={logout}   /> ):( <User   auth={auth} />)  ) : (<Login/>)}
    
    

  </div>
  )
}

export default PrivateRoute
