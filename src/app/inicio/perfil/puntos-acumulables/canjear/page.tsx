import Image from "next/image";
import { BackButton, TopMenuHome } from "@/components";
import { getGiftServices } from "@/actions";
import Link from "next/link";
import { IoHelpCircleOutline } from "react-icons/io5";

export default async function CanjearPage() {
  const services = await getGiftServices();

  return (
    <div className="flex flex-col">
      <TopMenuHome />
      <div className="flex flex-col fade-in mb-16 px-4">
        <div className="flex justify-between items-center mb-4 gap-2">
          <BackButton url={"/inicio/perfil/puntos-acumulables"} />
          <span className="text-primary-700 font-bold text-xl">
            Canjear Puntos
          </span>
          <div className="bg-slate-200 p-3 w-max rounded-full">
            <IoHelpCircleOutline size={25} className="text-slate-700" />
          </div>
        </div>

        <div className="flex w-full items-center justify-between mb-8">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/usuario3.png"}
              alt={"badge-image"}
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            <span className="text-green-900 uppercase text-[12px]">
              Nivel usuario
            </span>
          </div>
          <div className="flex flex-col text-center text-primary-800">
            <span>200</span>
            <span>puntos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-10">
          {services.map((s) => (
            <div
              key={s.id}
              className=" flex flex-col rounded-md overflow-hidden fade-in sm:p-0 border border-gray-400"
            >
              <Image
                src={`/services/${s.imagenes[0]}`}
                alt={s.imagenes[0]}
                className="w-full object-cover rounded"
                width={500}
                height={500}
              />

              <div className=" flex flex-col justify-between p-2 h-full">
                <h1 className="h-auto mb-2">{s.nombre}</h1>
                <span className="font-bold my-2 text-sm">
                  {s.puntosCanjeables} puntos
                </span>
                <Link
                  className="block text-center text-white rounded-lg p-1 font-thin bg-green-900"
                  href={`/inicio/perfil/puntos-acumulables/canjear/${s.slug}`}
                >
                  Canjear
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
