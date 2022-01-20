/*
  Warnings:

  - You are about to drop the column `teamId` on the `Game` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Team` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "teamId";

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("userId", "name");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Team"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
