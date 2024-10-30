"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { useUIStore } from "@/store";
import CafamLogo from "./logos/CafamLogo";
import clsx from "clsx";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const [isScroll, setIsScroll] = useState(false);

  // const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setLoaded(true);
  // }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsScroll(true) : setIsScroll(false);
    });
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

        {/* fix total courses in cart shopping */}
        <Link href="/cart" className="mx-2">
          <IoCartOutline size={30} />
        </Link>

        {/* <Link href={
          ( (totalItemsInCart === 0 ) && loaded )
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {  ( loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link> */}

        <IoMenuOutline
          onClick={openSideMenu}
          className="ml-2 cursor-pointer"
          size={40}
        />
      </div>
    </nav>
  );
};
