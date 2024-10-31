"use server";

import prisma from "@/lib/prisma";

export async function uploadImage(formData: FormData, id: string) {
  const file = formData.get("image") as File;
  if (!file) throw new Error("No se seleccionó ninguna imagen");

  console.log("Imagen recibida:", file.name);

  const buffer = await file.arrayBuffer(); // Leer el archivo como buffer
  const base64Image = Buffer.from(buffer).toString("base64");
  console.log(base64Image);
  const fs = require("fs"); // Importar fs para guardar el archivo
  const path = require("path"); // Importar path para manejar rutas

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
