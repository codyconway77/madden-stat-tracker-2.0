-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "opponent" TEXT NOT NULL,
    "oppTeam" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "oppScore" INTEGER NOT NULL,
    "passingYards" INTEGER NOT NULL,
    "oppPassingYards" INTEGER NOT NULL,
    "rushingYards" INTEGER NOT NULL,
    "oppRushingYards" INTEGER NOT NULL,
    "passingTds" INTEGER NOT NULL,
    "oppPassingTds" INTEGER NOT NULL,
    "rushingTds" INTEGER NOT NULL,
    "oppRushingTds" INTEGER NOT NULL,
    "interceptions" INTEGER NOT NULL,
    "oppInterceptions" INTEGER NOT NULL,
    "forcedFumbles" INTEGER NOT NULL,
    "oppForcedFumbles" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
