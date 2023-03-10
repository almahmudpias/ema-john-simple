import { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import {  Link } from 'react-router-dom';
import './Header.css';
import { userContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
      
        <div className='header'>
         <img src={logo} alt=""/>
         <nav>
              <Link to="/shop">Shop</Link>
              <Link to="/review">Review</Link>
              <Link to="/manage">Manage Inventory</Link>
              <Link to="/logIn">Log In</Link>
              <button className='btn btn1 btn-primary' onClick={()=> setLoggedInUser({})}>Sign Out</button>
         </nav>
        </div>
    );
};

export default Header;