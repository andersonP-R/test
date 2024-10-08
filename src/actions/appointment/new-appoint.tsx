"use server";
import prisma from "@/lib/prisma";
// import { FormInputs } from "../../interfaces/Ihistory";

export async function createCita(
  fecha: string,
  hora: string,
  motivo: string,
  estado: string
) {
  try {
    const cita = await prisma.appointment.create({
      data: {
        fecha,
        hora,
        motivo,
        estado,
      },
    });

    // console.log(data);

    return {
      ok: true,
      cita,
      message: "Cita created",
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "History not created",
    };
  }
}
