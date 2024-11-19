import { auth } from "@/auth.config";
import { BackButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default async function PuntosAcumulablesPage() {
  const session = await auth();
  const { nombres } = session!.user;
  return (
    <div className="flex flex-col fade-in">
      <BackButton url={"/inicio/servicios"} />
      <div className="flex flex-col gap-2 text-center mb-8">
        <span className="font-bold text-2xl text-primary-700">
          Hola, {nombres}
        </span>
        <span className="font-light text-primary-700">
          ¡En esta sección podras visualizar tus logros, nivel y el total de tus
          puntos canjeables!
        </span>
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-8">
        <Image
          src={"/badge.png"}
          alt={"badge"}
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
        />
        <span className="text-green-900 uppercase mb-3">Nivel basico</span>

        <span>barra progreso</span>
      </div>

      <div className="w-full flex justify-center mb-8">
        <Link
          href={"/inicio/servicios/puntos-acumulables/canjear"}
          className="btn-primary"
        >
          Canjear puntos
        </Link>
      </div>

      <span className="font-bold text-xl text-primary-700 mb-4">Logros</span>
      <div className="w-full flex flex-col gap-2">
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
