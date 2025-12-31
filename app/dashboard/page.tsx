"use client";

import { Card, CardBody, CardHeader, Progress, Chip } from "@heroui/react";
import { TrendingUp, Activity, Zap, Users } from "lucide-react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";

export default function DashboardPage() {
  const stats = [
    {
      label: "Active Users",
      value: "1,234",
      change: "+12.5%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "New Users",
      value: "856",
      change: "+8.2%",
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Total App Opens",
      value: "12,543",
      change: "+23.1%",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Avg Health Score",
      value: "94.5",
      change: "+5.3%",
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentActivity = [
    {
      user: "John Doe",
      action: "Completed intervention",
      time: "2 min ago",
      status: "success",
    },
    {
      user: "Jane Smith",
      action: "New user registration",
      time: "5 min ago",
      status: "info",
    },
    {
      user: "Mike Johnson",
      action: "Health score updated",
      time: "12 min ago",
      status: "warning",
    },
    {
      user: "Sarah Williams",
      action: "App session started",
      time: "18 min ago",
      status: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-page transition-colors duration-300">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        <DashboardHeader />

        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <StatsCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                color={stat.color}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Intervention Completion Rate */}
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xl">
              <CardHeader className="flex flex-col items-start px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Intervention Completion
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="space-y-4 mt-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Mental Health
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        87%
                      </span>
                    </div>
                    <Progress value={87} className="h-2" color="secondary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Physical Activity
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        92%
                      </span>
                    </div>
                    <Progress value={92} className="h-2" color="success" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Nutrition
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        78%
                      </span>
                    </div>
                    <Progress value={78} className="h-2" color="warning" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Sleep Quality
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        85%
                      </span>
                    </div>
                    <Progress value={85} className="h-2" color="primary" />
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* System Uptime */}
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xl">
              <CardHeader className="flex flex-col items-start px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-green-500 to-emerald-500 shadow-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    System Uptime
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex items-center justify-center py-6 sm:py-8">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="rgba(148,163,184,0.2)"
                        strokeWidth="12"
                        fill="none"
                        className="dark:stroke-slate-700"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="553"
                        strokeDashoffset="11"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                        99.8%
                      </span>
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Last 30 days
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* LLM API Usage */}
            <Card className="lg:col-span-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xl">
              <CardHeader className="flex flex-col items-start px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      LLM API Usage
                    </h2>
                  </div>
                  <Chip
                    size="sm"
                    className="bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                  >
                    This Week
                  </Chip>
                </div>
              </CardHeader>
              <CardBody className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="grid grid-cols-7 gap-2 mt-6">
                  {[65, 45, 78, 90, 55, 88, 72].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden h-24 sm:h-32 flex items-end">
                        <div
                          className="w-full bg-linear-to-t from-blue-500 to-cyan-500 rounded-t-lg transition-all duration-500 hover:from-blue-400 hover:to-cyan-400"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {
                          ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                            index
                          ]
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xl">
              <CardHeader className="flex flex-col items-start px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-orange-500 to-red-500 shadow-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Recent Activity
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="space-y-3 sm:space-y-4 mt-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          activity.status === "success"
                            ? "bg-green-500"
                            : activity.status === "info"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                          {activity.user}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {activity.action}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
