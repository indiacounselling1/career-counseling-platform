import NextAuth from "next-auth";
import authOptions from "@/app/lib/auth"; // Use the correct path if yours differs

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
