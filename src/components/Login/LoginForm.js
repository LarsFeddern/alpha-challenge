import React, { useRef, useState} from 'react';
import './LoginForm.css';
import SimpsonsLogo from "../../images/simpsons-logo.png"
import { Navigate } from "react-router-dom";

export default function LoginForm(){ 
  //Refs persists between renders of the component
  // Ref will not update the component, when the Ref updates 
  const usernameRef = useRef("")
  const passwordRef = useRef("")
  const [auth, setAuth] = useState(() => document.cookie.match('(^|;)\\s*' + "jwt" + '\\s*=\\s*([^;]+)')?.pop() ? true : false);
  const users = [{ username: "admin", password: "admin" }];

  function onSubmit(e){
    // The preventDefault() method of the Event interface tells the user agent that 
    // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    // Stop form from submitting until I dont have an Login API
    e.preventDefault()

    //TODO: As long as there is no working backend the credentials are checked like this
    const account = users.find((user) => user.username === usernameRef.current.value);
    if (account && account.password === passwordRef.current.value) {
       //state update will force site to rerender
      document.cookie = `jwt=MyUnsecureToken;max-age=60;localhost`
      setAuth(true)
    }
  }
  
  if (auth === true){
    return (<Navigate to="/quotes" replace={true} />)
  }else{
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
}

