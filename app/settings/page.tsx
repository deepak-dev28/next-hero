"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Switch,
  Select,
  SelectItem,
  Tabs,
  Tab,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { User, Lock, Bell, Globe, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="min-h-screen bg-page transition-colors duration-300">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl transition-colors duration-300"
        >
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
              Settings
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              Manage your account settings and preferences
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 transition-colors duration-300">
              <CardBody className="p-6">
                <Tabs
                  aria-label="Settings tabs"
                  size="lg"
                  variant="underlined"
                  classNames={{
                    tabList:
                      "gap-6 border-b border-slate-200 dark:border-slate-700",
                    cursor: "bg-linear-to-r from-blue-500 to-purple-500",
                    tab: "text-slate-600 dark:text-slate-400 data-[hover=true]:text-slate-900 dark:data-[hover=true]:text-white",
                    tabContent:
                      "group-data-[selected=true]:text-slate-900 dark:group-data-[selected=true]:text-white font-semibold",
                  }}
                >
                  <Tab
                    key="profile"
                    title={
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Profile
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="py-6 space-y-6"
                    >
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Profile Information
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Update your personal details
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                            First Name
                          </label>
                          <Input
                            placeholder="Admin"
                            variant="bordered"
                            size="lg"
                            classNames={{
                              input: "text-slate-900 dark:text-white",
                              inputWrapper:
                                "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                            Last Name
                          </label>
                          <Input
                            placeholder="User"
                            variant="bordered"
                            size="lg"
                            classNames={{
                              input: "text-slate-900 dark:text-white",
                              inputWrapper:
                                "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                            }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="admin@nextjs.com"
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-slate-900 dark:text-white",
                            inputWrapper:
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                          Phone
                        </label>
                        <Input
                          placeholder="+1 (555) 123-4567"
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-slate-900 dark:text-white",
                            inputWrapper:
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                          }}
                        />
                      </div>

                      <Button
                        size="lg"
                        className="bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                        startContent={<Save className="w-4 h-4" />}
                      >
                        Save Changes
                      </Button>
                    </motion.div>
                  </Tab>

                  <Tab
                    key="security"
                    title={
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Security
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="py-6 space-y-6"
                    >
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Change Password
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Update your password to keep your account secure
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                          Current Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter current password"
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-slate-900 dark:text-white",
                            inputWrapper:
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                          New Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter new password"
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-slate-900 dark:text-white",
                            inputWrapper:
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                          Confirm New Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Confirm new password"
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-slate-900 dark:text-white",
                            inputWrapper:
                              "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                          }}
                        />
                      </div>

                      <Button
                        size="lg"
                        className="bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                        startContent={<Lock className="w-4 h-4" />}
                      >
                        Update Password
                      </Button>
                    </motion.div>
                  </Tab>

                  <Tab
                    key="preferences"
                    title={
                      <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Preferences
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="py-6 space-y-6"
                    >
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Application Preferences
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Customize your experience
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                          <div>
                            <h3 className="text-slate-900 dark:text-white font-semibold flex items-center gap-2">
                              <Bell className="w-4 h-4" />
                              Push Notifications
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                              Receive push notifications for important updates
                            </p>
                          </div>
                          <Switch
                            isSelected={notifications}
                            onValueChange={setNotifications}
                            size="lg"
                            className="ml-4"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                          <div>
                            <h3 className="text-slate-900 dark:text-white font-semibold">
                              Email Alerts
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                              Receive email notifications for critical events
                            </p>
                          </div>
                          <Switch
                            isSelected={emailAlerts}
                            onValueChange={setEmailAlerts}
                            size="lg"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                          <div>
                            <h3 className="text-slate-900 dark:text-white font-semibold">
                              Auto Save
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                              Automatically save your changes
                            </p>
                          </div>
                          <Switch
                            isSelected={autoSave}
                            onValueChange={setAutoSave}
                            size="lg"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                            Language
                          </label>
                          <Select
                            placeholder="Select your preferred language"
                            defaultSelectedKeys={["en"]}
                            variant="bordered"
                            size="lg"
                            startContent={
                              <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                            }
                            classNames={{
                              trigger:
                                "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                              value: "text-slate-900 dark:text-white",
                            }}
                          >
                            <SelectItem key="en">English</SelectItem>
                            <SelectItem key="hi">Hindi</SelectItem>
                            <SelectItem key="fr">French</SelectItem>
                            <SelectItem key="de">German</SelectItem>
                            <SelectItem key="ja">Japanese</SelectItem>
                            <SelectItem key="es">Spanish</SelectItem>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                            Timezone
                          </label>
                          <Select
                            placeholder="Select your timezone"
                            defaultSelectedKeys={["utc"]}
                            variant="bordered"
                            size="lg"
                            classNames={{
                              trigger:
                                "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                              value: "text-slate-900 dark:text-white",
                            }}
                          >
                            <SelectItem key="utc">
                              UTC (Coordinated Universal Time)
                            </SelectItem>
                            <SelectItem key="est">
                              EST (Eastern Time)
                            </SelectItem>
                            <SelectItem key="pst">
                              PST (Pacific Time)
                            </SelectItem>
                            <SelectItem key="cst">
                              CST (Central Time)
                            </SelectItem>
                            <SelectItem key="mst">
                              MST (Mountain Time)
                            </SelectItem>
                            <SelectItem key="gmt">
                              GMT (Greenwich Mean Time)
                            </SelectItem>
                          </Select>
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                        startContent={<Save className="w-4 h-4" />}
                      >
                        Save Preferences
                      </Button>
                    </motion.div>
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
