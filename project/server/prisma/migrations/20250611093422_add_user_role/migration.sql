/*
  Warnings:

  - The primary key for the `password_reset_token` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `password_reset_token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token_id` to the `password_reset_token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "password_reset_token" DROP CONSTRAINT "password_reset_token_user_id_fkey";

-- AlterTable
ALTER TABLE "password_reset_token" DROP CONSTRAINT "password_reset_token_pkey",
DROP COLUMN "id",
ADD COLUMN     "token_id" UUID NOT NULL,
ADD CONSTRAINT "password_reset_token_pkey" PRIMARY KEY ("token_id");

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role_id" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "user_role" (
    "id" UUID NOT NULL,
    "role_id" INTEGER NOT NULL DEFAULT 0,
    "role_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_role_id_key" ON "user"("role_id");

-- AddForeignKey
ALTER TABLE "password_reset_token" ADD CONSTRAINT "password_reset_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "user"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;
