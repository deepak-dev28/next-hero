"use client";

import {
  Button,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Chip,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Badge,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Search,
  Plus,
  MoreVertical,
  Users as UsersIcon,
  UserPlus,
  Shield,
  Filter,
  Bell,
  Settings as SettingsIcon,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
  });
  const { theme, setTheme, resolvedTheme } = useTheme();

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?u=john",
      joinDate: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Manager",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?u=jane",
      joinDate: "Feb 20, 2024",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "User",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?u=mike",
      joinDate: "Mar 10, 2024",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "User",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      joinDate: "Apr 5, 2024",
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert@example.com",
      role: "Manager",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?u=robert",
      joinDate: "May 12, 2024",
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "danger";
      case "Manager":
        return "warning";
      default:
        return "primary";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Active" ? "success" : "default";
  };

  const handleAddUser = () => {
    onClose();
    setNewUser({ name: "", email: "", role: "User" });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-page transition-colors duration-300">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-xl transition-colors duration-300"
        >
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                  User Management
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  Manage your team members and their roles
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Notifications Button */}
                <Badge content="3" color="danger" size="sm">
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all"
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
                  className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all"
                >
                  <SettingsIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </Button>

                <Button
                  variant="flat"
                  className="bg-slate-400 dark:bg-slate-800/50 border border-slate-900 dark:border-white/10"
                  startContent={<Filter className="w-4 h-4" />}
                >
                  Filter
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30"
                  startContent={<Plus className="w-4 h-4" />}
                  onPress={onOpen}
                >
                  Add User
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="p-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                label: "Total Users",
                value: users.length,
                icon: UsersIcon,
                color: "from-blue-500 to-cyan-500",
              },
              {
                label: "Active",
                value: users.filter((u) => u.status === "Active").length,
                icon: UserPlus,
                color: "from-green-500 to-emerald-500",
              },
              {
                label: "Admins",
                value: users.filter((u) => u.role === "Admin").length,
                icon: Shield,
                color: "from-purple-500 to-pink-500",
              },
              {
                label: "Managers",
                value: users.filter((u) => u.role === "Manager").length,
                icon: UsersIcon,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Table Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10">
              <CardBody className="p-6">
                {/* Search Bar */}
                <div className="mb-6">
                  <Input
                    placeholder="Search users by name or email..."
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

                {/* Users Table */}
                <Table
                  aria-label="Users table"
                  classNames={{
                    wrapper: "bg-transparent shadow-none",
                    th: "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-semibold",
                    td: "text-slate-700 dark:text-slate-200",
                  }}
                >
                  <TableHeader>
                    <TableColumn>USER</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>JOINED</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow
                        key={user.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={user.avatar}
                              name={user.name}
                              size="sm"
                              className="ring-2 ring-slate-300 dark:ring-slate-700"
                            />
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-slate-600 dark:text-slate-400">
                            {user.email}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Chip
                            color={getRoleColor(user.role)}
                            variant="flat"
                            size="sm"
                            className="font-semibold"
                          >
                            {user.role}
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <Chip
                            color={getStatusColor(user.status)}
                            variant="dot"
                            size="sm"
                          >
                            {user.status}
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <span className="text-slate-600 dark:text-slate-400 text-sm">
                            {user.joinDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Dropdown>
                            <DropdownTrigger>
                              <Button
                                isIconOnly
                                variant="light"
                                size="sm"
                                className="hover:bg-slate-100 dark:hover:bg-slate-800"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                              aria-label="User actions"
                              className="bg-white dark:bg-slate-800"
                            >
                              <DropdownItem
                                key="view"
                                className="text-slate-900 dark:text-white"
                              >
                                View Profile
                              </DropdownItem>
                              <DropdownItem
                                key="edit"
                                className="text-slate-900 dark:text-white"
                              >
                                Edit User
                              </DropdownItem>
                              <DropdownItem
                                key="permissions"
                                className="text-slate-900 dark:text-white"
                              >
                                Manage Permissions
                              </DropdownItem>
                              <DropdownItem
                                key="delete"
                                color="danger"
                                className="text-danger"
                              >
                                Delete User
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Showing{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {filteredUsers.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {users.length}
                    </span>{" "}
                    users
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="flat"
                      className="bg-slate-100 dark:bg-slate-800"
                    >
                      Previous
                    </Button>
                    <Button size="sm" className="bg-blue-600 text-white">
                      1
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      className="bg-slate-100 dark:bg-slate-800"
                    >
                      2
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      className="bg-slate-100 dark:bg-slate-800"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
      {/* Add User Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        size="sm"
        scrollBehavior="inside"
        classNames={{
          base: "max-h-[80vh]",
          backdrop: "bg-[#80808080] backdrop-blur-sm",
        }}
      >
        <ModalContent className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg w-[600px]">
          {(onClose) => (
            <>
              {/* HEADER */}
              <ModalHeader className="border-b border-slate-200 dark:border-slate-700 py-3">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Add New User
                </h3>
              </ModalHeader>
              {/* BODY */}
              <ModalBody className="py-4 space-y-4 overflow-y-auto">
                {/* FULL NAME */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-600 dark:text-slate-400">
                    Full Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    variant="bordered"
                    classNames={{
                      input: "text-slate-900 dark:text-white text-sm",
                      inputWrapper:
                        "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[42px]",
                    }}
                  />
                </div>
                {/* EMAIL */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-600 dark:text-slate-400">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@email.com"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    variant="bordered"
                    classNames={{
                      input: "text-slate-900 dark:text-white text-sm",
                      inputWrapper:
                        "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[42px]",
                    }}
                  />
                </div>
                {/* ROLE */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-600 dark:text-slate-400">
                    Role
                  </label>
                  <Input
                    placeholder="Admin / User"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    variant="bordered"
                    classNames={{
                      input: "text-slate-900 dark:text-white text-sm",
                      inputWrapper:
                        "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[42px]",
                    }}
                  />
                </div>
              </ModalBody>
              {/* FOOTER */}
              <ModalFooter className="border-t border-slate-200 dark:border-slate-700 py-3">
                <Button
                  size="sm"
                  variant="flat"
                  onPress={onClose}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-600 text-white"
                  onPress={handleAddUser}
                >
                  Add User
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
