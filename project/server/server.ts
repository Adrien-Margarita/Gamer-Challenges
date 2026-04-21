import express, { Application, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "@/config/swagger";
import errorHandler from "@/middlewares/errorHandler";
import routes from "@/routes/index.routes";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import csrf from "csurf";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// --- Middleware CORS ---
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000", process.env.FRONTEND_URL].filter(Boolean) as string[];

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

// --- Parsing + cookies ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// --- Session ---
app.use(session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // true en prod
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}));

// --- CSRF ---
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  },
});

// Routes exclues de la protection CSRF
const csrfExclude = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
];

// req.path est relatif au préfixe /api dans ce middleware.
// Exemple: POST /api/auth/login => req.path === "/auth/login".
app.use("/api", (req, res, next) => {
  if (csrfExclude.includes(req.path)) {
    return next();
  }
  return csrfProtection(req, res, next);
});

// CSRF Token route protégée pour initialiser le token
app.get("/api/csrf-token", csrfProtection, (req: Request, res: Response) => {
  res.json({ csrfToken: req.csrfToken() });
});

// --- Swagger ---
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// --- Routes API ---
app.use("/api", routes);

// --- Error handler ---
app.use(errorHandler);

// --- Root ---
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API. Visit /api-docs for documentation");
});

// --- Launch server ---
let server: ReturnType<typeof app.listen>;

// Only start the server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API docs: http://localhost:${PORT}/api-docs`);
  });
} else {
  // In test environment, create a mock server that doesn't actually listen
  server = {
    close: (callback?: (err?: Error) => void) => {
      if (callback) process.nextTick(callback);
      return this as any;
    }
  } as any;
}

export { app, server };