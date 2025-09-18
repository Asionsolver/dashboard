"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import BDFlag from "../public/flag/bd.svg";
import { SlBell } from "react-icons/sl";
import DefaultAvatar from "../public/avatar/default.svg";
import { AnimatePresence, motion } from "motion/react";
import type { Session } from "next-auth";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function HeaderClient({ session }: { session: Session }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="bg-sidebar border-border mx-4 mt-4 mb-2 rounded-lg border text-white shadow-lg sm:mx-6 lg:mx-8">
      <div className="flex max-w-full items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          Zettabyte
        </h1>

        <div className="flex items-center space-x-3 sm:space-x-6">
          <Image
            src={BDFlag}
            alt="country-flag"
            width={25}
            height={18}
            className="cursor-pointer rounded-full shadow-md"
          />

          <div className="relative">
            <SlBell className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white sm:h-6 sm:w-6" />
          </div>

          <div className="relative" ref={dropdownRef}>
            <div
              className="flex cursor-pointer items-center space-x-2 sm:space-x-3"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Image
                src={session?.user?.image ?? DefaultAvatar}
                alt={session?.user?.name ?? "User Avatar"}
                width={35}
                height={35}
                className="rounded-full border border-gray-600 shadow-md"
              />
              <span className="hidden text-sm font-medium sm:block sm:text-base">
                {session?.user?.name}
              </span>
            </div>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="bg-sidebar border-border absolute -right-6 z-20 mt-2 w-45 rounded-lg border p-2 shadow-xl"
                >
                  <Link href="#" className="block">
                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(107, 114, 128, 0.3)",
                      }}
                      className="flex items-center rounded-md px-4 py-3 text-sm text-gray-100"
                    >
                      <CgProfile className="mr-3 h-5 w-5" />
                      My Profile
                    </motion.div>
                  </Link>
                  <Link href="#" className="block">
                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(107, 114, 128, 0.3)",
                      }}
                      className="flex items-center rounded-md px-4 py-3 text-sm text-gray-100"
                    >
                      <IoSettingsOutline className="mr-3 h-5 w-5" />
                      Settings
                    </motion.div>
                  </Link>
                  <motion.div
                    whileHover={{ backgroundColor: "rgb(239, 68, 68)" }}
                    className="flex cursor-pointer items-center rounded-md px-4 py-3 text-sm text-gray-100"
                    onClick={handleLogout}
                  >
                    <FiLogOut className="mr-3 h-5 w-5" />
                    Logout
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
