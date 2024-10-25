/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `appointmentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bornYear` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `historyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `procedureId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `requestId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resultId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telephone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Procedure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Result` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Specialist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `apellidos` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificacion` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombres` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_historyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_procedureId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_requestId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_resultId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "appointmentId",
DROP COLUMN "bornYear",
DROP COLUMN "historyId",
DROP COLUMN "name",
DROP COLUMN "procedureId",
DROP COLUMN "requestId",
DROP COLUMN "resultId",
DROP COLUMN "role",
DROP COLUMN "telephone",
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "direccion" TEXT NOT NULL,
ADD COLUMN     "identificacion" TEXT NOT NULL,
ADD COLUMN     "nombres" TEXT NOT NULL,
ADD COLUMN     "tipoId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Appointment";

-- DropTable
DROP TABLE "History";

-- DropTable
DROP TABLE "Procedure";

-- DropTable
DROP TABLE "Request";

-- DropTable
DROP TABLE "Result";

-- DropTable
DROP TABLE "Specialist";
