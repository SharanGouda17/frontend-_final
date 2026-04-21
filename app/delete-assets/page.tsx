"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function DeleteAssetsPage() {
  const [assets, setAssets] = useState([
    { id: 1, name: "Laptop", status: "In Use" },
    { id: 2, name: "Monitor", status: "Available" },
    { id: 3, name: "Keyboard", status: "In Repair" },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this asset?")) {
      setAssets(assets.filter((asset) => asset.id !== id));
    }
  };

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">

        <h1 className="text-3xl font-bold mb-6">
          Delete Assets
        </h1>

        <div className="bg-white/80 backdrop-blur rounded-xl shadow p-4">

          <table className="w-full text-left">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Asset Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-t">

                  <td className="p-3">{asset.id}</td>
                  <td className="p-3">{asset.name}</td>
                  <td className="p-3">{asset.status}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(asset.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
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
    </div>
  );
}