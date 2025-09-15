import React from 'react'
const HomePage = () => {
 
  return(
   <>
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="/frontend-removebg-preview(1).png"
            alt="Company Logo"
            className="h-12"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1 */}
        <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Inventory Pro</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Manage your stock, track products, and keep your business organized
            with ease.
          </p>
        </section>

        {/* Section 2 */}
        <section className="h-screen flex flex-col items-center justify-center text-center bg-white px-6">
          <h2 className="text-3xl font-semibold mb-4">Real-Time Tracking</h2>
          <p className="text-gray-600 max-w-xl">
            Stay updated with real-time stock levels and automatic updates for
            smooth inventory flow.
          </p>
        </section>

        {/* Section 3 */}
        <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
          <h2 className="text-3xl font-semibold mb-4">Easy Integration</h2>
          <p className="text-gray-600 max-w-xl">
            Connect seamlessly with your existing systems and tools for a
            hassle-free setup.
          </p>
        </section>

        {/* Section 4 */}
        <section className="h-screen flex flex-col items-center justify-center text-center bg-white px-6">
          <h2 className="text-3xl font-semibold mb-4">Secure & Reliable</h2>
          <p className="text-gray-600 max-w-xl">
            Your data is safe with enterprise-grade security and reliable cloud
            storage.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Inventory Pro. All rights reserved.</p>
      </footer>
    </div>
   </>
  )
}

export default HomePage