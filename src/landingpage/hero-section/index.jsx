import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-950 text-white py-24 px-6 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob absolute top-0 left-0"></div>
        <div className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 absolute top-0 right-0"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10 md:flex-row md:text-left md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            $Unlock Your Inventory's True Value
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light text-gray-400">
            Our platform goes beyond simple stock tracking. We provide **real-time financial analytics**, **profitability insights**, and **automated valuation** to help you make smarter business decisions.
          </p>
          <div className="mt-10 flex justify-center md:justify-start space-x-4">
            <a href="#demo" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="#contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
              Request a Demo
            </a>
          </div>
        </div>
        
        {/* Dashboard Mockup */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700 backdrop-filter backdrop-blur-sm">
            {/* The dashboard mockup with charts and graphs */}
            <div className="text-gray-400 text-center py-20">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;