import { getPaginatedServices } from "@/actions";
import { ServiceGrid, SlideShow } from "@/components";

const images = [
  "/images/futbol_banner.png",
  "/images/baloncesto_banner.png",
  "/images/tenis_banner.png",
];

export default async function TiendaPage() {
  const { services } = await getPaginatedServices({ take: 12 });
  return (
    <div className="flex flex-col gap-4">
      <SlideShow images={images} title={"banner-image"} />
      <h1 className="text-2xl">Productos destacados</h1>

      <ServiceGrid services={services} />
    </div>
  );
}
