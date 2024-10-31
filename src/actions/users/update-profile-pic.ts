"use server";

import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function uploadImage(formData: FormData, id: string) {
  const file = formData.get("image") as File;
  if (!file) throw new Error("No se seleccionó ninguna imagen");

  console.log("Imagen recibida:", file.name);

  const buffer = await file.arrayBuffer(); // Leer el archivo como buffer

  const uploadsDir = path.join(process.cwd(), "public", "images");

  // Asegurar que la carpeta `public/images` existe
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Crear la ruta donde se guardará el archivo
  const filePath = path.join(uploadsDir, file.name);

  // Guardar el archivo en `public/images`
  fs.writeFileSync(filePath, Buffer.from(buffer));

  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      avatar: file.name,
    },
  });

  console.log(`Imagen guardada en: ${filePath}`);
}
