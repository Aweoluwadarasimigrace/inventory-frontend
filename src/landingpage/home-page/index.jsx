
import React from 'react'

const HomePage = () => {
 
  return(
   <>
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md fixed w-full z-10">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/150x50?text=Company+Logo"
            alt="Company Logo"
            className="h-12"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Inventory Pro</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Powerful, simple, and reliable inventory management for your
            business.
          </p>
          <button className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Real-Time Tracking</h2>
          <p className="text-gray-600">
            Monitor your stock with real-time updates and insights. Never run
            out of essential items again.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581091870622-1e7f01a5e54c?auto=format&fit=crop&w=600&q=80"
          alt="Real-Time Tracking"
          className="rounded-xl shadow-md md:w-1/2"
        />
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-8 py-20 bg-white">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Easy Integration</h2>
          <p className="text-gray-600">
            Connect seamlessly with tools you already use and make your workflow
            smoother than ever.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e1dbf94d8a?auto=format&fit=crop&w=600&q=80"
          alt="Integration"
          className="rounded-xl shadow-md md:w-1/2"
        />
      </section>

      {/* Section 3 */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Secure & Reliable</h2>
          <p className="text-gray-600">
            Protect your data with enterprise-grade security and dependable
            cloud storage.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=600&q=80"
          alt="Security"
          className="rounded-xl shadow-md md:w-1/2"
        />
      </section>

      {/* Section 4 */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-8 py-20 bg-white">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Grow Your Business</h2>
          <p className="text-gray-600">
            With insights and reports, make smarter decisions and scale with
            confidence.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Growth"
          className="rounded-xl shadow-md md:w-1/2"
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Inventory Pro. All rights reserved.</p>
      </footer>
    </div>
   </>
  )
}

export default HomePage