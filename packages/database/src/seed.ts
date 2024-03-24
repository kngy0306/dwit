import { prisma } from './client';

import type { User } from '@prisma/client';

const SEED_USERS = [
  {
    name: 'Alice',
    email: 'alice@example.com',
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
  },
] as Array<Partial<User>>;

(async () => {
  try {
    await Promise.all(
      SEED_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        }),
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
