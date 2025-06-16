import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from "@/config/swagger";
import errorHandler from "@/middlewares/errorHandler";
import routes from '@/routes/index.routes';
import session from "express-session";
import cors from 'cors';
import dotenv from 'dotenv';
import csrf from 'csurf';
import cookieParser from "cookie-parser";
// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: false, // à mettre à true en prod (https)
    httpOnly: true,
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 semaine
  }
}))

const csrfExclude = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/forgot-password",
  "/api/auth/reset-password"
]

// Applique CSRF uniquement si la route n’est pas exclue
app.use((req, res, next) => {
  if (csrfExclude.includes(req.path)) {
    return next()
  }

  // 🛡️ Applique le middleware CSRF ici uniquement
  return csrf({
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    }
  })(req, res, next)
})

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Route pour la protection csrf
app.get("/api/csrf-token", (req: Request, res: Response) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API. Visit /api-docs for documentation');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});

export default app;

