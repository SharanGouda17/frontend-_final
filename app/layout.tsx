"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    // ✅ Redirect only if NOT on login page
    if (!user && pathname !== "/login") {
      router.push("/login");
    }

    setLoading(false);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white">

        {/* ⏳ Wait for auth check */}
        {loading ? null : pathname === "/login" ? (
          children
        ) : (
          <div className="flex h-screen">

            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col">

              {/* Topbar */}
              <Topbar />

              {/* Content */}
              <main className="p-6 overflow-auto">
                {children}
              </main>

            </div>

          </div>
        )}

      </body>
    </html>
  );
}