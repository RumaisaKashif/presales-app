// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check for a logged-in user in localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     // Mock login
//     const mockUser = { id: 1, name: 'John Doe', email };
//     localStorage.setItem('user', JSON.stringify(mockUser));
//     setUser(mockUser);
//   };

//   const register = async (name, email, password) => {
//     // Mock registration
//     const mockUser = { id: Date.now(), name, email };
//     localStorage.setItem('user', JSON.stringify(mockUser));
//     setUser(mockUser);
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     register,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../api/authService';
import FullPageLoader from '../components/common/FullPageLoader';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = authService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const login = async (email) => {
    await authService.login(email);
  };

  const register = async (email, fullName) => {
    await authService.register(email, fullName);
  };

  const logout = async () => {
    await authService.logout();
  };

  // if (loading) return <FullPageLoader />;

  return (
    <AuthContext.Provider value={{ user, loading , login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};





