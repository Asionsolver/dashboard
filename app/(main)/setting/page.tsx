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
        <h1 className="mb-6 text-3xl font-bold">Settings</h1>

        {/* Profile Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="mb-8"
        >
          <h2 className="text-muted-foreground mb-4 text-xl font-semibold">
            Profile Settings
          </h2>
          <div className="flex items-center space-x-4">
            <Image
              src={session.user.image ?? DefaultAvatar}
              alt={session.user.name ?? "User Avatar"}
              width={70}
              height={70}
              className="border-border rounded-full border-2 shadow-md "
            />
            <div>
              <p className="text-lg font-medium">
                {capitalizeFirstLetter(session.user.name)}
              </p>
              <p className="text-muted-foreground text-sm">
                {session.user.email}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Account Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-xl font-semibold">Account Settings</h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-lg p-4 shadow-md"
            >
              <p className="text-muted-foreground text-sm">Change Password</p>
              <button className="text-primary-foreground bg-primary hover:bg-chart-1 mt-2 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                Update Password
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-lg p-4 shadow-md"
            >
              <p className="text-muted-foreground text-sm">
                Two-Factor Authentication
              </p>
              <button className="text-primary-foreground bg-chart-2 hover:bg-chart-2/80 mt-2 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors">
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
        >
          <h2 className="mb-4 text-xl font-semibold">Notifications</h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card flex items-center justify-between rounded-lg p-4 shadow-md"
            >
              <span className="text-muted-foreground">Email Alerts</span>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card flex items-center justify-between rounded-lg p-4 shadow-md"
            >
              <span className="text-muted-foreground">Push Notifications</span>
              <input type="checkbox" className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
