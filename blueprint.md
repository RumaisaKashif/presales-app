# SaaS Proposal Automation Platform - Frontend Blueprint

## 1. Overview

This document outlines the frontend architecture for the SaaS-style proposal automation platform. The goal is to create a scalable, maintainable, and production-grade React application that caters to two distinct user roles: **Clients** and **Presales Consultants**.

The architecture is built on modern React principles, leveraging a clear separation of concerns, modular components, and a robust routing system to enforce Role-Based Access Control (RBAC).

## 2. Core Technologies

- **UI Library:** React
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Tailwind CSS
- **API Communication:** Axios
- **State Management:** React Context API (for Auth), custom hooks for local/feature state.

## 3. Project Structure

The project follows a feature-oriented and domain-driven folder structure that separates concerns and improves scalability.

```
/src
├── api/
│   ├── apiClient.js         # Axios instance configuration
│   ├── authService.js       # API calls for authentication
│   ├── documentationService.js # API calls for documents
│   └── proposalService.js   # API calls for proposals
├── components/
│   ├── common/              # Truly reusable, generic components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Input.jsx
│   │   ├── Loader.jsx
│   │   └── Modal.jsx
│   └── layout/              # App layout components
│       ├── Navbar.jsx
│       └── Sidebar.jsx
├── config/
│   └── index.js             # Environment variables and global config
├── context/
│   └── AuthContext.jsx      # Authentication state and user role management
├── hooks/
│   ├── useAuth.js           # Hook to access AuthContext
│   └── useForm.js           # Hook for handling form state and validation
├── pages/
│   ├── auth/                # Authentication pages
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── client/              # Pages exclusive to the Client role
│   │   ├── ClientDashboard.jsx
│   │   ├── ClientHistory.jsx
│   │   └── EnterRequirements.jsx
│   └── presales/            # Pages exclusive to the Presales role
│       ├── ClientSubmissions.jsx
│       ├── DocumentationRepository.jsx
│       ├── GenerateProposal.jsx
│       ├── PresalesDashboard.jsx
│       ├── PresalesHistory.jsx
│       └── UploadDocumentation.jsx
├── routes/
│   ├── AppRoutes.jsx        # Main application routing configuration
│   └── ProtectedRoute.jsx   # Route guard for RBAC
├── styles/
│   └── global.css           # Global styles and Tailwind base layers
├── types/
│   └── index.js             # JSDoc type definitions for objects
└── utils/
    └── validation.js        # Form validation logic
```

## 4. Current Plan: Initial Scaffolding

This is the plan to generate the initial architecture for the application.

1.  **Install Dependencies:** Install `react-router-dom` for routing and `axios` for API calls.
2.  **Setup Tailwind CSS:** Install and configure Tailwind CSS for styling.
3.  **Create Folder Structure:** Create all the directories outlined above.
4.  **Implement Core API Services:** Create the API service layer with an `apiClient` and placeholder service modules for `auth`, `proposals`, and `documentation`.
5.  **Setup Auth Context:** Create the `AuthContext` to manage user sessions and roles, making it available throughout the app.
6.  **Build Routing System:**
    *   Create `AppRoutes.jsx` to define all public, client, and presales routes.
    *   Implement `ProtectedRoute.jsx` to protect routes based on the user's role from `AuthContext`.
7.  **Develop Page Skeletons:** Create placeholder components for every page defined in the structure.
8.  **Develop UI Component Skeletons:** Create placeholder components for the reusable UI elements.
9.  **Refactor `App.jsx` and `main.jsx`:** Clean up the default Vite boilerplate and integrate the new routing and context providers.
10. **Add Global Styles:** Configure the base Tailwind CSS layers in the main stylesheet.

This plan establishes a solid foundation to build upon, ensuring that new features can be added cleanly and efficiently while respecting the role-based access control rules.
