"use server";
import prisma from "@/lib/prisma";
// import { FormInputs } from "../../interfaces/Ihistory";

export async function getAllProcess() {
  try {
    const process = await prisma.appointment.findMany();

    // console.log(data);

    return {
      ok: true,
      process,
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
