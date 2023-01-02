import React, { useRef, useState} from 'react';
import './LoginForm.css';
import SimpsonsLogo from "../../images/simpsons-logo.png"
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function LoginForm(){ 
  const usernameRef = useRef()
  const passwordRef = useRef()
  
  const navigate = useNavigate();
 
 
  function onSubmit(e){
    // The preventDefault() method of the Event interface tells the user agent that 
    // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    e.preventDefault()
    //TODO: As long as there is no working backend the credentials are checked like this
    if (usernameRef.current.value === "admin" && passwordRef.current.value === "admin"){
      document.cookie = `jwt=MyUnsecureToken;max-age=60;localhost`
      
      navigate('/quotes');
    }
  
  }
  

  return(
      <div className='Page'>
        <div className='LoginLogo'>
          <img src={SimpsonsLogo} alt='The Simpsons Logo'></img>
        </div>
        <div className="Login">
          <h1>Login</h1>
          <form onSubmit={onSubmit} id='form'/*method='post'*/>
            <div className='Login-text-field'>
              <input type="text" id='username' ref={usernameRef} required></input>
              <span></span>
              <label>Username</label>
            </div>
            <div className='Login-text-field'>
              <input type="password" id='password' ref={passwordRef} required></input>
              <span></span>
              <label>Password</label>
            </div>
            <input type="submit" id='submit' value="Login"></input>
            <div className='Login-signup-link'>
              Not a member? <a href='/'>Signup</a>
            </div>
            </form>
        </div>
      </div>
    )
}


