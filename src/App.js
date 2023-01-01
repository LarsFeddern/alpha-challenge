import React from "react";
import Quotes from "./pages/Quotes";
import Login from "./pages/Login"

import { Route , Routes } from "react-router-dom";

export default function App(){
    return(
        <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quotes" >
                <Route index element={<Quotes />} />
                <Route path=":id" element={<Quotes />} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>    
    )
}