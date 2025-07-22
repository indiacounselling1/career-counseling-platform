-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('student', 'counselor', 'admin');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('pending', 'confirmed', 'completed', 'canceled');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;
