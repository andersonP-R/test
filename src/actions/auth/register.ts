"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        nombres: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
        categoriaAfiliacion: "C",
      },
      select: {
        id: true,
        email: true,
      },
    });

    return {
      ok: true,
      user: user,
      message: "Usuario creado",
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
