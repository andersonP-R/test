"use server";

import prisma from "@/lib/prisma";

export const getServiceBySlug = async (slug: string) => {
  try {
    const service = await prisma.service.findFirst({
      where: {
        slug: slug,
      },
    });

    return service;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
};
