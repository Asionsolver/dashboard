"use client";
import Image from "next/image";
import BDFlag from "../public/flag/bd.svg";
import DefaultAvatar from "../public/avatar/default.svg";
import type { Session } from "next-auth";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Dropdown from "./ui/dropdown";

export default function HeaderClient({ session }: { session: Session }) {
  const handleLogout = async () => {
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="bg-sidebar border-border text-foreground mx-4 mt-4 mb-2 rounded-lg border shadow-lg sm:mx-6 lg:mx-8">
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

          <Dropdown
            className="top-12 -left-[120px] sm:-left-0"
            trigger={
              <div className="flex cursor-pointer items-center space-x-2 sm:space-x-3">
                <Image
                  src={session?.user?.image ?? DefaultAvatar}
                  alt={session?.user?.name ?? "User Avatar"}
                  width={35}
                  height={35}
                  className="rounded-full border border-gray-600 shadow-md"
                />
                <span className="hidden text-sm font-medium sm:block sm:text-base">
                  {capitalizeFirstLetter(session?.user?.name)}
                </span>
              </div>
            }
          >
            <Link href="/profile">
              <div className="text-foreground hover:bg-primary hover:text-primary-foreground flex w-[10rem] items-center rounded-md px-4 py-3 text-sm">
                <CgProfile className="mr-3 h-5 w-5" />
                <span>My Profile</span>
              </div>
            </Link>
            <Link href="/setting">
              <div className="text-foreground hover:bg-primary hover:text-primary-foreground flex items-center rounded-md px-4 py-3 text-sm">
                <IoSettingsOutline className="mr-3 h-5 w-5" />{" "}
                <span>Settings</span>
              </div>
            </Link>
            <div
              className="text-foreground hover:text-primary-foreground hover:bg-destructive flex cursor-pointer items-center rounded-md px-4 py-3 text-sm"
              onClick={handleLogout}
            >
              <FiLogOut className="mr-3 h-5 w-5" />
              <span>Logout</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
