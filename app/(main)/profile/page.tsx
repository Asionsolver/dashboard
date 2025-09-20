"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import DefaultAvatar from "@/public/avatar/default.svg";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { data: session } = useSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="relative z-10 w-full flex-1">
      <motion.main
        className="w-full px-4 py-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-border w-full max-w-md rounded-2xl border p-8 shadow-2xl"
          >
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <Image
                src={session?.user?.image ?? DefaultAvatar}
                alt={session?.user?.name ?? "User Avatar"}
                width={100}
                height={100}
                className="border-border rounded-full border-4 shadow-lg"
              />
              <h2 className="mt-4 text-2xl font-bold">
                {capitalizeFirstLetter(session?.user?.name)}
              </h2>
              <p className="text-muted-foreground">{session?.user?.email}</p>
            </div>

            {/* Profile Info Section */}
            <div className="mt-6 space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background rounded-lg p-4 shadow-md"
              >
                <p className="text-muted-foreground text-sm">Role</p>
                <p className="font-medium">User</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background rounded-lg p-4 shadow-md"
              >
                <p className="text-muted-foreground text-sm">Member Since</p>
                <p className="font-medium">January 2025</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
