/*
  Warnings:

  - Added the required column `teamName` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "teamName" TEXT NOT NULL;
