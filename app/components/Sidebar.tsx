"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { menuItems } from "./sidebar/menuItems";
import UserProfile from "./sidebar/UserProfile";
import SidebarLogo from "./sidebar/SidebarLogo";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-slate-900 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col transition-all duration-300">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 pointer-events-none" />

      <SidebarLogo />

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent relative z-10">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "flat" : "light"}
            className={`w-full justify-start h-12 text-base font-medium transition-all duration-300 ${
              isActive(item.path)
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105 hover:shadow-blue-500/50"
                : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-102"
            }`}
            startContent={
              <span
                className={`text-xl transition-transform duration-300 ${
                  isActive(item.path) ? "scale-110" : ""
                }`}
              >
                {item.icon}
              </span>
            }
            onPress={() => router.push(item.path)}
          >
            <span className="flex-1 text-left">{item.name}</span>
            {isActive(item.path) && (
              <div className="w-1.5 h-6 bg-white rounded-full shadow-lg" />
            )}
          </Button>
        ))}
      </nav>

      <UserProfile />
    </div>
  );
}
