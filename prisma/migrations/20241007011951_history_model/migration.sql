/*
  Warnings:

  - You are about to drop the column `creationDate` on the `History` table. All the data in the column will be lost.
  - Added the required column `Genero` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellido` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edad` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoCivil` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNacimiento` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ocupacion` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "creationDate",
ADD COLUMN     "Genero" TEXT NOT NULL,
ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "direccion" TEXT NOT NULL,
ADD COLUMN     "edad" INTEGER NOT NULL,
ADD COLUMN     "estadoCivil" TEXT NOT NULL,
ADD COLUMN     "fechaNacimiento" TEXT NOT NULL,
ADD COLUMN     "nombre" TEXT NOT NULL,
ADD COLUMN     "ocupacion" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;
