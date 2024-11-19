"use server";

import prisma from "@/lib/prisma";

export const getGiftServices = async () => {
  try {
    // 1. Obtener los servicios
    const services = await prisma.service.findMany({
      where: {
        esCanjeable: true,
      },
    });

    return services;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};
