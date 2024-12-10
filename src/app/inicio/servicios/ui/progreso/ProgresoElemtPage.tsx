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
import { ProgresoSlideCategories } from "./ProgresoSlideCategories";
import { SubSecSlide } from "../SubSectionSlide";

const images = [
  "/images/edu_banner.png",
  "/images/cre_banner.png",
  "/images/viv_banner.png",
  "/images/cul_banner.png",
  "/images/emp_banner.png",
];

interface Props {
  page: string;
}

export const ProgresoElemtPage = ({ page }: Props) => {
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
      <ProgresoSlideCategories view={view} setState={setView} page={+page} />
      {/* -------------------------- CONTENT ------------------------------- */}
      <div className="">
        {view === 1 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/edu3.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Apostamos por la educación como motor de desarrollo, por eso
                  durante más de 40 años hemos formado a afiliados y empresas
                  con la mayor calidad en planes educativos
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.cafam.com.co/educacion/portafolio-servicios"
                  }
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Conocer cursos
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 2 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/xx.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Queremos ayudarte a obtener una buena salud financiera para tu
                  economía familiar y alcanzar tus metas, a través de una
                  administración adecuada de tus ingresos, tu ahorro, tus
                  gastos, tus inversiones y tu endeudamiento.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.zonapagos.com/t_Cafamcreditos"}
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Pague su crédito aquí
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 3 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/x_viv2.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Encuentra el hogar de tus sueños con nosotros. Imagina un
                  lugar donde cada rincón refleja tu esencia y cada día comienza
                  con una sonrisa. Tu nuevo hogar te espera, lleno de
                  posibilidades y momentos inolvidables. ¡Haz realidad tus
                  sueños hoy!
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.ciencuadras.com/?utm_source=cafam&utm_medium=referral&utm_campaign=ciencuadras&utm_content=click&utm_term=externo"
                  }
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Mas información
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 4 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/x_tea.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  ¡El Teatro Cafam es un espacio creado para albergar un amplio
                  abanico de actividades intelectuales y artísticas! Subiendo el
                  telón se convierte en el escenario de mundos e historias
                  mágicas que podrás vivir con los que más quieres.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.cafam.com.co/ocio-cultura"}
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        )}

        {view === 5 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/x_emp.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Desde el subsidio familiar, la gestión de oportunidades
                  laborales hasta un portafolio de soluciones de financiación,
                  te acompañamos en cada etapa de la vida para que cumplas todas
                  tus metas y sueños.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.cafam.com.co/empleo-y-bienestar-financiero/agencia-empleo"
                  }
                  className="btn-primary"
                  title="Ir al portal de afiliaciones de Cafam"
                  aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                >
                  Más información
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
