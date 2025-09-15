import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-md py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo/Image */}
        <div className="flex items-center">
          {/* Replace this div with an actual <img> tag for your logo */}
          <img src="/frontend-removebg-preview (1).png" alt=""  width={"130px"}/>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center space-x-8">
          <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300">
           <Link to={"/auth/login"}>Login</Link>
          </button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;