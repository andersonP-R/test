"use client";
import { useEffect, useState } from "react";
import {
  IoAppsOutline,
  IoCardOutline,
  IoCashOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkOutline,
  IoChevronDown,
  IoKeyOutline,
  IoNewspaperOutline,
  IoPhonePortraitOutline,
  IoQrCodeOutline,
  IoSettingsOutline,
  IoSunny,
  IoSwapVertical,
  IoWalletOutline,
} from "react-icons/io5";
import { Card, TopMenuHome } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string | "";
}

export const HomeELements = ({ name }: Props) => {
  const [view, setView] = useState(2);
  const handleView = (val: number) => {
    setView(val);
    if (val === 2) {
      alert(
        `El código es: ${Math.round(Math.random() * 100)}${Math.round(
          Math.random() * 100
        )}`
      );
    }
  };

  useEffect(() => {
    const isVisted = window.localStorage.getItem("isVisted");

    if (isVisted === "true") {
      setView(4);
    }

    if (view === 4) {
      window.localStorage.setItem("isVisted", "true");
    }
  }, [view]);

  return (
    <>
      {view !== 4 && (
        <div className="flex flex-col justify-center pb-32 items-center h-full w-full absolute z-10 backdrop-blur-md bg-[#ffffff8e] fade-in">
          <div className="flex flex-col mb-6 px-2">
            {/* {view === 1 && (
              <>
                <span className="mb-2 text-center text-3xl font-bold text-primary-800">
                  Confirmación de identidad
                </span>
                <span className="mb-2 text-center px-4">
                  Te vamos a enviar un código al teléfono xxx-xxx-454
                </span>
                <button
                  onClick={() => handleView(2)}
                  className="w-max bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
                >
                  Generar código
                </button>
              </>
            )} */}

            {view === 2 && (
              <>
                <span className="mb-2 text-center text-3xl font-bold text-primary-800">
                  Confirmación de identidad
                </span>
                <span className="mb-2 text-center">
                  Ingresa el código que te enviamos al teléfono xxx-xxx-423 para
                  continuar
                </span>
                <input
                  type="password"
                  className="p-2 border mx-16 text-center mb-4 rounded-md bg-gray-200 border-black outline-primary"
                />
                <button
                  onClick={() => handleView(3)}
                  className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
                >
                  Confirmar
                </button>
                <span className="px-2 text-center">
                  Si no te llegó el código puedes generar uno nuevo{" "}
                  <button
                    onClick={() => handleView(2)}
                    className="underline text-primary-700"
                  >
                    aquí
                  </button>{" "}
                </span>
              </>
            )}

            {view === 3 && (
              <>
                <div className="w-full px-2 flex flex-col items-center justify-center text-green-800 fade-in">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <span className="font-thin text-3xl text-green-800 text-center">
                      Confirmación exitosa
                    </span>
                    <div className="bg-[#346138] p-2 rounded-full">
                      <IoCheckmarkOutline
                        size={25}
                        className="text-white font-bold"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleView(4)}
                    className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <TopMenuHome />
      <div className="flex flex-col gap-6 fade-in px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-1">
            <IoSunny size={25} className="text-yellow-400" />
            <div className="flex flex-col">
              <span className="text-xl text-primary-700">
                Buenos días, <span className="capitalize">{name}</span>
              </span>
              <span className="text-slate-500">4 Dic 2024</span>
            </div>
          </div>
          <Image
            src={"/user.jpeg"}
            alt={"user"}
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        </div>

        {/* Tus productos */}
        <div className="w-full py-6 flex flex-col justify-center items-center bg-primary-700 rounded-3xl">
          <button className="flex justify-center items-center mb-6 gap-2 bg-white rounded-2xl p-2">
            <IoCardOutline size={20} className="" />
            <span className="text-[14px]">Tarjeta integral</span>
            <IoChevronDown size={20} className="" />
          </button>

          <span className="text-slate-300">Balance total</span>
          <span className="text-white text-[40px] mb-6">$340.000</span>

          <div className="flex gap-8">
            <Link
              href={"/inicio/billeteras/tarjeta-integral"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-white p-4 w-max rounded-full">
                <IoWalletOutline size={25} className="text-black" />
              </div>
              <span className="text-[12px] text-white text-center ">
                Producto
              </span>
            </Link>

            <div className="flex flex-col justify-center items-center gap-2">
              <Link
                href={"/inicio/billeteras/tarjeta-integral/movimientos"}
                className="bg-white p-4 w-max rounded-full"
              >
                <IoSwapVertical size={25} className="text-black" />
              </Link>
              <span className="text-[12px] text-white text-center ">
                Movimientos
              </span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-white p-4 w-max rounded-full">
                <IoSettingsOutline size={25} className="text-black" />
              </div>
              <span className="text-[12px] text-white text-center ">
                Ajustes
              </span>
            </div>
          </div>
        </div>

        {/* Tus opciones */}
        <div className="flex flex-col mb-32">
          <div className="flex gap-2 mb-4 text-primary-700 items-center">
            <IoAppsOutline size={25} />
            <span className="font-semibold text-lg">Tus Opciones</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Card
              icon={<IoCashOutline size={35} />}
              url={"/inicio/billeteras/retiros"}
              title={"Retiros"}
            />

            <Card
              icon={<IoPhonePortraitOutline size={35} />}
              url={"/inicio/billeteras/recargas"}
              title={"Recargas"}
            />

            <Card
              icon={<IoQrCodeOutline size={35} />}
              url={"/inicio/billeteras/pagar-qr"}
              title={"Escánear QR"}
            />

            <Card
              icon={<IoNewspaperOutline size={35} />}
              url={"#"}
              title={"Certificados"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
