import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white text-black">

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          md:static md:translate-x-0 md:z-auto md:flex md:flex-shrink-0
          fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col bg-gray-50 -mt-2 min-w-0 overflow-y-auto">

        {/* MOBILE HAMBURGER BAR — hidden on md+ */}
        <div className="md:hidden flex items-center px-4 py-3 bg-white border-b border-gray-200 shrink-0">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-md text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Open sidebar"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;