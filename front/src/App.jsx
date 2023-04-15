

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
import Pizza from './components/Pizza';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([])
  return (
    <div className="App">
    
     <Navbar size={cart.length}/>
      <Routes>
            <Route path={'/'}   element={<Pizza/>}/>                                                
            <Route path={'/reg'}   element={<Register/>}/>
            <Route path={'/log' } element={<Login/>}/>  
            <Route path={'/app/private'} element={<PrivateRoute/>}/>
      </Routes>



    </div>
  );
}

export default App;
