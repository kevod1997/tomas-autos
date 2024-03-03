/*
  Warnings:

  - You are about to drop the column `anio` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `year` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "anio",
ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";
