// src/types.ts
export interface User {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;   // Prisma DateTime serializes as ISO string
  // add any other fields you’ll use (role, etc.)
}

