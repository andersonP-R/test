"use client";

import { useState } from "react";
import Link from "next/link";
import { IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5";

// import { useUIStore } from "@/store";
import CafamLogo from "./logos/CafamLogo";
import clsx from "clsx";
import { logout } from "@/actions";

export const TopMenuHome = () => {
  // const openSideMenu = useUIStore((state) => state.openSideMenu);
  const [isScroll, setIsScroll] = useState(false);

  const logOut = async () => {
    await logout();
    window.location.reload();
  };

  // const handleScroll = () => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 30) {
  //       setIsScroll(true);
  //     } else {
  //       setIsScroll(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleScroll();
  // }, [isScroll]);

  return (
    <nav
      className={clsx(
        "flex px-5 py-3 justify-between items-center w-full transition-shadow",
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
      <div className="flex items-center gap-2">
        <Link href="/search" className="mx-2">
          <IoHelpCircleOutline size={30} />
        </Link>

        <IoLogOutOutline size={30} onClick={() => logOut()} />

        {/* <IoPersonCircleOutline
          onClick={openSideMenu}
          className="ml-2 cursor-pointer"
          size={40}
        /> */}
      </div>
    </nav>
  );
};
