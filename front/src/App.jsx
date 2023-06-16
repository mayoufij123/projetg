

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
import Pizza from './components/Pizza';
import { useState } from 'react';
import Update from './components/Update';
import { useNavigate } from 'react-router-dom';
import Cart from './components/Cart';
import Livrable from './components/livrable/Livrable';


function App() {
  const [cart,setCart]=useState([])
  const [warning,setWarning]=useState('')
  const HandelCkilk=(item)=>{
    cart.push(item)
    console.log(cart)
    //let isPresent=false;
   //cart.forEach((product) => {
   // if(item.id===product.id)
   // isPresent = true
  //})
  // if(isPresent){
    //setWarning(true)
    //setTimeout(()=>{
      //setWarning(false);

    //},2000);
   

   //}setCart([...cart,item]);

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
            <Route path={'/produit non livrable'}   element={<Pizza/>}/>                                                
            <Route path={'/reg'}   element={<Register/>}/>
            <Route path={'/log' } element={<Login/>}/>  
            <Route path={'/app/private'} element={<PrivateRoute/>}/>
            <Route path='/updatepizza/:id' element={<Update/>}/>
            <Route path={'/cart'}  element={<Cart cart={cart} setCart={setCart}/>}/>
            {warning && <div>item is already added to your cart</div> }
              
            
      </Routes>



    </div>
  );
}

export default App;
