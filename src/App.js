import { React, useEffect } from "react";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login"
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute"

import { Route , Routes } from "react-router-dom";

export default function App(){
    /*
    fetch("http://localhost:5000/auth/login", {
        method: "POST",
        body: JSON.stringify({
             username: "testuser",
             hash: "random" 
            }),
        headers: { "Content-Type": "application/json" }
    }).then(output => console.log(output))
*/

    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    )
  
    const checkCookie = (name, value) => (
        getCookieValue(name) === value ? true : false
    )

    useEffect(() => { 
        console.log("hi")
    });

    return(
        <div className="App">  
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoutes valid={checkCookie("jwt", "MyUnsecureToken")}/>}>
                    <Route path="/quotes" element={<Quotes />} />
                    <Route path="/quotes/:id" element={<Quotes />} />
                </Route>
                <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
            </Routes>    
        </div>
    )
}