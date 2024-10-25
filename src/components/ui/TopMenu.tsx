"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 py-3 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={"/logo.jpg"} alt={"logo-cafam"} width={60} height={30} />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline size={30} />
        </Link>

        <IoMenuOutline onClick={openSideMenu} className="ml-2" size={40} />
      </div>
    </nav>
  );
};
