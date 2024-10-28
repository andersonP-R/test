import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // 1. Borrar registros previos

  await prisma.user.deleteMany();
  await prisma.service.deleteMany();

  const { services, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  await prisma.service.createMany({
    data: services,
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
