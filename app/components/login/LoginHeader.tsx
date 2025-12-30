"use client";

import { Shield } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
        <Shield className="w-6 h-6 text-blue-500 dark:text-blue-400" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Secure Access
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        Enter your credentials to continue
      </p>
    </div>
  );
}
