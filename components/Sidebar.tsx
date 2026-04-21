"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const coreMenu = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Inventory", path: "/inventory", icon: "📦" },
    { name: "My Assets", path: "/my-gear", icon: "👤" },
    { name: "Assignments", path: "/assignments", icon: "➡️" },
  ];

  const resourceMenu = [
    { name: "Team", path: "/users", icon: "👥" },
    { name: "Reports", path: "/reports", icon: "📈" },
  ];

  const renderItem = (item: any) => {
    const isActive = pathname === item.path;

    return (
      <Link key={item.name} href={item.path}>
        <div
          className={`flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition ${
            isActive
              ? "bg-white text-black font-medium"
              : "text-gray-400 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-64 h-screen bg-[#0f172a] border-r border-zinc-800 flex flex-col justify-between">

      {/* 🔝 TOP */}
      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500">⬛</span> AssetVault
          </h1>
          <p className="text-xs text-gray-500">ENTERPRISE</p>
        </div>

        {/* CORE MENU */}
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-3">CORE</p>

          <div className="space-y-2">
            {coreMenu.map(renderItem)}
          </div>
        </div>

        {/* RESOURCES */}
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-3">RESOURCES</p>

          <div className="space-y-2">
            {resourceMenu.map(renderItem)}
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM (USER + LOGOUT) */}
      <div className="p-4 border-t border-zinc-800">

        {/* USER */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
            A
          </div>

          <div>
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="w-full bg-red-600 hover:bg-red-700 transition p-2 rounded-lg text-sm font-medium"
        >
          Logout
        </button>

      </div>

    </div>
  );
}