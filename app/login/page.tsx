"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Alex Rivera",
          role: "admin",
        })
      );

      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col">

      {/* 🔥 TOP NAVBAR */}
      <div className="flex justify-between items-center px-10 py-5 border-b border-zinc-800">
        <h1 className="text-xl font-semibold">AssetVault</h1>

        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">Pricing</span>
          <span className="hover:text-white cursor-pointer">Docs</span>
        </div>
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="flex flex-1">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-1 flex-col justify-center px-20">

          <h2 className="text-4xl font-bold leading-tight mb-4 animate-fade-in">
            Manage your assets <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              smarter & faster
            </span>
          </h2>

          <p className="text-gray-400 max-w-md animate-fade-in">
            Track inventory, assign assets, and monitor usage — all in one
            powerful dashboard built for modern teams.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-center">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-[380px] shadow-2xl animate-fade-in">

            <h2 className="text-2xl font-semibold mb-2">
              Sign in
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              Welcome back to AssetVault
            </p>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition py-3 rounded-lg font-medium"
            >
              Sign In
            </button>

            {/* FOOTER */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Demo: admin@gmail.com / 1234
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}