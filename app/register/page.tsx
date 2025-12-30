"use client";

import { Button, Input, Card, CardBody, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  UserPlus,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
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
        <div className="text-center mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-blue-500/50 mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Join Us Today
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Create your account to get started
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
            <CardBody className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
                  <UserPlus className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Create Account
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Fill in your details to register
                </p>
              </div>

              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="bordered"
                    size="lg"
                    startContent={<User className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 data-[focus=true]:border-blue-500",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
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
                    startContent={<Mail className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 data-[focus=true]:border-blue-500",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                    Password
                  </label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="bordered"
                    size="lg"
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                    Confirm Password
                  </label>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    variant="bordered"
                    size="lg"
                    startContent={<Lock className="w-4 h-4 text-slate-400" />}
                    endContent={
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="focus:outline-none"
                      >
                        {showConfirmPassword ? (
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-1"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                    />
                    <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Terms & Conditions
                      </Link>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3 pt-2"
                >
                  <Button
                    size="lg"
                    onPress={handleRegister}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                    startContent={<UserPlus className="w-4 h-4" />}
                  >
                    Create Account
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-300 dark:border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400">
                        Already have an account?
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    variant="bordered"
                    onPress={() => router.push("/login")}
                    className="w-full border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                  >
                    Sign In Instead
                  </Button>
                </motion.div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
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
