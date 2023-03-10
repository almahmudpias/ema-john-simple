
import './LogIn.css';

import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { userContext } from '../../App';
import { state, useLocation, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, handleWithFacebook, initializeLogInFrameWork, signInWithEmailAndPassword } from './LogIn_Manager';


function LogIn() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    error: '',
    success: false
  });

  initializeLogInFrameWork();

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/shipment' } };
  
  const googleSingIn =() =>{
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res);
      navigate(from, { replace: true });
    })
  }
 const signOut =() =>{
  handleSignOut()
  .then(res => {
    handleResponse(res);
  })
 }
 const facebookSingIn =() =>{
  handleWithFacebook()
  .then(res => {
    handleResponse(res);
    navigate(from, { replace: true });
  })
 }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res);
        navigate(from, { replace: true });
      })
     
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
       handleResponse(res);
        navigate(from, { replace: true });
      })
      
    }
    e.preventDefault();

  }
  const handleResponse = (res) =>{
    setUser(res);
    setLoggedInUser(res);
  } 
  const handleChange = (event) => {
    let isFormValid = true;
    if (event.target.name === 'email') {
      var mail = /^\S+@\S+\.\S+$/;
      isFormValid = mail.test(event.target.value);

    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  
 
 
  return (
    <div className='App App-header'>
   
      <h1>LOG IN HERE</h1>
      <div className='form'>
      <div className='box'>

      <input type="checkbox" name='newUser' onChange={() => setNewUser(!newUser)} />
      <label for="newUser">New User Sign-Up</label>
      </div>
      <form  onSubmit={handleSubmit}>
        {
        newUser && 
        <div className='form-group'>
          <label for="exampleInputEmail1">Name</label>
          <input className='form-control' type="text" name='name' onBlur={handleChange} placeholder='Enter Your Name' />
        
        </div>}
    
        <div  className='form-group'>
        <label for="exampleInputEmail1">Email address</label>
        <input class='form-control' aria-describedby="emailHelp" type="text" name='email' onBlur={handleChange} placeholder='Enter Your Email' />

        </div>
        <div className='form-group'>
        <label for="exampleInputPassword1">Password</label>
        <input className='form-control' type="password" name='password' onBlur={handleChange} placeholder='Enter Your Password' />

        </div>

        <div>
          <br />
        <input class="btn btn-primary" type="submit" value={newUser ? 'Create Acount' : 'Log In'} />
        </div>
      
      </form>
      <br />
      <div>
      {
      user.isSignIn ?
        <button class="loginBtn loginBtn--google" onClick={signOut}>Sign Out</button> :
        <button class="loginBtn loginBtn--google" onClick={googleSingIn}>Sign In With Google</button>
      }
      
      <button class="loginBtn loginBtn--facebook" onClick={facebookSingIn}>Sign In With Facebook</button>
      </div>
      
      {
        user.error && <p style={{ color: 'red' }}>Email Already Register, Please Use New Email For Register! </p>
      }
      {
        user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Succesfully</p>
      }
      </div>

      
    </div>
    
  );
}

export default LogIn;
