import { Router } from "express";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger";

import userRouter from "./user.routes";
import gameRouter from "./game.routes";
import challengeRouter from "./challenge.routes";
import participationRouter from "./participation.routes";

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Apply authentication middleware for protected routes
router.use("/users", userRouter);
router.use("/games", gameRouter);
router.use("/challenges", challengeRouter);
router.use("/participations", participationRouter);

// Feature routes

export default router;
