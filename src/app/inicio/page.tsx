import { auth } from "@/auth.config";
import { Card, CompleteProfile, TopMenuHome } from "@/components";
import Image from "next/image";
import Link from "next/link";
import {
  IoCashOutline,
  IoGiftOutline,
  IoNewspaperOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { TextSlide } from "./ui/TextSlide";
const t = [
  "Gestione y administre todos sus servicios adquiridos Cafam en un solo lugar",
  "Utilice su dinero de una manera rapida, segura y flexible.",
  "Todos los servicios de Cafam en tu mano.",
];

const images = ["/images/plus.png", "/images/b2.jpg", "/images/b3.jpg"];

export default async function InicioPage() {
  const session = await auth();
  const { nombres, apellidos } = session!.user;

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col gap-2 fade-in px-4">
        <div className="flex flex-col items-center mb-8">
          <span className="text-2xl font-bold text-primary-700">
            Bienvenido,
          </span>
          <span className="text-3xl capitalize text-primary">
            {nombres} {apellidos}
          </span>
        </div>

        <div className="flex flex-col gap-2 w-full mb-8">
          <Image
            src={"/images/mobile-app.png"}
            alt={"home-img"}
            width={350}
            height={360}
            className="w-[350px] h-[360px] object-cover"
          />
          <TextSlide />
        </div>

        <div className="flex flex-col w-full gap-4">
          <span className="font-semibold text-lg text-primary-800">
            Novedades
          </span>
          <div className="flex gap-2 py-1 backdrop-blur-2xl bg-[#ffffff73] items-center border border-primary-800 rounded-3xl">
            <Image
              src={"/images/emp2.png"}
              alt={"empleo-img"}
              width={140}
              height={140}
              className="w-[140px] h-[140px] object-cover"
            />
            <div className="flex flex-col gap-2">
              <span className="text-slate-800 text-[14px]">
                Lleva la productividad de tu empresa a otro nivel con nuestros
                programas de capacitación empresarial
              </span>
              <Link
                href={"/inicio/servicios/tienda/progreso"}
                className="underline text-[14px]"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex gap-2 mb-4 text-primary-700 items-center">
            <span className="font-semibold text-lg text-primary-800">
              Servicios destacados
            </span>
          </div>

          <div className="flex gap-4">
            <Card
              icon={<IoCashOutline size={35} />}
              url={"/inicio/billeteras/retiros"}
              title={"Retiros"}
            />
            <Card
              icon={<IoGiftOutline size={35} />}
              url={"/inicio/perfil/cafalover"}
              title={"Cafalover"}
            />

            <Card
              icon={<IoPhonePortraitOutline size={35} />}
              url={"/inicio/billeteras/recargas"}
              title={"Recargas"}
            />

            <Card
              icon={<IoNewspaperOutline size={35} />}
              url={"#"}
              title={"Certificados"}
            />
          </div>
        </div>

        <div className="flex flex-col my-10 ">
          <div className="flex gap-2 mb-4 items-center">
            <span className="font-semibold text-lg text-primary-800">
              Te puede interesar
            </span>
          </div>

          <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-20 pb-4 gap-4">
            <div className="flex snap-start shrink-0 w-[300px] h-[150px] bg-gradient-primary rounded-3xl relative overflow-hidden">
              <Image
                src="/images/fot_girl.png"
                alt="footbal-girl"
                width={150}
                height={150}
                className="w-[150px] h-[150px] mt-4"
              />
              <div className="flex flex-col items-end justify-center text-right gap-1 pr-4 z-10">
                <span className="text-base font-bold text-slate-200">
                  Escuelas de Futbol
                </span>
                <span className="text-[14px] text-slate-200 mb-2">
                  ¡Potencia tu juego y trabajo en equipo!
                </span>
                <Link
                  href={"/inicio/servicios/tienda/entretenimiento?pag=3"}
                  className="px-2 py-1 w-max border border-black rounded-full text-black text-[14px]"
                >
                  Ver más
                </Link>
              </div>

              <Image
                src="/images/cinta-9.png"
                alt="cinta"
                width={300}
                height={120}
                className="w-[300px] h-[120px] absolute object-cover opacity-40 top-8"
              />
            </div>

            <div className="flex snap-start shrink-0 w-[300px] h-[150px] bg-gradient-primary rounded-3xl relative overflow-hidden">
              <Image
                src="/images/bask_girl.png"
                alt="basketball-girl"
                width={130}
                height={130}
                className="w-[130px] h-[130px] mt-4"
              />
              <div className="flex flex-col items-end justify-center text-right gap-1 pr-4 z-10">
                <span className="text-base font-bold text-slate-100">
                  Escuela Baloncesto
                </span>
                <span className="text-[14px] text-slate-200 mb-2">
                  ¡Cada canasta es un punto a tu favor!
                </span>
                <Link
                  href={"/inicio/servicios/tienda/entretenimiento?pag=3"}
                  className="px-2 py-1 w-max border border-black rounded-full text-black text-[14px]"
                >
                  Ver más
                </Link>
              </div>

              <Image
                src="/images/cinta-9.png"
                alt="cinta"
                width={300}
                height={120}
                className="w-[300px] h-[120px] absolute object-cover opacity-40 top-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
