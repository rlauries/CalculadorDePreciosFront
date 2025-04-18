import React, { createContext, useEffect, useState } from 'react'
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom-v5-compat';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('token');
  
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000; // Convertir a milisegundos
        const now = Date.now();

        if (now > exp) {
          // Token expirado
          logout();
        } else {
          // Token válido
          setUser({
            username: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
          });

          // Programar logout automático cuando el token expire
          const timeout = setTimeout(() => {
            logout(true);
          }, exp - now);

          return () => clearTimeout(timeout); // Cleanup
        }
      } catch (error) {
        console.error("Error decoding token", error);
        logout(true);
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser({
        username: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      });

      const exp = decoded.exp * 1000;
      const now = Date.now();

      // También programamos logout automático aquí después del login
      const timeout = setTimeout(() => {
        logout(true);
      }, exp - now);

      return () => clearTimeout(timeout);
    } catch (err) {
      console.error("Failed to decode token on login", err);
    }
  };

  const logout = (expired = false) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    
    if (expired) {
      navigate('/login');
      setTimeout(() => {
        alert("Your session has expired. Please log in again.");
      }, 100); // Espera para evitar conflictos de navegación
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
);
}

 
