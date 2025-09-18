import Card from "@/components/ui/card";
import { PiUsersBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";

import { FiEdit } from "react-icons/fi";
import * as motion from "motion/react-client";

export default function Dashboard() {
  return (
    <div className="relative z-10 w-full flex-1 overflow-auto">
      <main className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-foreground mb-2 text-4xl font-bold">
            Welcome to Zettabyte Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Monitor your application performance and user engagement
          </p>
        </motion.div>
        <motion.div
          className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card name="Total Posts" icon={FiEdit} value="150" change="+5%" />
          <Card
            name="Active Users"
            icon={PiUsersBold}
            value="1,234"
            change="+8%"
          />
          <Card
            name="Page Views"
            icon={IoChatbubbleEllipsesOutline}
            value="45.2K"
            change="+12%"
          />
          <Card name="Engagement" icon={FaBullseye} value="89%" change="+3%" />
        </motion.div>
      </main>
    </div>
  );
}
