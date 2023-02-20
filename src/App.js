import React from 'react';
import './App.css';
import Header from './Compnents/Header/Header';
import Shop from './Compnents/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';
import Review from './Compnents/Review/Review';
import Managae from './Compnents/Manage/Managae';
import ProductDetails from './Compnents/ProductDetails/ProductDetails';
import NotFound from './Compnents/NotFound/NotFound';
import Login from './Compnents/LogIn/LogIn';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="shop" element={<Shop/>}/>
          <Route exact path="review" element={<Review/>}/>
          <Route exact path="/manage" element={<Managae/>}/>
          <Route exact path= "logIn" element ={<Login/>}/>
          <Route exact path='/' element={<Shop/>}/>
          <Route path='product/:productKey' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;