"use client";

import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";

import CafamLogo from "./logos/CafamLogo";

export const TopMenuHome = () => {
  return (
    <div className="flex px-3 py-4 justify-between items-center w-full bg-white sticky top-0 z-10">
      {/* Logo */}
      <div>
        <Link href="/inicio">
          <CafamLogo />
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-3">
        <button className="mx-2">
          <div className="relative">
            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              6
            </span>
            <IoNotificationsOutline size={30} />
          </div>
        </button>
      </div>
    </div>
  );
};
