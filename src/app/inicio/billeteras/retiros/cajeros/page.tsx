"use client";
import { BackButton } from "@/components";
import { useEffect, useState } from "react";
import {
  IoChatboxEllipsesOutline,
  IoInformationCircleOutline,
  IoRefresh,
} from "react-icons/io5";

export default function CajerosPage() {
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
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/billeteras/retiros"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-light text-primary-700">
          Escribe este código en el cajero para sacar la plata
        </span>
      </div>

      <span className="text-center p-2 border border-black rounded outline-primary bg-slate-50 mb-2">
        213213{" "}
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
      <div className="flex gap-2 items-center mb-2 text-primary-700">
        <IoRefresh size={30} />
        <span className="font-light">
          Si tu código vence puedes solicitar uno nuevo
        </span>
      </div>
    </div>
  );
}
