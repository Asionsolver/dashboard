import * as motion from "motion/react-client";
import { PiUsersBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import { redirect } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { auth } from "@/auth";
import StatisticsCard from "@/components/ui/statistics-card";
import ErrorDemo from "@/components/error/error-demo";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
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
            Welcome to, {capitalizeFirstLetter(session?.user?.name)}
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
          <StatisticsCard
            name="Total Posts"
            icon={FiEdit}
            value="150"
            change="+5%"
          />
          <StatisticsCard
            name="Active Users"
            icon={PiUsersBold}
            value="1,234"
            change="+8%"
          />
          <StatisticsCard
            name="Page Views"
            icon={IoChatbubbleEllipsesOutline}
            value="45.2K"
            change="+12%"
          />
          <StatisticsCard
            name="Engagement"
            icon={FaBullseye}
            value="89%"
            change="+3%"
          />
        </motion.div>

        {/* Error Handling Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-0 mb-8"
        >
          <ErrorDemo />
        </motion.div>
      </main>
    </div>
  );
}
