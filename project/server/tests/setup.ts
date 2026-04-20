// Assurez-vous que le serveur n'appelle pas app.listen pendant les tests.
process.env.NODE_ENV = "test";
process.env.SESSION_SECRET = "test-session-secret";
