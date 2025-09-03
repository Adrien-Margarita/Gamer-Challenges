import prisma from './test-db';

describe('Database Connection', () => {
  it('should connect to the database', async () => {
    try {
      // Try to make a simple query
      const result = await prisma.$queryRaw`SELECT 1 as test`;
      console.log('Database connection successful:', result);
      expect(result).toBeDefined();
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
