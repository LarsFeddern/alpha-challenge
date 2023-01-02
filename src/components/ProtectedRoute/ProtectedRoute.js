import {
    Navigate,
    Outlet,
  } from 'react-router-dom';
  
  const ProtectedRoutes = ( { valid }) => {
    let auth = {'token':valid}
    console.log(auth)
    return (
    auth.token ? <Outlet /> : <Navigate to="/login" />)
  };
  
  export default ProtectedRoutes