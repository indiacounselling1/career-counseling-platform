import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { BookingStatus } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const bookings = await prisma.booking.findMany({
      where: { userId: session.user.id },
      include: {
        pathway: true,
      },
      orderBy: { scheduledFor: 'asc' },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Bookings fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { pathwayId, scheduledFor, notes } = body;

    // Validate input
    if (!pathwayId || !scheduledFor) {
      return NextResponse.json(
        { error: 'Pathway ID and scheduled date are required' },
        { status: 400 }
      );
    }

    // Verify pathway exists
    const pathway = await prisma.educationalPathway.findUnique({
      where: { id: pathwayId },
    });

    if (!pathway) {
      return NextResponse.json(
        { error: 'Educational pathway not found' },
        { status: 404 }
      );
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        pathwayId,
        scheduledFor: new Date(scheduledFor),
        notes,
        status: 'pending' as BookingStatus,
      },
      include: {
        pathway: true,
      },
    });

    return NextResponse.json({
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
