// app/dashboard/page.tsx

import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  // Fetch users from your database
  const users = await prisma.user.findMany();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard – All Users</h1>
      <ul className="space-y-2">
        {users.length === 0 ? (
          <li>No users found yet.</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="border p-4 rounded">
              <div>
                <strong>{user.name}</strong>
              </div>
              <div className="text-gray-500 text-sm">{user.email}</div>
              <div className="text-xs text-gray-400">
                Registered: {new Date(user.createdAt).toLocaleString()}
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
