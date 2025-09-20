import * as motion from "motion/react-client";

interface CardProps {
  name: string;
  icon: React.ElementType; // Icon component
  value: string;
  change: string;
}

export default function StatisticsCard({
  name,
  icon: Icon,
  value,
  change,
}: CardProps) {
  return (
    <motion.div
      className="bg-card group border-border max-w-5xl overflow-hidden rounded-xl border p-5 shadow-lg backdrop-blur-md"
      whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-chart-5 absolute -top-[2.5em] -right-[2.5em] z-[-1] h-[5em] w-[5em] rounded-full duration-500 group-hover:scale-[1200%]"></div>
      <div className="hover:text-primary-foreground px-4 py-4 sm:px-3 sm:py-6">
        <span>
          <Icon size={20} className="mr-2 mb-4" />
          <span className="text-sm font-semibold group-hover:text-white">
            {name}
          </span>
        </span>
        <h3 className="text-2xl font-semibold">{value}</h3>
        <span
          className={`mt-1 text-sm font-medium ${
            change.startsWith("+")
              ? "text-green-500 group-hover:text-white"
              : "text-red-500 group-hover:text-white"
          }`}
        >
          {change} since last week
        </span>
      </div>
    </motion.div>
  );
}
