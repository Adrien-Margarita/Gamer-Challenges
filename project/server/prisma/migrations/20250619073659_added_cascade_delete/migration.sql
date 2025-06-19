-- DropForeignKey
ALTER TABLE "challenge" DROP CONSTRAINT "challenge_game_id_fkey";

-- DropForeignKey
ALTER TABLE "challenge_vote" DROP CONSTRAINT "challenge_vote_challenge_id_fkey";

-- DropForeignKey
ALTER TABLE "challenge_vote" DROP CONSTRAINT "challenge_vote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "participation" DROP CONSTRAINT "participation_challenge_id_fkey";

-- DropForeignKey
ALTER TABLE "participation" DROP CONSTRAINT "participation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "participation_vote" DROP CONSTRAINT "participation_vote_participation_id_fkey";

-- DropForeignKey
ALTER TABLE "participation_vote" DROP CONSTRAINT "participation_vote_user_id_fkey";

-- AddForeignKey
ALTER TABLE "challenge" ADD CONSTRAINT "challenge_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game"("game_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation" ADD CONSTRAINT "participation_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("challenge_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation" ADD CONSTRAINT "participation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation_vote" ADD CONSTRAINT "participation_vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation_vote" ADD CONSTRAINT "participation_vote_participation_id_fkey" FOREIGN KEY ("participation_id") REFERENCES "participation"("participation_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_vote" ADD CONSTRAINT "challenge_vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_vote" ADD CONSTRAINT "challenge_vote_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("challenge_id") ON DELETE CASCADE ON UPDATE CASCADE;
