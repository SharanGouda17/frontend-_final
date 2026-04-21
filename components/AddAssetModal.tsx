"use client";

import { useState } from "react";

export default function AddAssetModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleAdd = () => {
    alert("Asset Added: " + name);
    setName("");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
      >
        + Add Asset
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-80 space-y-4">

            <h2 className="text-lg font-semibold">Add Asset</h2>

            <input
              type="text"
              placeholder="Asset Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Add
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
}