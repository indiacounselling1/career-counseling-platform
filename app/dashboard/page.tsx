import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { User, Booking, EducationalPathway } from '@/types';
import { UserCard } from '@/components/UserCard';
import { BookingCard } from '@/components/BookingCard';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // Fetch users from your database with proper typing
  const users: User[] = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

  // Fetch recent bookings
  const recentBookings = await prisma.booking.findMany({
    include: {
      user: true,
      pathway: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  const pathways = await prisma.educationalPathway.findMany({
    orderBy: { className: 'asc' },
  });

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {session?.user?.name}! Here's an overview of your account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Users
          </h3>
          <p className="text-3xl font-bold text-blue-600">{users.length}</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Active Bookings
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {recentBookings.filter(b => b.status === 'confirmed').length}
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Career Pathways
          </h3>
          <p className="text-3xl font-bold text-purple-600">{pathways.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
          <div className="space-y-3">
            {recentBookings.length === 0 ? (
              <p className="text-gray-500">No bookings yet.</p>
            ) : (
              recentBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            )}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">All Users</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {users.length === 0 ? (
              <p className="text-gray-500">No users found yet.</p>
            ) : (
              users.map((user: User) => (
                <UserCard key={user.id} user={user} />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Educational Pathways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pathways.map((pathway: EducationalPathway) => (
            <div key={pathway.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{pathway.course}</h3>
              <p className="text-sm text-gray-600">{pathway.className} - {pathway.stream}</p>
              <p className="text-xs text-gray-500 mt-2">
                {pathway.colleges.length} colleges • {pathway.careers.length} careers
              </p>
              {pathway.eligibility && (
                <p className="text-xs text-blue-600 mt-1">{pathway.eligibility}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
