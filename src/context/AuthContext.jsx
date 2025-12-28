// import React, { createContext, useState, useEffect } from 'react';
// import authService from '../api/authService';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check for a token in local storage to maintain session
//     const token = localStorage.getItem('token');
//     const storedUser = localStorage.getItem('user');
//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     const { user: loggedInUser, token } = await authService.login(email, password);
//     setUser(loggedInUser);
//     localStorage.setItem('user', JSON.stringify(loggedInUser));
//     localStorage.setItem('token', token);
//   };

//   const register = async (name, email, password, role) => {
//     const { user: newUser, token } = await authService.register(name, email, password, role);
//     setUser(newUser);
//     localStorage.setItem('user', JSON.stringify(newUser));
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//   };

//   const value = {
//     user,
//     isAuthenticated: !!user,
//     loading,
//     login,
//     register,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthContext;
import React, { createContext, useContext, useState, useEffect } from 'react';
import supabaseService from '../services/supabaseService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { user } = await supabaseService.signIn(email, password);
    setUser(user);
  };

  const register = async (name, email, password) => {
    const { user, profile } = await supabaseService.signUp({
      email,
      password,
      full_name: name,
      role: 'presales', // default role
    });
    setUser(user);
  };

  const logout = async () => {
    await supabaseService.signOut();
    setUser(null);
  };

  const getCurrentUser = async () => {
    const user = await supabaseService.getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
