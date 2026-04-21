"use client";

export default function InventoryPage() {
  const assets = [
    {
      name: 'MacBook Pro 16"',
      date: "2024-01-15",
      type: "Laptop",
      serial: "MP16X-7842",
      status: "Assigned",
      assignee: "Sarah Chen",
      initials: "SC",
      value: "$2499",
    },
    {
      name: "Dell UltraSharp 27\"",
      date: "2023-11-20",
      type: "Monitor",
      serial: "DEL-U2723QE",
      status: "Available",
      assignee: "",
      initials: "",
      value: "$429",
    },
    {
      name: "iPhone 15 Pro",
      date: "2024-03-10",
      type: "Mobile",
      serial: "AP-15P-3921",
      status: "Assigned",
      assignee: "Michael Torres",
      initials: "MT",
      value: "$999",
    },
  ];

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Inventory</h1>
          <p className="text-gray-400 text-sm">
            Manage all company assets • 8 results
          </p>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full font-medium">
          + Add Asset
        </button>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="flex gap-4 mb-6">

        {/* Search */}
        <input
          placeholder="Search assets, assignees..."
          className="flex-1 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-full outline-none"
        />

        {/* Filters */}
        <select className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
          <option>All Status</option>
          <option>Assigned</option>
          <option>Available</option>
        </select>

        <select className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
          <option>All Types</option>
          <option>Laptop</option>
          <option>Mobile</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 text-sm text-gray-400 px-6 py-4 border-b border-zinc-800">
          <span>ASSET</span>
          <span>TYPE</span>
          <span>SERIAL</span>
          <span>STATUS</span>
          <span>ASSIGNEE</span>
          <span>VALUE</span>
        </div>

        {/* ROWS */}
        {assets.map((a, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center px-6 py-5 border-b border-zinc-800 hover:bg-zinc-800/40 transition"
          >

            {/* Asset */}
            <div>
              <p className="font-medium">{a.name}</p>
              <p className="text-xs text-gray-400">{a.date}</p>
            </div>

            {/* Type */}
            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm w-fit">
              {a.type}
            </span>

            {/* Serial */}
            <span className="text-gray-400">{a.serial}</span>

            {/* Status */}
            <span
              className={`px-3 py-1 rounded-full text-xs w-fit ${
                a.status === "Assigned"
                  ? "bg-blue-600/20 text-blue-400"
                  : "bg-green-600/20 text-green-400"
              }`}
            >
              {a.status}
            </span>

            {/* Assignee */}
            <div className="flex items-center gap-2">
              {a.assignee ? (
                <>
                  <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-xs">
                    {a.initials}
                  </div>
                  <span>{a.assignee}</span>
                </>
              ) : (
                <span className="text-gray-500">—</span>
              )}
            </div>

            {/* Value */}
            <span className="font-semibold">{a.value}</span>

          </div>
        ))}

      </div>

    </div>
  );
}