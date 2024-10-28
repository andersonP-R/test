/*
  Warnings:

  - You are about to drop the `CenterImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CenterImage" DROP CONSTRAINT "CenterImage_centerId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceImage" DROP CONSTRAINT "ServiceImage_serviceId_fkey";

-- AlterTable
ALTER TABLE "Center" ADD COLUMN     "imagenes" TEXT[];

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "imagenes" TEXT[];

-- DropTable
DROP TABLE "CenterImage";

-- DropTable
DROP TABLE "ServiceImage";
