"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { login } from "@/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { Spinner } from "@/components";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsPosted(true);
    setErrorMessage("");
    const { email, password } = data;

    const res = await login(email, password);
    console.log(res);

    if (res.ok) {
      window.location.reload();
    } else {
      setErrorMessage(res.message || "Hubo un error");
      setIsPosted(false);
    }
  };

  return (
    <div className="z-10 flex flex-col py-4 px-6 bg-white rounded-lg gap-6">
      <div className="flex justify-between items-center w-full">
        <span className="text-primary font-light">Inicio de sesión</span>
        <Image
          src={"/logo.jpg"}
          alt={"logo"}
          width={60}
          height={30}
          className="w-[60px] h-[30px]"
        />
      </div>
      <div className="flex w-full">
        <Link
          href={"/auth/sign-in"}
          className="w-1/2 p-2 bg-primary text-white font-thin text-center rounded-tr-xl rounded-tl-xl"
        >
          Afiliado Cafam
        </Link>
        <Link
          href={"#"}
          className="w-1/2 p-2 bg-[#CACACA] text-[#2E2E2E] font-thin text-center rounded-tr-xl rounded-tl-xl"
        >
          No Afiliado
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-primary">
          Dirección de correo electrónico
        </label>
        <input
          className={clsx(
            "p-2 border border-black rounded mb-5 outline-primary",
            {
              "border-red-500": errors.email,
            }
          )}
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="example@example.com"
        />

        <label htmlFor="password" className="text-sm text-primary">
          Contraseña
        </label>
        <input
          className={clsx("p-2 border border-black rounded outline-primary", {
            "border-red-500": errors.password,
          })}
          type="password"
          placeholder="**********"
          {...register("password", { required: true, minLength: 6 })}
        />

        <span className="text-red-500">{errorMessage} </span>

        <Link
          href="#"
          className="text-primary text-sm underline text-center mb-4"
        >
          ¿Olvidó su contraseña?
        </Link>

        <div className="flex py-1 px-4 w-[200px] justify-between self-center border border-gray-400 bg-[#F0F0F0] rounded-lg mb-4">
          <input type="checkbox" required />
          <Image
            src={"/captcha.png"}
            width={60}
            height={40}
            alt={"captcha"}
            className="w-[60px] h-[40px]"
          />
        </div>

        <button className="w-[120px] bg-[#2288F7] text-white py-2 px-5 rounded-3xl self-center mb-8">
          {isPosted ? <Spinner /> : "Acceder"}
        </button>

        <span className="text-center font-thin text-sm mb-4">
          ¿No tienes una cuenta?{" "}
          <Link
            href={"/auth/sign-up"}
            className="text-primary text-sm underline text-center mb-4"
          >
            Registrate ahora
          </Link>
        </span>

        <span className="text-center font-thin text-xs">
          Al hacer click en Acceder usted acepta los{" "}
          <Link
            href={"#"}
            className="text-primary text-xs underline text-center mb-4"
          >
            Términos y Condiciones
          </Link>{" "}
          y la{" "}
          <Link
            href={"#"}
            className="text-primary text-xs underline text-center mb-4"
          >
            Política de Privacidad
          </Link>{" "}
          de Cafam
        </span>
      </form>
    </div>
  );
};
