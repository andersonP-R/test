"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { login, registerUser } from "@/actions";
import { IoArrowBack, IoCheckmarkDoneCircleOutline } from "react-icons/io5";

type FormInputs = {
  email: string;
  password: string;
  name: string;
  codeVerification: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [view, setView] = useState(1);
  const [emailState, setEmail] = useState("");
  const [passState, setPass] = useState("");
  const [nameState, setName] = useState("");

  const [time, setTime] = useState({
    minutes: 1,
    seconds: 59,
  });

  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { email, password, name } = data;
    setEmail(email.toLowerCase());
    setPass(password);
    setName(name);

    // Server action

    // await login(email.toLowerCase(), password);
    // router.push("/auth/code-verification");
    // window.location.reload();
    setView(2);
  };

  const handlerSignUp = async () => {
    const resp = await registerUser(emailState, passState, nameState);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }

    await login(emailState, passState);
    window.location.reload();
  };

  useEffect(() => {
    if (view !== 2) return;
    const countdown = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(countdown);
      } else if (time.seconds === 0) {
        setTime((prevTime) => ({
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else {
        setTime((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [time, view]);

  return (
    <>
      {view === 1 && (
        <div className="z-10 flex flex-col py-4 px-6 bg-white rounded-lg gap-8">
          <div className="flex justify-between items-center w-full fade-in">
            <Link
              className="text-black font-light flex items-center gap-1"
              href={"/auth/sign-in"}
            >
              {" "}
              <IoArrowBack size={18} /> Volver
            </Link>
            <Image
              src={"/logo.jpg"}
              alt={"logo"}
              width={60}
              height={30}
              className="w-[60px] h-[30px]"
            />
          </div>
          <span className="text-primary font-light text-center text-2xl fade-in">
            Creación de cuenta
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1 fade-in"
          >
            <label htmlFor="name" className="text-sm text-primary">
              Nombre
            </label>
            <input
              className={clsx(
                "p-2 border border-black rounded mb-5 outline-primary",
                {
                  "border-red-500": errors.email,
                }
              )}
              type="text"
              placeholder="Tu nombre"
              {...register("name", { required: true })}
            />

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
              placeholder="example@example.com"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label htmlFor="password" className="text-sm text-primary">
              Contraseña
            </label>
            <input
              className={clsx(
                "p-2 border border-black rounded mb-5 outline-primary",
                {
                  "border-red-500": errors.password,
                }
              )}
              type="password"
              placeholder="**********"
              {...register("password", { required: true, minLength: 6 })}
            />

            <span className="text-red-500">{errorMessage} </span>

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

            <button className="w-max bg-[#2288F7] text-white py-2 px-5 rounded-3xl self-center mb-8">
              Siguiente
            </button>
          </form>
        </div>
      )}

      {view === 2 && (
        <div className="z-10 flex flex-col py-4 px-6 bg-white rounded-lg gap-8 fade-in">
          <div className="flex justify-between items-center w-full fade-in">
            <button
              className="text-black font-light flex items-center gap-1"
              onClick={() => setView(1)}
            >
              {" "}
              <IoArrowBack size={18} /> Volver
            </button>
            <Image
              src={"/logo.jpg"}
              alt={"logo"}
              width={60}
              height={30}
              className="w-[60px] h-[30px]"
            />
          </div>
          <span className="text-primary font-light text-center text-2xl fade-in">
            Creación de cuenta
          </span>

          <label
            htmlFor="email"
            className="text-sm text-primary text-center fade-in"
          >
            Ingresa tu código de verificación a continuación
          </label>
          <input
            className={clsx(
              "p-2 border border-black rounded mb-2 outline-primary fade-in",
              {
                "border-red-500": errors.email,
              }
            )}
            type="text"
            {...register("codeVerification", { required: true })}
          />
          <span className="text-green-600 text-sm self-center">
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}
          </span>
          <button
            className="w-max bg-[#2288F7] text-white py-2 px-5 rounded-3xl self-center mb-8"
            onClick={() => setView(3)}
          >
            Siguiente
          </button>
        </div>
      )}

      {view === 3 && (
        <div className="z-10 flex flex-col py-4 px-6 bg-white rounded-lg gap-8 fade-in">
          <div className="flex items-end w-full fade-in">
            <Image
              src={"/logo.jpg"}
              alt={"logo"}
              width={60}
              height={30}
              className="w-[60px] h-[30px]"
            />
          </div>
          <span className="text-primary font-light text-center text-2xl fade-in">
            Creación de cuenta
          </span>

          <span className="text-lg text-center fade-in">
            Tu cuenta ha sido creada salitsfactoriamente
          </span>
          <IoCheckmarkDoneCircleOutline
            size={35}
            className="text-green-500 self-center"
          />
          <button
            className="w-max bg-[#2288F7] text-white py-2 px-5 rounded-3xl self-center mb-8"
            onClick={handlerSignUp}
          >
            Siguiente
          </button>
        </div>
      )}
    </>
  );
};
