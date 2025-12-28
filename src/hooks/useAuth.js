import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

/**
 * A custom hook to access authentication-related context.
 * @returns {{user: import('../api/authService').User, isAuthenticated: boolean, loading: boolean, login: Function, register: Function, logout: Function}}
 */
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
