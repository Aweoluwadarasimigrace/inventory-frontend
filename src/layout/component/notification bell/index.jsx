
import React, { useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa6'
import Pusher from 'pusher-js'

const NotificationBell = () => {
    const [notification, setnotification] = useState([])
    const [isOpen, setisOpen] = useState(false)

    useEffect(() => {
        const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
            cluster: import.meta.env.VITE_PUSHER_CLUSTER,
        });
        const channel = pusher.subscribe("notifications")

        channel.bind("new-notification", (data) => {
            setnotification((prev) => [data, ...prev])
        })
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [])

    return (
        <>
            <div className="relative inline-block">
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
                    <div
                        className="absolute -left-9 transform -translate-x-1/2 mt-2 w-70 rounded shadow-lg bg-white border z-50 transition-all duration-200 animate-fadeIn"
                    >
                        <div className="p-3 font-semibold text-sm border-b">Notifications</div>
                        <ul className="max-h-64 overflow-y-auto">
                            {notification.length === 0 ? (
                                <li className="p-4 text-gray-500 text-sm text-center">No notifications</li>
                            ) : (
                                notification.map((note, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-purple-50 transition-all border-b border-gray-200"
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