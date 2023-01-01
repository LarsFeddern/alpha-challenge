import React, { useEffect, useRef } from 'react';
import './Login.css';
import SimpsonsLogo from "../../images/simpsons-logo.png"
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function Login(){ 
  const usernameRef = useRef()
  const passwordRef = useRef()

  function onSubmit(event){
    event.preventDefault()
    console.log({
      username: usernameRef.current.value,
      password: passwordRef.current.value 
    })

  }


  return(
      <div className='Page'>
        <div className='Logo'>
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
            <div className='Login-pass-reset'>
              <a href='#'>Forgot Password?</a>
            </div>
            <input type="submit" id='submit' value="Login"></input>
            <div className='Login-signup-link'>
              Not a member? <a href='#'>Signup</a>
            </div>
            </form>
        </div>
      </div>
    )
}


