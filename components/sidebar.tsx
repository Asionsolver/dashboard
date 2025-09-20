"use client";

import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { FiEdit, FiSidebar } from "react-icons/fi";
import { IoInvertModeSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeSwitch } from "./ui/theme-switch";
import { useTheme } from "next-themes";
import { themes } from "@/lib/theme";
import Dropdown from "./ui/dropdown";
import { isActive } from "@/utils/isActive";

type SidebarItem = {
  name: string;
  href: string;
  icon: keyof typeof ICONS;
};

const ICONS = {
  dashboard: MdOutlineDashboard,
  users: PiUsersBold,
  edit: FiEdit,
};

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto collapse on sm / md screen
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // collapse
      } else {
        setIsSidebarOpen(true); // expand
      }
    }

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSidebarItems = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setSidebarItems(data.sidebarItems);
    };
    fetchSidebarItems();
  }, []);

  // outside click handler for closing dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsThemeDropdownOpen(false);
      }
    }
    if (isThemeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeDropdownOpen]);

  return (
    <div
      className={`relative z-50 flex-shrink-0 transition-all duration-300 ease-in-out ${
        isClient ? (isSidebarOpen ? "w-64" : "w-21") : "w-64"
      }`}
    >
      <div
        className={`bg-sidebar border-border flex h-full flex-col border-r p-4 backdrop-blur-md`}
      >
        <button
          className="hover:bg-sidebar-primary ml-2 max-w-fit cursor-pointer rounded p-2 transition-all hover:text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <FiSidebar size={24} />
        </button>
        <nav className="mt-8 flex flex-grow flex-col justify-between">
          <div>
            {sidebarItems?.map((item) => {
              const IconComponents = ICONS[item.icon];
              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className={`hover:bg-chart-5 hover:text-primary-foreground mb-2 flex items-center rounded-lg p-4 text-sm transition-colors ${
                      isActive(pathname, item.href)
                        ? "hover:bg-chart-5/90 bg-chart-5 text-primary-foreground font-semibold"
                        : ""
                    }`}
                  >
                    <IconComponents size={20} style={{ minWidth: "20px" }} />
                    {(isClient ? isSidebarOpen : true) && (
                      <span className="ml-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="border-border border-t py-4">
            <div className="relative flex justify-center" ref={dropdownRef}>
              {isClient && !isSidebarOpen ? (
                <Dropdown
                  trigger={
                    <button className="bg-muted hover:bg-sidebar-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:text-white">
                      <IoInvertModeSharp size={20} />
                    </button>
                  }
                  className="w-36"
                  placement="top"
                >
                  {themes.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.name}
                        onClick={() => setTheme(opt.name)}
                        className="text-foreground hover:bg-primary hover:text-primary-foreground flex w-full items-center gap-2 rounded px-3 py-2 text-sm"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </Dropdown>
              ) : (
                <ThemeSwitch />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
