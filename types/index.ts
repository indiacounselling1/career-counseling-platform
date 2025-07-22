import { User as PrismaUser, Booking as PrismaBooking, EducationalPathway as PrismaPathway } from '@prisma/client';
import { DefaultSession } from 'next-auth';

export interface User extends PrismaUser {}

export interface Booking extends PrismaBooking {
  user: User;
  pathway: EducationalPathway;
}

export interface EducationalPathway extends PrismaPathway {
  bookings?: Booking[];
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession['user'];
  }
}

export interface BookingFormData {
  pathwayId: string;
  scheduledFor: string;
  notes?: string;
}

export interface UserRegistrationData {
  email: string;
  name: string;
  role?: 'student' | 'counselor';
}
