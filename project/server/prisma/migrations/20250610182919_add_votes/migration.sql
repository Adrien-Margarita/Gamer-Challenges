-- CreateTable
CREATE TABLE "participation_vote" (
    "participation_vote_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "participation_id" UUID NOT NULL,

    CONSTRAINT "participation_vote_pkey" PRIMARY KEY ("participation_vote_id")
);

-- CreateTable
CREATE TABLE "challenge_vote" (
    "challenge_vote_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "challenge_id" UUID NOT NULL,

    CONSTRAINT "challenge_vote_pkey" PRIMARY KEY ("challenge_vote_id")
);

-- AddForeignKey
ALTER TABLE "participation_vote" ADD CONSTRAINT "participation_vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation_vote" ADD CONSTRAINT "participation_vote_participation_id_fkey" FOREIGN KEY ("participation_id") REFERENCES "participation"("participation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_vote" ADD CONSTRAINT "challenge_vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_vote" ADD CONSTRAINT "challenge_vote_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("challenge_id") ON DELETE RESTRICT ON UPDATE CASCADE;
