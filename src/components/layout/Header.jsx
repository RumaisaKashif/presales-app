import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ pageTitle, toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm flex items-center justify-between p-4">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="lg:hidden mr-4">
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button className="flex items-center space-x-2">
            <span className="font-semibold text-gray-700">{user?.name}</span>
          </button>
        </div>
        <button onClick={logout} className="ml-4 text-sm text-gray-600 hover:text-purple-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
