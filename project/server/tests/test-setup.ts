import { Server } from 'http';
import { app } from '@/server';
import { PrismaClient } from '@/generated/prisma';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'argon2';

const prisma = new PrismaClient();

// Disable CSRF protection for tests
process.env.NODE_ENV = 'test';

let server: Server;

// Start server before all tests
beforeAll(async (done) => {
  // Clear any existing test data
  await prisma.user.deleteMany({});
  
  // Start the server on a random available port
  server = app.listen(0, 'localhost', () => {
    console.log(`Test server running on port ${(server.address() as any).port}`);
    done();
  });
});

// Close server after all tests
afterAll(async (done) => {
  // Clean up test data
  await prisma.user.deleteMany({});
  
  if (server) {
    server.close(() => {
      prisma.$disconnect().then(() => done());
    });
  } else {
    await prisma.$disconnect();
    done();
  }
});

// Clean up after each test
afterEach(async () => {
  // Reset any test data
  await prisma.user.deleteMany({});
});

// Helper function to create a test user
export async function createTestUser() {
  const testEmail = `test-${uuidv4()}@example.com`;
  const testPassword = 'testpassword123';
  
  const user = await prisma.user.create({
    data: {
      email: testEmail,
      password_hash: await hash(testPassword),
      pseudonym: `testuser-${uuidv4().substring(0, 8)}`,
      role_id: 1, // Assuming 1 is a valid role_id
    },
  });
  
  return { ...user, password: testPassword };
}

// Export the app and server for tests
export { app, server };
