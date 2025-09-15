import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-md py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo/Image */}
        <div className="flex items-center">
          {/* Replace this div with an actual <img> tag for your logo */}
          <div className="h-8 w-8 bg-blue-500 rounded-full mr-2"></div>
          <a href="/" className="text-xl font-bold">Track Stack</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Log In
          </button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;