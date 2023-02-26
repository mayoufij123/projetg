import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const pizzaSlice = createSlice({
    name:"authpizza",
    initialState:[{
        id:uuidv4(),
        name: "non veg super",
        varients:["samll","medium","large"],
        prices: [{"small":200,"medium":350,"large":400} ],
        category: "hjdizojdjo",
        description: "kdskkzpkdk",
        image: "https://img.cuisineaz.com/660x660/2018/02/28/i136025-pizza-legere.jpeg",
    }],
    reducers:{
        setPizza:(state,action)=>{
            return action.payload
        }
    }
})

export const {setPizza} = pizzaSlice.actions
export default pizzaSlice.reducer