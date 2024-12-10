import Image from "next/image";
import { BackButton, SelectCenterGifs, TopMenuHome } from "@/components";
import { titleFont } from "@/config/fonts";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SERVICES_MOCK } from "@/seed/mock-data";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CanjearBySlugPage({ params }: Props) {
  const { slug } = params;
  // const service = await getServiceBySlug(slug);
  const service = SERVICES_MOCK.find((e) => e.slug === slug);

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex justify-between items-center gap-2 px-4">
          <BackButton url={"/inicio/perfil/puntos-acumulables/canjear"} />
          <span className="text-primary-700 font-bold text-xl">
            Selecciona Sede
          </span>
          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>
        <div className="flex gap-2 p-4">
          <Image
            src={`/services/${service?.imagenes[0]}`}
            alt={"image"}
            width={100}
            height={80}
            className="w-[100px] h-[80px] rounded-lg object-cover"
          />

          <div className="flex flex-col gap-1">
            <h1 className={` ${titleFont.className} antialiased text-base`}>
              {service?.nombre}
            </h1>

            <p className="text-base font-bold text-primary-700">
              {service?.puntosCanjeables} puntos
            </p>
          </div>
        </div>

        {/* available centers */}

        <SelectCenterGifs service={service!} />
      </div>
    </div>
  );
}
