import React from 'react';

export default function Buttons({ children, variant = 'primary', onClick }) {
  // Base classes that apply to every button variant
  const baseStyles = "font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out active:scale-95 shadow-sm";

  // Design system variations
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-2",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}