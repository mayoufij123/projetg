

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
     <Navbar/>
    <Routes>
    <Route path={'/reg'}   element={<Register/>}/>
    <Route path={'/log' } element={<Login/>}/>  
    <Route path={'/app/private'} element={<PrivateRoute/>}/>
 </Routes>
    </div>
  );
}

export default App;
