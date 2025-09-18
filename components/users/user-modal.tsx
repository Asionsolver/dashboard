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
          <h3 className="text-foreground mb-3 text-lg font-semibold">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Full Name
              </label>
              <p className="text-foreground">{user.name}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Username
              </label>
              <p className="text-foreground">@{user.username}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Email
              </label>
              <p className="text-foreground">{user.email}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Phone
              </label>
              <p className="text-foreground">{user.phone}</p>
            </div>
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Website
              </label>
              <p className="text-foreground">{user.website}</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-foreground mb-3 text-lg font-semibold">
            Address
          </h3>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-foreground">
              {user.address.suite} {user.address.street}
            </p>
            <p className="text-foreground">
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-foreground mb-3 text-lg font-semibold">
            Company
          </h3>
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="text-foreground font-semibold">
              {user.company.name}
            </h4>
            <p className="text-muted-foreground mb-2 italic">
              &quot;{user.company.catchPhrase}&quot;
            </p>
            <p className="text-muted-foreground text-sm">{user.company.bs}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
