import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Booking } from '@/types';
import { BookingCard } from '@/components/BookingCard';
import { BookingForm } from '@/components/BookingForm';

export default async function BookingsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <div>Please sign in to view your bookings.</div>;
  }

  const bookings: (Booking & { user: any; pathway: any })[] = await prisma.booking.findMany({
    where: { userId: session.user.id },
    include: {
      user: true,
      pathway: true,
    },
    orderBy: { scheduledFor: 'asc' },
  });

  const pathways = await prisma.educationalPathway.findMany({
    orderBy: { className: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-600 mt-2">
          View and manage your counseling session bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Book New Session</h2>
          <BookingForm pathways={pathways} />
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Bookings</h2>
          <div className="space-y-3">
            {bookings.length === 0 ? (
              <p className="text-gray-500">You haven't made any bookings yet.</p>
            ) : (
              bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} showUser={false} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
