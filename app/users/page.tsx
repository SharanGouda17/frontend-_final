"use client";

export default function TeamPage() {
  const users = [
    {
      name: "Alex Rivera",
      email: "alex.rivera@company.com",
      dept: "IT",
      role: "ADMIN",
    },
    {
      name: "Sarah Chen",
      email: "sarah.chen@company.com",
      dept: "Design",
      role: "MANAGER",
    },
    {
      name: "Michael Torres",
      email: "michael.torres@company.com",
      dept: "Engineering",
      role: "EMPLOYEE",
    },
    {
      name: "Emma Rodriguez",
      email: "emma.rodriguez@company.com",
      dept: "Marketing",
      role: "EMPLOYEE",
    },
    {
      name: "David Kim",
      email: "david.kim@company.com",
      dept: "Operations",
      role: "MANAGER",
    },
  ];

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Team Directory</h1>
          <p className="text-gray-400 text-sm">
            Manage employees and their permissions
          </p>
        </div>

        <button className="border border-zinc-700 px-5 py-2 rounded-full text-sm">
          5 team members
        </button>
      </div>

      {/* LIST */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

        {users.map((user, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 hover:bg-zinc-800/40 transition"
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                👤
              </div>

              {/* Name + Email */}
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-10">

              {/* Department */}
              <div className="text-right">
                <p className="text-xs text-gray-500">DEPARTMENT</p>
                <p className="text-sm">{user.dept}</p>
              </div>

              {/* Role Badge */}
              <span
                className={`px-4 py-1 text-xs rounded-full ${
                  user.role === "ADMIN"
                    ? "bg-purple-600/20 text-purple-400"
                    : user.role === "MANAGER"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-orange-600/20 text-orange-400"
                }`}
              >
                {user.role}
              </span>

              {/* Button */}
              <button className="border border-zinc-600 px-4 py-1 rounded-full text-sm hover:bg-zinc-700 transition">
                Edit Role
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}