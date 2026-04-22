"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [modal, setModal] = useState("");

  return (
    <div className="p-8 text-white space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold">Welcome back, Alex 👋</h1>
        <p className="text-gray-400">
          Here's what's happening with your assets today.
        </p>
      </div>

      {/* 🔥 TOP STATS */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <p className="text-sm opacity-80">Total Assets</p>
          <h2 className="text-3xl font-bold mt-2">120</h2>
          <p className="text-xs mt-2">+12% from last month</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500">
          <p className="text-sm text-gray-400">Assigned</p>
          <h2 className="text-3xl font-bold mt-2">85</h2>
          <p className="text-green-400 text-xs mt-2">+8 increase</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500">
          <p className="text-sm text-gray-400">Available</p>
          <h2 className="text-3xl font-bold mt-2">25</h2>
          <p className="text-blue-400 text-xs mt-2">Ready to assign</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500">
          <p className="text-sm text-gray-400">In Maintenance</p>
          <h2 className="text-3xl font-bold mt-2">10</h2>
          <p className="text-yellow-400 text-xs mt-2">Needs attention</p>
        </div>
      </div>

      {/* 🔥 MIDDLE SECTION */}
      <div className="grid grid-cols-2 gap-6">

        {/* 📊 ASSET DISTRIBUTION */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500">
          <h2 className="text-lg font-semibold mb-4">Asset Distribution</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">Laptops</p>
              <div className="w-full bg-zinc-800 h-2 rounded">
                <div className="bg-blue-500 h-2 w-[70%] rounded"></div>
              </div>
            </div>

            <div>
              <p className="text-sm mb-1">Monitors</p>
              <div className="w-full bg-zinc-800 h-2 rounded">
                <div className="bg-indigo-500 h-2 w-[50%] rounded"></div>
              </div>
            </div>

            <div>
              <p className="text-sm mb-1">Mobiles</p>
              <div className="w-full bg-zinc-800 h-2 rounded">
                <div className="bg-green-500 h-2 w-[40%] rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ⚡ QUICK ACTIONS */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() => setModal("add")}
              className="bg-blue-600 p-4 rounded-xl hover:bg-blue-700 transition"
            >
              + Add Asset
            </button>

            <button
              onClick={() => setModal("assign")}
              className="bg-indigo-600 p-4 rounded-xl hover:bg-indigo-700 transition"
            >
              Assign Asset
            </button>

            <button
              onClick={() => router.push("/inventory")}
              className="bg-green-600 p-4 rounded-xl hover:bg-green-700 transition"
            >
              View Inventory
            </button>

            <button
              onClick={() => setModal("issue")}
              className="bg-red-600 p-4 rounded-xl hover:bg-red-700 transition"
            >
              Report Issue
            </button>

          </div>
        </div>

      </div>

      {/* 🔥 RECENT ACTIVITY */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <span className="text-blue-500 text-sm cursor-pointer">
            View all →
          </span>
        </div>

        <div className="space-y-4">
          {[
            { id: "A001", name: "MacBook Pro 16\"", status: "Assigned", color: "bg-blue-600" },
            { id: "A002", name: "Dell Monitor", status: "Available", color: "bg-green-600" },
            { id: "A003", name: "iPhone 15 Pro", status: "Assigned", color: "bg-blue-600" },
            { id: "A004", name: "Office Chair", status: "Maintenance", color: "bg-yellow-600" },
          ].map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-xs">
                  {item.id}
                </div>
                <p>{item.name}</p>
              </div>
              <span className={`${item.color} px-3 py-1 rounded-full text-sm`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODALS */}

      {modal === "add" && (
        <Modal title="Add Asset" close={() => setModal("")}>
          <input placeholder="Asset Name" className="input" />
          <input placeholder="Category" className="input" />
          <input placeholder="Serial Number" className="input" />
          {/* ✅ Save & Cancel in same row */}
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 transition p-2 rounded">Save</button>
            <button onClick={() => setModal("")} className="flex-1 bg-zinc-700 hover:bg-zinc-600 transition p-2 rounded">Cancel</button>
          </div>
        </Modal>
      )}

      {modal === "assign" && (
        <Modal title="Assign Asset" close={() => setModal("")}>
          <input placeholder="Asset ID" className="input" />
          <input placeholder="Assign to User" className="input" />
          {/* ✅ Assign & Cancel in same row */}
          <div className="flex gap-3">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition p-2 rounded">Assign</button>
            <button onClick={() => setModal("")} className="flex-1 bg-zinc-700 hover:bg-zinc-600 transition p-2 rounded">Cancel</button>
          </div>
        </Modal>
      )}

      {modal === "issue" && (
        <Modal title="Report Issue" close={() => setModal("")}>
          <input placeholder="Asset ID" className="input" />
          <select className="input">
            <option>Hardware Issue</option>
            <option>Software Issue</option>
            <option>Damage</option>
          </select>
          <textarea placeholder="Describe issue..." className="input" />
          {/* ✅ Submit & Cancel in same row */}
          <div className="flex gap-3">
            <button className="flex-1 bg-red-600 hover:bg-red-700 transition p-2 rounded">Submit</button>
            <button onClick={() => setModal("")} className="flex-1 bg-zinc-700 hover:bg-zinc-600 transition p-2 rounded">Cancel</button>
          </div>
        </Modal>
      )}

    </div>
  );
}

/* 🔥 REUSABLE MODAL - Cancel button removed from here */
function Modal({ title, children, close }: any) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-2xl w-[400px] border border-zinc-800 space-y-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {children}
      </div>
    </div>
  );
}