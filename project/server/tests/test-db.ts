import { PrismaClient } from '@/generated/prisma';

// Log environment variables for debugging
console.log('Environment variables:', {
  NODE_ENV: process.env.NODE_ENV,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL ? '***' : 'undefined',
  DATABASE_URL: process.env.DATABASE_URL ? '***' : 'undefined'
});

if (!process.env.TEST_DATABASE_URL) {
  throw new Error('TEST_DATABASE_URL is not defined in environment variables');
}

// Create a new Prisma client for tests
const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

export default prisma;
