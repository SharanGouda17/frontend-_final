"use client";

import { useState } from "react";
import { loginApi } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const data = await loginApi(email, password);

      // ✅ Save token
      localStorage.setItem("token", data.access_token);

      // ✅ Save cookie for middleware
      document.cookie = `token=${data.access_token}; path=/; max-age=86400`;

      // ✅ Redirect to dashboard
      window.location.href = "/dashboard";

    } catch (err: any) {
      console.error("❌ LOGIN ERROR:", err);
      alert(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-5 border-b border-zinc-800">
        <h1 className="text-xl font-semibold">AssetVault</h1>
      </div>

      {/* MAIN */}
      <div className="flex flex-1 items-center justify-center">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-[380px] shadow-2xl">

          <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-400 text-sm mb-6">Welcome back</p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
          />

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* DEMO */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            Demo: admin@assetvault.com / admin123
          </p>

        </div>
      </div>
    </div>
  );
}