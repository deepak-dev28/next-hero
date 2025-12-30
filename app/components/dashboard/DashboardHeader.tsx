"use client";

import {
  Button,
  Input,
  Avatar,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure,
} from "@heroui/react";
import { Search, Bell, Settings, User, LogOut, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import NotificationsModal from "./NotificationsModal";
import { useTheme } from "next-themes";

export default function DashboardHeader() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTheme, resolvedTheme } = useTheme();

  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <>
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-xl transition-colors duration-300">
        <div className="px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left section - Title and Greeting */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1 truncate">
                Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
                Hi Admin, Welcome to NextJs! 👋
              </p>
            </div>

            {/* Center section - Search */}
            <div className="hidden md:flex flex-1 max-w-md">
              <Input
                placeholder="Search anything..."
                startContent={<Search className="w-4 h-4 text-slate-400" />}
                classNames={{
                  input:
                    "text-slate-900 dark:text-white placeholder:text-slate-500",
                  inputWrapper:
                    "bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all",
                }}
              />
            </div>

            {/* Right section - Actions and Date */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Date Display */}
              <div className="hidden lg:flex flex-col items-end px-3 sm:px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Today
                </p>
                <p className="text-sm text-slate-900 dark:text-white font-semibold">
                  Dec 29, 2025
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Notifications Button */}
                <Badge content="5" color="danger" size="sm">
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all"
                    onPress={onOpen}
                  >
                    <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </Button>
                </Badge>

                {/* Dark Mode Toggle Button */}
                <Button
                  isIconOnly
                  variant="flat"
                  className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all"
                  onPress={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  )}
                </Button>

                {/* Settings Button */}
                <Button
                  isIconOnly
                  variant="flat"
                  className="hidden sm:flex bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all"
                  onPress={handleSettings}
                >
                  <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </Button>

                {/* Profile Dropdown */}
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      src="https://i.pravatar.cc/150?u=admin"
                      className="w-10 h-10 ring-2 ring-blue-500/50 cursor-pointer hover:ring-blue-500 transition-all"
                      isBordered
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Profile Actions"
                    className="w-64 bg-white dark:bg-slate-800"
                    itemClasses={{
                      base: "gap-4 py-3 data-[hover=true]:bg-slate-100 dark:data-[hover=true]:bg-slate-700",
                    }}
                  >
                    <DropdownItem
                      key="profile"
                      className="h-14 gap-2"
                      textValue="Profile info"
                    >
                      <div className="flex flex-col">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          Admin User
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          admin@nextjs.com
                        </p>
                      </div>
                    </DropdownItem>
                    <DropdownItem
                      key="view-profile"
                      startContent={<User className="w-4 h-4" />}
                      onPress={() => router.push("/profile")}
                      className="text-slate-900 dark:text-white"
                    >
                      View Profile
                    </DropdownItem>
                    <DropdownItem
                      key="settings"
                      startContent={<Settings className="w-4 h-4" />}
                      onPress={() => router.push("/settings")}
                      className="text-slate-900 dark:text-white"
                    >
                      Settings
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      startContent={<LogOut className="w-4 h-4" />}
                      onPress={() => router.push("/login")}
                      className="text-danger"
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Modal */}
      <NotificationsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
