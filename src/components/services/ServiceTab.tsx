"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  objetivo: string;
  requisitos: string[];
  recomendaciones: string[];
}

export const ServiceTab = ({
  objetivo,
  requisitos,
  recomendaciones,
}: Props) => {
  const [view, setView] = useState(1);
  const handleChangeState = (state: number) => {
    setView(state);
  };

  useEffect(() => {
    handleChangeState(view);
  }, [view]);

  return (
    <div className="min-h-[300px] flex flex-col w-full">
      {/* tab navigation */}
      <div className="flex justify-between border-b border-black">
        <button
          onClick={() => handleChangeState(1)}
          className={clsx(
            "p-2 rounded-tl-lg rounded-tr-lg flex-auto mr-1 text-slate-700",
            {
              "text-white bg-primary-700": view === 1,
            }
          )}
        >
          Objetivo
        </button>
        <button
          onClick={() => handleChangeState(2)}
          className={clsx(
            "p-2 rounded-tl-lg rounded-tr-lg flex-auto mr-1 text-slate-700",
            {
              "text-white bg-primary-700": view === 2,
            }
          )}
        >
          Requisitos
        </button>
        <button
          onClick={() => handleChangeState(3)}
          className={clsx(
            "p-2 rounded-tl-lg rounded-tr-lg flex-auto text-slate-700",
            {
              "text-white bg-primary-700": view === 3,
            }
          )}
        >
          Recomendaciones
        </button>
      </div>

      {/* content */}
      <div className="flex flex-col">
        {view === 1 && (
          <>
            <div className="fade-in p-2 text-primary-900 leading-7">
              {objetivo}
            </div>
          </>
        )}

        {view === 2 && (
          <>
            {requisitos.map((e) => (
              <span key={e} className="fade-in p-2 text-primary-900 leading-7">
                - {e}
              </span>
            ))}
          </>
        )}

        {view === 3 && (
          <>
            {recomendaciones.map((e) => (
              <span key={e} className="fade-in p-2 text-primary-900 leading-7">
                - {e}
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
