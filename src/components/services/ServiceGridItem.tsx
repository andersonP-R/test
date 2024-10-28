"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { IService } from "@/interfaces/IService";

interface Props {
  service: IService;
}

export const ServiceGridItem = ({ service }: Props) => {
  const slug = service.nombre.split(" ").join("_").toLowerCase();
  console.log(slug);
  const [displayImage, setDisplayImage] = useState(service.imagenes[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      {/* ARREGLAR LINKS */}
      <Link href={`/product/${service.nombre}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={service.imagenes[0]}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(service.imagenes[1])}
          onMouseLeave={() => setDisplayImage(service.imagenes[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={`/product/${service.nombre}`}
        >
          {service.nombre}
        </Link>
        <span className="font-bold">${service.precios[0]}</span>
      </div>
    </div>
  );
};
