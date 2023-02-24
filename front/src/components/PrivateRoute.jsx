import React from 'react'
import { useEffect } from "react";
import { useNavigate } from 'react-router';
import {useDispatch,useSelector} from 'react-redux'
import User from '../components/user/User'
import Admin from '../components/admin/Admin'
import { setauth} from '../store/authSlice'
import {fetchAccount} from '../api/auth'
function PrivateRoute() {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.authuser)
    console.log('lina redux auth',auth)
    const getAccout=async()=>{
        const data = await fetchAccount()
        console.log("data",data)
        dispatch( setauth(data))
      }
      useEffect(()=>{
        getAccout()
        },[])
        const logout=()=>{
            localStorage.removeItem('token')
            navigate('/login')
          }
        const token = localStorage.getItem('token')
console.log('token el user specifique ', token )

    const navigate = useNavigate()
  return (
    <div>
    
    {auth.role === "admin" ? (<Admin  auth={auth} /> ):( <User   auth={auth}/>) } {}  
    </div>
  )
}

export default PrivateRoute
