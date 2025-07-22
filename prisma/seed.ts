import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.educationalPathway.create({
    data: {
      className: "12th",
      stream: "Science",
      course: "B.Tech",
      colleges: ["IIT Delhi", "NIT Trichy"],
      careers: ["Software Engineer", "Data Scientist"],
      eligibility: "Passed 12th with PCM",
    },
  });
  // Add more as needed
}

main().finally(() => prisma.$disconnect());

