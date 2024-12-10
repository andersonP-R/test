"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

export const AnaliticDashboard = () => {
  const [view, setView] = useState(1);
  const handleChangeState = (state: number) => {
    setView(state);
  };

  useEffect(() => {
    handleChangeState(view);
  }, [view]);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between bg-[#dadada] rounded-2xl p-1 text-[#383838] mb-6 mx-6 shadow-lg">
        <button
          onClick={() => handleChangeState(1)}
          className={clsx("py-4 rounded-2xl flex-auto", {
            "text-white bg-primary-700": view === 1,
          })}
        >
          Ingresos
        </button>
        <button
          onClick={() => handleChangeState(2)}
          className={clsx("py-4 rounded-2xl flex-auto", {
            "text-white bg-primary-700": view === 2,
          })}
        >
          Gastos
        </button>
      </div>

      <div className="flex flex-col">
        {view === 1 && (
          <>
            <div className="fade-in flex flex-col gap-2">
              <span className="px-2 text-slate-700">12/08/2024</span>
              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowUpCircleOutline size={25} className="text-green-700" />
                <span className="text-lg flex-1">Pago subsidio CAFAM</span>
                <span className="text-lg">$200.000</span>
              </div>

              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowUpCircleOutline size={25} className="text-green-700" />
                <span className="text-lg flex-1">Pago subsidio CAFAM</span>
                <span className="text-lg">$200.000</span>
              </div>

              <span className="px-2 text-slate-700 mt-4">20/03/2024</span>

              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowUpCircleOutline size={25} className="text-green-700" />
                <span className="text-lg flex-1">Abono subsidio</span>
                <span className="text-lg">$150.000</span>
              </div>

              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowUpCircleOutline size={25} className="text-green-700" />
                <span className="text-lg flex-1">Pago subsidio CAFAM</span>
                <span className="text-lg">$200.000</span>
              </div>
            </div>
          </>
        )}

        {view === 2 && (
          <>
            <div className="fade-in flex flex-col gap-4">
              <span className="px-2 text-slate-700">Ayer</span>

              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowDownCircleOutline size={25} className="text-red-700" />
                <span className="text-lg flex-1">Retiro en cajero</span>
                <span className="text-lg text-red-700">-$200.000</span>
              </div>

              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowDownCircleOutline size={25} className="text-red-700" />
                <span className="text-lg flex-1">Retiro en correspon...</span>
                <span className="text-lg text-red-700">-$200.000</span>
              </div>

              <span className="px-2 text-slate-700 mt-4">9/03/2024</span>
              <div className="flex gap-2 justify-between bg-white shadow-slate-400 shadow-md p-4 rounded-xl">
                <IoArrowDownCircleOutline size={25} className="text-red-700" />
                <span className="text-lg flex-1">Retiro en cajero</span>
                <span className="text-lg text-red-700">-$50.000</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
