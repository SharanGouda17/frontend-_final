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
      localStorage.setItem("token", data.access_token);
      document.cookie = `token=${data.access_token}; path=/; max-age=86400`;
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("❌ LOGIN ERROR:", err);
      alert(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex">

      {/* LEFT SIDE — Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-700 to-[#0b0f19] flex-col justify-between p-12 relative overflow-hidden">

        {/* Background circles */}
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-3xl" />

        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <span className="text-blue-600 text-xl font-bold">A</span>
          </div>
          <h1 className="text-2xl font-bold text-white">AssetVault</h1>
        </div>

        {/* Center Content */}
        <div className="z-10">
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Manage Your Assets
            <br />
            <span className="text-blue-300">Smarter & Faster</span>
          </h2>
          <p className="text-blue-100 text-lg opacity-80 mb-8">
            Track, assign, and manage all your company assets in one powerful platform.
          </p>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              "📦 Real-time asset tracking",
              "👥 Team assignment management",
              "📊 Detailed reports & analytics",
              "🔒 Secure & role-based access",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full" />
                <p className="text-blue-100 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="z-10">
          <p className="text-blue-200 text-xs opacity-60">
            © 2026 AssetVault Enterprise. All rights reserved.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE — Login Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-white">AssetVault</h1>
          </div>

          {/* Form Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-2">Welcome back 👋</h2>
            <p className="text-gray-400 text-sm mb-8">
              Sign in to your account to continue
            </p>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-sm text-gray-400 mb-1 block">Email address</label>
              <input
                type="email"
                placeholder="admin@assetvault.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-white placeholder-zinc-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-6">
              <label className="text-sm text-gray-400 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-white placeholder-zinc-500"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition py-3 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </span>
              ) : "Sign In →"}
            </button>

            {/* DEMO */}
            <div className="mt-6 p-3 bg-zinc-800 rounded-xl border border-zinc-700">
              <p className="text-xs text-gray-400 text-center">
                🔑 Demo credentials
              </p>
              <p className="text-xs text-gray-300 text-center mt-1">
                admin@assetvault.com / admin123
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}