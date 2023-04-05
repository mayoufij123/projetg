import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch,} from 'react-redux'
import { fetchPizza } from '../api/pizza'
import { setPizza } from '../store/pizzaSlice ';
import PizzaCard from './PizzaCard'
import './Pizza.css'


function Pizza() {
    const authpizza= useSelector(state=>state.authpizza)
    console.log('pizza111111111111',authpizza)
    const dispatch=useDispatch()
    const getPizza=async()=>{
        const data= await fetchPizza()
    
        console.log(data.pizz,'data get user')
        dispatch(setPizza(data.pizz))
        
    }
    useEffect(()=>{
getPizza()
    },[])
  return (
    <div className='produit'>
        {
        authpizza.map((e)=> <PizzaCard pizzas={e} /> )
      }
      
    </div>
  )
}

export default Pizza
