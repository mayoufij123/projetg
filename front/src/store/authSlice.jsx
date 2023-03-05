import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const authSlice = createSlice({
    name:"authuser",
    initialState:[{
        id:uuidv4(),
        name:"jaber",
        email:"bensalah@gmail.com",
        password:"teste123.25",
        role:"user"
    }],
    reducers:{
        setAuth:(state,action)=>{
            return action.payload
        }
    }
})

export const {setAuth} = authSlice.actions
export default authSlice.reducer
