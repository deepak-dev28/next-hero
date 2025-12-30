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
    <div className="p-4 border-t border-white/10 mt-auto">
      <Dropdown placement="top" className="dark">
        <DropdownTrigger>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-all duration-300 group border border-white/5 hover:border-white/10">
            <Avatar
              src="https://i.pravatar.cc/150?u=admin"
              name="AU"
              size="sm"
              className="ring-2 ring-blue-500/30 group-hover:ring-blue-100/50 transition-all"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-slate-100 truncate">
                admin@nextjs.com
              </p>
            </div>
            <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User menu actions"
          className="w-56"
          itemClasses={{
            base: "gap-4 py-3",
          }}
        >
          <DropdownItem
            key="profile"
            onPress={() => router.push("/profile")}
            startContent={<User className="w-4 h-4" />}
            className="text-black"
          >
            View Profile
          </DropdownItem>
          <DropdownItem
            key="edit-profile"
            onPress={() => router.push("/profile?edit=true")}
            startContent={<Edit className="w-4 h-4" />}
            className="text-black"
          >
            Edit Profile
          </DropdownItem>
          <DropdownItem
            key="settings"
            onPress={() => router.push("/settings")}
            startContent={<Settings className="w-4 h-4" />}
            className="text-black"
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
