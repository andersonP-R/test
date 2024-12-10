import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth.config";
import { BackButton, TopMenuHome } from "@/components";
import "../ui/services-styles.css";
import { IoTrophyOutline } from "react-icons/io5";

export default async function PuntosAcumulablesPage() {
  const session = await auth();
  const { nombres } = session!.user;
  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in px-4">
        <div className="flex justify-between items-center mb-4 gap-2">
          <BackButton url={"/inicio/perfil/cafalover"} />
          <span className="text-primary-700 font-bold text-xl flex-1">
            Puntos Cafalover
          </span>
          <div></div>
        </div>
        <div className="flex flex-col gap-2 text-center mb-8">
          <span className="font-bold text-2xl capitalize text-primary-800">
            Hola, {nombres}
          </span>
          <span className="font-light text-primary-700">
            ¡En esta sección podras visualizar tus logros, nivel y el total de
            tus puntos canjeables!
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center mb-2">
          <Image
            src={"/images/usuario3.png"}
            alt={"badge"}
            width={140}
            height={120}
            className="w-[140px] h-[120px] object-cover"
          />
          <span className="text-slate-600 uppercase mt-2">Nivel usuario</span>

          <div className="flex flex-col w-full">
            <span className="text-[14px] font-thin self-end mr-1 text-primary-800">
              200/500
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
            href={"/inicio/perfil/puntos-acumulables/canjear"}
            className="btn-primary"
          >
            Canjear puntos
          </Link>
        </div>

        <span className="font-bold text-xl text-primary-800 mb-4">Logros</span>
        <div className="w-full flex flex-col gap-4 mb-[100px]">
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
              <span className="text-bold text-base text-primary-700">
                Social
              </span>
              <span className="text-bold text-[12px] text-[#4A4A4A]">
                Comparte la App Cafam con tus amigos
              </span>
            </div>
            <span className="text-xl">+100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
