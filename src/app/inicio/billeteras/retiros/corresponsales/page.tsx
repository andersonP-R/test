"use client";

import { BackButton, TopMenuHome } from "@/components";
import { useEffect, useState } from "react";
import {
  IoChatboxEllipsesOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoRefresh,
} from "react-icons/io5";

interface Props {
  searchParams: {
    prevPage?: string;
  };
}

export default function CorresponsalesPage({ searchParams }: Props) {
  const prevPage = searchParams.prevPage;

  const [time, setTime] = useState({
    minutes: 29,
    seconds: 59,
  });

  useEffect(() => {
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
  }, [time]);
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4">
          <BackButton url={prevPage ?? "/inicio/billeteras/retiros"} />
          <span className="text-primary-700 font-bold text-xl">
            Corresponsales
          </span>

          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-light text-primary-700">
            Confirmale el siguiente código a la persona encargada en el
            corresponsal
          </span>
        </div>

        <span className="text-center p-2 border border-black rounded outline-primary bg-slate-50 mb-2">
          213213
        </span>

        <span className="text-center text-primary-700 mb-8">
          Tu codigo vence en:{" "}
          <span className="text-sm">
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}
          </span>{" "}
          min
        </span>

        <div className="flex gap-2 items-center mb-5 text-primary-700">
          <IoChatboxEllipsesOutline size={40} />
          <span className="font-light">
            Tambien te enviamos el código a tu telefono a través de un SMS
          </span>
        </div>

        <div className="flex gap-2 items-center mb-5 text-primary-700">
          <IoInformationCircleOutline size={30} />
          <span className="font-light">
            No compartas este código con otras personas
          </span>
        </div>
        <div className="flex gap-2 items-center mb-10 text-primary-700">
          <IoRefresh size={30} />
          <span className="font-light">
            Si tu código vence puedes solicitar uno nuevo
          </span>
        </div>
      </div>
    </div>
  );
}
