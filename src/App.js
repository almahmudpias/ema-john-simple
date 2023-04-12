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
import Footer from './Compnents/Footer/Footer';
import Home from './Compnents/Home/Home';
import Layout from './Compnents/Layout';
import SignUp from './Compnents/SignUp/SignUp';
import ForgetPass from './Compnents/SignUp/ForgetPass';
import PrivacyPolicy from './Compnents/Policy/PrivacyPolicy';

import ShippingPolicy from './Compnents/Policy/ShippingPolicy';
import RefundPolicy from './Compnents/Policy/RefundPolicy';
import TermsCondition from './Compnents/Policy/TermsCondition';
import Blog from './Compnents/Blogs/Blog';




export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser ]}>
      <h1> {loggedInUser.email}</h1>
      
      <Router>
      
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Home />} />
          <Route exact path="shop" element={<Shop/>}/>
          <Route exact path="review" element={<Review/>}/>
          <Route exact path="manage" element={<Managae/>}/>
          <Route exact path= "logIn" element ={<Login/>}/>
          <Route exact path= "privacy-policy" element ={<PrivacyPolicy/>}/>
          <Route exact path= "shipping-policy" element ={<ShippingPolicy/>}/>
          <Route exact path= "refund-policy" element ={<RefundPolicy/>}/>
          <Route exact path= "term-conditions" element ={<TermsCondition/>}/>
          <Route exact path= "blogs" element ={<Blog/>}/>
          <Route path="signup" element={<SignUp />} />
          <Route path='forgetpassword' element={<ForgetPass/>}></Route>
          <Route path="shipment"  element ={<PrivateRoute>
            <Shipment path="/"/>
            </PrivateRoute>}/>
          <Route path='product/:productKey' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
      
      
      
    </userContext.Provider>
  );
}

export default App;