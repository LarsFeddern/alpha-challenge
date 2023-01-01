import React, { useEffect } from 'react'
import LoginPage from '../components/Login/App'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from "react";
export default Login

function Login() {
    const navigate = useNavigate();

    const navigateToQuotes = () => {
        navigate('/quotes');
    };
    /*
    useEffect(() => {
        var form = document.getElementById('form')
        form.addEventListener('submit', function(event){
            event.preventDefault()
            var username = ""
            let password = ""
            username = document.getElementById('username').value
            password = document.getElementById('password').value
            if (username != "lars" ){
                document.getElementById('username').value = ""
                document.getElementById('password').value = ""
            }
            if (password != "123" ){
                document.getElementById('password').value = ""
            }else{
                
                navigateToQuotes()
            }
        })
    }, [ ]);*/

  return (
    <div>
        <LoginPage />
    </div>
    
    
  )
}
;

