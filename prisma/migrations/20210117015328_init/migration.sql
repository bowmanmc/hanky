/*
  Warnings:

  - Added the required column `author` to the `hanky` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hanky" ADD COLUMN     "author" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "hanky.author_index" ON "hanky"("author");
