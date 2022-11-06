import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.user.upsert({
    where: { name: 'Taro Yamada' },
    update: {},
    create: {
      name: 'Taro Yamada',
      description: 'A Programmer',
    },
  });

  const post2 = await prisma.user.upsert({
    where: { name: 'Shinsuke Uematsu' },
    update: {},
    create: {
      name: 'Shinsuke Uematsu',
      description: 'A Customer Support',
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
