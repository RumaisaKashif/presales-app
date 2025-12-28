import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PresalesRoute from './PresalesRoute';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PresalesDashboard from '../pages/presales/PresalesDashboard';
import DocumentationRepository from '../pages/presales/DocumentationRepository';
import UploadDocumentation from '../pages/presales/UploadDocumentation';
import ClientSubmissions from '../pages/presales/ClientSubmissions';
import GenerateProposal from '../pages/presales/GenerateProposal';
import PresalesHistory from '../pages/presales/PresalesHistory';
import Settings from '../pages/presales/Settings';
import Home from '../pages/Home'; // A generic landing page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Presales Routes */}
        <Route path="/presales" element={<PresalesRoute />}>
          <Route path="dashboard" element={<PresalesDashboard />} />
          <Route path="documentation" element={<DocumentationRepository />} />
          <Route path="documentation/upload" element={<UploadDocumentation />} />
          <Route path="submissions" element={<ClientSubmissions />} />
          <Route path="generate-proposal" element={<GenerateProposal />} />
          <Route path="history" element={<PresalesHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
