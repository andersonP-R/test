"use server";
import prisma from "@/lib/prisma";
// import { FormInputs } from "../../interfaces/Ihistory";

export async function createHistorie(
  nombre: string,
  apellido: string,
  edad: string,
  genero: string,
  fechaNacimiento: string,
  estadoCivil: string,
  ocupacion: string,
  direccion: string,
  telefono: string,
  antecedentes: string,
  diagnosticos: string,
  tratamientos: string,
  notasMedicas: string
) {
  try {
    const history = await prisma.history.create({
      data: {
        nombre,
        apellido,
        edad,
        genero,
        fechaNacimiento,
        estadoCivil,
        ocupacion,
        direccion,
        telefono,
        antecedentes,
        diagnosticos,
        tratamientos,
        notasMedicas,
      },
    });

    // console.log(data);

    return {
      ok: true,
      history,
      message: "History created",
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "History not created",
    };
  }
}
