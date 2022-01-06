-- AlterTable
CREATE SEQUENCE "game_id_seq";
ALTER TABLE "Game" ALTER COLUMN "id" SET DEFAULT nextval('game_id_seq');
ALTER SEQUENCE "game_id_seq" OWNED BY "Game"."id";
