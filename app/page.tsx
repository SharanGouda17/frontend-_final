export default function Dashboard() {
  const cards = [
    { title: "Total Assets", value: 8 },
    { title: "Assigned", value: 5 },
    { title: "Available", value: 2 },
    { title: "In Maintenance", value: 1 },
  ];

  const activities = [
    {
      id: "A001",
      name: 'MacBook Pro 16"',
      desc: "Laptop • MP16X-7842",
      status: "Assigned",
      user: "Sarah Chen",
    },
    {
      id: "A002",
      name: "Dell UltraSharp 27\"",
      desc: "Monitor • DEL-U2723QE",
      status: "Available",
      user: "",
    },
    {
      id: "A003",
      name: "iPhone 15 Pro",
      desc: "Mobile • AP-15P-3921",
      status: "Assigned",
      user: "Michael Torres",
    },
    {
      id: "A004",
      name: "Ergonomic Office Chair",
      desc: "Furniture • FURN-EC-112",
      status: "Assigned",
      user: "Emma Rodriguez",
    },
    {
      id: "A005",
      name: "Lenovo ThinkPad X1",
      desc: "Laptop • LN-TPX1-667",
      status: "Maintenance",
      user: "",
    },
  ];

  return (
    <div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-2">
        Welcome back, Alex
      </h1>
      <p className="text-gray-400 mb-6">
        Here's what's happening with your company's assets today.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">

        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
          >
            <p className="text-gray-400 text-sm">{c.title}</p>
            <h2 className="text-3xl mt-2">{c.value}</h2>

            <p className="text-green-400 text-sm mt-2">
              +1 from last month
            </p>
          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">

        {/* Asset Distribution */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <h3 className="text-lg mb-4">Asset Distribution</h3>

          {[
            { name: "Laptop", value: 2 },
            { name: "Monitor", value: 2 },
            { name: "Mobile", value: 1 },
            { name: "Furniture", value: 1 },
          ].map((item) => (
            <div key={item.name} className="mb-4">

              <div className="flex justify-between text-sm text-gray-400">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>

              <div className="w-full h-2 bg-zinc-800 rounded mt-1">
                <div
                  className="h-2 bg-blue-500 rounded"
                  style={{ width: `${item.value * 30}%` }}
                />
              </div>

            </div>
          ))}
        </div>

        {/* ✅ RECENT ACTIVITY (UPDATED LIKE IMAGE) */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <span className="text-blue-400 text-sm cursor-pointer">
              View all →
            </span>
          </div>

          {/* List */}
          <div className="space-y-4">

            {activities.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-zinc-800 pb-4 hover:bg-zinc-800/40 p-2 rounded-lg transition"
              >

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-sm">
                    {item.id}
                  </div>

                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                  <span
                    className={`px-4 py-1 text-xs rounded-full ${
                      item.status === "Assigned"
                        ? "bg-blue-600/20 text-blue-400"
                        : item.status === "Available"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-orange-600/20 text-orange-400"
                    }`}
                  >
                    {item.status}
                  </span>

                  {item.user && (
                    <span className="text-sm text-gray-400">
                      {item.user}
                    </span>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}