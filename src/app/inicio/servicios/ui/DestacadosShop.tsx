"use client";
import Image from "next/image";
import { IoAccessibility, IoFastFood, IoStar, IoSunny } from "react-icons/io5";

export const DestacadosShop = () => {
  return (
    <div className="flex flex-col pl-4">
      <span className="text-bold text-primary-700 text-2xl mb-6">
        Servicios populares
      </span>
      <div className="flex snap-x snap-mandatory w-full overflow-scroll mb-2 gap-4 pb-3">
        <div className="flex flex-col snap-start shrink-0 relative">
          <img
            src={`/images/pasadia1.png`}
            alt={"img"}
            className="w-[320px] h-[200px] object-fill rounded-xl mb-2"
          />
          <div className="absolute top-2 left-1">
            <div className="relative">
              <Image
                src={"/images/r1.png"}
                alt="img"
                width={100}
                height={40}
                className="w-[100px] h-[40px]"
              />

              <span className="text-[12px] text-white absolute top-3 left-1">
                Desde $12.000
              </span>
            </div>
          </div>
          <div className="flex justify-between px-1">
            <div className="flex gap-1 text-[14px] text-primary-700">
              <IoSunny size={20} />
              <span className="text-primary-900">Pasadía Cafam Melgar</span>
            </div>
            <div className="flex gap-1 text-[14px]">
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-primary-800">4.5</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col snap-start shrink-0 relative">
          <img
            src={`/images/patinaje1.png`}
            alt={"img"}
            className="w-[320px] h-[200px] object-fill rounded-xl mb-2"
          />
          <div className="absolute top-2 left-1">
            <div className="relative">
              <Image
                src={"/images/r1.png"}
                alt="img"
                width={100}
                height={40}
                className="w-[100px] h-[40px]"
              />

              <span className="text-[12px] text-white absolute top-3 left-1">
                Desde $8.000
              </span>
            </div>
          </div>
          <div className="flex justify-between px-1">
            <div className="flex gap-1 text-[14px] text-primary-700">
              <IoAccessibility size={20} />
              <span className="text-primary-900">
                Práctica libre - Patinaje
              </span>
            </div>
            <div className="flex gap-1 text-[14px]">
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-primary-800">4.2</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col snap-start shrink-0 relative mr-4">
          <img
            src={`/images/jurasico.jpg`}
            alt={"img"}
            className="w-[320px] h-[200px] object-cover rounded-xl mb-2"
          />
          <div className="absolute top-2 left-1">
            <div className="relative">
              <Image
                src={"/images/r1.png"}
                alt="img"
                width={100}
                height={40}
                className="w-[100px] h-[40px]"
              />

              <span className="text-[12px] text-white absolute top-3 left-1">
                Desde $25.000
              </span>
            </div>
          </div>
          <div className="flex justify-between px-1">
            <div className="flex gap-1 text-[14px] text-primary-700">
              <IoFastFood size={20} />
              <span className="text-primary-900">
                Jurásico Restaurante - Bar
              </span>
            </div>
            <div className="flex gap-1 text-[14px]">
              <IoStar size={20} className="text-yellow-400" />
              <span className="text-primary-800">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
