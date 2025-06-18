import { Router } from "express";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger";

import userRouter from "./user.routes";
import gameRouter from "./game.routes";
import challengeRouter from "./challenge.routes";
import participationRouter from "./participation.routes";
import authRouter from "./auth.routes";
import participationVoteRouter from "./participationVote.routes";
import challengeVoteRouter from "./challengeVote.routes";

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//TODO Apply authentication middleware for protected routes
router.use("/users", userRouter);
router.use("/games", gameRouter);
router.use("/challenges", challengeRouter);
router.use("/participations", participationRouter);
router.use("/auth", authRouter);
router.use("/participation-vote", participationVoteRouter);
router.use("/challenge-vote", challengeVoteRouter);

export default router;
