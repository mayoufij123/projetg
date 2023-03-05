import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import pizzaSlice from "./pizzaSlice ";
import contactSlice from "./contactSlice";
export default configureStore({
    reducer:{
        authuser : authSlice,
        authpizza: pizzaSlice,
        account:contactSlice
    }
})