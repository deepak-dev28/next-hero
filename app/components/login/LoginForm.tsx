"use client";

import { Button, Input, Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@nextjs.com");
  const [password, setPassword] = useState("admin123");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      } else {
        setIsLoading(false);
        alert(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="bordered"
            size="lg"
            autoComplete="email"
            startContent={<Mail className="w-4 h-4 text-slate-400" />}
            classNames={{
              input: "text-slate-900 dark:text-white",
              inputWrapper:
                "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 data-[focus=true]:border-blue-500",
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
            Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
            size="lg"
            autoComplete="current-password"
            startContent={<Lock className="w-4 h-4 text-slate-400" />}
            endContent={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" />
                )}
              </button>
            }
            classNames={{
              input: "text-slate-900 dark:text-white",
              inputWrapper:
                "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 data-[focus=true]:border-blue-500",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
          />
          <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
            Remember me
          </span>
        </label>
        <Link
          href="#"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          Forgot password?
        </Link>
      </div>

      <div className="space-y-3 pt-2">
        <Button
          size="lg"
          onPress={handleLogin}
          isLoading={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          endContent={!isLoading && <ArrowRight className="w-4 h-4" />}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          size="lg"
          variant="bordered"
          onPress={() => router.push("/register")}
          className="w-full border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
        >
          Create New Account
        </Button>
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Demo credentials: admin@nextjs.com / admin123
        </p>
      </div>
    </div>
  );
}
