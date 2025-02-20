"use client";

import Link from "next/link";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import {
  IoAccessibilityOutline,
  IoBarbellOutline,
  IoCloseOutline,
  IoFootballOutline,
  IoHomeOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoStorefrontOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import { logout } from "@/actions";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  const logOut = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <div className="">
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 overflow-y-scroll",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}

        <Link
          href="/inicio"
          onClick={() => closeMenu()}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoHomeOutline size={30} />
          <span className="ml-3 text-xl">Inicio</span>
        </Link>

        {isAuthenticated && (
          <>
            <Link
              href="/inicio/perfil"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Perfil</span>
            </Link>

            <Link
              href="/inicio/perfil/mis-servicios"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Servicios adquiridos</span>
            </Link>
          </>
        )}

        <Link
          href="/tienda/escuelas-deportivas"
          onClick={() => closeMenu()}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoFootballOutline size={30} />
          <span className="ml-3 text-xl">Escuelas deportivas</span>
        </Link>

        <Link
          href="/tienda/practicas-libres"
          onClick={() => closeMenu()}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoAccessibilityOutline size={30} />
          <span className="ml-3 text-xl">Practicas libres</span>
        </Link>

        <Link
          href="/tienda/planes-gimnasio"
          onClick={() => closeMenu()}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoBarbellOutline size={30} />
          <span className="ml-3 text-xl">Planes de gimnasio</span>
        </Link>

        <Link
          href="/tienda"
          onClick={() => closeMenu()}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoStorefrontOutline size={30} />
          <span className="ml-3 text-xl">Todos los escenarios</span>
        </Link>

        {isAuthenticated && (
          <button
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => logOut()}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/sign-in"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Ingresar</span>
          </Link>
        )}
      </nav>
    </div>
  );
};
