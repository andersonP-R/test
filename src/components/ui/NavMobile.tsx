"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoCardOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
export const NavMobile = () => {
  const url = usePathname();

  return (
    <div className="flex justify-between w-full h-[70px] fixed bottom-0 z-10 bg-white rounded-tl-2xl rounded-tr-2xl shadow-slate-400 shadow-inner">
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
            "text-primary": url.includes("/inicio/servicios"),
          }
        )}
      >
        <IoStorefrontOutline size={25} />
        <span className="text-base">Tienda</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("/inicio/servicios"),
          })}
        ></span>
      </Link>

      <Link
        href="/inicio/billeteras"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url.includes("/inicio/billeteras"),
          }
        )}
      >
        <IoCardOutline size={25} />
        <span className="text-base">Billetera</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("/inicio/billeteras"),
          })}
        ></span>
      </Link>

      <Link
        href="/inicio/perfil"
        className={clsx(
          "flex flex-col items-center p-2 px-4 transition-all ease delay-150",
          {
            "text-primary": url.includes("/inicio/perfil"),
          }
        )}
      >
        <IoPersonOutline size={25} />
        <span className="text-base">Perfil</span>
        <span
          className={clsx("w-full h-[2px] transition-all ease delay-150", {
            "bg-primary": url.includes("/inicio/perfil"),
          })}
        ></span>
      </Link>
    </div>
  );
};
