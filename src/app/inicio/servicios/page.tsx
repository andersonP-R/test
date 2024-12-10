import Link from "next/link";
import { ServiceGrid, SlideShow, TopNavTienda } from "@/components";
import { DestacadosShop } from "./ui/DestacadosShop";
import { CategoriasTienda } from "./ui/CategoriasTienda";
import { OfertaDelDia } from "./ui/OfertaDelDia";
import { BienestarSlide } from "./ui/EspiralSlide";
import { SERVICES_MOCK } from "@/seed/mock-data";

const images = ["/images/plus.png", "/images/b2.jpg", "/images/b3.jpg"];

export default async function TiendaPage() {
  const services = SERVICES_MOCK;

  return (
    <div className="flex flex-col fade-in">
      <TopNavTienda />
      <div className="relative px-2">
        <div className="w-full h-full absolute left-0 bg-gradient-primary"></div>
        <SlideShow images={images} title={"banner-image"} />
      </div>
      <div className="mb-4" />
      <div className="flex flex-col gap-8">
        <span className="text-center text-2xl text-primary-800 px-4">
          ¡Bienvenido a nuestra tienda virtual Cafam!
        </span>

        <BienestarSlide />
      </div>
      <CategoriasTienda />
      <OfertaDelDia />
      <DestacadosShop />
      <div className="px-4 my-8 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl text-primary-700">
            Recomendados
          </span>

          <Link href={"#"} className="underline text-slate-700">
            Ver todos
          </Link>
        </div>
        <ServiceGrid services={services.slice(0, 4)} />
      </div>

      <div className="mb-10" />
    </div>
  );
}
