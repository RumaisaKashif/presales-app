// // import React from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import Login from './pages/auth/Login';
// // import Register from './pages/auth/Register';
// // import PresalesDashboard from './pages/presales/PresalesDashboard';
// // import DocumentationRepository from './pages/presales/DocumentationRepository';
// // import Settings from './pages/presales/Settings';
// // import GenerateProposal from './pages/presales/GenerateProposal';
// // import UploadDocument from './pages/presales/UploadDocument';
// // import ProtectedRoute from './components/auth/ProtectedRoute';
// // import MainLayout from './components/layout/MainLayout';

// // function App() {
// //   return (
// //     <Routes>
// //       {/* Authentication Routes */}
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />

// //       {/* Protected Application Routes */}
// //       <Route path="/presales" element={<ProtectedRoute />}>
// //         <Route path="/presales/dashboard" element={<PresalesDashboard/>}></Route>
// //         <Route path="/presales/documents" element={<DocumentationRepository/>}></Route>
// //         <Route path="/presales/uploaddocument" element={<UploadDocument/>}></Route>
// //         <Route path="/presales/proposal" element={<GenerateProposal/>}></Route>
// //         <Route path="/presales/settings" element={<Settings/>}></Route>
// //         {/* Add other presales routes here */}
// //       </Route>

// //       {/* Redirect root to login or dashboard */}
// //       <Route path="/" element={<Navigate to="/login" replace />} />
// //     </Routes>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import PresalesDashboard from './pages/presales/PresalesDashboard';
// import DocumentationRepository from './pages/presales/DocumentationRepository';
// import Settings from './pages/presales/Settings';
// import GenerateProposal from './pages/presales/GenerateProposal';
// import UploadDocument from './pages/presales/UploadDocument';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import MainLayout from './components/layout/MainLayout';
// import AuthCallback from './pages/auth/AuthCallback';

// function App() {
//   return (
//     <Routes>
//       {/* Auth */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       {/* <Route path="/auth/callback" element={<AuthCallback />} /> */}
//       {/* Protected */}
//       <Route path="/presales" element={<ProtectedRoute />}>
//         <Route element={<MainLayout />}>
//           <Route path="dashboard" element={<PresalesDashboard />} />
//           <Route path="documents" element={<DocumentationRepository />} />
//           <Route path="uploaddocument" element={<UploadDocument />} />
//           <Route path="proposal" element={<GenerateProposal />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Route>

//       {/* Default */}
//       <Route path="/" element={<Navigate to="/login" replace />} />
//     </Routes>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PresalesDashboard from './pages/presales/PresalesDashboard';
import DocumentationRepository from './pages/presales/DocumentationRepository';
import Settings from './pages/presales/Settings';
import GenerateProposal from './pages/presales/GenerateProposal';
import UploadDocument from './pages/presales/UploadDocument';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MainLayout from './components/layout/MainLayout';
import AuthCallback from './pages/auth/AuthCallback';

function App() {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Magic Link Callback Routes - CRITICAL for Supabase */}
      <Route path="/auth/callback" element={<AuthCallback />} />

      {/* Protected Application Routes */}
      <Route path="/presales" element={<ProtectedRoute />}>
        {/* <Route element={<MainLayout />}> */}
          <Route path="dashboard" element={<PresalesDashboard />} />
          <Route path="documents" element={<DocumentationRepository />} />
          <Route path="uploaddocument" element={<UploadDocument />} />
          <Route path="proposal" element={<GenerateProposal />} />
          <Route path="settings" element={<Settings />} />
        {/* </Route> */}
      </Route>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
