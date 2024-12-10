"use client";
import { BackButton, TopMenuHome } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCheckmarkCircleOutline, IoHelpCircleOutline } from "react-icons/io5";

export default function GenerarTokenPage() {
  const [view, setView] = useState(1);
  const router = useRouter();

  const handlerSubmit = () => {
    router.push("/inicio/billeteras");
  };
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={"/inicio/billeteras/tarjeta-integral"} />
          <span className="text-primary-700 font-bold text-xl">
            Asignacion de clave
          </span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-light text-primary-700">
            ¡Aquí puedes activar cualquiera de tus productos y usarlos como
            quieras!
          </span>
        </div>

        {view === 1 && (
          <>
            <div className="flex flex-col mb-6">
              <span>Seleccione el producto</span>
              <select className="p-2 border rounded-md bg-gray-200">
                <option value="tic">Tarjeta integral</option>
              </select>
            </div>
            <button
              onClick={() => setView(2)}
              className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
            >
              Siguiente
            </button>
          </>
        )}

        {view === 2 && (
          <div className="fade-in">
            <div className="flex flex-col mb-6">
              <span>Seleccione el producto</span>
              <select className="p-2 border rounded-md bg-gray-200">
                <option value="tic">Tarjeta integral</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <span className="mb-2">Asigna la clave de tu tarjeta</span>
              <input
                type="password"
                className="p-2 border rounded-md bg-gray-200 border-black outline-primary"
              />
            </div>

            <div className="flex flex-col mb-6">
              <span className="mb-2">Confirma la clave de tu tarjeta</span>
              <input
                type="password"
                className="p-2 border rounded-md bg-gray-200 border-black outline-primary"
              />
            </div>

            <button
              onClick={() => setView(3)}
              className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
            >
              Asignar
            </button>
          </div>
        )}

        {view === 3 && (
          <div className="flex flex-col items-center fade-in">
            <div className="flex flex-col mb-6">
              <span className="mb-2 text-center">
                Para terminar verifica el código que te enviamos a tu número
                celular{" "}
              </span>
              <input
                type="password"
                className="p-2 border rounded-md bg-gray-200 border-black outline-primary"
              />
            </div>

            <button
              onClick={() => setView(4)}
              className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
            >
              Verificar
            </button>
          </div>
        )}

        {view === 4 && (
          <div className="flex flex-col items-center fade-in gap-2">
            <span className="mb-2 text-center text-xl text-green-900">
              ¡Se asgino la clave correctamente!
            </span>
            <IoCheckmarkCircleOutline
              size={80}
              className="mb-6 text-green-700"
            />
            {/* <span className="mb-6 text-center">
            Ahora puede usar su tarjeta muchas maneras
          </span> */}

            <button
              onClick={handlerSubmit}
              className="w-[120px] bg-primary-700 text-white py-2 px-5 rounded-3xl self-center mb-8"
            >
              Terminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
