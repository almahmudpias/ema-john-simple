import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Compnents/Header/Header';
import Shop from './Compnents/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from 'react-router-dom';
import Review from './Compnents/Review/Review';
import Managae from './Compnents/Manage/Managae';
import ProductDetails from './Compnents/ProductDetails/ProductDetails';
import NotFound from './Compnents/NotFound/NotFound';
import Login from './Compnents/LogIn/LogIn';
import Shipment from './Compnents/Shipment/Shipment';
import PrivateRoute from './Compnents/PrivateRoute/PrivateRoute';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser ]}>
      <h1>Email: {loggedInUser.email}</h1>
      
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path="shop" component element={<Shop/>}/>
          <Route exact path="review" element={<Review/>}/>
          <Route exact path="manage" element={<Managae/>}/>
          <Route exact path= "logIn" element ={<Login/>}/>
          <Route path="shipment"  element ={<PrivateRoute>
            <Shipment path="/"/>
            </PrivateRoute>}/>
        
          <Route exact path='/' element={<Shop/>}/>
          
          <Route path='product/:productKey' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      
      
      
    </userContext.Provider>
  );
}

export default App;