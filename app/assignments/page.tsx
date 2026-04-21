"use client";

export default function AssignmentsPage() {
  const assignments = [
    {
      id: "A001",
      name: 'MacBook Pro 16"',
      serial: "MP16X-7842",
      user: "Sarah Chen",
      initials: "S",
    },
    {
      id: "A003",
      name: "iPhone 15 Pro",
      serial: "AP-15P-3921",
      user: "Michael Torres",
      initials: "M",
    },
    {
      id: "A004",
      name: "Ergonomic Office Chair",
      serial: "FURN-EC-112",
      user: "Emma Rodriguez",
      initials: "E",
    },
    {
      id: "A007",
      name: "Adobe Creative Cloud License",
      serial: "ADOBE-CC-2024-7",
      user: "David Kim",
      initials: "D",
    },
    {
      id: "A008",
      name: "Samsung 4K Monitor",
      serial: "SMG-4K-9981",
      user: "John Lee",
      initials: "J",
    },
  ];

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-semibold">Active Assignments</h1>
          <p className="text-gray-400 text-sm">
            5 assets currently in use
          </p>
        </div>

        <button className="border border-zinc-700 px-5 py-2 rounded-full hover:bg-zinc-800 transition">
          Manage Inventory
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {assignments.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 hover:bg-zinc-800/40 transition"
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* ID Circle */}
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xs text-gray-300">
                {item.id}
              </div>

              {/* Asset Info */}
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-400">{item.serial}</p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6">

              {/* Assigned To */}
              <div className="text-right">
                <p className="text-xs text-gray-500">ASSIGNED TO</p>

                <div className="flex items-center gap-2 mt-1">

                  <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-sm">
                    {item.initials}
                  </div>

                  <span>{item.user}</span>
                </div>
              </div>

              {/* Button */}
              <button className="border border-zinc-600 px-4 py-1 rounded-full text-sm hover:bg-red-600 hover:border-red-600 transition">
                REVOKE
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}