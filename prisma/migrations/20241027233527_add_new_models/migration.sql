-- AlterTable
ALTER TABLE "User" ADD COLUMN     "categoriaAfiliacion" TEXT;

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "categorias" TEXT[],
    "precios" INTEGER[],
    "objetivo" TEXT NOT NULL,
    "requisitos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "recomendaciones" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "fechaCreacion" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ServiceImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Center" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "rangoEdad" TEXT NOT NULL,
    "ciclo" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL,
    "numeroCupos" INTEGER NOT NULL,
    "fechaInicio" TEXT NOT NULL,
    "fechaFin" TEXT NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "Center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CenterImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "centerId" TEXT NOT NULL,

    CONSTRAINT "CenterImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CenterImage" ADD CONSTRAINT "CenterImage_centerId_fkey" FOREIGN KEY ("centerId") REFERENCES "Center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
