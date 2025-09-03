import { Server } from 'http';
import { app } from '@/server';
import { PrismaClient } from '@/generated/prisma';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'argon2';

const prisma = new PrismaClient();

// Disable CSRF protection for tests
process.env.NODE_ENV = 'test';

// Create a test server instance
const server = app.listen(0); // Use port 0 to get a random available port

// Start server before all tests
beforeAll(async () => {
  // Clear any existing test data
  await prisma.user.deleteMany({});
});

// Close server after all tests
afterAll(async () => {
  // Close the server
  await new Promise<void>((resolve, reject) => {
    server.close((err) => {
      if (err) {
        console.error('Error closing server:', err);
        reject(err);
      } else {
        console.log('Test server closed');
        resolve();
      }
    });
  });
  
  // Clean up test data and close database connection
  await prisma.$disconnect();
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
