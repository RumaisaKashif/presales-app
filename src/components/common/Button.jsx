import React from 'react';

const Button = ({ children, onClick, type = 'button', fullWidth = false, ...rest }) => {
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-colors ${widthClass}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
