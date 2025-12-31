"use client";

import { Zap } from "lucide-react";

export default function SidebarLogo() {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/50 animate-pulse-slow">
          <Zap className="w-6 h-6 text-white" fill="white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            NextJs
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            Admin Panel
          </p>
        </div>
      </div>
    </div>
  );
}
