"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export const DeviceChecker = () => {
  const [w, setw] = useState(0);

  useEffect(() => {
    const deviceBaseOnWidth = window.innerWidth;
    setw(deviceBaseOnWidth);

    if (w > 450) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    }
  }, [w]);

  return (
    <div
      className={clsx(
        "w-screen h-full flex justify-center bg-[#ddddddb7] absolute z-50 backdrop-blur-md fade-in",
        {
          "w-screen h-screen bg-[#ddddddb7] hidden": w < 450,
        }
      )}
    >
      <div className="flex flex-col px-20 pt-20">
        <span className="mb-2 text-center text-3xl font-bold text-primary-800">
          Sin soporte para Desktop
        </span>
        <span className="mb-2 text-center">
          Querido usuario, actualmente la aplicación no se encuentra optimizada
          para computadoras o pantallas con un tamaño de viewport mayor a 450px.
          Por favor, para la correcta visualización y experiencia de usuario le
          recomendamos que visite esta página desde un teléfono celular. También
          puede ajustar el tamaño de la ventana de su navegador en: 449px y
          recargar la página.
        </span>
        <span className="mb-2 text-center">
          El tamaño actual de su pantalla es: {w}px
        </span>
      </div>
    </div>
  );
};
