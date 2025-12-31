"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
} from "@heroui/react";
import { Bell, CheckCheck, X } from "lucide-react";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsModal({
  isOpen,
  onClose,
}: NotificationsModalProps) {
  const notifications = [
    {
      id: 1,
      title: "New user registered",
      message: "John Doe has joined the platform",
      time: "2 minutes ago",
      type: "info",
      read: false,
    },
    {
      id: 2,
      title: "System update completed",
      message: "All systems are up to date",
      time: "1 hour ago",
      type: "success",
      read: false,
    },
    {
      id: 3,
      title: "Low disk space warning",
      message: "Server storage is at 85% capacity",
      time: "3 hours ago",
      type: "warning",
      read: true,
    },
    {
      id: 4,
      title: "New comment on your post",
      message: "Sarah Williams commented on your dashboard",
      time: "5 hours ago",
      type: "info",
      read: true,
    },
    {
      id: 5,
      title: "Backup completed",
      message: "Database backup was successful",
      time: "1 day ago",
      type: "success",
      read: true,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500/20 border-green-500/30";
      case "warning":
        return "bg-yellow-500/20 border-yellow-500/30";
      case "error":
        return "bg-red-500/20 border-red-500/30";
      default:
        return "bg-blue-500/20 border-blue-500/30";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalContent className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <ModalHeader className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
          <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Notifications
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
              You have {notifications.filter((n) => !n.read).length} unread
              notifications
            </p>
          </div>
        </ModalHeader>
        <ModalBody className="py-4">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-xl border transition-all hover:scale-102 cursor-pointer ${
                  notification.read
                    ? "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700"
                    : "bg-blue-50 dark:bg-blue-900/20 border-blue-500/30 dark:border-blue-500/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg border ${getTypeColor(
                      notification.type
                    )}`}
                  >
                    <Bell className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <Chip size="sm" color="primary" variant="dot">
                          New
                        </Chip>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter className="border-t border-slate-200 dark:border-slate-700 gap-2">
          <Button
            variant="flat"
            className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            startContent={<CheckCheck className="w-4 h-4" />}
          >
            Mark all as read
          </Button>
          <Button
            onPress={onClose}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
            startContent={<X className="w-4 h-4" />}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
