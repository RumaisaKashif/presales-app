import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg flex overflow-hidden">
        {/* Left Side - Branding */}
        <div className="w-1/2 bg-purple-700 text-white p-12 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Systems Presales</h1>
          <p className="text-lg text-purple-200">Your Intelligent Presales Assistant</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
