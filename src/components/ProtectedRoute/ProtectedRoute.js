import {
    Navigate,
    Outlet,
  } from 'react-router-dom';
  
  const ProtectedRoutes = ( { valid }) => {
    let auth = {'token':valid}
    
    return (
    auth.token ? <Outlet /> : <Navigate to="/login" />)
  };
  
  export default ProtectedRoutes