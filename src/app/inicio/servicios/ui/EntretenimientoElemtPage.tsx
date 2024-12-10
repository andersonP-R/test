"use client";
import Link from "next/link";
import Image from "next/image";
import {
  IoArrowBack,
  IoCartOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { SERVICES_MOCK } from "@/seed/mock-data";
import { SubSecSlide } from "./SubSectionSlide";
import { EntreSlide } from "./EntreSlide";
import { DeporteElements } from "./entretenimiento/deportes/DeporteElements";
import { ServiceGrid } from "@/components";
const services = SERVICES_MOCK;
let sportServices = services.filter((e) => e.tipo === "escuelas-deportivas");
let recreacionServices = services.filter((e) => e.tipo === "practicas-libres");
let turismoServices = services.filter((e) => e.tipo === "turismo");

const images = [
  "/images/b1.jpg",
  "/images/eventos_banner.png",
  "/images/b3.jpg",
];

interface Props {
  page: string;
}

export const EntretenimientoElemtPage = ({ page }: Props) => {
  const [view, setView] = useState(+page);
  const [search, setSearch] = useState("");
  const [servicesState, setServicesState] = useState(sportServices);
  const [filterOp, setFilterOp] = useState("");

  const handleSearch = () => {
    const s = servicesState.filter((e) => e.slug.includes(search));
    if (search.length === 0) {
      setServicesState(sportServices);
    } else {
      setServicesState(s);
    }
  };

  const handleFilter = () => {
    if (filterOp === "all") {
      setServicesState(sportServices);
    } else if (filterOp === "futbol") {
      const s = servicesState.filter((e) => e.slug.includes("futbol"));
      setServicesState(s);
    } else if (filterOp === "natacion") {
      const s = servicesState.filter((e) => e.slug.includes("natacion"));
      setServicesState(s);
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      window.scrollBy({
        top: 320,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (view === 3) {
      handleSearch();
    }
  }, [search]);

  useEffect(() => {
    if (view === 3) {
      handleFilter();
    }
  }, [filterOp]);

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
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => handleScroll()}
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

      {/* -------------------------- CAT SELECTOR ------------------------------- */}
      <EntreSlide view={view} setState={setView} page={+page} />
      {/* -------------------------- CAT SELECTOR END ------------------------------- */}

      {/* -------------------------- CONTENT ------------------------------- */}
      <div className="">
        {view === 1 && (
          <div className="flex flex-col">
            <div className="px-4">
              <ServiceGrid services={turismoServices} />
            </div>
            <div className="mb-28"></div>
          </div>
        )}

        {view === 2 && (
          <div className="flex flex-col">
            <div className="px-4">
              <ServiceGrid services={recreacionServices} />
            </div>
            <div className="mb-28"></div>
          </div>
        )}

        {view === 3 && (
          <DeporteElements
            filterOp={filterOp}
            setFilterOp={setFilterOp}
            services={servicesState}
          />
        )}

        {view === 4 && (
          <div className="flex flex-col px-4 mb-32 fade-in">
            <div className="flex flex-col items-center relative">
              <Image
                src={"/images/x_eve.jpg"}
                alt={"image"}
                width={350}
                height={240}
                className="w-[350px] h-[240px] object-cover rounded-3xl"
              />
              <div className="mt-2 flex flex-col items-center gap-4 w-[340px]">
                <span className="text-primary-800 text-center">
                  Ponemos a tu disposición toda nuestra creatividad,
                  experiencia, servicios e instalaciones para crear el evento
                  que quieras. Desde un cumpleaños hasta la boda de tus sueños,
                  ¡no hay límite para crear momentos memorables!
                </span>
                <div className="flex flex-col items-center gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.cafam.com.co/ocio-eventos"}
                    className="btn-primary"
                    title="Ir al portal de afiliaciones de Cafam"
                    aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                  >
                    Conoce más
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.cafam.com.co/empresas/empresas-eventos-corporativos"
                    }
                    className="btn-primary"
                    title="Ir al portal de afiliaciones de Cafam"
                    aria-label="Abrir portal de afiliaciones de Cafam en una nueva pestaña"
                  >
                    Eventos empresariales
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* -------------------------- END CONTENT ------------------------------- */}
    </>
  );
};
