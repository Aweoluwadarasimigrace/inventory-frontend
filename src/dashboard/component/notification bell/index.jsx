import socket from '@/socket'
import React, { useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa6'

const NotificationBell = () => {
    const [notification, setnotification] = useState([])
    const [isOpen, setisOpen] = useState(false)


    useEffect(() => {
        socket.on("notificaton", (data) => {
            setnotification((prev) => [data, ...prev])
        })

        return () => {
            socket.off("notification")
        }
    }, [])

    return (
        <>
            <div className="relative inline-block text-left">
                {/* Bell Icon */}
                <button
                    onClick={() => setisOpen(!isOpen)}
                    className="p-2 hover:bg-purple-100 rounded-full relative"
                >
                    <FaBell className="w-6 h-6 text-purple-700" />
                    {notification.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            {notification.length}
                        </span>
                    )}
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 animate-fadeIn">
                        <div className="p-3 font-semibold text-sm border-b">Notifications</div>
                        <ul className="max-h-64 overflow-y-auto">
                            {notification.length === 0 ? (
                                <li className="p-4 text-gray-500 text-sm text-center">No notifications</li>
                            ) : (
                                notification.map((note, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-purple-50 transition-all border-b"
                                    >
                                        <p className="text-sm font-medium">{note.message}</p>
                                        <p className="text-xs text-gray-500">{new Date(note.timestamp).toLocaleString()}</p>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default NotificationBell