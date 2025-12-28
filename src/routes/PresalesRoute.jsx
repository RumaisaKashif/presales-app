import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import FullPageLoader from '../components/common/FullPageLoader'; // For loading state

/**
 * A route guard for presales-only pages.
 * It checks if the user is authenticated and has the 'presales' role.
 */
const PresalesRoute = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <FullPageLoader />;
  }

  if (!isAuthenticated || user.role !== 'presales') {
    // Redirect them to the login page, but save the current location they were
    // trying to go to when they were redirected.
    console.log("User is not a presales user")
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render the child route
};

export default PresalesRoute;
