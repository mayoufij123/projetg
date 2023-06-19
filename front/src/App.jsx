

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
import Pizza from './components/Pizza';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Cart from './components/Cart';
import Livrable from './components/livrable/Livrable';
import Update from './components/admin/Update';


function App() {
  const [cart,setCart]=useState([])
  const [warning,setWarning]=useState(false)
  const HandelCkilk=(item)=>{
    //setCart([...cart,item])
    let isPresent =  false;
    cart.forEach((product) => {
  if(item.id === product.id)
   isPresent = true ;
 })
   if (isPresent) {
    setWarning(true)
    setTimeout(()=>{
      setWarning(false);

    },2000);
   
   

   }setCart([...cart,item]);

}
const HandelChange=(item,d)=>{
  let ind = -1;
  cart.forEach((data,index)=>{
  if (data.id === item.id)
    ind = index

  });
  const tempArr= cart ;
  tempArr[ind].amount += d;
  if (tempArr[ind].amount === 0)
  tempArr[ind].amount = 1;
  setCart([...tempArr])
}

  //const navigate=useNavigate()
  
  //const [pizzas,setPizzas]=useState([])
 
 
 // const HandelClick=(pizzas)=>{
  // console.log(pizzas)
  // navigate('/cart')

//}
  return (
    <div className="App">
    
     <Navbar size={cart.length}  />
      <Routes>
            <Route path={'/'}   element={<Livrable HandelCkilk={HandelCkilk} cart={cart}  />}/> 
            {warning && <div className='warning'>item is already added to your cart</div> }
            <Route path={'/produit non livrable'}   element={<Pizza/>}/>                                                
            <Route path={'/reg'}   element={<Register/>}/>
            <Route path={'/log' } element={<Login/>}/>  
            <Route path={'/app/private'} element={<PrivateRoute/>}/>
            <Route path='/updatepizza/:id' element={<Update/>}/>
            <Route path={'/cart'}  element={<Cart cart={cart} setCart={setCart} HandelChange={HandelChange}/>}/>
            
              
            
      </Routes>



    </div>
  );
}

export default App;
