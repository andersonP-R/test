import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth.config";
import { BackButton } from "@/components";
import "../ui/services-styles.css";
import { IoTrophyOutline } from "react-icons/io5";

export default async function PuntosAcumulablesPage() {
  const session = await auth();
  const { nombres } = session!.user;
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/servicios"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-800">
          Hola, {nombres}
        </span>
        <span className="font-light text-primary-700">
          ¡En esta sección podras visualizar tus logros, nivel y el total de tus
          puntos canjeables!
        </span>
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-2">
        <Image
          src={"/badge.png"}
          alt={"badge"}
          width={120}
          height={120}
          className="w-[120px] h-[120px]"
        />
        <span className="text-green-900 uppercase -mt-2">Nivel basico</span>

        <div className="flex flex-col w-full">
          <span className="text-[14px] font-thin self-end mr-1 text-primary-800">
            400/500
          </span>
          <span id="progress-bar">
            <span id="progress-fill"></span>
          </span>
        </div>
      </div>

      <div className="flex w-full px-2 items-center justify-center gap-2 mb-6 text-primary-700">
        <IoTrophyOutline size={35} />
        <span className="text-[14px] font-thin">
          ¡Acumula puntos y sube de nivel para obtener mejores beneficios!
        </span>
      </div>

      <div className="w-full flex justify-center mb-8">
        <Link
          href={"/inicio/servicios/puntos-acumulables/canjear"}
          className="btn-primary"
        >
          Canjear puntos
        </Link>
      </div>

      <span className="font-bold text-xl text-primary-800 mb-4">Logros</span>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-1 justify-between items-center border border-primary-700 rounded-lg p-2">
          <Image
            src={"/tienda.png"}
            alt={"image"}
            width={35}
            height={35}
            className="w-[35px] h-[35px] mr-2"
          />
          <div className="flex flex-col flex-1">
            <span className="text-bold text-base text-primary-700">
              Comprador del día
            </span>
            <span className="text-bold text-[12px] text-[#4A4A4A]">
              Gasta al menos $10.000 en el día
            </span>
          </div>
          <span className="text-xl">+10</span>
        </div>

        <div className="w-full flex gap-1 justify-between items-center border border-primary-700 rounded-lg p-2">
          <Image
            src={"/like.png"}
            alt={"image"}
            width={35}
            height={35}
            className="w-[35px] h-[35px] mr-2"
          />
          <div className="flex flex-col flex-1">
            <span className="text-bold text-base text-primary-700">Social</span>
            <span className="text-bold text-[12px] text-[#4A4A4A]">
              Comparte la App Cafam con tus amigos
            </span>
          </div>
          <span className="text-xl">+100</span>
        </div>
      </div>
    </div>
  );
}
