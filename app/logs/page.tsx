"use client";

import { Card, CardBody, Chip, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Search } from "lucide-react";

export default function LogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const logs = [
    {
      id: 1,
      type: "Info",
      message: "User logged in successfully",
      user: "john@example.com",
      timestamp: "2025-12-18 16:45:23",
    },
    {
      id: 2,
      type: "Warning",
      message: "Failed login attempt detected",
      user: "unknown@example.com",
      timestamp: "2025-12-18 16:42:15",
    },
    {
      id: 3,
      type: "Success",
      message: "New organization created",
      user: "admin@example.com",
      timestamp: "2025-12-18 16:38:42",
    },
    {
      id: 4,
      type: "Error",
      message: "Database connection timeout",
      user: "system",
      timestamp: "2025-12-18 16:35:10",
    },
    {
      id: 5,
      type: "Info",
      message: "User updated profile settings",
      user: "jane@example.com",
      timestamp: "2025-12-18 16:30:05",
    },
    {
      id: 6,
      type: "Success",
      message: "Payment processed successfully",
      user: "sarah@example.com",
      timestamp: "2025-12-18 16:25:18",
    },
    {
      id: 7,
      type: "Warning",
      message: "API rate limit approaching",
      user: "system",
      timestamp: "2025-12-18 16:20:33",
    },
    {
      id: 8,
      type: "Info",
      message: "Data backup completed",
      user: "system",
      timestamp: "2025-12-18 16:15:42",
    },
  ];

  const getLogColor = (type: string) => {
    switch (type) {
      case "Error":
        return "danger";
      case "Warning":
        return "warning";
      case "Success":
        return "success";
      default:
        return "primary";
    }
  };

  const getLogIcon = (type: string) => {
    switch (type) {
      case "Error":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "Warning":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      case "Success":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-page transition-colors duration-300">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-xl transition-colors duration-300"
        >
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
              System Logs
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              View and monitor system activity
            </p>
          </div>
        </motion.div>

        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10">
              <CardBody className="p-6">
                <div className="mb-6">
                  <Input
                    placeholder="Search logs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    variant="bordered"
                    size="lg"
                    startContent={<Search className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20",
                    }}
                  />
                </div>

                <div className="space-y-3">
                  {logs.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all"
                    >
                      <div className="w-6 h-6 flex-shrink-0 text-slate-600 dark:text-slate-400">
                        {getLogIcon(log.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Chip
                              size="sm"
                              color={getLogColor(log.type)}
                              variant="flat"
                              className="font-semibold"
                            >
                              {log.type}
                            </Chip>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {log.message}
                            </p>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-4">
                            {log.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          User: {log.user}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
