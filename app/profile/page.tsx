"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from "@heroui/react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { User, Mail, Phone, Building, Edit, Save, X } from "lucide-react";

function ProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditMode = searchParams.get("edit") === "true";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isEditing, setIsEditing] = useState(isEditMode);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@nextjs.com",
    phone: "+1 234 567 8900",
    role: "System Administrator",
    department: "IT Operations",
  });

  useEffect(() => {
    setIsEditing(isEditMode);
  }, [isEditMode]);

  const handleEditClick = () => {
    onOpen();
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onClose();
      router.push("/profile");
    }, 500);
  };

  const handleCancel = () => {
    onClose();
    router.push("/profile");
  };

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                  Profile
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  Manage your account information
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30"
                size="lg"
                onPress={handleEditClick}
                startContent={<Edit className="w-4 h-4" />}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 transition-colors duration-300">
              <CardHeader className="border-b border-slate-200 dark:border-slate-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Account Information
                </h2>
              </CardHeader>
              <CardBody className="p-8">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/150?u=admin"
                      name={formData.name}
                      className="w-24 h-24 ring-4 ring-blue-500/30"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                    >
                      {formData.name}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <Chip
                        color="primary"
                        variant="flat"
                        className="font-semibold"
                      >
                        {formData.role}
                      </Chip>
                      <Chip color="success" variant="dot">
                        Active
                      </Chip>
                    </motion.div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <Input
                      value={formData.name}
                      isReadOnly
                      variant="flat"
                      size="lg"
                      classNames={{
                        input: "text-slate-900 dark:text-white font-medium",
                        inputWrapper:
                          "bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      isReadOnly
                      variant="flat"
                      size="lg"
                      classNames={{
                        input: "text-slate-900 dark:text-white font-medium",
                        inputWrapper:
                          "bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      isReadOnly
                      variant="flat"
                      size="lg"
                      classNames={{
                        input: "text-slate-900 dark:text-white font-medium",
                        inputWrapper:
                          "bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Department
                    </label>
                    <Input
                      value={formData.department}
                      isReadOnly
                      variant="flat"
                      size="lg"
                      classNames={{
                        input: "text-slate-900 dark:text-white font-medium",
                        inputWrapper:
                          "bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Account Statistics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        Member Since
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        Jan 2024
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        Last Login
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        Today, 10:30 AM
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        Total Sessions
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        1,234
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal isOpen={isOpen} onClose={handleCancel} size="2xl" backdrop="blur">
        <ModalContent className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Edit Profile
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Update your personal information
                </p>
              </ModalHeader>
              <ModalBody className="py-6">
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    startContent={<User className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700",
                      label: "text-slate-700 dark:text-slate-300 font-medium",
                    }}
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    startContent={<Mail className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700",
                      label: "text-slate-700 dark:text-slate-300 font-medium",
                    }}
                  />

                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    startContent={<Phone className="w-4 h-4 text-slate-400" />}
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700",
                      label: "text-slate-700 dark:text-slate-300 font-medium",
                    }}
                  />

                  <Input
                    label="Department"
                    placeholder="Enter your department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    startContent={
                      <Building className="w-4 h-4 text-slate-400" />
                    }
                    classNames={{
                      input: "text-slate-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700",
                      label: "text-slate-700 dark:text-slate-300 font-medium",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="border-t border-slate-200 dark:border-slate-700">
                <Button
                  variant="flat"
                  onPress={handleCancel}
                  size="lg"
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                  startContent={<X className="w-4 h-4" />}
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleSave}
                  isLoading={isSaving}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
                  startContent={!isSaving && <Save className="w-4 h-4" />}
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-page flex items-center justify-center">
          <div className="animate-pulse text-slate-600 dark:text-slate-400">
            Loading...
          </div>
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
