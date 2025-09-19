"use client";

import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { FiSidebar } from "react-icons/fi";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
type SidebarItem = {
  name: string;
  href: string;
  icon: keyof typeof ICONS; // "dashboard" | "users" | "edit"
};
const ICONS = {
  dashboard: MdOutlineDashboard,
  users: PiUsersBold,
  edit: FiEdit,
};

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => {
    // Fetch sidebar items from the JSON file
    const fetchSidebarItems = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setSidebarItems(data.sidebarItems);
    };
    fetchSidebarItems();
  }, []);
  return (
    <div
      className={`relative z-10 flex-shrink-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-64" : "w-21"}`}
    >
      <div
        className={`bg-sidebar border-border flex h-full flex-col border-r p-4 backdrop-blur-md`}
      >
        <button
          className={`hover:bg-sidebar-primary max-w-fit cursor-pointer rounded-full p-2 text-gray-300 transition-all hover:text-white ${isSidebarOpen ? "ml-0" : "ml-2"}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <FiSidebar size={24} />
        </button>
        <nav className="mt-8 flex-grow">
          {sidebarItems?.map((item) => {
            const IconComponents = ICONS[item.icon];
            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`hover:bg-chart-5/80 mb-2 flex items-center rounded-lg p-4 text-sm transition-colors ${
                    pathname === item.href ? "bg-chart-5 font-semibold" : ""
                  }`}
                >
                  <IconComponents size={20} style={{ minWidth: "20px" }} />
                  {isSidebarOpen && (
                    <span className="ml-3 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
