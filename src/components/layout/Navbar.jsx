import React from 'react';

const Navbar = ({ pageTitle }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
      {/* Add any navbar items here, like notifications or a search bar */}
    </nav>
  );
};

export default Navbar;
