import {
    Navigate,
    Outlet,
  } from 'react-router-dom';
  
  const ProtectedRoutes = ( ) => {
    const tokenName = "jwt"
    const tokenValue = document.cookie.match('(^|;)\\s*' + tokenName + '\\s*=\\s*([^;]+)')?.pop() || ''

    return (
    tokenValue ? <Outlet /> : <Navigate to="/login" />)
  };
  
  export default ProtectedRoutes