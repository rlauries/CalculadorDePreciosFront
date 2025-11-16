import React, { createContext, useEffect, useState, useCallback } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom-v5-compat';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // --- Logout estable con useCallback -------
  const logout = useCallback((expired = false) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);

    if (expired) {
      navigate('/login');
      setTimeout(() => {
        alert("Your session has expired. Please log in again.");
      }, 100);
    }
  }, [navigate]);
  // ------------------------------------------

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000;
        const now = Date.now();

        if (now > exp) {
          logout(true);
        } else {
          setUser({
            username: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
          });

          const timeout = setTimeout(() => logout(true), exp - now);
          return () => clearTimeout(timeout);
        }
      } catch (err) {
        console.error("Error decoding token", err);
        logout(true);
      }
    }
  }, [logout]); // ahora logout es seguro como dependencia

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser({
        username: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      });

      const exp = decoded.exp * 1000;
      const now = Date.now();

      setTimeout(() => {
        logout(true);
      }, exp - now);

    } catch (err) {
      console.error("Failed to decode token on login", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
