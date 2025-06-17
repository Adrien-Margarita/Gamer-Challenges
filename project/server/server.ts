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

// --- Middleware CORS ---
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

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
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: false, // true en prod
    httpOnly: true,
    sameSite: "strict",
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
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
];

// CSRF appliqué seulement sur les routes protégées
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
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API docs: http://localhost:${PORT}/api-docs`);
});

export default app;
