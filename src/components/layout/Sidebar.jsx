import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ArrowUpTrayIcon, DocumentChartBarIcon, CogIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggle}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-purple-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="p-6 text-2xl font-bold">Systems Presales</div>
        <nav className="mt-8">
        <NavLink
          to="/presales/dashboard"
          className={({ isActive }) =>
            `flex items-center py-3 px-6 hover:bg-purple-700 ${
              isActive ? "bg-purple-900" : ""
            }`
          }
        >
          <HomeIcon className="h-6 w-6 mr-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/presales/documents"
          className={({ isActive }) =>
            `flex items-center py-3 px-6 hover:bg-purple-700 ${
              isActive ? "bg-purple-900" : ""
            }`
          }
        >
          <DocumentChartBarIcon className="h-6 w-6 mr-3" />
          Your Documents
        </NavLink>

        <NavLink
          to="/presales/uploaddocument"
          className={({ isActive }) =>
            `flex items-center py-3 px-6 hover:bg-purple-700 ${
              isActive ? "bg-purple-900" : ""
            }`
          }
        >
          <ArrowUpTrayIcon className="h-6 w-6 mr-3" />
          Upload Document
        </NavLink>
        
        <NavLink
          to="/presales/proposal"
          className={({ isActive }) =>
            `flex items-center py-3 px-6 hover:bg-purple-700 ${
              isActive ? "bg-purple-900" : ""
            }`
          }
        >
          <PencilSquareIcon className="h-6 w-6 mr-3" />
          Generate Proposal
        </NavLink>

        <NavLink
          to="/presales/settings"
          className={({ isActive }) =>
            `flex items-center py-3 px-6 hover:bg-purple-700 ${
              isActive ? "bg-purple-900" : ""
            }`
          }
        >
          <CogIcon className="h-6 w-6 mr-3" />
          Settings
        </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
