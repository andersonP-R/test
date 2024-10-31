"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { login } from "@/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { email, password } = data;

    const res = await login(email, password);

    console.log(res);

    // if (res.ok === false) {
    //   setErrorMessage(res.message!);
    // }

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email,
        })}
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password,
        })}
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />

      <span className="text-red-500">{errorMessage} </span>

      <button className="btn-primary">Ingresar</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/sign-up" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
