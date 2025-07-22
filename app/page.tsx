import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { User } from '@/types';
import Link from 'next/link';
import { AuthButton } from '@/components/AuthButton';
import { UserCard } from '@/components/UserCard';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  // Fetch users from your database with proper typing
  const users: User[] = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                IndiaCounselling
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/public" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <AuthButton />
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to IndiaCounselling
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete career guidance platform for navigating educational pathways and professional opportunities in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Career Explorer</h3>
            <p className="text-gray-600 mb-4">
              Discover career paths based on your educational background and interests.
            </p>
            <Link href="/dashboard" className="btn-primary">
              Explore Careers
            </Link>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Expert Counseling</h3>
            <p className="text-gray-600 mb-4">
              Book sessions with experienced career counselors for personalized guidance.
            </p>
            <Link href="/dashboard/bookings" className="btn-primary">
              Book Session
            </Link>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Educational Resources</h3>
            <p className="text-gray-600 mb-4">
              Access comprehensive information about colleges, courses, and eligibility criteria.
            </p>
            <Link href="/public" className="btn-primary">
              View Resources
            </Link>
          </div>
        </div>

        {session && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Welcome back, {session.user?.name}!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Link href="/dashboard" className="block btn-secondary w-full text-left">
                    View Dashboard
                  </Link>
                  <Link href="/dashboard/bookings" className="block btn-secondary w-full text-left">
                    My Bookings
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                <p className="text-gray-600">
                  Your recent bookings and activities will appear here.
                </p>
              </div>
            </div>
          </div>
        )}

        {!session && users.length > 0 && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Recent Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user: User) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 IndiaCounselling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
