import Image from "next/image";
import React from "react";
import BDFlag from "../public/flag/bd.svg";
import { SlBell } from "react-icons/sl";
import DefaultAvatar from "../public/avatar/default.svg";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
const Header = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <header className="bg-sidebar border-border mx-4 mt-4 mb-2 rounded-lg border text-white shadow-lg sm:mx-6 lg:mx-8">
      <div className="flex max-w-full items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          Dashboard
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

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src={session?.user?.image ?? DefaultAvatar}
              alt={session?.user?.name ?? "User Avatar"}
              width={35}
              height={35}
              className="cursor-pointer rounded-full border border-gray-600 shadow-md"
            />
            <span className="hidden cursor-pointer text-sm font-medium sm:block sm:text-base">
              {session?.user?.name}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
