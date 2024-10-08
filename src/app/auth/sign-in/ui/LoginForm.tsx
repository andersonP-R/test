"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    router.push("/dashboard");
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        autoFocus
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        {...register("password", { required: true, minLength: 4 })}
      />

      <button className="bg-blue-600 p-2 text-white">Ingresar</button>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/sign-up"
        className="bg-blue-600 p-2 text-white text-center"
      >
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
