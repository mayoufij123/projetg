import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import pizzaSlice from "./pizzaSlice ";
export default configureStore({
    reducer:{
        authuser : authSlice,
        authpizza: pizzaSlice,
    }
})