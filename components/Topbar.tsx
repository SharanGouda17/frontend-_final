"use client";

export default function Topbar() {
  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-zinc-800">

      <div className="text-sm text-gray-400">
        Asset Management System
      </div>

      <div className="flex items-center gap-4">

        {/* Search */}
        <input
          placeholder="Quick find asset..."
          className="bg-zinc-800 px-4 py-2 rounded-full text-sm outline-none"
        />

        {/* Icons */}
        <div>🌙</div>

        <div className="relative">
          🔔
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            A
          </div>
          <span className="text-sm">Alex Rivera</span>
        </div>

      </div>
    </div>
  );
}