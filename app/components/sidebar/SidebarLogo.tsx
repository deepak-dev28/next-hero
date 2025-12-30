"use client";

import { Zap } from "lucide-react";

export default function SidebarLogo() {
  return (
    <div className="p-6 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/50 animate-pulse-slow">
          <Zap className="w-6 h-6 text-white" fill="white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-500 tracking-tight">
            NextJs
          </h2>
          <p className="text-xs text-slate-400 font-medium">Admin Panel</p>
        </div>
      </div>
    </div>
  );
}
