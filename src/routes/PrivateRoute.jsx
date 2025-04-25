import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom-v5-compat';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return user ? children : <Navigate to="/login" />;
};
