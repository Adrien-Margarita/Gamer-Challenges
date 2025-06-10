import { Router } from "express";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger";

import userRouter from "./user.routes";
import gameRouter from "./game.routes";

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Apply authentication middleware for protected routes
router.use("/users", userRouter);
router.use("/games", gameRouter);

// Feature routes

export default router;
