import { useLogout } from "@/layout/hooks/useLogout";
import { useState } from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";

export default function SimpleDropdown() {
    const [open, setOpen] = useState(false);
    const {handleLogout} = useLogout()
    return (
        <div className="relative text-left block lg:hidden">
            {/* Toggle Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-[25px] text-purple-600 hover:text-black"
            >
                <FiMoreVertical />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-0 mt-2 w-36 bg-white rounded shadow-lg text-sm overflow-hidden transition-all duration-200 z-50 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col">
                    <button className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
                        <FaUser className="text-purple-500" /> Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
                        <FaCog className="text-purple-500" /> Settings
                    </button>
                    <button
                        onClick={() => handleLogout()}
                        className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 text-red-500 flex items-center gap-2"
                    >
                        <FaSignOutAlt className="text-purple-500" /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
