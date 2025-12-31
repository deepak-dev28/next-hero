"use client";

import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { ChevronUp, User, Edit, Settings, LogOut } from "lucide-react";

export default function UserProfile() {
  const router = useRouter();

  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <Dropdown placement="top">
        <DropdownTrigger>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-all duration-300 group border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
            <Avatar
              src="https://i.pravatar.cc/150?u=admin"
              name="AU"
              size="sm"
              className="ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                admin@nextjs.com
              </p>
            </div>
            <ChevronUp className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User menu actions"
          className="w-56 bg-white dark:bg-slate-800"
          itemClasses={{
            base: "gap-4 py-3 data-[hover=true]:bg-slate-100 dark:data-[hover=true]:bg-slate-700",
          }}
        >
          <DropdownItem
            key="profile"
            onPress={() => router.push("/profile")}
            startContent={<User className="w-4 h-4" />}
            className="text-slate-900 dark:text-white"
          >
            View Profile
          </DropdownItem>
          <DropdownItem
            key="edit-profile"
            onPress={() => router.push("/profile?edit=true")}
            startContent={<Edit className="w-4 h-4" />}
            className="text-slate-900 dark:text-white"
          >
            Edit Profile
          </DropdownItem>
          <DropdownItem
            key="settings"
            onPress={() => router.push("/settings")}
            startContent={<Settings className="w-4 h-4" />}
            className="text-slate-900 dark:text-white"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onPress={() => router.push("/login")}
            startContent={<LogOut className="w-4 h-4" />}
            className="text-danger"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
