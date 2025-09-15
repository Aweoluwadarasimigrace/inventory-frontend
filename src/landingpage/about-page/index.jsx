import React from 'react'
import { FaCogs } from 'react-icons/fa'
import { FaBullseye, FaHandshake } from 'react-icons/fa6'
import { Link } from 'react-router'

const AboutUs = () => {
  return (
     <section className="bg-gray-950 text-white py-24 px-6 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob absolute top-0 -left-10"></div>
        <div className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 absolute -bottom-10 right-0"></div>
      </div>

      <div className="container mx-auto relative z-10 space-y-24">
        {/* Hero / Why */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-green-400">
            We're Not Just an Inventory Tool. We're a Financial Partner.
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            Our mission is to empower small businesses by transforming their
            inventory from a logistical challenge into a strategic financial
            asset.
          </p>
        </div>

        {/* Story */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Our Story: From Pain Point to Profitability
            </h2>
            <p className="text-gray-300 mb-4">
             Track-Stack was born from a simple frustration: existing inventory
              systems only told us what we had, not what it was worth. We saw
              countless businesses struggle with cash tied up in slow-moving
              stock and missed opportunities due to a lack of financial insight.
            </p>
            <p className="text-gray-300">
              We decided to build something different. A platform that merges
              the power of real-time inventory tracking with the clarity of a
              financial dashboard. Track-Stack is the result—a tool built by
              entrepreneurs, for entrepreneurs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-72 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center">
              
                 <img src="/inventory.webp" alt="" className='w-full rounded-2xl h-82' />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clarity</h3>
              <p className="text-gray-400">
                We turn complex data into simple, actionable insights. No more
                guesswork, just clear financial understanding.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="text-green-400 text-4xl mb-4 flex justify-center">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We are always evolving, integrating new technologies to give you
                the most advanced tools to manage your assets.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="text-purple-300 text-4xl mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-400">
                Our goal is to give you the confidence to grow your business,
                knowing your inventory is a source of profit, not stress.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Inventory?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of businesses already gaining a competitive edge by
            making smarter, data-driven decisions.
          </p>
          <Link
            to={"/auth"}
            className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Try Track-Stack for Free
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs