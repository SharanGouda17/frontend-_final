"use client";

export default function MyAssetsPage() {
  const myAssets: any[] = [
    // Uncomment to test data view
    // {
    //   name: "MacBook Pro 16\"",
    //   type: "Laptop",
    //   serial: "MP16X-7842",
    //   status: "Assigned",
    // },
  ];

  return (
    <div className="text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">My Assets</h1>
        <p className="text-gray-400">
          Assets currently assigned to you
        </p>
      </div>

      {/* EMPTY STATE */}
      {myAssets.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl h-[350px] flex flex-col items-center justify-center text-center">

          {/* Icon */}
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
            📦
          </div>

          <h2 className="text-lg font-semibold mb-2">
            No assets assigned yet
          </h2>

          <p className="text-gray-400 max-w-sm">
            Assets assigned to you will appear here.
            Contact your manager if you need new equipment.
          </p>

        </div>
      ) : (
        /* DATA STATE */
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-4 px-6 py-4 text-sm text-gray-400 border-b border-zinc-800">
            <span>ASSET</span>
            <span>TYPE</span>
            <span>SERIAL</span>
            <span>STATUS</span>
          </div>

          {/* ROWS */}
          {myAssets.map((asset, i) => (
            <div
              key={i}
              className="grid grid-cols-4 px-6 py-5 border-b border-zinc-800 hover:bg-zinc-800/40 transition"
            >
              <span className="font-medium">{asset.name}</span>

              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm w-fit">
                {asset.type}
              </span>

              <span className="text-gray-400">{asset.serial}</span>

              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs w-fit">
                {asset.status}
              </span>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}