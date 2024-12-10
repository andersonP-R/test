"use client";

import Link from "next/link";
import {
  IoAirplane,
  IoBasketballOutline,
  IoBowlingBallOutline,
  IoFitness,
  IoHome,
  IoSchool,
} from "react-icons/io5";

export const CategoriasTienda = () => {
  return (
    <div className="flex flex-col">
      <span className="text-primary-700 text-2xl mb-6 px-4">Categorias</span>

      {/* categories slide */}
      <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-2 gap-4">
        <div className="flex snap-start shrink-0 gap-7 relative px-4 mb-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/entretenimiento?pag=3"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoBasketballOutline size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Deportes
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/esencial?pag=2"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoFitness size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Salud
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/progreso"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoSchool size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Educación
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/entretenimiento?pag=1"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoAirplane size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Turismo
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/progreso?pag=3"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoHome size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Vivienda
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={"/inicio/servicios/tienda/entretenimiento?pag=2"}
              className="bg-slate-200 p-4 w-max rounded-full shadow-black shadow-md"
            >
              <IoBowlingBallOutline size={25} className="text-primary-900" />
            </Link>
            <span className="text-[12px] text-primary-900 text-center ">
              Recreación
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
