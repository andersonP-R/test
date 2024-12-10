"use client";

import Image from "next/image";
import Link from "next/link";
import { currencyFormat } from "@/utils";
import { IService2 } from "@/seed/mock-data";

interface Props {
  service: IService2;
}

export const ServiceGridItem = ({ service }: Props) => {
  return (
    <div className=" flex flex-col rounded-md overflow-hidden fade-in sm:p-0 border border-gray-400">
      <Image
        src={`/services/${service.imagenes[0]}`}
        alt={service.imagenes[0]}
        className="w-full object-cover rounded"
        width={500}
        height={500}
      />

      <div className=" flex flex-col justify-between p-2 h-full">
        <h1 className="h-[100px]">{service.nombre}</h1>
        <span className="font-bold my-2 text-sm">
          Desde ${currencyFormat(service.precios[0])}
        </span>
        <Link
          className="sm:hover:bg-green-800 block text-center text-white rounded-lg p-1 font-thin bg-green-900"
          href={`/inicio/servicios/tienda/${service.slug}`}
        >
          Comprar
        </Link>
      </div>
    </div>
  );
};
