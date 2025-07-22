"use client";
import { User } from "@/types";

export function UserCard({ user }: { user: User }) {
  return (
    <div className="border p-4 rounded">
      <strong>{user.name ?? "No name"}</strong>
      <div className="text-gray-500 text-sm">{user.email}</div>
      <div className="text-xs text-gray-400">
        Registered: {new Date(user.createdAt).toLocaleString()}
      </div>
    </div>
  );
}

