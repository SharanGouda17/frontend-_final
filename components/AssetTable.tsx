"use client";

import { useState } from "react";

export default function AssetTable() {
  const [search, setSearch] = useState("");

  const assets = [
    { id: 1, name: "Laptop", status: "In Use" },
    { id: 2, name: "Monitor", status: "Available" },
    { id: 3, name: "Keyboard", status: "In Repair" },
  ];

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl shadow p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Inventory</h3>

        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table Wrapper */}
      <div className="overflow-hidden rounded-xl border">

        <table className="w-full text-left border-collapse">

          {/* Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Asset Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>

            {/* Empty State */}
            {filteredAssets.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-500">
                  No assets found
                </td>
              </tr>
            )}

            {filteredAssets.map((asset) => (
              <tr
                key={asset.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-3">{asset.id}</td>
                <td className="p-3 font-medium">{asset.name}</td>

                {/* Status Badge */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      asset.status === "In Use"
                        ? "bg-blue-100 text-blue-700"
                        : asset.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {asset.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3 space-x-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm">
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to delete?")) {
                        alert("Deleted!");
                      }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}