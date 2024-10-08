"use server";

import prisma from "@/lib/prisma";

export const getAllHistories = async () => {
  try {
    const histories = await prisma.history.findMany();

    return {
      histories,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los registros");
  }
};
