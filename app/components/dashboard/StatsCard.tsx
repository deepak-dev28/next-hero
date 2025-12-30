"use client";

import { Card, CardBody, Chip } from "@heroui/react";

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  color: string;
}

export default function StatsCard({
  label,
  value,
  change,
  color,
}: StatsCardProps) {
  return (
    <Card className="bg-card-light dark:bg-card-dark backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
      <CardBody className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <Chip
            size="sm"
            className="bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 font-semibold"
            variant="flat"
          >
            {change}
          </Chip>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
          {label}
        </p>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {value}
        </h3>

        {/* Animated gradient line */}
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </CardBody>
    </Card>
  );
}
