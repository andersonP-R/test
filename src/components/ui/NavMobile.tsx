"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoCardOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
export const NavMobile = () => {
  const url = usePathname();

  return (
    <div className="flex justify-between w-full h-[70px] fixed bottom-0 bg-[#dddddd]">
      <Link
        id="inicio-btn"
        href="/inicio"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url === "/inicio",
          }
        )}
      >
        <IoHomeOutline size={25} />
        <span className="text-base">Inicio</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url === "/inicio",
          })}
        ></span>
      </Link>

      <Link
        href="/inicio/servicios"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url.includes("servicios"),
          }
        )}
      >
        <IoSettingsOutline size={25} />
        <span className="text-base">Servicios</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("servicios"),
          })}
        ></span>
      </Link>

      <Link
        href="/inicio/billeteras"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url.includes("billeteras"),
          }
        )}
      >
        <IoCardOutline size={25} />
        <span className="text-base">Billeteras</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("billeteras"),
          })}
        ></span>
      </Link>

      <Link
        href="/inicio/perfil"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url.includes("perfil"),
          }
        )}
      >
        <IoPersonOutline size={25} />
        <span className="text-base">Perfil</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("perfil"),
          })}
        ></span>
      </Link>
    </div>
  );
};
