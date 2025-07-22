"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();
  return session ? (
    <button
      onClick={() => signOut()}
      className="text-gray-600 hover:text-gray-900"
    >
      Sign out
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className="text-gray-600 hover:text-gray-900"
    >
      Sign in
    </button>
  );
}

