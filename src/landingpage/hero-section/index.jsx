import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
   <section className="bg-gray-950 text-white py-24 px-6 relative overflow-hidden">
  {/* Background Gradient Blobs */}
  <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
    <div className="w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob absolute top-0 -left-10"></div>
    <div className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 absolute -bottom-10 right-0"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto flex flex-col items-center text-center relative z-10 md:flex-row md:text-left md:justify-between">
    
    {/* Text Section */}
    <div className="md:w-1/2 mb-12 md:mb-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
        Unlock Your Inventory’s True Value
      </h1>
      <p className="mt-6 text-lg sm:text-xl font-light text-gray-300">
        Go beyond stock tracking with <span className="text-green-400 font-medium">real-time analytics</span>, 
        <span className="text-purple-400 font-medium"> profitability insights</span>, and 
        <span className="text-purple-300 font-medium"> automated valuation</span> to power smarter decisions.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link
         to={"/auth"}
          className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>

    {/* Dashboard Mockup */}
    <div className="md:w-1/2 flex justify-center">
      <div className="w-full max-w-lg bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 relative">
        {/* Fake Nav */}
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        {/* Dashboard Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="/download (1).jpeg"
            alt="Dashboard Preview"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;