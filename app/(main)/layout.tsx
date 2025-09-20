import type { Metadata } from "next";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User Dashboard built with Next.js and Tailwind CSS",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-sidebar text-foreground flex h-screen overflow-hidden font-mono">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Header Component */}
      <div className="flex w-full flex-1 flex-col overflow-auto">
        <Header />
        <div className="w-full max-w-full">
          <main className="w-full flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
