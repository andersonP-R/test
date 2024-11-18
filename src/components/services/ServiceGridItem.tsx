"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { IService } from "@/interfaces/IService";
import { usePathname } from "next/navigation";
import { currencyFormat } from "@/utils";

interface Props {
  service: IService;
}

export const ServiceGridItem = ({ service }: Props) => {
  const type = service.tipo.split(" ").join("-");

  const [displayImage, setDisplayImage] = useState(service.imagenes[0]);

  return (
    <div className=" flex flex-col rounded-md overflow-hidden fade-in sm:p-0 border border-gray-400">
      <Link href={`/tienda/${type}/${service.slug}`}>
        <Image
          src={`/services/${displayImage}`}
          alt={service.imagenes[0]}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(service.imagenes[1])}
          onMouseLeave={() => setDisplayImage(service.imagenes[0])}
        />
      </Link>

      <div className=" flex flex-col justify-between p-2 h-full">
        <h1 className="h-[100px]">{service.nombre}</h1>
        <span className="font-bold my-2 text-sm">
          Desde ${currencyFormat(service.precios[0])}
        </span>
        <Link
          className="sm:hover:bg-green-800 block text-center text-white rounded-lg p-1 font-thin bg-green-900"
          href={`/tienda/${type}/${service.slug}`}
        >
          Mas detalles
        </Link>
      </div>
    </div>
  );
};
