"use client";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { createCita } from "@/actions";
import { useState } from "react";

type FormInputs = {
  fecha: string;
  hora: string;
  motivo: string;
  estado: string;
};

export const RegisterNexCita = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");

    const { fecha, hora, motivo, estado } = data;

    const { message, ok, cita } = await createCita(fecha, hora, motivo, estado);
    console.log(message, ok, cita);
  };

  return (
    <div className="w-[400px] mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}

        <label htmlFor="email">Fecha</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.fecha,
          })}
          type="text"
          autoFocus
          {...register("fecha", { required: true })}
        />

        <label htmlFor="email">Hora</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.hora,
          })}
          type="text"
          {...register("hora", { required: true })}
        />

        <label htmlFor="email">Motivo</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.motivo,
          })}
          type="text"
          {...register("motivo", { required: true })}
        />

        <label htmlFor="email">Estado</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.estado,
          })}
          type="text"
          {...register("estado", { required: true })}
        />

        <span className="text-red-500">{errorMessage} </span>

        <button className="border-2 border-black rounded-xl p-2">Crear</button>
      </form>
    </div>
  );
};
