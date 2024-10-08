"use server";
import prisma from "@/lib/prisma";
// import { FormInputs } from "../../interfaces/Ihistory";

export async function getAllCitas() {
  try {
    const citas = await prisma.appointment.findMany();

    // console.log(data);

    return {
      ok: true,
      citas,
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
