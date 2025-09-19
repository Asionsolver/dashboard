"use client";

import Image from "next/image";
import DefaultAvatar from "@/public/avatar/default.svg";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { motion } from "motion/react";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SettingsPage() {
  const { data: session } = useSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="my-auto flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-sidebar border-border w-full max-w-3xl rounded-2xl border p-8 shadow-2xl"
      >
        <h1 className="text-primary-foreground mb-6 text-3xl font-bold">
          Settings
        </h1>

        {/* Profile Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="mb-8"
        >
          <h2 className="text-primary-foreground mb-4 text-xl font-semibold">
            Profile Settings
          </h2>
          <div className="flex items-center space-x-4">
            <Image
              src={session.user.image ?? DefaultAvatar}
              alt={session.user.name ?? "User Avatar"}
              width={70}
              height={70}
              className="rounded-full border-2 border-gray-600 shadow-md"
            />
            <div>
              <p className="text-primary-foreground text-lg font-medium">
                {capitalizeFirstLetter(session.user.name)}
              </p>
              <p className="text-sm text-gray-400">{session.user.email}</p>
            </div>
          </div>
        </motion.section>

        {/* Account Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="mb-8"
        >
          <h2 className="text-primary-foreground mb-4 text-xl font-semibold">
            Account Settings
          </h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg bg-gray-800/60 p-4 shadow-md"
            >
              <p className="text-sm text-gray-400">Change Password</p>
              <button className="text-primary-foreground mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500">
                Update Password
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg bg-gray-800/60 p-4 shadow-md"
            >
              <p className="text-sm text-gray-400">Two-Factor Authentication</p>
              <button className="text-primary-foreground mt-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-500">
                Enable 2FA
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Notifications Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-primary-foreground mb-4 text-xl font-semibold">
            Notifications
          </h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between rounded-lg bg-gray-800/60 p-4 shadow-md"
            >
              <span className="text-primary-foreground">Email Alerts</span>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between rounded-lg bg-gray-800/60 p-4 shadow-md"
            >
              <span className="text-primary-foreground">
                Push Notifications
              </span>
              <input type="checkbox" className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
