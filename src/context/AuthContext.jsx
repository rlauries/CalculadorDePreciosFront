import React, { createContext, useEffect, useState } from 'react'
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    if(token){
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        
        if(decoded.exp > currentTime) {
          setUser({username: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]});
        } else{
          logout();
        }

      } catch (error) {
        console.error("Error decoding token", error);
        logout();
      }

    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);

  }
  return (
    <AuthContext.Provider value={{ user, logout }}>
        {children}
    </AuthContext.Provider>
);
}

 
