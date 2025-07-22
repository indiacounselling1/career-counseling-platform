// app/api/bookings/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, date } = await req.json();
  // For now, create user on booking (simple demo logic)
  const user = await prisma.user.upsert({
    where: { email },
    update: { name },
    create: { name, email, role: "student" },
  });
  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      pathwayId: "385cf10a-aa08-4d25-b341-f946a2899520",
      scheduledFor: new Date(date),
      status: "pending",
    },
  });
  return NextResponse.json({ success: true, bookingId: booking.id });
}

