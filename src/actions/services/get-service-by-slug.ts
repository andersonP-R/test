"use server";

import { SERVICES_MOCK } from "@/seed/mock-data";

export const getServiceBySlug = async (slug: string) => {
  try {
    const s = SERVICES_MOCK.find((e) => e.slug === slug);
    return s;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
};
