"use client";

import Modal from "@/components/ui/modal";
import { User } from "@/types/users";

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UserModal({ user, isOpen, onClose }: UserModalProps) {
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="User Details">
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="text-foreground mb-3 text-base font-semibold sm:text-lg">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-muted-foreground text-xs font-medium sm:text-sm">
                Full Name
              </label>
              <p className="text-foreground break-words">{user.name}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium sm:text-sm">
                Username
              </label>
              <p className="text-foreground break-words">@{user.username}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium sm:text-sm">
                Email
              </label>
              <p className="text-foreground break-words">{user.email}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium sm:text-sm">
                Phone
              </label>
              <p className="text-foreground break-words">{user.phone}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium sm:text-sm">
                Website
              </label>
              <p className="text-foreground break-words">{user.website}</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-foreground mb-3 text-base font-semibold sm:text-lg">
            Address
          </h3>
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
            <p className="text-foreground">
              {user.address.suite} {user.address.street}
            </p>
            <p className="text-foreground">
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-foreground mb-3 text-base font-semibold sm:text-lg">
            Company
          </h3>
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
            <h4 className="text-foreground font-semibold">
              {user.company.name}
            </h4>
            <p className="text-muted-foreground mb-2 text-sm italic">
              &quot;{user.company.catchPhrase}&quot;
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
