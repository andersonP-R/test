"use server";

import { SERVICES_MOCK } from "@/seed/mock-data";

export const getGiftServices = async () => {
  try {
    // 1. Obtener los servicios
    const services = SERVICES_MOCK.filter((e) => e.esCanjeable);

    return services;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};
