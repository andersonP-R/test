"use client";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { createHistorie } from "@/actions";
import { useState } from "react";

type FormInputs = {
  nombre: string;
  apellido: string;
  edad: string;
  genero: string;
  fechaNacimiento: string;
  estadoCivil: string;
  ocupacion: string;
  direccion: string;
  telefono: string;
  antecedentes: string;
  diagnosticos: string;
  tratamientos: string;
  notasMedicas: string;
};

export default function newHistory() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");

    const {
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
    } = data;

    const { message, ok, history } = await createHistorie(
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
      notasMedicas
    );
    console.log(message, ok, history);
  };

  return (
    <div className="w-[400px] mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}

        <label htmlFor="email">Nombres</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.nombre,
          })}
          type="text"
          autoFocus
          {...register("nombre", { required: true })}
        />

        <label htmlFor="email">Apellidos</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.apellido,
          })}
          type="text"
          {...register("apellido", { required: true })}
        />

        <label htmlFor="email">Edad</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.edad,
          })}
          type="number"
          {...register("edad", { required: true })}
        />

        <label htmlFor="email">Genero</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.genero,
          })}
          type="text"
          {...register("genero", { required: true })}
        />

        <label htmlFor="email">Fecha de nacimiento</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.fechaNacimiento,
          })}
          type="text"
          {...register("fechaNacimiento", { required: true })}
        />

        <label htmlFor="email">Estado civil</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.estadoCivil,
          })}
          type="text"
          {...register("estadoCivil", { required: true })}
        />

        <label htmlFor="email">Ocupacion</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.ocupacion,
          })}
          type="text"
          {...register("ocupacion", { required: true })}
        />

        <label htmlFor="email">Dirección</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.direccion,
          })}
          type="text"
          {...register("direccion", { required: true })}
        />

        <label htmlFor="email">Telefono</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.telefono,
          })}
          type="text"
          {...register("telefono", { required: true })}
        />

        <label htmlFor="email">Antecedentes</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.antecedentes,
          })}
          type="text"
          {...register("antecedentes", { required: true })}
        />

        <label htmlFor="email">Diagnosticos</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.diagnosticos,
          })}
          type="text"
          {...register("diagnosticos", { required: true })}
        />

        <label htmlFor="email">Tratamientos</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.tratamientos,
          })}
          type="text"
          {...register("tratamientos", { required: true })}
        />

        <label htmlFor="email">Notas medicas</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
            "border-red-500": errors.notasMedicas,
          })}
          type="text"
          {...register("notasMedicas", { required: true })}
        />

        <span className="text-red-500">{errorMessage} </span>

        <button className="border-2 border-black rounded-xl p-2">Crear</button>
      </form>
    </div>
  );
}
