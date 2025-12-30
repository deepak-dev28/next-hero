"use client";

import { Card, CardBody } from "@heroui/react";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import { Sparkles } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-page transition-colors duration-300">
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-6 sm:mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-blue-500/50 mb-3 sm:mb-4">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Sign in to access your dashboard
          </p>
        </div>

        <Card className="bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
          <CardBody className="p-6 sm:p-8">
            <LoginHeader />
            <LoginForm />
          </CardBody>
        </Card>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Protected by{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              NextJS Admin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
