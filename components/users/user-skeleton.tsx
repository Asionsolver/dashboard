import React from "react";

import Skeleton from "../ui/skeleton";

const UserSkeleton = () => {
  return (
    <div>
      <div className="bg-card border-border overflow-hidden rounded-lg border">
        <div className="overflow-x-auto">
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
      </div>
    </div>
  );
};

export default UserSkeleton;
