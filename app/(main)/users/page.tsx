"use client";
import ErrorMessage from "@/components/ui/error-message";
import { useFetch } from "@/hooks/useFetch";
import type { User } from "@/types/users";
import React, { useState } from "react";
import { motion } from "motion/react";
import UserModal from "@/components/users/user-modal";
import UserSkeleton from "@/components/users/user-skeleton";
import { fadeInUp } from "@/lib/fade";
const Users = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };
  if (error) {
    return (
      <div className="p-8">
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }
  return (
    <div className="relative z-10 w-full flex-1">
      <main className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp}>
          <h1 className="text-foreground mb-2 text-4xl font-bold">Users</h1>
          <p className="text-muted-foreground text-lg">
            Manage and view user profiles and information
          </p>
        </motion.div>
        {loading ? (
          <UserSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-border mt-4 overflow-hidden rounded-lg border"
          >
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
                  {users?.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => handleUserClick(user)}
                      className="border-border hover:bg-muted/30 cursor-pointer border-t transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <div className="text-foreground font-medium">
                            {user.name}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            @{user.username}
                          </div>
                        </div>
                      </td>
                      <td className="text-foreground p-4">{user.email}</td>
                      <td className="text-foreground p-4">
                        {user.company.name}
                      </td>
                      <td className="text-foreground p-4">{user.phone}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
        <UserModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </main>
    </div>
  );
};
export default Users;
