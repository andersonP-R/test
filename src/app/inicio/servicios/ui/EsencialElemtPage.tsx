"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  IoArrowBack,
  IoCartOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { SubSecSlide } from "./SubSectionSlide";
import { EsencialSlideCategories } from "./esencial/EsencialSlideCategories";

const images = [
  "/images/ese_banner.png",
  "/images/salud_banner.png",
  "/images/medica_banner.png",
];

interface Props {
  page: string;
}

export const EsencialElemtPage = ({ page }: Props) => {
  const [view, setView] = useState(+page);

  return (
    <>
      {/* -------------------------- NAV ------------------------------- */}
      <div className="flex px-2 py-4 justify-between items-center w-full h-[60px] bg-primary-700 sticky top-0 z-10">
        <Link
          href={"/inicio/servicios"}
          className="bg-white p-[6px] mr-2 w-max rounded-full"
        >
          <IoArrowBack size={25} className="text-slate-700" />
        </Link>
        <div className="relative">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded-full text-xl px-2 py-1 pl-8"
          />
        </div>

        <Link href={"#"} className="mx-2">
          <div className="relative">
            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-white text-primary-700">
              5
            </span>
            <IoCartOutline size={30} className="text-white" />
          </div>
        </Link>

        <Link href="/inicio/notifications" className="mx-2">
          <div className="relative">
            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-white text-primary-700">
              6
            </span>
            <IoNotificationsOutline size={30} className="text-white" />
          </div>
        </Link>
      </div>
      {/* -------------------------- END NAV ------------------------------- */}

      {/* -------------------------- SLIDER ------------------------------- */}
      <SubSecSlide images={images} title={"img"} />

      {/* -------------------------- END SLIDER ------------------------------- */}
      <EsencialSlideCategories view={view} setState={setView} page={+page} />
      {/* -------------------------- CONTENT ------------------------------- */}
      <div className="">
        {view === 1 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/image.png"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Ofrecemos bienestar para ti, como el subsidio familiar, una
                  prestación social que se entrega en dinero (cuota monetaria),
                  con el objetivo de brindar oportunidades para que puedan
                  acceder a la calidad de vida que ellos y sus familias desean.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://afiliaciones.cafam.com.co/CFMportal"}
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 2 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/plus.png"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Elige nuestros servicios especiales de salud de CafamPlus.
                  Escríbenos al 311 3565623 y afíliate ahora. Gestiona citas
                  médicas y resultados de laboratorio haciendo clic en:
                </span>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://laboratorios.cafam.com.co/ConsultaPacientes"}
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Laboratorios
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 3 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/enf.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  En Droguerías Cafam estamos comprometidos con el cuidado de tu
                  salud y bienestar. Por eso somos tu droguería de confianza
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.drogueriascafam.com.co/?utm_source=cafam&utm_medium=referral&utm_campaign=droguerias&utm_content=click&utm_term=externo"
                  }
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* -------------------------- END CONTENT ------------------------------- */}
    </>
  );
};
