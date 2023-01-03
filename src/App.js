import { React } from "react";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login"
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute"

import { Route , Routes } from "react-router-dom";

export default function App(){

    return(
        <div className="App">  
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/quotes" element={<Quotes />} />
                    <Route path="/quotes/:id" element={<Quotes />} />
                </Route>
                <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
            </Routes>    
        </div>
    )
}