export default function ReportsPage() {
  return (
    <div className="p-6 text-white">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      {/* TOP GRID */}
      <div className="grid grid-cols-3 gap-6 mb-6">

        {/* TOTAL VALUE CARD */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <p className="text-gray-400">Total Asset Value</p>
          <h2 className="text-4xl font-bold mt-2">$7,212</h2>

          <div className="mt-4">
            <div className="w-full bg-zinc-800 h-2 rounded-full">
              <div className="bg-purple-500 h-2 rounded-full w-[72%]"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Utilization Rate: 72%
            </p>
          </div>
        </div>

        {/* 🔥 DEPRECIATION GRAPH (FIXED) */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 col-span-2">

          <h2 className="text-xl font-semibold mb-6">
            Asset Depreciation Projection
          </h2>

          <div className="flex items-end justify-between h-[220px] px-6">

            {[
              { label: "Q1", value: 140 },
              { label: "Q2", value: 100 },
              { label: "Q3", value: 180 },
              { label: "Q4", value: 80 },
              { label: "Q5", value: 150 },
              { label: "Q6", value: 120 },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">

                {/* BAR */}
                <div
                  className="w-12 rounded-lg bg-gradient-to-t from-blue-600 to-indigo-400 shadow-lg"
                  style={{ height: `${item.value}px` }}
                />

                {/* LABEL */}
                <span className="text-sm text-gray-400 mt-2">
                  {item.label}
                </span>

              </div>
            ))}

          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Projected remaining value over next 6 quarters
          </p>

        </div>

      </div>

      {/* UTILIZATION SECTION */}
      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

        <h2 className="text-xl font-semibold mb-6">
          Utilization by Department
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {/* Engineering */}
          <div className="border border-zinc-700 p-5 rounded-xl">
            <p className="text-gray-400">Engineering</p>
            <h2 className="text-4xl font-bold">91%</h2>
            <p className="text-green-400 text-sm">
              14 assets assigned
            </p>

            <div className="w-full bg-zinc-800 h-2 rounded mt-3">
              <div className="bg-white h-2 rounded w-[91%]"></div>
            </div>
          </div>

          {/* Design */}
          <div className="border border-zinc-700 p-5 rounded-xl">
            <p className="text-gray-400">Design</p>
            <h2 className="text-4xl font-bold">76%</h2>
            <p className="text-green-400 text-sm">
              8 assets assigned
            </p>

            <div className="w-full bg-zinc-800 h-2 rounded mt-3">
              <div className="bg-white h-2 rounded w-[76%]"></div>
            </div>
          </div>

          {/* Marketing */}
          <div className="border border-zinc-700 p-5 rounded-xl">
            <p className="text-gray-400">Marketing</p>
            <h2 className="text-4xl font-bold">64%</h2>
            <p className="text-green-400 text-sm">
              11 assets assigned
            </p>

            <div className="w-full bg-zinc-800 h-2 rounded mt-3">
              <div className="bg-white h-2 rounded w-[64%]"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}