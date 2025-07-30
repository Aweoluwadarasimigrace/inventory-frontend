import { useState } from "react";
import { Settings, Home, Users, Box } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home />, key: "dashboard" },
  { name: "Users", icon: <Users />, key: "users" },
  { name: "Products", icon: <Box />, key: "products" },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // replace with your business logo path
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <div>
            <p className="font-bold text-sm">Business Name</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>

      {/* Menu */}
      <div className="flex flex-col p-4 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
              active === item.key
                ? "bg-purple-100 text-purple-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
