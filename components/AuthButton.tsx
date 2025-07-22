'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from '@/types';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="animate-pulse bg-gray-200 h-10 w-20 rounded"></div>;
  }

  if (session) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">
          Welcome, {session.user?.name}
        </span>
        <button
          onClick={() => signOut()}
          className="btn-secondary text-sm"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('github')}
      className="btn-primary"
    >
      Sign In
    </button>
  );
}
