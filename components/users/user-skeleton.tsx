import React from "react";
import Skeleton from "../ui/skeleton";

const UserSkeleton = () => {
  return (
    <div>
      <div className="bg-card border-border overflow-hidden rounded-lg border">
        {/* Table Skeleton (md and up) */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-foreground p-4 text-left font-semibold">
                  Name
                </th>
                <th className="text-foreground p-4 text-left font-semibold">
                  Email
                </th>
                <th className="text-foreground p-4 text-left font-semibold">
                  Company
                </th>
                <th className="text-foreground p-4 text-left font-semibold">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="border-border border-t">
                  <td className="p-4">
                    <Skeleton className="mb-2 h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </td>
                  <td className="p-4">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td className="p-4">
                    <Skeleton className="h-4 w-28" />
                  </td>
                  <td className="p-4">
                    <Skeleton className="h-4 w-24" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Skeleton (mobile only) */}
        <div className="divide-border divide-y md:hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex animate-pulse items-start gap-4 p-4"
            >
              {/* Avatar skeleton */}
              <Skeleton className="h-12 w-12 rounded-full" />

              {/* Info skeleton */}
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
