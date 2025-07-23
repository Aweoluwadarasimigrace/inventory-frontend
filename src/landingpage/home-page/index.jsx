
import React, { useState } from 'react'
import { Link } from 'react-router';


const HomePage = () => {
   const user = {
      name: 'Elena Petrova',
      role: 'Inventory Manager',
      email: 'elena.petrova@example.com',
      phone: '+1 (555) 123-4567',
      joinDate: '2022-08-15',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', // Placeholder image
    };

    const recentActivity = [
      { action: 'Updated stock for "SKU-84592"', timestamp: '2 hours ago' },
      { action: 'Generated a new "Low Stock" report', timestamp: '5 hours ago'},
      { action: 'Logged in from a new device', timestamp: '1 day ago'},
    ];
  return (
    <>
    <Link to={"/dashboard"}>dashboard</Link>
    <Link to={"/auth/login"}>login</Link>
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-slate-800 mb-8">My Profile</h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column -> Profile Header */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    className="w-full h-full rounded-full object-cover border-4 border-slate-200"
                    src={user.avatarUrl}
                    alt="User Avatar"
                  />
                   <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      
                   </button>
                </div>
                <h2 className="text-2xl font-semibold text-slate-800">{user.name}</h2>
                <p className="text-slate-500">{user.role}</p>
                 <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Edit Profile
                    </button>
                </div>
              </div>
            </div>

            {/* Right Column -> Details & Activity */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Personal Information Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 border-b pb-4 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                  
                    <span className="text-slate-700 font-medium">Full Name:</span>
                    <span className="ml-2 text-slate-900">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                   
                    <span className="text-slate-700 font-medium">Email:</span>
                    <span className="ml-2 text-slate-900">{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    
                    <span className="text-slate-700 font-medium">Phone:</span>
                    <span className="ml-2 text-slate-900">{user.phone}</span>
                  </div>
                   <div className="flex items-center">
                   
                    <span className="text-slate-700 font-medium">Member Since:</span>
                    <span className="ml-2 text-slate-900">{user.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Security Settings Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                 <h3 className="text-xl font-semibold text-slate-800 border-b pb-4 mb-4">Security Settings</h3>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                           
                            <span className="text-slate-700 font-medium">Password</span>
                        </div>
                        <button className="text-sm font-semibold text-blue-600 hover:underline">Change Password</button>
                    </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center">
                           
                            <span className="text-slate-700 font-medium">Two-Factor Authentication</span>
                        </div>
                         <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Enabled</span>
                    </div>
                 </div>
              </div>

              {/* Recent Activity Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 border-b pb-4 mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-slate-100 p-2 rounded-full mr-4">
                         
                      </div>
                      <div className="flex-grow">
                          <p className="text-slate-800">{activity.action}</p>
                          <p className="text-sm text-slate-400">{activity.timestamp}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-right">
                    <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View all activity</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage