"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  type?: string;
}

export const getPaginatedServices = async ({
  page = 1,
  take = 12,
  type,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los servicios
    const services = await prisma.service.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        tipo: type,
      },
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.service.count({
      where: {
        tipo: type,
      },
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      services,
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
