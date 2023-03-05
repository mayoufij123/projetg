import { createSlice } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name:"account",
    initialState:[{
        id:1,
        name:"hey uall users ",
        email:"all@gmail.com",
        password:"teste1235",
        role:"admin"
    },
    {
        id:2,
        name:"hey uall users ",
        email:"all@gmail.com",
        password:"teste1235",
        role:"user"
    },
    {
        id:3,
        name:"hey uall users ",
        email:"all@gmail.com",
        password:"teste1235",
        role:"user"
    }],
    reducers:{
        setAccounts:(state,action)=>{
            return action.payload
        }
    }
})

export const {setAccounts} = contactSlice.actions
export default contactSlice.reducer