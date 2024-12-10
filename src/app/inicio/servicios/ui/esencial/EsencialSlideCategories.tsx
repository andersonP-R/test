"use client";
import clsx from "clsx";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  view: number;
  setState: Dispatch<SetStateAction<number>>;
  page: number;
}

export const EsencialSlideCategories = ({ view, setState, page }: Props) => {
  const handleChangeState = (state: number) => {
    setState(state);
  };

  useEffect(() => {
    if (page === 3) {
      console.log(window.scrollX);
      window.scrollTo({
        left: 400,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    handleChangeState(view);
  }, [view]);

  return (
    <div className="flex flex-col py-4">
      <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-1 pb-4">
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <button
            onClick={() => handleChangeState(1)}
            className={clsx(
              "flex items-center p-1 snap-start shrink-0 border-2 rounded-2xl mb-3 shadow-lg shadow-slate-400 bg-[#ffffffb4]",
              {
                "border-2 border-red-800 text-red-800 shadow-red-300 shadow-lg":
                  view === 1,
              }
            )}
          >
            <Image
              src={"/images/ese_sub.png"}
              alt={"image"}
              width={70}
              height={60}
              className="w-[70px] h-[60px] object-cover"
            />
            <span className="capitalize text-[14px] px-2">Subsidio</span>
          </button>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative pl-4">
          <button
            onClick={() => handleChangeState(2)}
            className={clsx(
              "flex items-center p-1 snap-start shrink-0 border-2 rounded-2xl mb-3 shadow-lg shadow-slate-400 bg-[#ffffff91]",
              {
                "border-2 border-red-800 text-red-800 shadow-red-300 shadow-lg":
                  view === 2,
              }
            )}
          >
            <Image
              src={"/images/ese_sal.png"}
              alt={"image"}
              width={70}
              height={60}
              className="w-[70px] h-[60px] object-cover rounded-xl"
            />
            <span className="capitalize text-[14px] px-2">Salud</span>
          </button>
        </div>

        {/*  */}
        <div className="flex flex-col items-center snap-start shrink-0 relative px-4">
          <button
            onClick={() => handleChangeState(3)}
            className={clsx(
              "flex items-center p-1 snap-start shrink-0 border-2 rounded-2xl mb-3 shadow-lg shadow-slate-400 bg-[#ffffff91]",
              {
                "border-2 border-red-800 text-red-800 shadow-red-300 shadow-lg":
                  view === 3,
              }
            )}
          >
            <Image
              src={"/images/ese_med.png"}
              alt={"image"}
              width={70}
              height={60}
              className="w-[70px] h-[60px] object-cover rounded-xl"
            />
            <span className="capitalize text-[14px] px-2">Medicamentos</span>
          </button>
        </div>
      </div>
    </div>
  );
};
