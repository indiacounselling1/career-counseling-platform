import { Booking, User, EducationalPathway } from '@/types';

interface BookingCardProps {
  booking: Booking & {
    user: User;
    pathway: EducationalPathway;
  };
  showUser?: boolean;
}

export function BookingCard({ booking, showUser = true }: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (date: Date) => {
    return new Date(date).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{booking.pathway.course}</h3>
          <p className="text-gray-600 text-sm">
            {booking.pathway.className} - {booking.pathway.stream}
          </p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium $\{getStatusColor(booking.status)}`}>
          {booking.status}
        </span>
      </div>

      {showUser && (
        <p className="text-sm text-gray-600 mb-2">
          <strong>Student:</strong> {booking.user.name} ({booking.user.email})
        </p>
      )}

      <p className="text-sm text-gray-600 mb-2">
        <strong>Scheduled:</strong> {formatDateTime(booking.scheduledFor)}
      </p>

      {booking.notes && (
        <p className="text-sm text-gray-600">
          <strong>Notes:</strong> {booking.notes}
        </p>
      )}

      <p className="text-xs text-gray-500 mt-2">
        Booked: {formatDateTime(booking.bookedAt)}
      </p>
    </div>
  );
}
