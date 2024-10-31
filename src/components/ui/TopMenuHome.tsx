"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoPersonCircleOutline, IoSearchOutline } from "react-icons/io5";

import { useUIStore } from "@/store";
import CafamLogo from "./logos/CafamLogo";
import clsx from "clsx";

export const TopMenuHome = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  };

  useEffect(() => {
    handleScroll();
  }, [isScroll]);

  return (
    <nav
      className={clsx(
        "flex px-5 py-3 justify-between items-center w-full sticky top-0 z-10 bg-white transition-shadow",
        {
          "shadow-md shadow-[#00000060]": isScroll,
        }
      )}
    >
      {/* Logo */}
      <div>
        <Link href="/inicio">
          <CafamLogo />
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline size={30} />
        </Link>

        <IoPersonCircleOutline
          onClick={openSideMenu}
          className="ml-2 cursor-pointer"
          size={40}
        />
      </div>
    </nav>
  );
};
