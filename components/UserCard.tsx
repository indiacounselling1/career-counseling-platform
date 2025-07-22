import { User } from '@/types';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'counselor':
        return 'bg-blue-100 text-blue-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium $\{getRoleColor(user.role)}`}>
          {user.role}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-xs text-gray-500">
          Registered: {formatDate(user.createdAt)}
        </p>
      </div>
    </div>
  );
}
