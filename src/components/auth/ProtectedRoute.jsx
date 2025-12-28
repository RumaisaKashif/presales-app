// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

// const ProtectedRoute = () => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="text-center">
//         <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//         <p className="mt-4 text-gray-600">Loading...</p>
//       </div>
//       </div>;
//   }

//   return user ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
