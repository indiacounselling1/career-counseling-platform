import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@indiacounselling.com' },
    update: {},
    create: {
      email: 'admin@indiacounselling.com',
      name: 'Admin User',
      role: 'admin',
    },
  });

  const counselorUser = await prisma.user.upsert({
    where: { email: 'counselor@indiacounselling.com' },
    update: {},
    create: {
      email: 'counselor@indiacounselling.com',
      name: 'Career Counselor',
      role: 'counselor',
    },
  });

  // Create sample educational pathways
  const pathway = await prisma.educationalPathway.upsert({
    where: { id: 'pathway-1' },
    update: {},
    create: {
      id: 'pathway-1',
      className: '12th',
      stream: 'Science',
      course: 'Engineering',
      colleges: ['IIT Delhi', 'IIT Bombay', 'NIT Trichy'],
      careers: ['Software Engineer', 'Data Scientist', 'Product Manager'],
      eligibility: 'PCM with minimum 75% marks',
    },
  });

  console.log('Database seeded successfully!');
  console.log({ adminUser, counselorUser, pathway });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
